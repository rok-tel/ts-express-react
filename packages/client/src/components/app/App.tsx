import React , { useState } from 'react';
import { Grid, TextField, Fab } from '@material-ui/core';

import { CloudDownloadRounded } from '@material-ui/icons';

import { App_Name } from '@my-app/common';

import './App.css';

export default function App() {
  const [apiResponse, setApiResponse] = useState("");
  
  const onCallApi = async () => {
    try {
      const response = await fetch('/api', {
        method: "GET",
      });
      const text = await response.text();
      console.log(text);
      setApiResponse(text);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  return (
    <div className="App">
      <Grid container spacing={6} justifyContent="center" direction="column">
        <Grid item> 
          {`Client App Name - ${ App_Name } `}
        </Grid>
        <Grid item> 
          <Fab variant="extended" color="primary" onClick={onCallApi}>
            <CloudDownloadRounded className="icon"/>
            Call API
          </Fab>
        </Grid>
        {apiResponse &&
          <Grid item> 
            {`Server Response - ${ apiResponse } `}
          </Grid>
        }
      </Grid>
    </div>
  );
}
