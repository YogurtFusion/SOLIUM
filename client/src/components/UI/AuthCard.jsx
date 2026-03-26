import React from "react";
import MainButton from "./Button";
const Credentials = [

  
  {
    id: "id1",
    title: "Email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
    name: "email"
  },
  {
    id: "id2",
    title: "Password",
    placeholder: "Enter your password",
    type: "password",
    label: "Password",
    name: "password"
  },
];
const AuthCard = () => { 
     const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Form Submitted")
    }
  return (
    <>
      <div className=" flex flex-col gap-6 w-full p-8 lg:p-12  md:max-w-md max-w-[80%] mx-auto  border-[0.5px] border-neutral-800 bg-neutral-950/50 backdrop-blur-md shadow-2xl   ">
        <div className=" text-center mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-neutral-100 font-poppins font-semibold mb-2">
            Access Solium
          </h2>
          <p className="text-xs tracking-widest text-neutral-500 uppercase">
            Login to your existing account
          </p>
        </div>

        <form  className=" flex flex-col gap-10 w-full ">
          {Credentials.map((item) => (
            <div className="flex flex-col gap-6 w-full" key={item.id}>
              {/* <label className="text-xs uppercase tracking-tighter text-neutral-500 ml-1" htmlFor={item.placeholder}>{item.label}</label> */}
              <input
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                className="bg-transparent border-b border-neutral-800 py-2 px-1 text-white outline-none focus:border-white transition-colors duration-500 placeholder:text-neutral-600 text-sm "
                required
              />
            </div>
          ))}

          
          <div className=" mt-4 flex flex-col justify-between items-center gap-6 ">
          
          <a href="#" className="text-sm uppercase text-neutral-600 hover:text-white transition-colors">Forgot Password?</a>
            <MainButton
              hide={"hidden"}
              title={"Login"}
              px={"px-8"}
              py={"py-3"}
              other={"w-full justify-center"}
              
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthCard;
