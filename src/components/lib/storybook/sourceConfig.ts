import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from 'react';
import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";

/* 
 * This was some experimental work, originally living in CtaLink.stories.tsx for testing, 
 * but was moved here after createPartialMeta was introduced. This probably needs to be
 * cleaned up at some point.
 */

const cleanSvg = (html: string) => {
  // Replace SVG contents with a comment, preserving the <svg> tag itself
  return html.replace(
    /(<svg\b[^>]*>)([\s\S]*?)(<\/svg>)/gi,
    (_, start, _content, end) => `${start}<!-- Icon path data -->${end}`
  );
};

const sourceConfig = {
  language: "html",
  transform: (_src: any, context: any) => {
    let html = renderToStaticMarkup(
      createElement(context.component, context.args)
    );

    // Hide SVG innards
    html = cleanSvg(html);

    // Format with Prettier
    return prettier.format(html, {
      parser: "html",
      plugins: [parserHtml],
      printWidth: 200, // big enough to keep attributes on one line
      htmlWhitespaceSensitivity: "ignore", // avoid weird breaks
      bracketSameLine: false, // puts `</a>` on new line
    });
  },
};

export default sourceConfig;
