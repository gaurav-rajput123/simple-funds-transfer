import React, {useEffect, useState} from 'react'
import {Button, Container, TextField, InputAdornment} from "@material-ui/core"


function ButtonSet({account, contract, web3}) {
    const iter = [1,2];

    const [compo, setCompo] = useState(null);
    const [name, setName] = useState(null);
    const [toAddress, setToAddress] = useState(null);
    const [amount, setAmount] = useState(null);
    const handleCreate = ()=>{
        setCompo(1);
    }
    const handleSend  = ()=>{
        setCompo(0);
    }
    const handleSendSubmit = (e) => {
        e.preventDefault();
    }
    const handleNewSubmit = (e) =>{
        e.preventDefault();
    }

    useEffect(()=>{
        if(account && contract && web3){
        console.log(account, " ", contract, " ", web3)}
        
    })



    const createNewAccountSection = (
        <Container style={{ backgroundColor: "rgba(255,239,213, 0.3)", borderRadius: "8px", paddingBottom: "24px"}} maxWidth="sm">

            <form style={{textAlign:"center"}} onSubmit={handleNewSubmit}>
                {iter.map(index=>{
                    return <br/>
                })}
                <TextField variant="outlined" color="primary" label="Name" helperText="Give the name u wanna make an account with" required style={{margin: "auto"}} value={name} onChange={(e)=>setName(e.target.value)} fullWidth/>
                <br/>
                <br/>
                <div style={{padding: "0 18px"}}>
                    <Button type="submit" variant="outlined" color="primary" fullWidth>Create</Button>
                </div>
            </form>
        </Container>
    )

    const sendBalanceSection = (
        <Container style={{ backgroundColor: "rgba(255,239,213, 0.3)", borderRadius: "8px", paddingBottom: "24px"}} maxWidth="sm">

            <form style={{textAlign:"center"}} onSubmit={handleSendSubmit}>
                {iter.map(index=>{
                    return <br/>
                })}
                <TextField variant="outlined" color="primary" label="Address" helperText="Enter the address you want to sed balance to" style={{margin: "auto"}} value={toAddress} onChange={(e)=>setToAddress(e.target.value)}  required fullWidth/>
                <br/>
                <br/>
                <TextField variant="outlined" color="primary" label="Amount" helperText="Enter the amount you want to transfer" style={{margin: "auto"}} required InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}} value={amount} onChange={(e)=>setAmount(e.target.value)}  fullWidth/>
                <br/>
                <br/>
                <div style={{padding: "0 18px"}}>
                    <Button type="submit" variant="outlined" color="primary" fullWidth>Send</Button>
                </div>
            </form>


        </Container>
    )

    return (
        <div>
            <div style={{display:"flex", justifyContent: "space-evenly", width: "50vh", margin:"auto", paddingTop: 36,paddingBottom: 24, borderBottom: "2px solid black"}}>
                <Button variant="outlined" color="primary" onClick={handleCreate}>Create New Account</Button>
                <Button variant="outlined" color="primary" onClick={handleSend}>Send Balance</Button>
            </div>
            <br/>
            {compo === 0 ? (sendBalanceSection) : compo === 1 ? (createNewAccountSection) : null}
        </div>
    )
}

export default ButtonSet
