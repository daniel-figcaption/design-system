/*
 * pathToUrlSlug
 *
 * Resolves a component path to a Storybook URL slug..
 * 
 * From: 
 * "Components/Control/Full Control/Textbox"
 * 
 * To: 
 * "components-control-full-control-textbox"
 */

const pathToUrlSlug = (path: string): string => {
  return path.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
};

export default pathToUrlSlug;
