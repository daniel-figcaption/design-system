import previewVars from '@sb/styles/preview/variables.module.scss';

const unquote = (value: string) => {
  return value.replace(/^(['"])(.*)\1$/, '$2');
};

const getPreviewRootSelector = (): string => {
  /* It's easier to remove potential extra quotes in JS rather than in the CSS module. */
  return unquote(previewVars.sbPreviewRoot as string);
};

export default getPreviewRootSelector;
