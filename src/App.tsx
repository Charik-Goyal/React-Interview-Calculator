import './App.css'
import {TextField, Box, Typography, Button} from "@mui/material";
import {useState} from "react";

function App() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [result, setResult]= useState(0);
    const [sign, setSign] = useState("+");
    const [oper, setOper] = useState(0);

    const answer = () => {
        if(sign==="+"){
            setResult(val1 + val2);
        }
        else if (sign==="-"){
            setResult(val1 - val2);
        }
        else if(sign=="/"){
            setResult(val1 / val2);
        }
        else if(sign==="x") {
            setResult(val1 * val2);
        }
    }

  return (
    <Box>
    <div style={{display:"flex", justifyContent: "center", margin:30}}>
        <Typography variant="h4">Total Operations - {oper}</Typography>
    </div>
    <div style={{display:"flex", justifyContent: "center" }}>
      <TextField id="outlined-basic" label="Value" value={val1} onChange={(e)=> setVal1(Number(e.target.value))} style={{marginRight:20}}/>
        <Typography variant="h3">{sign}</Typography>
      <TextField id="outlined-basic" label="Value" value={val2} onChange={(e)=> setVal2(Number(e.target.value))} style={{marginLeft:20}}/>
        {oper===1 && (
            <>
            <Typography variant="h3" style={{marginLeft:20}} >=</Typography>
        <TextField id="outlined-basic" label="Value" value={result} onChange={(e)=> setVal1(Number(e.target.value))} style={{marginLeft:20}}/>
            </>
            )}
    </div>
    <div style={{display:"flex", justifyContent: "center", marginTop:20 }}>
        <Button variant="outlined" onClick={() => setSign("+")}>+</Button>
        <Button variant="outlined" onClick={() => setSign("-")}>-</Button>
        <Button variant="outlined" onClick={() => setSign("/")} >/</Button>
        <Button variant="outlined" onClick={() => setSign("x")}>x</Button>
    </div>
    <div style={{display:"flex", justifyContent: "center", marginTop:20 }}>
         <Button variant="outlined" onClick={() => {setVal1(0); setVal2(0); setSign("+"); setOper(0);}} style={{marginRight:20}}>Reset</Button>
        <Button variant="outlined" onClick={() => {answer(); setOper(1); }}>Result</Button>
    </div>
    </Box>
  )
}

export default App
