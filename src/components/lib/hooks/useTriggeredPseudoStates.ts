import { useEffect, useRef } from 'react';

type TPseudoState = 'hover' | 'focus-within' | 'focus' | 'active' | 'focus-visible';

/*
 * useTriggeredPseudoStates
 *
 * This hook can be used to force trigger all pseudo states (e.g. :hover, :focus)
 * and can be optionally scoped to a CSS selector.
 * Lazy-loaded stylesheets are tracked and their styles are also factored in.
 * 
 */
const useTriggeredPseudoStates = (
  pseudoStates: TPseudoState[],
  scopeSelector?: string,
  includesScopeRoot?: boolean,
) => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    /* A regex that matches any of our pseudo states. */
    const pseudoPattern = new RegExp(`:(${pseudoStates.join('|')})`, 'g');

    /*
     * getMatchingStyleRules
     *
     * Examine every stylesheet and extract all the style rules that match the
     * pseudo states we're looking for.
     */
    const getMatchingStyleRules = () => {
      const styleRules: CSSStyleRule[] = [];

      const collectRules = (rules: CSSRuleList) => {
        for (const rule of rules) {
          if (rule instanceof CSSStyleRule && rule.selectorText) {
            if (pseudoStates.some(p => rule.selectorText.includes(`:${p}`))) {
              styleRules.push(rule);
            }
          } else if ('cssRules' in rule && rule.cssRules) {
            collectRules(rule.cssRules as CSSRuleList);
          }
        }
      };

      for (const sheet of document.styleSheets) {
        if (sheet.ownerNode !== styleRef.current) {
          try {
            collectRules(sheet.cssRules);
          } catch {
            /* Probably a cross-origin stylesheet. Let's skip. */
          }
        }
      }

      return styleRules;
    };

    /*
     * buildOverrideCss
     *
     * Build a string representing all the CSS we need.
     * This CSS contains all the rules with pseudo states switched on, and
     * scoped correctly.
     */
    const buildOverrideCss = (): string => {
      const styleRules = getMatchingStyleRules();
      return styleRules.map((rule) => {
        const overrideSelector = rule.selectorText
          .split(',')
          .map((selector) => {
            const cleaned = selector.trim().replace(pseudoPattern, ':not(#_)');
            if (!scopeSelector) {
              /* No need for scoping. */
              return cleaned;
            }
            /*
             * Scope the CSS to our selector.
             * We apply :is to the scope root if required, otherwise only target
             * descendants who match :is.
             */
            return [
              ...(includesScopeRoot ? [`${scopeSelector}:is(${cleaned})`] : []),
              `${scopeSelector} :is(${cleaned})`,
            ].join(', ');
          })
          .join(', ');

        const declarationBlock = rule.cssText.slice(rule.cssText.indexOf('{'));
        let wrapped = `${overrideSelector} ${declarationBlock}`;

        let cursor: CSSRule | null = rule.parentRule;
        while (cursor !== null) {
          const header = cursor.cssText.slice(0, cursor.cssText.indexOf('{'));
          wrapped = `${header} { ${wrapped} }`;
          cursor = cursor.parentRule;
        }

        return wrapped;
      }).join('\n');
    };

    /*
     * buildAndInjectOverrideStyles
     *
     * Build the CSS and inject it into the page in a <style> tag.
     */
    const buildAndInjectOverrideStyles = () => {
      const css = buildOverrideCss();
      if (!styleRef.current) {
        /* Create a new <style> tag. */
        styleRef.current = document.createElement('style');
        document.head.appendChild(styleRef.current);
      }
      styleRef.current.textContent = css;
    };

    buildAndInjectOverrideStyles();

    /*
     * Stylesheets might be lazy to load. In this case we need to check every
     * time a new stylesheet is added to the page and revisit our style tag.
     */
    const headObserver = new MutationObserver((mutations) => {
      const hasNewStyles = mutations.some((mutation) => {
        return Array.from(mutation.addedNodes).some((node) => {
          return node instanceof HTMLStyleElement || node instanceof HTMLLinkElement
        })
      });
      if (hasNewStyles) {
        buildAndInjectOverrideStyles();
      }
    });

    headObserver.observe(document.head, { childList: true });

    return () => {
      headObserver.disconnect();
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
        styleRef.current = null;
      }
    };
  }, [
    scopeSelector,
    includesScopeRoot,
    /* We use join here to create a simple string => easier for useEffect to check. */
    pseudoStates.join(',')
  ]);
};

export default useTriggeredPseudoStates;
