import { Controller, useForm } from "react-hook-form";
import { useUserSettingsContext } from "../../../contexts/user-settings-context/hook";
import { AddressSettingsSchema } from "../../../validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginContext } from "../../../contexts/login-context/hook";

export const MyAddressForm = () => {
  const { user } = useLoginContext();
  const { updateSubmit, TOAST_MESSAGES, showToast } = useUserSettingsContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(AddressSettingsSchema),
    defaultValues: {
      street: user?.address?.street ?? "",
      number: user?.address?.number ?? "",
      apt_unit: user?.address?.apt_unit ?? "",
      neighborhoods: user?.address?.neighborhoods ?? "",
      city: user?.address?.city ?? "",
      state: user?.address?.state ?? "",
      zipcode: user?.address?.zipcode ?? "",
    },
  });

  if (!user) {
    return <div>Loading...</div>;
  }

  const MyAddressSubmit = async (data: any) => {
    const updatedData = Object.keys(dirtyFields).reduce((acc, field) => {
      acc[field] = data[field];
      return acc;
    }, {} as any);

    if (!Object.keys(updatedData).length) {
      showToast("info", TOAST_MESSAGES.NO_CHANGES);
      return;
    }

    await updateSubmit({
      address: updatedData,
    });
    reset(data);
  };

  return (
    <div className="user-address--content">
      <h3 className="title-my-address"> My address</h3>
      <form
        className="form-user-address"
        onSubmit={handleSubmit(MyAddressSubmit)}
      >
        <div className="all-inputs--container">
          <div className="label-input--container">
            <label htmlFor="street">Street</label>
            <div className="input--container">
              <Controller
                name="street"
                control={control}
                defaultValue={user?.address?.street}
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
          </div>
          <div className="label-input--container">
            <label htmlFor="number">Number</label>
            <div className="input--container">
              <Controller
                name="number"
                control={control}
                defaultValue={user?.address?.number}
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
          </div>
          <div className="label-input--container">
            <label htmlFor="apt_unit">Apt_unit *Optional</label>
            <div className="input--container">
              <Controller
                name="apt_unit"
                control={control}
                defaultValue={user?.address?.apt_unit ?? ""}
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
          </div>
          <div className="label-input--container">
            <label htmlFor="neighborhoods">Neighborhoods *Optional</label>
            <div className="input--container">
              <Controller
                name="neighborhoods"
                control={control}
                defaultValue={user?.address?.neighborhoods ?? ""}
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
          </div>
          <div className="label-input--container">
            <label htmlFor="city">City</label>
            <div className="input--container">
              <Controller
                name="city"
                control={control}
                defaultValue={user?.address?.city}
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
          </div>
          <div className="label-input--container">
            <label htmlFor="state">State</label>
            <div className="input--container">
              <Controller
                name="state"
                control={control}
                defaultValue={user?.address?.state}
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
          </div>
          <div className="label-input--container">
            <label htmlFor="zipcode">Zipcode</label>
            <div className="input--container">
              <Controller
                name="zipcode"
                control={control}
                defaultValue={user?.address?.zipcode}
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
          </div>
        </div>
        <button className="btn--save-change" type="submit">
          CHANGE SAVE
        </button>
      </form>
    </div>
  );
};
