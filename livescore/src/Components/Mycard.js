import {Fragment, useState} from 'react';
import { Button,CardActions,Card,CardContent,
    Typography,Grid, Dialog, DialogContent, 
    DialogActions,DialogTitle,DialogContentText } from '@material-ui/core';
import React from 'react';
import { getMatcheDetail } from '../api/Api';
const Mycard=({match})=>{
    const[detail,setDetail] =useState({});
    const[open,setOpen]= useState(false);

    const handleClick=(id)=>{
        getMatcheDetail(id).then(data=>{console.log('Match data',data)
    setDetail(data);
        handleOpen()
})
.catch(error=>console.log(error));
    }
    const getMatchCart =()=>{
        return (
            <Card style={{margin:20}}>
                <CardContent>  
                            <Grid container justify='center' alignItems="center" spacing={4}>
        <Grid item ><Typography variant="h5">{match["team-1"]}</Typography></Grid>
                                <Grid item><img style={{width:85}} src={require("../img/vs.png")}/></Grid>
        <Grid item><Typography variant="h5">{match["team-2"]}</Typography></Grid>
                            </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify='center'>
                    <Button onClick={()=>{
                        handleClick(match.unique_id);
                    }} variant='contained' color='primary'>
                        Show Details
                    </Button>
                    <Button  style={{margin:5}} variant='contained' color='primary'>
                        Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    };

    const handleClose=()=>{
        setOpen(false);
    }
    const handleOpen=()=>
    {
        setOpen(true);
    }
    const getDialog=()=>(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{'Match Detail ..'}</DialogTitle>
<DialogContent >
    <DialogContentText id="alert -dialog-description">
    <Typography>{detail.stat}</Typography>
    <Typography>
        match<span style={{fontStyle:"italic",fontwidth:'bold'}}>{detail.matchStarted ? "Started":"still not started"}{" "}</span>
        </Typography>
    <Typography >
    Score
    <span style={{fontStyle:"italic",fontwidth:'bold'}}>{detail.score}</span>
    </Typography>
    </DialogContentText>
</DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary" autofocus> close</Button>
        </DialogActions>
        </Dialog>
    )
    return (
        <Fragment>
        {getMatchCart()}
        {getDialog()}
        </Fragment>
        );
};

export default Mycard;