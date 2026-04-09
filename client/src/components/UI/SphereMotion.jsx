import React from "react";
import Sphere from "./Sphere";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const ShpereMotion =()=>{
    return(
        <div className="max-w-full w-full flex justify-center items-center ">
            <Sphere/>

        </div>
    )
}

export default ShpereMotion

