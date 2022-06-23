import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button, Grid, MenuItem } from "@mui/material";
import { Container } from "@mui/system";

export default function UserForm() {
  const [countrylist, setCountryList] = useState([]);
  const [userData, setUserData] = useState({
    id: "",
    fname: "",
    lname: "",
    address: "",
    marital: "",
    country: "",
  });

  const handleInputs = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setUserData({ ...userData, [key]: value });
  };
  const getCountryList = async () => {
    const list = await axios.get("https://restcountries.com/v2/all");
    setCountryList(list.data);
  };
  const registerUser = async () => {
    try {
      const sendData = await axios.post(
        `http://localhost:8000/register`,
        userData
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <Container maxWidth={"lg"} component="form" noValidate autoComplete="off">
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <TextField
            required
            onChange={handleInputs}
            fullWidth
            value={userData.id}
            margin="dense"
            id="standard-required"
            label="Student's Id"
            variant="standard"
            name="id"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            fullWidth
            margin="dense"
            onChange={handleInputs}
            required
            value={userData.fname}
            id="standard-required"
            label="First Name"
            variant="standard"
            name="fname"
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <TextField
            required
            margin="dense"
            fullWidth
            onChange={handleInputs}
            id="standard-required"
            label="Last Name"
            variant="standard"
            value={userData.lname}
            name="lname"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            required
            id="standard-required"
            label="Current Address"
            variant="standard"
            fullWidth
            onChange={handleInputs}
            margin="dense"
            value={userData.address}
            name="address"
          />
        </Grid>
        <Grid item md={3} xs={6}>
          <TextField
            margin="dense"
            id="demo-customized-select"
            value={userData.country}
            onChange={handleInputs}
            select
            label="Country"
            fullWidth
            variant="standard"
            name="country"
          >
            {countrylist.map((option) => {
              return (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              );
            })}
          </TextField>
        </Grid>

        <Grid item md={3} xs={6}>
          <TextField
            margin="dense"
            id="demo-customized-select"
            onChange={handleInputs}
            value={userData.marital}
            select
            label="Marital Status"
            fullWidth
            variant="standard"
            name="marital"
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={registerUser}>
            Register User
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
