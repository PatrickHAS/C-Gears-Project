/* eslint-disable no-sequences */
import { IoCloseOutline } from "react-icons/io5";
import { StyledRegister } from "./styles";
import {
  IRegisterData,
  useRegisterContext,
} from "../../contexts/register-context";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import { RegisterSchema } from "../../validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useHeaderContext } from "../../contexts/header-context";

const Register = () => {
  const { isLogin, setIsLogin } = useHeaderContext();
  const {
    isRegister,
    setIsRegister,
    phone,
    setPhone,
    registerSubmit,
    showPassword,
    togglePasswordVisibility,
  } = useRegisterContext();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  return (
    <StyledRegister>
      <div className="box-card-register">
        <div className="card-register">
          <div className="header-register">
            <img className="logo-register" alt="" src="logo-gearsclub.png" />
            <span className="text-register">Register</span>
            <IoCloseOutline
              className="icon-close-register"
              onClick={() => (setIsRegister(!isRegister), setIsLogin(!isLogin))}
            />
          </div>
          <form
            className="form-register"
            onSubmit={handleSubmit((data) => {
              registerSubmit({ ...data, cellphone: phone });
            })}
          >
            <div className="data-user">
              <input
                className="input-name"
                id="name"
                type="text"
                placeholder="First name"
                {...register("name")}
              />
              <div className="label-errors">
                <label htmlFor="name"></label>
                <p>{errors.name?.message}</p>
              </div>
              <input
                className="input-surname"
                id="surname"
                type="text"
                placeholder="Last name"
                {...register("surname")}
              />
              <div className="label-errors">
                <label htmlFor="surname"></label>
                <p>{errors.surname?.message}</p>
              </div>
              <input
                className="input-username"
                id="username"
                type="text"
                placeholder="Username"
                {...register("username")}
              />
              <div className="label-errors">
                <label htmlFor="username"></label>
                <p>{errors.username?.message}</p>
              </div>
              <input
                className="input-email"
                id="email"
                type="text"
                placeholder="Email address"
                {...register("email")}
              />
              <div className="label-errors">
                <label htmlFor="email"></label>
                <p>{errors.email?.message}</p>
              </div>
              <input
                className="input-emailConfirm"
                id="emailConfirm"
                type="text"
                placeholder="Confirm your email"
                {...register("emailConfirm")}
              />
              <div className="label-errors">
                <label htmlFor="emailConfirm"></label>
                <p>{errors.emailConfirm?.message}</p>
              </div>
              <Controller
                control={control}
                name="cellphone"
                render={({ field }) => (
                  <PhoneInput
                    country={"br"}
                    value={phone}
                    onChange={(phone) => {
                      setPhone(phone);
                      setValue("cellphone", phone);
                    }}
                    enableSearch={true}
                    placeholder="Enter your phone number"
                  />
                )}
              />
              <div className="label-errors">
                <label htmlFor="cellphone"></label>
                <p>{errors.cellphone?.message}</p>
              </div>
              <input
                className="input-birthday"
                id="birthday"
                type="text"
                placeholder="Date of birth"
                {...register("birthday")}
              />
              <div className="label-errors">
                <label htmlFor="birthday"></label>
                <p>{errors.birthday?.message}</p>
              </div>
              <div className="password-input-container">
                <input
                  className="input-password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <button
                  type="button"
                  className="password-toggle-button"
                  onClick={togglePasswordVisibility}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}{" "}
                </button>
              </div>
              <div className="label-errors">
                <label htmlFor="password"></label>
                <p>{errors.password?.message}</p>
              </div>
              <input
                className="input-passwordConfirm"
                id="passwordConfirm"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("passwordConfirm")}
              />
              <div className="label-errors">
                <label htmlFor="passwordConfirm"></label>
                <p>{errors.passwordConfirm?.message}</p>
              </div>
            </div>
            <div className="address-user">
              <input
                className="input-street"
                id="street"
                type="text"
                placeholder="Street"
                {...register("address.street")}
              />
              <div className="label-errors">
                <label htmlFor="street"></label>
                <p>{errors.address?.street?.message}</p>
              </div>
              <input
                className="input-number"
                id="number"
                type="text"
                placeholder="Number"
                {...register("address.number")}
              />
              <div className="label-errors">
                <label htmlFor="number"></label>
                <p>{errors.address?.number?.message}</p>
              </div>
              <input
                className="input-apt_unit"
                id="apt_unit"
                type="text"
                placeholder="Apt number"
                {...register("address.apt_unit")}
              />
              <div className="label-errors">
                <label htmlFor="apt_unit">* Optional</label>
                <p>{errors.address?.apt_unit?.message}</p>
              </div>
              <input
                className="input-neighborhoods"
                id="neighborhoods"
                type="text"
                placeholder="Neighborhood"
                {...register("address.neighborhoods")}
              />
              <div className="label-errors">
                <label htmlFor="neighborhoods">* Optional</label>
                <p>{errors.address?.neighborhoods?.message}</p>
              </div>
              <input
                className="input-city"
                id="city"
                type="text"
                placeholder="City"
                {...register("address.city")}
              />
              <div className="label-errors">
                <label htmlFor="city"></label>
                <p>{errors.address?.city?.message}</p>
              </div>
              <input
                className="input-state"
                id="state"
                type="text"
                placeholder="State"
                {...register("address.state")}
              />
              <div className="label-errors">
                <label htmlFor="state"></label>
                <p>{errors.address?.state?.message}</p>
              </div>
              <input
                className="input-zipcode"
                id="zipcode"
                type="text"
                placeholder="Zipcode"
                {...register("address.zipcode")}
              />
              <div className="label-errors">
                <label htmlFor="zipcode"></label>
                <p>{errors.address?.zipcode?.message}</p>
              </div>
              <button className="btn-register" type="submit">
                Register
              </button>
            </div>
          </form>
          <footer>
            <img className="logo-cgo" alt="" src="Cog-logo.png" />
            <img className="logo-locust" alt="" src="Locust-logo.png" />
          </footer>
        </div>
      </div>
    </StyledRegister>
  );
};
export default Register;
