import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/system";
import { Grid, MenuItem, TextField } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast,Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "2rem",
  p: 4,
};
const UpdateUser = ({ userUpdate, setUserUpdate, open, setOpen }) => {
    const handleClose = () => setOpen(false);
  const [countrylist, setCountryList] = useState([]);

  const handleInputs = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setUserUpdate({ ...userUpdate, [key]: value });
  };
  const getCountryList = async () => {
    const list = await axios.get("https://restcountries.com/v2/all");
    setCountryList(list.data);
  };
  const updateUser = async () => {
    console.log(userUpdate);
    try {
      const sendData = await axios.post(
        `${process.env.REACT_APP_API}update`,
        userUpdate
      );
      handleClose();
      toast.success("User Updated Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    getCountryList();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          maxWidth={"md"}
          component="form"
          noValidate
          autoComplete="off"
          style={style}
        >
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                required
                disabled
                onChange={handleInputs}
                fullWidth
                value={userUpdate.id}
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
                value={userUpdate.fname}
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
                value={userUpdate.lname}
                name="lname"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                required
                id="standard-required"
                label="Current Address"
                variant="standard"
                fullWidth
                onChange={handleInputs}
                margin="dense"
                value={userUpdate.address}
                name="address"
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <TextField
                required
                id="standard-required"
                label="Program"
                variant="standard"
                fullWidth
                select
                onChange={handleInputs}
                margin="dense"
                value={userUpdate.program}
                name="program"
              >
                <MenuItem key="Information Technology" value="Information Technology">
            Information Technology
                </MenuItem>
            <MenuItem key="Computer Science" value="Computer Science">
            Computer Science
                </MenuItem>
            <MenuItem key="Electronics & Communication" value="Electronics & Communication">
            Electronics & Communication
                </MenuItem>
            <MenuItem key="Civil Engineering" value="Civil Engineering">
            Civil Engineering
                </MenuItem></TextField>
            </Grid>
            <Grid item md={3} xs={6}>
              <TextField
                margin="dense"
                id="demo-customized-select"
                value={userUpdate.country}
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
                value={userUpdate.marital}
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
              <Button variant="contained" onClick={updateUser}>
                Update User
              </Button>
            </Grid>
          </Grid>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme="colored"
            transition={Zoom}
          />
        </Container>
      </Modal>
    </div>
  );
};

export default UpdateUser;
