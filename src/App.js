import dashLogo from "./assets/dashLogo.svg";
import FadeIn from "react-fade-in";
import sdkLogo from "./assets/sdk.png";
import paymentLogo from "./assets/payments.png";
import identityLogo from "./assets/identity.png";
import { createUseStyles } from "react-jss";
import CustomCodeBlock from "./CustomCodeBlock";
import Accordion from "./Accordion";
import { useState, useEffect } from "react";
import cashLogo from "./assets/cashLogo.svg";
import * as animationData from "./assets/done.json";
import Lottie from "react-lottie";
import { Breakpoints } from "./utils";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.svg";
import github from "./assets/github.svg";
import guide1 from "./assets/guide1.png";
import guide2 from "./assets/guide2.png";
import guide3 from "./assets/guide3.png";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = createUseStyles({
  logo: { position: "absolute", top: "-16px", left: "-108px", width: "64px" },
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    color: "#454545",
    backgroundColor: "#fff",
    padding: "48px 32px 48px 32px",
    position: "relative",
  },
  sectionTitle: {
    fontSize: "28px",
    lineHeight: "1.2em",
    fontWeight: 700,
    marginBottom: "24px",
    color: "#008de4",
  },
  sectionDetails: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1.9em",
    marginBottom: "16px",
  },
  sectionSubtitle: {
    fontSize: "16px",
    fontWeight: 500,
    marginBottom: "24px",
    color: "#4c555a",
    marginTop: "24px",
  },
  CustomCodeBlock: {
    backgroundColor: "#f6f8fa",
    padding: "8px 16px 8px 16px",
    fontSize: "12px",
  },
  sectionImage: { width: "400px", marginBottom: "48px" },
  socialLogo: { width: "40px", cursor: "pointer", filter: "brightness(60%)" },
  infoContainer: { width: "100%", position: "relative" },
  socialImage: {
    width: "40px",
    marginRight: "24px",
    cursor: "pointer",
    filter: "contrast(60%)",
    transition: "all 0.2s",
    "&:hover": {
      filter: "contrast(10%)",
    },
  },
  confirmation: { color: "#454545", fontSize: "18px" },
  [`@media (min-width: ${Breakpoints.sm}px)`]: {
    infoContainer: { width: "480px", position: "relative" },
    sectionContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      color: "#454545",
      backgroundColor: "#fff",
      padding: "188px 64px 108px 64px",
      position: "relative",
    },
    confirmation: { color: "#454545", fontSize: "24px" },
  },
});

function App() {
  const styles = useStyles();
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className={styles.sectionContainer}>
        <div className={styles.infoContainer}>
          <img src={dashLogo} alt="logo" className={styles.logo} />
          <div
            style={{
              fontWeight: 500,
            }}
            className={styles.sectionTitle}
          >
            Dash Masternode <span style={{ fontWeight: 900 }}>Quickstart</span>
          </div>
          <div className={styles.sectionDetails}>
            Get up and running with a Masternode on Testnet.
          </div>
          <hr style={{ opacity: 0.3, marginBottom: "24px" }} />
          <Accordion step={step} setStep={setStep} phase={0}>
            <div className={styles.sectionSubtitle}>
              Developers requiring a local masternode can get started quickly by
              starting mn-bootstrap and providing a private key containing
              collateral directly. Install dependencies if necessary (Docker,
              NodeJS, NPM, Github CLI). Windows, macOS and Linux are supported,
              the following example is under Ubuntu 20.04 LTS.:
            </div>
            <CustomCodeBlock
              code={`curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt install -y nodejs git docker.io docker-compose gh
sudo usermod -aG docker $USER
newgrp docker`}
            />
          </Accordion>
          {step > 0 && (
            <FadeIn>
              <Accordion step={step} setStep={setStep} phase={1}>
                <div>
                  <div className={styles.sectionSubtitle}>
                    Generate a temporary address by running the script on{" "}
                    <a
                      href="https://repl.it/@strophy/Generate-Dash-Address"
                      rel="noreferrer"
                      target="_blank"
                    >
                      this website
                    </a>
                  </div>
                  <img src={guide1} alt="guide1" style={{ width: "100%" }} />
                  <div
                    style={{ margin: "16px 0px" }}
                    className={styles.sectionSubtitle}
                  >
                    Simply press the play button and wait for the output, then
                    copy the generated address
                  </div>
                  <img src={guide2} alt="guide2" style={{ width: "100%" }} />
                  <hr style={{ opacity: 0.3, margin: "32px 0px" }} />
                  <div className={styles.sectionSubtitle}>
                    Now go to{" "}
                    <a
                      href="https://testnet-faucet.dash.org/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      the testnet faucet
                    </a>{" "}
                    and request 1000+ tDash to your new address using the promo
                    code ‘masternode’
                    <img
                      src={guide3}
                      alt="guide2"
                      style={{ width: "100%", marginTop: "24px" }}
                    />
                  </div>
                </div>
              </Accordion>
            </FadeIn>
          )}
          {step > 1 && (
            <Accordion step={step} setStep={setStep} phase={2}>
              <div>
                <div className={styles.sectionSubtitle}>
                  Run the following commands to download mn-bootstrap
                </div>
                <CustomCodeBlock
                  code={`git clone https://github.com/dashevo/mn-bootstrap.git
cd mn-bootstrap
gh pr checkout 288
npm install && sudo npm link`}
                />
                <div className={styles.sectionSubtitle}>
                  If you are using Windows, you will need to change the path for
                  two log files. Modify the example below with a log path of
                  your choosing:
                </div>
                <CustomCodeBlock
                  code={`git merge windows-support
mn config:set platform.drive.abci.log.prettyFile.path {YOUR_LOG_PATH}.log
mn config:set platform.drive.abci.log.jsonFile.path {YOUR_LOG_PATH}.log`}
                />
              </div>
            </Accordion>
          )}
          {step > 2 && (
            <Accordion step={step} setStep={setStep} phase={3}>
              <div>
                <div className={styles.sectionSubtitle}>
                  Register your masternode on the network as follows:
                </div>
                <CustomCodeBlock
                  code={`mn setup testnet masternode -p <funding-private-key>`}
                />
                <div className={styles.sectionSubtitle}>
                  Wait until sync and registration are complete. Then start the
                  masternode:
                </div>
                <CustomCodeBlock code={`mn start`} />
                <div className={styles.sectionSubtitle}>
                  Your masternode is now providing service on the following
                  local ports:
                </div>
                <CustomCodeBlock
                  code={`Core P2P:     19999
Core RPC:     19998
Platform P2P: 26656
Platform RPC: 26657
DAPI HTTP:    3000
DAPI gRPC:    3010`}
                />
              </div>
              <div className={styles.sectionSubtitle}>
                Note that platform sync will take some time after core sync is
                complete. You can monitor progress with{" "}
                <b>mn status:platform</b> or use <b>mn --help</b> to view other
                commands.
              </div>
            </Accordion>
          )}
          {step > 3 && (
            <FadeIn>
              <div style={{ marginTop: "88px" }}>
                <div className={styles.confirmation}>
                  You're all set! View the full documentation at{" "}
                  <a
                    href="https://docs.dash.org/en/stable/masternodes/setup-testnet.html#developer-installation"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#008de4" }}
                  >
                    docs.dash.org
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginTop: "24px",
                  }}
                >
                  <a
                    href="https://discord.com/invite/mU79ZWx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={discord}
                      alt="discord"
                      className={styles.socialImage}
                    />
                  </a>
                  <a
                    href="https://twitter.com/dashpay"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={twitter}
                      alt="twitter"
                      className={styles.socialImage}
                    />
                  </a>
                  <a
                    href="https://github.com/dashevo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={github}
                      alt="github"
                      className={styles.socialImage}
                    />
                  </a>
                </div>
              </div>
            </FadeIn>
          )}
          <div style={{ position: "absolute", left: 660, top: 120 }}>
            <div
              style={{
                position: "fixed",
              }}
            >
              {step === 0 ? (
                <div key={"image0"}>
                  <FadeIn transitionDuration={800} delay={800}>
                    <img
                      src={sdkLogo}
                      alt="testnet"
                      style={{
                        transform: "scaleX(-1)",
                      }}
                      className={styles.sectionImage}
                    />
                  </FadeIn>
                </div>
              ) : step === 1 ? (
                <div key={"image1"}>
                  <FadeIn transitionDuration={800} delay={800}>
                    <img
                      src={paymentLogo}
                      alt="testnet"
                      className={styles.sectionImage}
                    />
                  </FadeIn>
                </div>
              ) : step === 2 ? (
                <div key={"image2"}>
                  <FadeIn transitionDuration={800} delay={800}>
                    <img
                      src={identityLogo}
                      alt="testnet"
                      className={styles.sectionImage}
                    />
                  </FadeIn>
                </div>
              ) : step === 3 ? (
                <div key={"image3"}>
                  <FadeIn transitionDuration={800} delay={800}>
                    <img
                      src={cashLogo}
                      alt="testnet"
                      className={styles.sectionImage}
                    />
                  </FadeIn>
                </div>
              ) : (
                <Lottie
                  options={defaultOptions}
                  height={400}
                  width={400}
                  style={{ marginTop: "-100px" }}
                />
              )}
            </div>
          </div>
        </div>
        <div style={{ width: "400px" }}></div>
      </div>
    </div>
  );
}

export default App;
