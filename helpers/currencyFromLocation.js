import Constants from "../constants";

const currencyFromLocation = location => {
  const { length } = location;
  const code = location.slice(length - 2, length).toUpperCase();

  if (!Constants.COUNTRY_CODES_TO_CURRENCY[code]) {
    console.warn("currencyFromLocation method: language not provided, defaulting to GBP");
  }

  return Constants.COUNTRY_CODES_TO_CURRENCY[code] || Constants.COUNTRY_CODES_TO_CURRENCY.UK;
};

export default currencyFromLocation;
