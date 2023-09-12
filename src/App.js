import React from "react";
import ExtensionInjectors from "./components/ExtensionInjectors";
import WebWalletArgentMobile from "./components/WebWalletArgentMobile";
import FullConnectorOptions from "./components/FullConnectorOptions";

function App() {
  return (
    <div className="App">
      {/* this demonstrates how to enable the starknetkit modal with full connection options */}
      <FullConnectorOptions />

      {/* this demonstrates how to enable just Argent X and Braavos extension connectors */}
      {/* <ExtensionInjectors />  */}

      {/* this demonstrates how to enable just Web Wallet and Argent Mobile connectors  */}
      {/* <WebWalletArgentMobile /> */}

      {/* Need more connectors? Submit a PR😉 */}
    </div>
  );
}

export default App;