const flattenObjectsToValuesInArray = arr => {
  const flattenArray = arr?.reduce((prev, curr) => {
    return [...prev, curr.value];
  }, []);

  return flattenArray;
};

export default flattenObjectsToValuesInArray;
