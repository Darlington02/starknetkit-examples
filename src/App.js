import React from "react";
import ExtensionInjectors from "./components/ExtensionInjectors";
import WebWalletArgentMobile from "./components/WebWalletArgentMobile";
import FullConnectorOptions from "./components/FullConnectorOptions";
import WithStarknetReact from "./components/WithStarknetReact";
import { InjectedConnector } from "@argent/starknetkit-test/injected";
import { ArgentMobileConnector } from '@argent/starknetkit-test/argentMobile';
import { WebWalletConnector } from "@argent/starknetkit-test/webwallet";
import { StarknetConfig } from "@starknet-react/core";

function App() {
  const connectors = [
    new InjectedConnector( { options: { id: "argentX" } } ),
    new InjectedConnector( { options: { id: "braavos" } } ),
    new WebWalletConnector( { url: 'https://web.argent.xyz', } ),
    new ArgentMobileConnector(),
  ]

  return (
    // {/* this demonstrates how to use starknetkit with starknet-react */}
    <StarknetConfig 
      className="App"
      connectors={connectors}
      autoConnect
    >
      <WithStarknetReact />
    </StarknetConfig>

    // <div className="App">
    //   {/* this demonstrates how to enable the starknetkit modal with full connection options */}
    //   {/* <FullConnectorOptions /> */}

    //   {/* this demonstrates how to enable just Argent X and Braavos extension connectors */}
    //   {/* <ExtensionInjectors />  */}

    //   {/* this demonstrates how to enable just Web Wallet and Argent Mobile connectors  */}
    //   {/* <WebWalletArgentMobile /> */}

    //   {/* Need more connectors? Submit a PR😉 */}
    // </div>
  );
}

export default App;