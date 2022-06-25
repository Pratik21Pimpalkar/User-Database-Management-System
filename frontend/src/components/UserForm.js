import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Grid, MenuItem } from "@mui/material";
import { Container } from "@mui/system";

export default function UserForm() {
  const [countrylist, setCountryList] = useState([]);
  const [userData, setUserData] = useState({
    id: "",
    fname: "",
    lname: "",
    address: "",
    program: "",
    marital: "",
    country: "",
  });
  const style = {
    padding: "2rem",
    backgroundColor: "",
  };
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
        `${process.env.REACT_APP_API}register`,
        userData
      );
      setUserData({
        id: "",
        fname: "",
        lname: "",
        address: "",
        program: "",
        marital: "",
        country: "",
      });
      toast.success("User Register Successfully.");
    } catch (error) {
      console.log(error);
      toast.warn(error.response.data);
    }
  };
  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <Container
      maxWidth={"lg"}
      style={style}
      component="form"
      noValidate
      autoComplete="off"
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
        transition={Zoom}
      />
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={4} xs={12}>
          <TextField
            required
            onChange={handleInputs}
            color="secondary"
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
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
            color="secondary"
            fullWidth
            margin="dense"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
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
            color="secondary"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
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
        <Grid item md={3} xs={12}>
          <TextField
            color="secondary"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
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
        <Grid item md={3} xs={4}>
          <TextField
            color="secondary"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
            id="standard-required"
            label="Program"
            variant="standard"
            fullWidth
            onChange={handleInputs}
            margin="dense"
            value={userData.program}
            name="program"
            select
          >
            <MenuItem
              key="Information Technology"
              value="Information Technology"
            >
              Information Technology
            </MenuItem>
            <MenuItem key="Computer Science" value="Computer Science">
              Computer Science
            </MenuItem>
            <MenuItem
              key="Electronics & Communication"
              value="Electronics & Communication"
            >
              Electronics & Communication
            </MenuItem>
            <MenuItem key="Civil Engineering" value="Civil Engineering">
              Civil Engineering
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item md={3} xs={4}>
          <TextField
            color="secondary"
            margin="dense"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
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

        <Grid item md={3} xs={4}>
          <TextField
            color="secondary"
            margin="dense"
            id="demo-customized-select"
            onChange={handleInputs}
            value={userData.marital}
            select
            label="Marital Status"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "white" },
              },
              "& .MuiInputLabel-root": { color: "white" },
              "& .Mui-focused": { color: "white" },
              "& .MuiInput-underline:before": { borderBottomColor: "white" },
              "& .MuiInput-underline:after": { borderBottomColor: "white" },
              "& .MuiInput-underline:hover:before": {
                borderBottomColor: "white",
              },
            }}
            fullWidth
            variant="standard"
            name="marital"
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            style={{     background: "#3a135b",
              color: "#ffd7fe", }}
            onClick={registerUser}
          >
            Register User
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
