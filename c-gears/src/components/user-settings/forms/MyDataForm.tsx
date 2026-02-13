import { Controller, useForm } from "react-hook-form";
import { useLoginContext } from "../../../contexts/login-context";
import { useUserSettingsContext } from "../../../contexts/user-settings-context";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSettingsSchema } from "../../../validators/schema";
import PhoneInput from "react-phone-input-2";

export const MyDataForm = () => {
  const { user } = useLoginContext();
  const { updateSubmit, showToast, TOAST_MESSAGES, formatDateForInput } =
    useUserSettingsContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    resolver: yupResolver(UserSettingsSchema),
    defaultValues: {
      name: user.name,
      surname: user.surname,
      username: user.username,
      cellphone: user.cellphone,
      birthday:
        user.birthday instanceof Date
          ? user.birthday.toISOString().split("T")[0]
          : user.birthday,
    },
  });

  const onSubmit = async (data: any) => {
    const updatedData = Object.keys(dirtyFields).reduce((acc, field) => {
      acc[field] = data[field];
      return acc;
    }, {} as any);

    if (!Object.keys(updatedData).length) {
      showToast("info", TOAST_MESSAGES.NO_CHANGES);
      return;
    }

    await updateSubmit(updatedData);
    reset(data);
  };

  return (
    <div className="user-data--content">
      <h3 className="title-my-data"> My data</h3>
      <form className="form-user-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="label-input--container">
          <label htmlFor="name">Name</label>
          <div className="input--container">
            <Controller
              name="name"
              control={control}
              defaultValue={user.name}
              render={({ field }) => (
                <input
                  className="input-name"
                  id="name"
                  type="text"
                  autoComplete="given-name"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="name"></label>
            <p>{errors.name?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="surname">Surname</label>
          <div className="input--container">
            <Controller
              name="surname"
              control={control}
              defaultValue={user.surname}
              render={({ field }) => (
                <input
                  className="input-surname"
                  id="surname"
                  type="text"
                  autoComplete="family-name"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="surname"></label>
            <p>{errors.surname?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="username">Username</label>
          <div className="input--container">
            <Controller
              name="username"
              control={control}
              defaultValue={user.username}
              render={({ field }) => (
                <input
                  className="input-username"
                  id="username"
                  type="text"
                  autoComplete="off"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="username"></label>
            <p>{errors.username?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="email">Email</label>
          <div className="input--container">
            <input
              className="input-email"
              id="email"
              type="text"
              autoComplete="email"
              value={user.email}
              readOnly
            />
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="cellphone-setting">Cellphone</label>
          <Controller
            control={control}
            name="cellphone"
            defaultValue={user.cellphone}
            render={({ field }) => (
              <PhoneInput
                country="br"
                enableSearch
                placeholder="Enter your phone number"
                value={field.value ?? ""}
                onChange={field.onChange}
                inputProps={{
                  id: "cellphone-setting",
                  name: "cellphone",
                  autoComplete: "tel",
                }}
              />
            )}
          />
          <div className="label-errors">
            <label htmlFor="cellphone-setting"></label>
            <p>{errors.cellphone?.message}</p>
          </div>
        </div>
        <div className="label-input--container">
          <label htmlFor="birthday-setting">Birthday</label>
          <div className="input--container">
            <Controller
              name="birthday"
              control={control}
              defaultValue={formatDateForInput(user.birthday)}
              render={({ field }) => (
                <input
                  className="input-birthday"
                  id="birthday-setting"
                  type="date"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="label-errors">
            <label htmlFor="birthday-setting"></label>
            <p>{errors.birthday?.message}</p>
          </div>
        </div>
        <button className="btn--save-change" type="submit">
          SAVE CHANGE
        </button>
      </form>
    </div>
  );
};
