import { Controller, useForm } from "react-hook-form";
import { useLoginContext } from "../../../contexts/login-context";
import { useUserSettingsContext } from "../../../contexts/user-settings-context";
import { AddressSettingsSchema } from "../../../validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const MyAddressForm = () => {
  const { user } = useLoginContext();
  const { updateSubmit } = useUserSettingsContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddressSettingsSchema),
    defaultValues: {
      street: user.address?.street ?? "",
      number: user.address?.number ?? "",
      apt_unit: user.address?.apt_unit ?? "",
      neighborhoods: user.address?.neighborhoods ?? "",
      city: user.address?.city ?? "",
      state: user.address?.state ?? "",
      zipcode: user.address?.zipcode ?? "",
    },
  });

  const handleAddressSubmit = (data: any) => {
    return updateSubmit(data);
  };

  return (
    <div className="user-address--content">
      <h3 className="title-my-address"> My address</h3>
      <form
        className="form-user-address"
        onSubmit={handleSubmit(handleAddressSubmit)}
      >
        <div className="label-input--container">
          <label htmlFor="street">Street</label>
          <div className="input--container">
            <Controller
              name="street"
              control={control}
              defaultValue={user.address.street}
              render={({ field }) => (
                <input
                  className="input-street"
                  id="street"
                  type="text"
                  autoComplete="address-level1 webauthn"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="street"></label>
            <p>{errors.street?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="number">Number</label>
          <div className="input--container">
            <Controller
              name="number"
              control={control}
              defaultValue={user.address.number}
              render={({ field }) => (
                <input
                  className="input-number"
                  id="number"
                  type="text"
                  autoComplete="off"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="number"></label>
            <p>{errors.number?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="apt_unit">Apt_unit *Optional</label>
          <div className="input--container">
            <Controller
              name="apt_unit"
              control={control}
              defaultValue={user.address.apt_unit ?? ""}
              render={({ field }) => (
                <input
                  className="input-apt_unit"
                  id="apt_unit"
                  type="text"
                  autoComplete="off"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="apt_unit"></label>
            <p>{errors.apt_unit?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="neighborhoods">Neighborhoods *Optional</label>
          <div className="input--container">
            <Controller
              name="neighborhoods"
              control={control}
              defaultValue={user.address.neighborhoods ?? ""}
              render={({ field }) => (
                <input
                  className="input-number"
                  id="neighborhoods"
                  type="text"
                  autoComplete="address-level1 webauthn"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="neighborhoods"></label>
            <p>{errors.neighborhoods?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="city">City</label>
          <div className="input--container">
            <Controller
              name="city"
              control={control}
              defaultValue={user.address.city}
              render={({ field }) => (
                <input
                  className="input-city"
                  id="city"
                  type="text"
                  autoComplete="address-level1 webauthn"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="city"></label>
            <p>{errors.city?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="state">State</label>
          <div className="input--container">
            <Controller
              name="state"
              control={control}
              defaultValue={user.address.state}
              render={({ field }) => (
                <input
                  className="input-state"
                  id="state"
                  type="text"
                  autoComplete="address-level1 webauthn"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="state"></label>
            <p>{errors.state?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="zipcode">Zipcode</label>
          <div className="input--container">
            <Controller
              name="zipcode"
              control={control}
              defaultValue={user.address.zipcode}
              render={({ field }) => (
                <input
                  className="input-zipcode"
                  id="zipcode"
                  type="text"
                  autoComplete="address-level1 webauthn"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="zipcode"></label>
            <p>{errors.zipcode?.message}</p>
          </div>
        </div>
        <button className="btn--save-change" type="submit">
          SAVE CHANGE
        </button>
      </form>
    </div>
  );
};
