import React from 'react'
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { RegistrationForm, Form } from './RegistrationForm.jsx';


import hwv from './hwc.png'



const initialValues = {
    id: 0,
    FullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    hospital: '',
    hireDate: new Date(),


}
export const Registration = () => {



    const { values,
        setValues,
        handleInputChange } = RegistrationForm(initialValues);



    return (


        <Form>
            
            <Grid container style={{display:'flex'}}>
                <Grid item xs={6}>
                <h1>Registration Form</h1>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        name="FullName"

                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="Mobile"
                        name="mobile"

                        onChange={handleInputChange}
                    />
                    <TextField
                        variant="outlined"
                        label="City"
                        name="city"

                        onChange={handleInputChange}
                    />
                
               
                    <FormControl>
                        <FormLabel>Gender </FormLabel>
                        <RadioGroup row
                            name="gender"
                            onChange={handleInputChange}

                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <TextField rows
                        variant="outlined"
                        label="Nearest Hospital"
                        name="city"

                        onChange={handleInputChange}
                    />
                    <TextField rows
                        variant="outlined"
                        
                        name="birthday"
                        type="date"
                        

                        onChange={handleInputChange}
                    />


                  <Button style={{marginTop:'10px',marginLeft:'650px'}} variant="contained" color="secondary" onClick={() => { alert('you have sussicessfully apply for covid19 vaccine') }}>Submit</Button>
                   
                   
                </Grid>
                
                <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <img style={{maxWidth:'570px',backgroundColor:'#F8F8F8',marginTop:'0px'}} src={hwv}/>
      </Container>
    </React.Fragment>


            </Grid>
        </Form>

    )
}
