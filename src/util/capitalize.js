export const capitalize = (string) => {
  const firstChar = string.charAt(0).toUpperCase();
  return firstChar + string.substring(1);
};
