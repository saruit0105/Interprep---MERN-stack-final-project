export const parseStringifiedJSON = (item, defaultVal) => {
  const defaultValue = defaultVal === undefined ? item : defaultVal;
  try {
    return JSON.parse(item);
  } catch (err) {
    return defaultValue;
  }
};
