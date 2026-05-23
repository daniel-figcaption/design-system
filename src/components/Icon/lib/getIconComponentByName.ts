import iconComponentMap from "./iconComponentMap";

const getIconComponentByName = (iconName: string) => {
  return iconComponentMap[iconName];
};

export default getIconComponentByName;
