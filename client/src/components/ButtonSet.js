import React, {useEffect} from 'react'
import {Button, Container, TextField, Input} from "@material-ui/core"
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(()=>({
    submitRoot: {
        padding: "5px 24px",
        border: "1px solid black"
    },
    submitInput: {
        padding: 0
    }
}))

function ButtonSet({account, contract, web3}) {
    const iter = [1,2,3,4];
    const handleCreate = ()=>{}
    const handleSend  = ()=>{}

    useEffect(()=>{
        if(account && contract && web3){
        console.log(account, " ", contract, " ", web3)}
        
    })

    const classes = useStyles()


    const createNewAccountSection = (
        <Container style={{height: "400px", backgroundColor: "rgba(255,239,213, 0.6)", borderRadius: "8px"}} maxWidth="sm">

            <form style={{textAlign:"center"}}>
                {iter.map(index=>{
                    return <br/>
                })}
                <TextField variant="outlined" color="primary" label="Name" helperText="Give the name u wanna make an account with" style={{margin: "auto"}}/>
                <br/>
                <Input type="submit" value="create" disableUnderline={true} classes={{root: classes.submitRoot, input: classes.submitInput}} fullWidth/>
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
            {createNewAccountSection}
        </div>
    )
}

export default ButtonSet
