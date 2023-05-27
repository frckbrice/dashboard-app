import React, { useState, useEffect } from "react";
import validationSchema from "../assets/ValidationSchema";
import registerApi from "../assets/FakeApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function getFormValues() {
  const storedValues = localStorage.getItem("form");
  return JSON.parse(storedValues);
}

const FormikForm = () => {
  //fetch data from localStorage
  const values = getFormValues();
  console.log(values);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setError,
    setValue,
    reset,
    getValues,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      pic: values.pic,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: "",
      confimationPassword: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const newValues = getValues();
  console.log(newValues);
  async function onSubmit(newNalues) {
    console.log(JSON.stringify(newValues));
    localStorage.setItem("form", JSON.stringify(getValues()));
    try {
      await registerApi(newNalues);
      reset();
      alert("Registration successfull");
    } catch ({ errors }) {
      for (let key in errors) {
        setError(key, {
          type: "Manual",
          Message: errors[key],
        });
      }
    }
  }
//* this need to be publish as an article. this useEffect re-render twice on submit and refrsh the local storage with fresh(default) values 

  //store values in the database
  // React.useEffect(() => {
  //   localStorage.setItem("form", JSON.stringify(newValues));
  // }, [newValues]);
  // console.log(newValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-10">
        <h1 className="text-5xl font-bold text-center">Edit Profile</h1>
        <p className="text-gray-500 text-center">
          add information of your profile
        </p>
      </div>

      <div className="my-2 ">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          className="input"
          placeholder="first name"
          onChange={(e) => setValue("firstname", e.target.value)}
          name="firstName"
          {...register("firstName")}
        />
        {errors.firstName && (
          <small className="error text-red-500 font-semibold">
            {errors.firstName.message}
          </small>
        )}
      </div>
      <div className="my-2">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="input"
          placeholder="last name"
          onChange={(e) => setValue("lastName", e.target.value)}
          name="lastName"
          {...register("lastName")}
        />
        {errors.lastName && (
          <small className="error text-red-500 font-semibold">
            {errors.lastName.message}
          </small>
        )}
      </div>
      <div className="my-2">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="email"
          onChange={(e) => setValue("email", e.target.value)}
          name="email"
          {...register("email")}
        />
        {errors.email && (
          <small className="error text-red-500 font-semibold">
            {errors.email.message}
          </small>
        )}
      </div>
      <div className="my-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input"
          placeholder="password"
          onChange={(e) => setValue("password", e.target.value)}
          name="password"
          {...register("password")}
        />
        {errors.password && (
          <small className="error text-red-500 font-semibold">
            {errors.password.message}
          </small>
        )}
      </div>
      <div className="my-2 ">
        <label htmlFor="confimationPassword">Confirm Password</label>
        <input
          type="password"
          className="input"
          placeholder="confirm password"
          name="confimationPassword"
          onChange={(e) => setValue("confimationPassword", e.target.value)}
          {...register("confimationPassword")}
          // id="passwordConfirmation"
        />
        {errors.confimationPassword && (
          <small className="error text-red-500 font-semibold">
            {errors.confimationPassword.message}
          </small>
        )}
      </div>
      <div className="my-4">
        <Link to="/createprofile/viewprofile">
          <button
            className="btn"
            disabled={!isValid || isSubmitting}
            type="submit"
            onClick={onSubmit}
          >
            Register
          </button>
        </Link>
      </div>
    </form>
  );
};

export default FormikForm;
