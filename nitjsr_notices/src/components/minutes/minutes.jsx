import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Minutes = ({ minutes }) => {
  return (
    <Grid container spacing={2}>
      {minutes.map((m) => (
        <Grid item xs={4} md={2} lg={2} key={m.name}>
          <Button
            variant="outlined"
            href={m.link}
            sx={{
              borderColor: "#000",
              color: "#000",
              padding: "1% 1% 1% 3%",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            }}
          >
            {m.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Minutes;
