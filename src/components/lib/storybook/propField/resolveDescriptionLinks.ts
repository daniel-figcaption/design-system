import pathToUrlSlug from "../pathToUrlSlug";

/*
 * resolveDescriptionLinks
 *
 * Expands the encoded component paths (embedded in argType descriptions) into
 * full markdown-style links, linking to the docs page for the component.
 * 
 * From: 
 * "This is a [Components/Control/Full Control/Textbox]"
 * 
 * To: 
 * "This is a [Textbox](/?path=/docs/components-control-full-control-textbox--docs)"
 */

const resolveDescriptionLinks = (description: string): string => {
  return description.replace(/\[([^\]]+)\]/g, (_, path: string) => {
    const componentPathName = path.split('/').pop()!;
    const url = `./?path=/docs/${pathToUrlSlug(path)}--docs`;
    return `[${componentPathName}](${url})`;
  });
};

export default resolveDescriptionLinks;
