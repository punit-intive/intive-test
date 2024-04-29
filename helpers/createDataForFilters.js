const createDataForFilters = (data, shouldSort, valueSelector = "codeName", labelSelector = "name") => {
  let structuredData = data.map(elem => ({
    value: elem[valueSelector],
    label: elem[labelSelector]
  }));

  if (shouldSort) {
    structuredData = structuredData.sort((a, b) => {
      const nameA = a.label.toUpperCase();
      const nameB = b.label.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  return structuredData;
};

export default createDataForFilters;
