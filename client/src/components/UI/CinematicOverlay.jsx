import React, { useEffect, useRef } from "react";
import {useTransition} from '../../context/TransitionContext'

const CinematicOverlay = () => {
  const { registerOverlay } = useTransition();
  const overlayRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    registerOverlay(overlayRef.current, lineRef.current);
    return () => registerOverlay(null, null);
  }, [registerOverlay]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000",
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 0, // Hidden by default
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow:"hidden",
        height:"100vh"
      }}
      >
      <div
        ref={lineRef}
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          height: "1px",
          width: "0px", // Starts at 0
          backgroundColor: "#fff",
          overflow:"hidden",
        }}
      />
    </div>
  );
};

export default CinematicOverlay;
