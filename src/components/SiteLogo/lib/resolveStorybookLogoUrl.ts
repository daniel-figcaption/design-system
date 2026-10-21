const resolveStorybookLogoUrl = (url: string): string => {
  const isAbsolute = /^(https?:)?\/\//i.test(url);
  if (isAbsolute) {
    return url;
  } else {
    /*
     * For relative image links, scope them to the @src/assets/logos folder.
     */
    const fileName = url.replace(/^\.\//, "");
    return new URL(`/src/assets/logos/${fileName}`, import.meta.url).href;
  }
};

export default resolveStorybookLogoUrl;
