import {
  Button,
  Checkbox,
  Container,
  Grid,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "./App.css";
import styled from "styled-components";

const Label = styled(Typography)`
  float: "right";
  margin-left: "24px";
  margin-right: "24px";
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Toolbar sx={{ borderBottom: "1px solid #8a8888" }}>
          <Typography sx={{ fontWeight: "600" }}>Create Table</Typography>
        </Toolbar>
        <Grid container sx={{ my: "15px" }} spacing={2}>
          <Grid
            container
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid xs={4}>
              <Label>Layout:</Label>
            </Grid>
            <Grid xs={8}>
              <TextField
                fullWidth
                sx={{ maxWidth: "330px", float: "left" }}
                select
                placeholder="Select Layout"
                value={0}
                size="small"
              >
                <MenuItem sx={{ color: "#989696" }} value="0">
                  Select Layout
                </MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid xs={4}>
              <Label>Name:</Label>
            </Grid>
            <Grid xs={8}>
              <TextField
                fullWidth
                sx={{ maxWidth: "330px", float: "left" }}
                placeholder="Enter Name"
                size="small"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid xs={4}>
              <Label>Capacity:</Label>
            </Grid>
            <Grid xs={8}>
              <TextField
                fullWidth
                sx={{ maxWidth: "330px", float: "left" }}
                placeholder="Enter number of capacity"
                size="small"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid xs={4}>
              <Label>Status:</Label>
            </Grid>
            <Grid xs={8}>
              <Checkbox sx={{ float: "left" }} />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid xs={4}>
              <Label>Image:</Label>
            </Grid>
            <Grid xs={8}>
              <input type="file" style={{ float: "left" }} />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                m: "5px",
                backgroundColor: "#0B2343",
                "&:hover": {
                  backgroundColor: "#0d192a",
                },
              }}
              disableElevation
            >
              Create Table
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                m: "5px",
                backgroundColor: "#E74A3B",
                "&:hover": {
                  backgroundColor: "#ac3f35",
                },
              }}
              disableElevation
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
