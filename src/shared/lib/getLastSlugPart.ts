export const getLastSlugPart = (slug: string) => {
  const arr = slug.split("/");
  return arr[arr.length - 1];
};
