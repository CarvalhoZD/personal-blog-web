import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Typography, Grid } from "@material-ui/core";
import { Box } from "@mui/material";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                Me siga nas redes sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://github.com/CarvalhoZD"
                target="_blank"
              >
                <GitHubIcon style={{ fontSize: 50, color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/carvalhoo_/"
                target="_blank"
              >
                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/mauriciocarvalhojb/"
                target="_blank"
              >
                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                style={{ color: "white" }}
              >
                © 2022 Copyright: Mauricio Carvalho
              </Typography>
            </Box>
            <Box>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;