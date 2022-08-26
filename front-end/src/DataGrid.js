/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */

import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup, } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Input, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@material-ui/core/Avatar';



const columns = [
  {
    field: 'Avatar', headerName:'' width: 120,
    field: 'Avatar', headerName:'' width: 120,
    renderCell: (params) => {
      console.log(params)
      return (
        <>
          <Avatar src={"profile.bar.jpeg"} />
        </>
      );
    }
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 150,
  },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
    editable: true,
    filterable: true
  },
  { field: 'sex', headerName: 'Sex', width: 130, filterable: true },
  {
    field: 'Place_DateofBirth', headerName: 'Place_DateofBirth', width: 150, filterable: true
  },
  {
    field: 'Groups',
    headerName: 'Groups',
    width: 250,
    filterable: true
  },

];

const DataTable = () => {
  const [Rows, SetRowData] = useState([]);
  useEffect(() => {
    Fetch();
  }, []);
  //Fetching Data from the Json Server using the Fetch Method

  const Fetch = async () => {
    const res = await fetch("http://localhost:8000/rows")
      .then((data) => data.json())
      .then((data) => SetRowData(data))
  }
  return (
    <Box sx={{ width: "1350px", padding: "30px", margin: "30px" }}>
      <Grid container rowSpacing='6' columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} >
          <InputLabel />
          <SearchIcon style={{ marginBottom: "-10px" }} />
          <Input type={"search"} name="search" placeholder='SEARCH FOR NAME' />
        </Grid>
        <Grid item xs={2}>
          <Typography variant='p'><PersonIcon style={{ marginBottom: "-8px", paddingTop: "8px" }} />125 STUDENTS</Typography>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" style={{ color: "white", backgroundColor: "cyan", marginBottom: '15px' }} > <EditOutlinedIcon />new</Button>
        </Grid>
        <Grid item xs={2}>
          <ButtonGroup variant="contained" aria-label="outlined  button group">
            <Button style={{ backgroundColor: "lightgrey", color: "orange" }}>1</Button>
            <Button style={{ backgroundColor: "lightgrey", color: "white" }}>2</Button>
            <Button style={{ backgroundColor: "lightgrey", color: "white" }}>3</Button>
          </ButtonGroup>

        </Grid>
        <Grid item xs={3} >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard" style={{ color: "black" }}>
            <FormLabel component="legend" style={{ color: "grey" }}>FILTER FOR STUDY GROUP</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox name="gilad" style={{ color: "orange" }} />
                }
                label="Typography"
              />
              <FormControlLabel
                control={
                  <Checkbox name="jason" style={{ color: "orange" }} />
                }
                label="Chemistry Capital"
              />
              <FormControlLabel
                control={
                  <Checkbox name="antoine" style={{ color: "orange" }} />
                }
                label="Biologist"
              />
              <FormControlLabel
                control={
                  <Checkbox name="antoine" style={{ color: "orange" }} />
                }
                label="Black magicicans"
              />
              <FormControlLabel
                control={
                  <Checkbox name="antoine" style={{ color: "orange" }} />
                }
                label="Lame gamer boys"
              />
            </FormGroup>

          </FormControl>

        </Grid>
        <Grid item xs={9} >
          <DataGrid
            style={{ height: 400, width: "100%", textAlign: 'center' }}
            rows={Rows}
            columns={columns}
            pageSize={[5]}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />

        </Grid>

      </Grid>
    </Box >
  );
}
export default DataTable
