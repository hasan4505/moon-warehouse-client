import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase/firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  return (
    <div className="signUp-form card w-50 mx-auto mt-5 p-5 shadow">
      <h2 className="fw-normal text-center text-primary">Please Sign Up</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="name">
            Your Name
          </label>
          <input
            className="form-control fs-5"
            type="text"
            name="name"
            id=""
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="email">
            Email
          </label>
          <input
            className="form-control fs-5"
            type="email"
            name="email"
            id=""
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="password">
            Password
          </label>
          <input
            className="form-control fs-5"
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-5" htmlFor="Confirm password">
            Confirm Password
          </label>
          <input
            className="form-control fs-5"
            type="password"
            name="confirmPassword"
            id=""
            required
          />
        </div>
        <input
          className="btn btn-primary w-100 btn-lg fs-6"
          type="submit"
          value="Sign Up"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>{" "}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
