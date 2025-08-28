import type { Meta } from '@storybook/react';
import CtaLink from './CtaLink';
import { argTypes as ctaArgTypes, defaultProps as defaultCtaProps } from '../Cta.stories.config';
import CtaDecorator from '@sb/decorators/CtaDecorator/CtaDecorator';
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from 'react';
import prettier from "prettier/standalone";
import parserHtml from "prettier/plugins/html";

const CTALINK_CATEGORY = 'CtaLink Properties';

function cleanSvg(html: string) {
  // Replace SVG contents with a comment, preserving the <svg> tag itself
  return html.replace(
    /(<svg\b[^>]*>)([\s\S]*?)(<\/svg>)/gi,
    (_, start, _content, end) => `${start}<!-- Icon path data -->${end}`
  );
}

const meta: Meta<typeof CtaLink> = {
  title: 'Components/Cta/CtaLink',
  component: CtaLink,
  decorators: [CtaDecorator],
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
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
      },
    },
  },
  args: {
    ...defaultCtaProps,
    url: undefined,
    openInNewTab: false,
    aAttributes: {},
  },
  argTypes: {
    ...ctaArgTypes,
    url: {
      control: 'text',
      description: 'The URL of the page to link to from this CTA.',
      table: {
        category: CTALINK_CATEGORY,
      },
    },
    openInNewTab: {
      control: 'boolean',
      description: 'Whether or not the link will open in a new tab.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        category: CTALINK_CATEGORY,
      },
    },
    aAttributes: {
      control: 'object',
      description: 'Extra HTML attributes to apply to the `a` element.',
      table: {
        category: CTALINK_CATEGORY,
      },
    },
  }
};

export default meta;

export { default as Typical } from './stories/Typical';
export { default as Simple } from './stories/Simple';
export { default as DownloadLink } from './stories/DownloadLink';
export { default as EmailLink } from './stories/EmailLink';
export { default as BackLink } from './stories/BackLink';
export { default as ExternalLink } from './stories/ExternalLink';
