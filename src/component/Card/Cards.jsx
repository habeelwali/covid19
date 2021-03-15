import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth:780,
    
   
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div style={{display:'flex',justifyContent:'center',}}>
    <Card className={classes.root} variant="outlined" style={{marginRight:10,borderBottom:'10px solid rgba(0, 0,255,0.5)'}}  >
      <CardContent>
        
        
        <Typography className={classes.pos} color="textSecondary">
          Infacted
        </Typography>
        <Typography variant="body2" >
          <h1>230000</h1>
        </Typography>
        <Typography variant="body2" >
          <h3>Mon March 15 2021</h3>
        </Typography>
        <Typography variant="body2" >
         <p>Number of active cases of covid_19</p>
        </Typography>
      </CardContent>
      
    </Card>

<Card className={classes.root} variant="outlined" style={{marginRight:10,borderBottom:'10px solid rgba(86, 95, 32, 0.5)'}} >
<CardContent>
<Typography className={classes.pos} color="textSecondary">
          Recovered
        </Typography>
        <Typography variant="body2" >
          <h1>25680</h1>
        </Typography>
        <Typography variant="body2" >
          <h3>Mon March 15 2021</h3>
        </Typography>
        <Typography variant="body2" >
         <p>Number of recoveries from covid_19</p>
        </Typography>
      </CardContent>
      
</Card>

<Card className={classes.root} variant="outlined" style={{borderBottom:'10px solid red'}} >
<CardContent>
<Typography className={classes.pos} color="textSecondary">
          Deaths
        </Typography>
        <Typography variant="body2" >
          <h1>230000</h1>
        </Typography>
        <Typography variant="body2" >
          <h3>Mon March 15 2021</h3>
        </Typography>
        <Typography variant="body2" >
         <p>Number of deaths causes by covid_19</p>
        </Typography>
      </CardContent>
      
</Card>
</div>
  );
}
