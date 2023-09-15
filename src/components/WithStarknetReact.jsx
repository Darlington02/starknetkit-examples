import logo from '../logo.svg';
import '../App.css';
import { useEffect, useState } from 'react';
import { useAccount, useConnectors } from '@starknet-react/core';

function WithStarknetReact() {
    const { connect, connectors, disconnect } = useConnectors();
    const { address, isConnected, account } = useAccount();
    
  return (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {
                isConnected ?
                    (
                        <div>
                            <p className='title'>
                                Address: {address}
                            </p>
                            <button className='connectbtn' onClick={disconnect}>Disconnect</button>
                         </div>
                    )
                :
                connectors.map((connector) => (
                    <div className='connectorbtnlist'>
                        <div key={connector.id}>
                            <button onClick={() => connect(connector)} className='connectorbtn'>
                                Connect {connector.id}
                            </button>
                        </div>
                    </div>
                ))
            }
        </header>
    </div>
  )
}

export default WithStarknetReact