import Transfer from "./contracts/Transfer.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import ButtonSet from "./components/ButtonSet";

import React, {useState, useEffect} from 'react'

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  
  const getInstances = async () =>{
    const web3Instance = await getWeb3();
    setWeb3(web3Instance)
  }

  const getDetails = async () => {
    const currentAccount = await web3.eth.getAccounts();
    const contractAbi = Transfer.abi;
    const addressContract = Transfer.networks["5777"].address;
    const contractInstance = new web3.eth.Contract(contractAbi, addressContract);
    setContract(contractInstance);
    setAccount(currentAccount);
  }


  useEffect(()=>{
    getInstances()
  })

  useEffect(()=>{
    if(web3){getDetails()}
  },[web3])
  
  

  return (
    <div id="root"> 
      <div style={{height: "48px", backgroundColor: "black"}}/>
      <ButtonSet account={account} contract={contract} web3={web3}/>
    </div>
  )
}

export default App
