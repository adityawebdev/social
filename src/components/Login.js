import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      Login
      <button className="bg-green" onClick={() => signIn("google")}>
        Sign in with google
      </button>
    </div>
  );
};

export default Login;
