import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

export const getCountryOptions = () => {
  const countryObj = countries.getNames("en", { select: "official" });

  return Object.entries(countryObj).map(([code, name]) => ({
    value: code,
    label: name,
  }));
};
