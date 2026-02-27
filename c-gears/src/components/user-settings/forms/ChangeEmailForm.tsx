import { yupResolver } from "@hookform/resolvers/yup";
import { useUserSettingsContext } from "../../../contexts/user-settings-context";
import { EmailConfirmSchema } from "../../../validators/schema";
import { Controller, useForm } from "react-hook-form";
import { useConfirmCodeContext } from "../../../contexts/confirm-code-contex";

export const ChangeEmailForm = () => {
  const { updateSubmit, TOAST_MESSAGES, showToast } = useUserSettingsContext();
  const { setShowCodeModal } = useConfirmCodeContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailConfirmSchema),
    defaultValues: {
      email: "",
      emailConfirm: "",
    },
  });

  const MyEmailSubmit = async (data: { email: string }) => {
    if (!data.email) {
      showToast("info", TOAST_MESSAGES.NO_CHANGES);
      return;
    }

    const result = await updateSubmit({ email: data.email });

    if (result.status === "requires-confirmation") {
      showToast("info", TOAST_MESSAGES.CODE_SENT);
      setShowCodeModal(true);
    }
  };

  return (
    <div className="change-email--content">
      <h3 className="title-change-email">Change email</h3>
      <form
        className="form-change-email"
        onSubmit={handleSubmit(MyEmailSubmit)}
      >
        <div className="all-inputs--container">
          <div className="label-input--container">
            <label htmlFor="new-email">New email</label>
            <div className="input--container">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    className="input-email"
                    id="new-email"
                    type="email"
                    autoComplete="email"
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="label-errors">
              <label htmlFor="new-email"></label>
              <p>{errors.email?.message}</p>
            </div>
          </div>

          <div className="label-input--container">
            <label htmlFor="emailConfirm">Confirm new email</label>
            <div className="input--container">
              <Controller
                name="emailConfirm"
                control={control}
                render={({ field }) => (
                  <input
                    className="input-email"
                    id="emailConfirm"
                    type="email"
                    autoComplete="email"
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="label-errors">
              <label htmlFor="emailConfirm"></label>
              <p>{errors.emailConfirm?.message}</p>
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
