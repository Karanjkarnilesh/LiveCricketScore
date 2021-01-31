import { Fragment, useState } from 'react';
import {useEffect} from 'react';
import React from 'react';
import './App.css';
import {Button, Grid, Typography} from "@material-ui/core";
import Navbar from './Components/Navbar';
import Mycard from './Components/Mycard';
import {getMatches} from './api/Api';
function App() {
const [matches,setMatches] = useState([]);

  useEffect(()=>{
    getMatches().then((data)=>{setMatches(data.matches);
    console.log(data.match);
  })
      .catch((error)=>alert("Could not Load Data"));
  },[]);

  return (
    <div className="App">
      <Navbar/>
    <Typography variant="h3" style={{marginTop:20}}>Welcome to Live Score App</Typography>
    <Grid container>
      <Grid sm="2">
      </Grid>
      <Grid sm="8">   
       {
        matches.map((match)=>(
          <Fragment key={match.unique_id}>
        {match.type =="Twenty20"?(<Mycard key={match.unique_id} match={match}/>):("")}
        </Fragment>
        ))}
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
