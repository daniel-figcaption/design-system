const rawIconComponentMap = import.meta.glob<
  true,
  string,
  React.FC<React.SVGProps<SVGSVGElement>>
>('../../../assets/icons/*.svg', {
  eager: true,
  import: 'default',
  query: '?react',
});

const iconComponentMap = Object.fromEntries(
  Object.entries(rawIconComponentMap).map(([path, component]) => {
    const name = path
      .split('/')
      .pop()!
      .replace(/\.svg$/, '');

    return [name, component];
  })
) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>;

export default iconComponentMap;
