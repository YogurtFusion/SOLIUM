import React from "react";
import AuthCard from "../UI/AuthCard";

const Login = () => {
  return (
    <section className="h-screen  bg-neutral-950 text-white   ">
      <h1 className="text-center text-4xl font-Playfair font-semibold p-12">
        SOLIUM
      </h1>
      <div className="">
        <AuthCard />
      </div>
    </section>
  );
};

export default Login;
