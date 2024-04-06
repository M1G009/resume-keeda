import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getPersonaldetails } from "../../../services/Personal";

interface AboutProps {
  personal: any;
  professionalDetail: any;
  user: any;
}

const About: React.FC<AboutProps> = ({
  personal,
  professionalDetail,
  user,
}) => {
  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [profession, setProfession] = useState<String>(
    professionalDetail.Profession
  );
  const [object, setObbject] = useState<String>(professionalDetail.Object);
  const [userFirstName, setUserFirstName] = useState<string>(user.firstName);
  const [userLastName, setUserLastName] = useState<string>(user.lastName);
  const [userMail, setUserMail] = useState<string>(user.email);
  const [userAddress, setUserAddress] = useState<string>(personal.Address);
  const [userDOB, setUserDOB] = useState<string>(personal.DOB);
  const [userImage, setUserImage] = useState<string>(personal.userProfileImage);



  const calculateAge = (birthdate: string): number | undefined => {
    if (!birthdate) return undefined;

    const dob = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // If the birthday hasn't occurred yet this year, subtract one year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  };

  // Usage
  const age = calculateAge(userDOB);

  return (
    <Box id="about" sx={{ padding: "100px 0 0" }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Box sx={{ mt: 2 }}>
            <Box
              sx={{ textAlign: "center", mb: isSmallScreen ? "40px" : "80px" }}>
              <Typography variant="subtitle1" sx={{ color: "#9f9f9f" }}>
                Get to know me
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                About Me
              </Typography>
              <Box className="animated-bar"></Box>
            </Box>
            <Grid container spacing={2} alignItems={"center"}>
              <Grid item xs={12} md={5}>
                <Box sx={{ textAlign: isSmallScreen ? "center" : "left" }}>
                  <Box sx={{ maxWidth: "100%", height: "auto" }}>
                    <Image
                      src={`${process.env.API_BASE_URL}/images/` + userImage}
                      alt="Information Image"
                      width={450}
                      height={500}
                      className="image"></Image>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7} sx={{ p: isSmallScreen ? 2 : 0 }}>
                <Box>
                  <Typography variant="h4" sx={{ color: "#009e66", pb: 2 }}>
                    Who am i ?
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      fontSize: isSmallScreen ? "24px" : "32px",
                      pb: 2,
                    }}>
                    I'm {userFirstName} {userLastName} {profession}
                  </Typography>
                  <Typography
                    component="p"
                    variant="subtitle1"
                    sx={{ color: "#9f9f9f" }}>
                    {object}
                  </Typography>
                  <Divider variant="middle" />
                  <Grid container sx={{ mb: 4 }}>
                    <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                      <Typography sx={{ color: "#dadada" }}>
                        Name :{" "}
                        <span className="text-light ml-5">
                          {" "}
                          {userFirstName} {userLastName}
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                      <Typography sx={{ color: "#dadada" }}>
                        Email :{" "}
                        <span className="text-light ml-5">
                          <Link href=""> {userMail}</Link>{" "}
                        </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                      <Typography sx={{ color: "#dadada" }}>
                        Age : <span className="text-light ml-5"> {age} </span>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                      <Typography sx={{ color: "#dadada" }}>
                        From :{" "}
                        <span className="text-light ml-5"> {userAddress}</span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default About;
