import { useDropDownCountriesContext } from "../../contexts/drop-down-countries-context/hook";
import { useSubscriptionPaymentContext } from "../../contexts/subscription-payment-context/hook";
import { StyledDropdownCountries } from "./styles";

const DropDownCountries = () => {
  const {
    country,
    setCountry,
    countryOptions,
    isDropdownCountry,
    setIsDropdownCountry,
  } = useDropDownCountriesContext();
  const { setFormData } = useSubscriptionPaymentContext();

  return (
    <StyledDropdownCountries>
      <ul className="countries-list">
        {countryOptions.map((option) => (
          <li
            key={option.value}
            className={`country-item ${option.value === country ? "selected" : ""}`}
            onClick={() => (
              setCountry(option.label),
              setFormData((prev) => ({
                ...prev,
                country: option.value,
              })),
              setIsDropdownCountry(!isDropdownCountry)
            )}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </StyledDropdownCountries>
  );
};
export default DropDownCountries;
