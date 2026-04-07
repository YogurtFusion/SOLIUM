import React from "react";
import Login from "../components/features/auth/Login";
import SignUp from "../components/features/auth/Signup";

const Auth =()=>{
    return(
        <section>
            <Login/>
            <SignUp/>
        </section>

    )
}

export default Auth