import React from "react";
import { useForm } from "react-hook-form";
const SideBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Trial Claim successfully");
    reset();
  };

  return (
    <div className="side-banner">
      <p>
        <strong>try it for free 7 days</strong> then $20/mo. there after
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="side-forms">
          <div className="first-field">
            {errors.firstName?.message && (
              <img
                className="img img-first"
                src="/images/icon-error.svg"
                alt="icon"
              />
            )}

            <input
              type="text"
              {...register("firstName", {
                required: "First Name cannot be empty",
                maxLength: 30,
              })}
              placeholder="First Name"
            />
          </div>
          {errors.firstName?.message && (
            <label>{errors.firstName?.message}</label>
          )}
          <div className="second-field">
            {errors.lastName?.message && (
              <img
                className="img img-last"
                src="/images/icon-error.svg"
                alt="icon"
              />
            )}

            <input
              type="text"
              {...register("lastName", {
                required: "Last name cannot be empty",
              })}
              placeholder="Last Name"
            />
          </div>
          {errors.lastName?.message && (
            <label>{errors.lastName?.message}</label>
          )}
          <div className="third-field">
            {errors.email?.message && (
              <img
                className="img img-email"
                src="/images/icon-error.svg"
                alt="icon"
              />
            )}

            <input
              type="email"
              {...register("email", {
                required: "please provide email",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="Email"
            />
          </div>
          {errors.email?.message && <label>{errors.email?.message}</label>}
          <div className="fourth-field">
            {errors.password?.message && (
              <img
                className="img img-pass"
                src="/images/icon-error.svg"
                alt="icon"
              />
            )}

            <input
              type="Password"
              {...register("password", {
                required: "Password cannot be empty",
                minLength: {
                  value: 6,
                  message: "Password cannot be less than 6 char",
                },
              })}
              placeholder="Password"
            />
          </div>
          {errors.password?.message && (
            <label>{errors.password?.message}</label>
          )}
          <input
            className="submit"
            type="submit"
            value="Claim your free trial"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  );
};

export default SideBanner;
