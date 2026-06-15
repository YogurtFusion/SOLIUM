import React from "react";
import { useTransition } from "../../context/TransitionContext";

const TransitionLink = ({ to, children, className }) => {
  const { triggerTransition } = useTransition();
  const isActive = location.pathname === to;
  const handleClick = (e) => {
    e.preventDefault();

    if (!isActive) {
      triggerTransition(to);
    }
  };
  const computedClassName =
    typeof className === "function" ? className({ isActive }) : className;
  return (
    <a href={to} onClick={handleClick} className={computedClassName}>
      {children}{" "}
    </a>
  );
};

export default TransitionLink;
