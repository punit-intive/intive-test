const windowObjectExists = () => typeof window !== `undefined`;

const getWindow = () => (windowObjectExists() ? window : undefined);

module.exports = {
  checkIfWindowObjectExists: windowObjectExists,
  getWindow
};
