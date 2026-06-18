import gsap from "gsap";
import { LocateIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { UNSAFE_LocationContext, useLocation } from "react-router-dom";

const useIntroLoaders = (onComplete) => {
  const location = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    if (prevPath.current === location.pathname) {
      return;
    }
    prevPath.current = location.pathname;

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "#000";
    overlay.style.zIndex = "9999";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.flexDirection = "column";
    overlay.style.gap = "16px";

    // const wordmark = document.createElement("div");
    // wordmark.textContent = "SOLIUM";
    // wordmark.style.fontFamily = '"EB Garamond", Georgia, serif';
    // wordmark.style.letterSpacing = "0.35em";
    // wordmark.style.fontSize = "clamp(2rem, 6vw, 4rem)";
    // wordmark.style.color = "#fff";
    // wordmark.style.opacity = "0";
    // wordmark.style.fontWeight = "500";

    const line = document.createElement("div");
    line.style.position = "absolute";
    line.style.left = "0";
    line.style.top = "50%";
    line.style.height = "1px";
    line.style.width = "0px";
    line.style.background = "#fff";
    line.style.zIndex = 99999;

    overlay.appendChild(line);
    document.body.appendChild(overlay);

    const timeline = gsap.timeline({
      onComplete: function handleComplete() {
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
        if (onComplete) {
          onComplete();
        }
      },
    });
    // timeline.to(wordmark, {
    //   opacity: 1,
    //   duration: 0.7,
    //   ease: "power2.out",
    // });

    timeline.to(
      line,
      {
        width: "100vw",
        duration: 0.5,
        ease: "power4.inOut",
      },
      "<0.2",
    );
    timeline.to({}, { duration: 0.4 });

    timeline.to(overlay, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    });

    return function cleanup() {
      timeline.kill();
      if (document.body.contains(overlay)) {
        document.body.removeChild(overlay);
      }
    };
  }, [location.pathname, onComplete]);
};

export default useIntroLoaders;
