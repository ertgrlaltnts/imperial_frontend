export const add3Dots = (string, limit) => {
  if (string.length > limit) {
    return string.slice(0, limit) + "...";
  }
  return string;
};
