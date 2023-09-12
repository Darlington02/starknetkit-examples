import logo from '../logo.svg';
import '../App.css';
import { connect, disconnect } from '@argent/starknetkit-test';
import { InjectedConnector } from "@argent/starknetkit-test/injected"
import { useEffect, useState } from 'react';

function ExtensionInjectors() {
    const [connection, setConnection] = useState('')
    const [provider, setProvider] = useState('')
    const [address, setAddress] = useState('')
   
    useEffect(() => {
     const connectToStarknet = async() => {
      const connection = await connect({
        connectors: [
          new InjectedConnector({
            options: {id: "argentX"}
          }),
          new InjectedConnector({
            options: {id: "braavos"}
          }),
        ]
      })
       
       if(connection && connection.isConnected) {
         setConnection(connection)
         setProvider(connection.account)
         setAddress(connection.selectedAddress)
       }
     }
     connectToStarknet()
    }, [])
   
    const connectWallet = async() => {
       const connection = await connect({
         connectors: [
           new InjectedConnector({
             options: {id: "argentX"}
           }),
           new InjectedConnector({
             options: {id: "braavos"}
           }),
         ]
       })
   
     if(connection && connection.isConnected) {
       setConnection(connection)
       setProvider(connection.account)
       setAddress(connection.selectedAddress)
     }
    }
   
    const disconnectWallet = async() => {
     await disconnect()
     setConnection(undefined)
     setProvider(undefined)
     setAddress('')
    }
    
  return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title'>
          Address: {address}
        </p>
        {
          !connection ? <button className='connectbtn' onClick={connectWallet}>Connect</button>
          : <button className='connectbtn' onClick={disconnectWallet}>Disconnect</button>
        }
      </header>
    </div>
  )
}

export default ExtensionInjectors