import gsap from "gsap";
import React, { createContext, useCallback, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
const TransitionContext = createContext(); 

export const TransitionProvider = ({children}) => {
  const navigate = useNavigate();

  const overlayRef = useRef(null);
  const lineRef = useRef(null);
  const pageWrapperRef = useRef(null);

  const registerOverlay = useCallback((overlay, line) => {
    overlayRef.current = overlay;
    lineRef.current = line;
  }, []);

  const registerPageWrapper = useCallback((wrapper) => {
    pageWrapperRef.current = wrapper;
  }, []);

  const triggerTransition = useCallback((destination) => {
    const overlay = overlayRef.current;
    const line = lineRef.current;
    const wrapper = pageWrapperRef.current;

    if (!overlay || !line) {
      navigate(destination);
      return;
    }

    overlay.style.pointerEvents = "all";

    const tl = gsap.timeline({
      onComplete: () => {
        overlay.style.pointerEvents = "none";
      },
    });

    if (wrapper) {
      tl.to(wrapper, { x: 8, rotation: 0.5 ,duration:0.06, ease:"power3.in"});
    }

    tl.to(overlay,{opacity:1,duration:0.3,ease:"power2.out"},"<")

    tl.to(line,{width:"100%", duration:0.2,ease:"power4.inOut"},"<0.1")

    
    
    tl.add(()=>{
        navigate(destination)
        
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if(pageWrapperRef.current){
                    gsap.set(pageWrapperRef.current,{x:-8,rotation:-0.5})
                }
            })
        })
    },"-=0.4")
    
    tl.to(overlay,{opacity:0,duration:0.5,ease:"power2.in"},"+=0.2")
    tl.set(line, {width:"0px"})
    
    tl.add(()=>{
        if(pageWrapperRef.current){
            gsap.to(pageWrapperRef.current,{x:0,rotation:0,duration:0.28, ease:"power2.out"})
        }
    },"-=0.3")
},[navigate]);

  return <TransitionContext.Provider value={{registerOverlay, registerPageWrapper, triggerTransition}}>
    {children}
  </TransitionContext.Provider>;
}; 


export const useTransition = ()=>useContext(TransitionContext)