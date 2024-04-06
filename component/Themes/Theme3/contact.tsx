import { Box, Container, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import styles from "./theme3.module.css";
import { getPersonaldetails } from "../../../services/Personal";

const Contact = ({ personal, user }: any) => {
  const [userMail, setUserMail] = useState<string>(user.email);
  const [userAddress, setUserAddress] = useState<string>(personal.Address);
  const [userMobile, setUserMobile] = useState<string>(personal.mobileNumber);
  const fetchData = async () => {
    try {
      const userData: any = await getPersonaldetails();
      setUserMail(userData.userId.email);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box id="contact" sx={{ pt: 4, pb: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: { md: 10, sm: 4, xs: 2 },
            mb: { md: 5, sm: 3, xs: 2 },
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "3px solid #FFFFFF1A",
              borderRadius: "30px",
              padding: "5px 20px",
            }}>
            <CallIcon />
            <Typography
              variant="body1"
              color="#fff"
              textTransform={"uppercase"}>
              Contact me
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="h4"
          color="initial"
          sx={{ textAlign: "center", mb: 5 }}>
          Let's Get <span style={{ color: "#28E98C" }}>in Touch!</span>
        </Typography>

        <Grid container spacing={3}>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={styles.contactBox}>
              <Box className={styles.iconbg}>
                <PhoneIcon sx={{ color: "#000" }} />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  color: "#DDDDDD",
                }}>
                +91 {userMobile}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={styles.contactBox}>
              <Box className={styles.iconbg}>
                <EmailIcon sx={{ color: "#000" }} />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  color: "#DDDDDD",
                }}>
                {userMail}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={styles.contactBox}>
              <Box className={styles.iconbg}>
                <PlaceIcon sx={{ color: "#000" }} />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  color: "#DDDDDD",
                }}>
                {userAddress}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
