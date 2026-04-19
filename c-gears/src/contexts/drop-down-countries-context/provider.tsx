import { useState } from "react";
import { IDropDownCountriesProvider } from "./types";
import { DropDownCountriesContext } from "./context";
import { getCountryOptions } from "../../utils/countries";

export const DropDownCountriesProvider = ({
  children,
}: IDropDownCountriesProvider) => {
  const [isDropdownCountry, setIsDropdownCountry] = useState(false);
  const [country, setCountry] = useState("");

  const countryOptions = getCountryOptions();

  return (
    <DropDownCountriesContext.Provider
      value={{
        isDropdownCountry,
        setIsDropdownCountry,
        countryOptions,
        country,
        setCountry,
      }}
    >
      {children}
    </DropDownCountriesContext.Provider>
  );
};
