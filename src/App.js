import dashLogo from "./assets/dashLogo.png";
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

const useStyles = createUseStyles({
  logo: { position: "absolute", top: "32px", left: "32px", width: "64px" },
  sectionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  socialLogo: { width: "40px", cursor: "pointer", filter: "brightness(60%)" },
});

function App() {
  const styles = useStyles();
  return (
    <div>
      <img src={dashLogo} alt="logo" className={styles.logo} />
      <div
        className={styles.sectionContainer}
        style={{ padding: "164px 64px 200px 64px" }}
      >
        <FadeIn transitionDuration={1500} delay={300}>
          <img
            src={sdkLogo}
            alt="testnet"
            style={{ width: "400px", marginRight: "172px" }}
          />
        </FadeIn>
        <div style={{ width: "480px" }}>
          <div
            style={{
              fontWeight: 500,
            }}
            className={styles.sectionTitle}
          >
            Dash <strong>Testnet phase</strong>
          </div>
          <div className={styles.sectionDetails}>
            Here is fake text about why we want you to try the testnet phase.
            This landing page will give you step by step instructions on how to
            get started, and help you dive into the world of Dash
          </div>
          <hr style={{ opacity: 0.3 }} />
          <div className={styles.sectionSubtitle}>1. Install the Dash SDK</div>
          <code className={styles.codeblock}>npm install dash</code>
          <hr style={{ opacity: 0.3, marginTop: "32px" }} />
          <div className={styles.sectionSubtitle}>
            2. Connect to Dash Testnet
          </div>
          <pre className={styles.codeblock}>
            <code>
              {`const Dash = require('dash');
const client = new Dash.Client();
          
async function connect() {
  return await client.getDAPIClient().core.getBestBlockHash();
}
          
connect()
  .then((d) => console.log('Connected. Best block hash:', d))
  .catch((e) => console.error('Something went wrong:', e))
  .finally(() => client.disconnect());`}
            </code>
          </pre>
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
          style={{ width: "400px", marginLeft: "172px" }}
        />
      </div>
      <div className={styles.sectionContainer}>
        <img
          src={identityLogo}
          alt="testnet"
          style={{ width: "400px", marginRight: "172px" }}
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
          <div style={{ display: "flex", justifyContent: "center" }}>
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
