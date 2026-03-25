import { yupResolver } from "@hookform/resolvers/yup";
import { useConfirmCodeContext } from "../../../contexts/confirm-code-contex/hook";
import { useUserSettingsContext } from "../../../contexts/user-settings-context/hook";
import { PassConfirmSchema } from "../../../validators/schema";
import { Controller, useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useRegisterContext } from "../../../contexts/register-context/hook";

export const ChangePasswordForm = () => {
  const { updateSubmit, TOAST_MESSAGES, showToast } = useUserSettingsContext();
  const { setShowCodeModal } = useConfirmCodeContext();
  const { showPassword, togglePasswordVisibility } = useRegisterContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PassConfirmSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  });

  const MyPasswordSubmit = async (data: { password: string }) => {
    if (!data.password) {
      showToast("info", TOAST_MESSAGES.NO_CHANGES);
      return;
    }

    const result = await updateSubmit({ password: data.password });

    if (result.status === "requires-confirmation") {
      showToast("info", TOAST_MESSAGES.CODE_SENT);
      setShowCodeModal(true);
    }
  };

  return (
    <div className="change-pass--content">
      <h3 className="title-change-pass">Change password</h3>
      <form
        className="form-change-pass"
        onSubmit={handleSubmit(MyPasswordSubmit)}
      >
        <div className="all-inputs--container">
          <div className="label-input--container">
            <label htmlFor="new-password">New password</label>
            <div className="input--container">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <>
                    <input
                      type="email"
                      name="username"
                      autoComplete="new-password"
                      defaultValue=""
                      hidden
                    />

                    <input
                      {...field}
                      className="input-password"
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                    />

                    <button
                      type="button"
                      className="password-toggle-button"
                      onClick={togglePasswordVisibility}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}{" "}
                    </button>
                  </>
                )}
              />
            </div>
            <div className="label-errors">
              <label htmlFor="new-password"></label>
              <p>{errors.password?.message}</p>
            </div>
          </div>

          <div className="label-input--container">
            <label htmlFor="confirm-password">Confirm new password</label>
            <div className="input--container">
              <Controller
                name="passwordConfirm"
                control={control}
                render={({ field }) => (
                  <input
                    className="input-password"
                    id="confirm-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={field.value ?? ""}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="label-errors">
              <label htmlFor="confirm-password"></label>
              <p>{errors.passwordConfirm?.message}</p>
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
