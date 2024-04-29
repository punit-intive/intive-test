const availableParams = {
  services: ["#capabilities"]
};
/**
 *
 * Ensures that given parameters for given page provided in contentful are truly avaiable.
 *
 * @param {string} page
 * @param {string} queryParameters
 */
const areParametersAvailable = (page, queryParameters) => availableParams[page].includes(queryParameters);

module.exports = {
  areParametersAvailable
};
