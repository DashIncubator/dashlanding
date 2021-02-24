import { Button } from "@material-ui/core";
import React, { useState } from "react";
import FadeIn from "react-fade-in";
import { createUseStyles } from "react-jss";
import caretDown from "./assets/caretDown.svg";
import Lottie from "react-lottie";
import * as animationData from "./assets/done.json";
import { Breakpoints } from "./utils";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    userSelect: "none",
    "&:hover": {
      filter: "brightness(150%)",
    },
  },
  sectionSubtitle: {
    fontSize: "18px",
    fontWeight: 500,
    color: "#4c555a",
  },
  success: {
    position: "absolute",
    left: "-56px",
    top: "-26px",
  },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    success: {
      position: "absolute",
      left: "-67px",
      top: "-26px",
    },
  },
});

export default function Accordion({ children, step, setStep, phase }) {
  const [expanded, setExpanded] = useState(true);
  const styles = useStyles();
  return (
    <div>
      <div
        className={styles.container}
        style={{
          cursor: step !== 0 ? "pointer" : "auto",
          filter: step === 0 && "none",
        }}
        onClick={() => step !== 0 && setExpanded(!expanded)}
      >
        <div
          className={styles.sectionSubtitle}
          style={{ position: "relative" }}
        >
          <div style={{ color: "#008de4" }}>
            {phase === 0
              ? "Install and Connect"
              : phase === 1
              ? "Create and Fund a Wallet"
              : phase === 2
              ? "Register an Identity"
              : "Send Funds"}
          </div>
          <div className={styles.success}>
            {step > phase && (
              <Lottie options={defaultOptions} height={80} width={80} />
            )}
          </div>
        </div>
        {step !== 0 && (
          <FadeIn>
            <img
              src={caretDown}
              alt="open"
              style={{
                width: "15px",
                transition: "all 0.2s",
                transform: expanded ? "rotate(-180deg)" : "rotate(0deg)",
              }}
            />
          </FadeIn>
        )}
      </div>
      <FadeIn>{expanded && children}</FadeIn>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "32px",
          marginRight: "32px",
        }}
      >
        {expanded && phase === step && (
          <Button
            variant={"contained"}
            onClick={() => {
              setExpanded(false);
              setStep(phase + 1);
            }}
            style={{ backgroundColor: "#008de4", color: "white" }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
