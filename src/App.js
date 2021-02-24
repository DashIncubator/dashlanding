import dashLogo from "./assets/dashLogo.svg";
import FadeIn from "react-fade-in";
import sdkLogo from "./assets/sdk.png";
import paymentLogo from "./assets/payments.png";
import identityLogo from "./assets/identity.png";
import { createUseStyles } from "react-jss";
import CodeBlock from "./CodeBlock";
import Accordion from "./Accordion";
import { useState } from "react";
import cashLogo from "./assets/cashLogo.svg";
import * as animationData from "./assets/done.json";
import Lottie from "react-lottie";
import { Breakpoints } from "./utils";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.svg";
import github from "./assets/github.svg";

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
  codeblock: {
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
            Dash Platform <span style={{ fontWeight: 900 }}>Quickstart</span>
          </div>
          <div className={styles.sectionDetails}>
            Get up and running with Dash in a few simple steps.
          </div>
          <hr style={{ opacity: 0.3, marginBottom: "24px" }} />
          <Accordion step={step} setStep={setStep} phase={0}>
            <div className={styles.sectionSubtitle}>
              1. Install the Dash SDK
            </div>
            <CodeBlock code={"npm i dash"} />
            <hr style={{ opacity: 0.3, marginTop: "32px" }} />
            <div className={styles.sectionSubtitle}>
              2. Connect to Dash Testnet
            </div>
            <CodeBlock
              code={`const Dash = require('dash');

const client = new Dash.Client();

async function connect() {
  return await client.getDAPIClient().core.getBestBlockHash();
}

connect()
  .then((d) => console.log('Connected. Best block hash:', d))
  .catch((e) => console.error('Something went wrong:', e))
  .finally(() => client.disconnect())`}
            />
          </Accordion>
          {step > 0 && (
            <FadeIn>
              <Accordion step={step} setStep={setStep} phase={1}>
                <div>
                  <div className={styles.sectionSubtitle}>
                    1. Generate your wallet
                  </div>
                  <CodeBlock
                    code={`const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: null, // this indicates that we want a new wallet to be generated
                              // if you want to get a new address for an existing wallet
                              // replace 'null' with an existing wallet mnemonic
  },
};

const client = new Dash.Client(clientOpts);

const createWallet = async () => {
  const account = await client.getWalletAccount();

  const mnemonic = client.wallet.exportWallet();
  const address = account.getUnusedAddress();
  console.log('Mnemonic:', mnemonic);
  console.log('Unused address:', address.address);
};

createWallet()
  .catch((e) => console.error('Something went wrong:', e))
  .finally(() => client.disconnect());`}
                  />
                  <hr style={{ opacity: 0.3, marginTop: "32px" }} />
                  <div className={styles.sectionSubtitle}>Example response</div>
                  <CodeBlock
                    code={`Mnemonic: 
  thrive wolf habit timber birth service crystal patient tiny depart tower focus    
Unused address: 
  yXF7LsyajRvJGX96vPHBmo9Dwy9zEvzkbh`}
                  />
                  <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                    <span style={{ color: "red" }}>*</span> Save the mnenomic
                    and address for the next step
                  </div>
                  <hr style={{ opacity: 0.3, marginTop: "32px" }} />
                  <div className={styles.sectionSubtitle}>
                    2. Fund your wallet with test funds
                  </div>
                  <div>
                    Using the faucet at: <br />
                    <a
                      style={{ color: "#008de4" }}
                      href="http://testnet-452625393.us-west-2.elb.amazonaws.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      testnet-452625393.us-west-2.elb.amazonaws.com
                    </a>
                    <br />
                    Send test funds to your "unused address" from the console
                    output.
                  </div>
                </div>
              </Accordion>
            </FadeIn>
          )}
          {step > 1 && (
            <Accordion step={step} setStep={setStep} phase={2}>
              <div>
                <div className={styles.sectionSubtitle}>
                  1. Register a new identity
                </div>
                <CodeBlock
                  code={`const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with testnet funds goes here',
  },
};
const client = new Dash.Client(clientOpts);

const createIdentity = async () => {
  return client.platform.identities.register();
};

createIdentity()
  .then((d) => console.log('Identity:', d.toJSON()))
  .catch((e) => console.error('Something went wrong:', e))
  .finally(() => client.disconnect());`}
                />
                <hr style={{ opacity: 0.3, marginTop: "32px" }} />
                <div className={styles.sectionSubtitle}>Example response</div>
                <CodeBlock
                  code={`Identity:
  {
    protocolVersion: 0,
    id: '49E8fS4TbVpch7zjHTbPkcLYyKZsHNaBeVCm6gbKTUcA',
    publicKeys: [
      {
        id: 0,
        type: 0,
        data: 'A5AfdTYNNkQj+Dl845BjfeiOc+6MHNQIA2oX2IS9VB6i'
      }
    ],
    balance: 0,
    revision: 0
  }`}
                />
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  <span style={{ color: "red" }}>*</span> Make a note of the
                  returned identity <b>id</b> as it will be used next.
                </div>
                <hr style={{ opacity: 0.3, marginTop: "32px" }} />

                <div className={styles.sectionSubtitle}>
                  2. Topup your identity's balance
                </div>
                <CodeBlock
                  code={`const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with testnet funds goes here',
  },
};
const client = new Dash.Client(clientOpts);

const topupIdentity = async () => {
  const identityId = 'an identity ID goes here';
  const topUpAmount = 1000; // Number of duffs

  await client.platform.identities.topUp(identityId, topUpAmount);
  return client.platform.identities.get(identityId);
};

topupIdentity()
  .then((d) => console.log('Identity credit balance: ', d.balance))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());`}
                />
              </div>
            </Accordion>
          )}
          {step > 2 && (
            <Accordion step={step} setStep={setStep} phase={3}>
              <div>
                <div className={styles.sectionSubtitle}>
                  1. Send Dash to an address
                </div>
                <CodeBlock
                  code={`const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'your wallet mnemonic goes here'
  },
};
const client = new Dash.Client(clientOpts);

const sendFunds = async () => {
  const account = await client.getWalletAccount();

  const transaction = account.createTransaction({
    recipient: 'yixnmigzC236WmTXp9SBZ42csyp9By6Hw8', // Evonet faucet
    satoshis: 100000000, // 1 Dash
  });
  return account.broadcastTransaction(transaction);
};

sendFunds()
  .then((d) => console.log('Transaction broadcast!\nTransaction ID:', d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());`}
                />
              </div>
            </Accordion>
          )}
          {step > 3 && (
            <FadeIn>
              <div style={{ marginTop: "88px" }}>
                <div className={styles.confirmation}>
                  You're all set! View the full documentation at{" "}
                  <a
                    href="https://dashplatform.readme.io/docs"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#008de4" }}
                  >
                    dashplatform.readme.io/docs
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
                  <img
                    src={discord}
                    alt="discord"
                    className={styles.socialImage}
                  />
                  <img
                    src={twitter}
                    alt="twitter"
                    className={styles.socialImage}
                  />
                  <img
                    src={github}
                    alt="github"
                    className={styles.socialImage}
                  />
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
