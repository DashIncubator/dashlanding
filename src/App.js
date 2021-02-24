import dashLogo from "./assets/dashLogo.svg";
import twitterLogo from "./assets/twitter.svg";
import discordLogo from "./assets/discord.svg";
import githubLogo from "./assets/github.svg";
import FadeIn from "react-fade-in";
import sdkLogo from "./assets/sdk.png";
import paymentLogo from "./assets/payments.png";
import identityLogo from "./assets/identity.png";
import dapp1 from "./assets/dapp1.png";
import dapp2 from "./assets/dapp2.png";
import dapp3 from "./assets/dapp3.png";
import { createUseStyles } from "react-jss";
import CodeBlock from "./CodeBlock";
import Accordion from "./Accordion";
import { useState } from "react";

const useStyles = createUseStyles({
  logo: { position: "absolute", top: "32px", left: "32px", width: "64px" },
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "200px 64px 200px 64px",
    color: "#454545",
    backgroundColor: "#fff",
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
});

function App() {
  const styles = useStyles();
  const [step, setStep] = useState(0);
  return (
    <div>
      <img src={dashLogo} alt="logo" className={styles.logo} />
      <div
        className={styles.sectionContainer}
        style={{ padding: "164px 64px 200px 64px", minHeight: "100vh" }}
      >
        <div style={{ width: "480px" }}>
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
                <div className={styles.sectionSubtitle}>1. Register</div>
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
                  code={`Mnemonic: 
thrive wolf habit timber birth service crystal patient tiny depart tower focus    
Unused address: 
yXF7LsyajRvJGX96vPHBmo9Dwy9zEvzkbh`}
                />
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  <span style={{ color: "red" }}>*</span> Save the mnenomic and
                  address for the next step
                </div>
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
          )}
          {step > 2 && (
            <Accordion step={step} setStep={setStep} phase={3}>
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
                  <span style={{ color: "red" }}>*</span> Save the mnenomic and
                  address for the next step
                </div>
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
          )}
        </div>
        <div style={{ marginLeft: "172px", marginTop: "108px" }}>
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
          ) : (
            <div key={"image2"}>
              <FadeIn transitionDuration={800} delay={800}>
                <img
                  src={identityLogo}
                  alt="testnet"
                  className={styles.sectionImage}
                />
              </FadeIn>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#1575c7",
        }}
        className={styles.sectionContainer}
      >
        <div style={{ width: "480px", color: "#fff" }}>
          <div
            style={{
              color: "#fff",
            }}
            className={styles.sectionTitle}
          >
            Create and Fund a Wallet
          </div>
          <div className={styles.sectionDetails}>
            Here is fake text regarding funding a wallet. These easy steps will
            help you create a wallet and get it funded in no time
          </div>
          <hr style={{ opacity: 0.3 }} />
          <div style={{ color: "#fff" }} className={styles.sectionSubtitle}>
            Generate your wallet
          </div>
          <pre
            style={{
              color: "#454545",
            }}
            className={styles.codeblock}
          >
            <code>
              {`const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: null
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
            </code>
          </pre>
          <hr style={{ opacity: 0.3, marginTop: "32px" }} />
          <div
            style={{
              color: "#fff",
            }}
            className={styles.sectionSubtitle}
          >
            Example response
          </div>
          <pre
            style={{
              color: "#454545",
            }}
            className={styles.codeblock}
          >
            <code>
              {`Mnemonic: thrive wolf habit timber birth service crystal 
          patient tiny depart tower focus
Unused address: yXF7LsyajRvJGX96vPHBmo9Dwy9zEvzkbh`}
            </code>
          </pre>
        </div>
        <img
          src={paymentLogo}
          alt="wallet"
          className={styles.sectionImage}
          style={{ marginLeft: "172px", marginBottom: 0, marginTop: "48px" }}
        />
      </div>
      <div className={styles.sectionContainer}>
        <img
          src={identityLogo}
          alt="testnet"
          className={styles.sectionImage}
          style={{ marginRight: "172px" }}
        />
        <div style={{ width: "480px" }}>
          <div className={styles.sectionTitle}>
            Register an Identity and Give it a Name
          </div>
          <div className={styles.sectionDetails}>
            Here is fake text about why we want you to try the testnet phase.
            This landing page will give you step by step instructions on how to
            get started, and help you dive into the world of Dash
          </div>
          <hr style={{ opacity: 0.3 }} />
          <div className={styles.sectionSubtitle}>Register an Identity</div>

          <pre className={styles.codeblock}>
            <code>
              {`const Dash = require('dash');

const clientOpts = {
  network: 'testnet',
  wallet: {
    mnemonic: 'a Dash wallet mnemonic with testnet funds',
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
            </code>
          </pre>
        </div>
      </div>
      <div
        style={{
          padding: "200px 64px 200px 64px",
          color: "#fff",
          backgroundColor: "#1575c7",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: "28px",
            fontStyle: "italic",
          }}
        >
          Explore Dash dApps
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src={dapp1}
              alt="dapp1"
              style={{
                borderRadius: "8px",
                width: "300px",
                height: "300px",
                cursor: "pointer",
              }}
            />
            <img
              src={dapp2}
              alt="dapp2"
              style={{
                borderRadius: "8px",
                width: "300px",
                height: "300px",
                marginLeft: "56px",
                cursor: "pointer",
              }}
            />
            <img
              src={dapp3}
              alt="dapp3"
              style={{
                borderRadius: "8px",
                width: "300px",
                height: "300px",
                marginLeft: "56px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            padding: "32px",
          }}
        >
          <FadeIn>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={dashLogo}
                alt="logo"
                style={{
                  width: "64px",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={githubLogo}
                  alt="github"
                  style={{
                    marginRight: "24px",
                  }}
                  className={styles.socialLogo}
                />
                <img
                  src={twitterLogo}
                  alt="twitter"
                  style={{
                    marginRight: "24px",
                  }}
                  className={styles.socialLogo}
                />
                <img
                  src={discordLogo}
                  alt="discord"
                  className={styles.socialLogo}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default App;
