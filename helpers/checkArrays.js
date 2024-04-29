const isArray = data => Array.isArray(data);

const areNotArrays = (defaultData, data) => !isArray(data) && !isArray(defaultData);

const isEmptyArray = data => isArray(data) && data.length < 1;

const areEmptyArrays = (data, defaultData) => isEmptyArray(data) && isEmptyArray(defaultData);

module.exports = {
  isArray,
  areNotArrays,
  isEmptyArray,
  areEmptyArrays
};
