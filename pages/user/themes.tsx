import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layouts/Dashboard/DashboardLayout";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { getThemes } from "../../services/themes";
import Image from "next/image";
import { useFormik } from "formik";
import { AddURL, checkURL, getURL } from "../../services/currentTheme";
import styles from "../../styles/user.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Theme {
  name: string;
  theme: string;
  id: string;
}
interface userTheme {
  slug: string;
  theme: string;
}

const Themes = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const [data, setData] = useState<userTheme>();
  const [open, setOpen] = React.useState(false);
  const [copyText, setCopyText] = useState<string>("copy");

  const getThemeId = (id: string) => {
    setSelectedTheme(id);
  };

  const addURL = async (values: any) => {
    try {
      if (values.slug !== data?.slug) {
        const checkSlug = await checkURLValidity(values);

        if (checkSlug) {
          await AddURL({ ...values, theme: selectedTheme });
          await fetchData();
          toast.success("URL added successfully"); // Success toast
        } else {
          toast.error("Invalid URL"); // Error toast
        }
      } else {
        await AddURL({ theme: selectedTheme });
        fetchData();
        toast.success("URL added successfully"); // Success toast
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkURLValidity = async (values) => {
    try {
      const res = await checkURL(values);
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const userThemes = await getThemes();
      setThemes(userThemes);
      const getThemeurl = await getURL();
      setData(getThemeurl.data.data);
      setSelectedTheme(getThemeurl?.data?.data?.theme);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      slug: data ? data.slug : "",
    },
    enableReinitialize: true,
    onSubmit: async (values, action) => {
      action.resetForm();
      addURL(values);
    },
  });

  const copyClick = () => {
    navigator.clipboard
      .writeText(`http://localhost:3000/${data?.slug}`)
      .then(() => {
        setCopyText("copied");
        setTimeout(() => setCopyText("copy"), 2000); // Reset text to 'copy' after 2 seconds
      })
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
    <Box className={styles.bg}>
      <DashboardLayout>
        <Box>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "500",
              color: "#fff",
              textTransform: "capitalize",
              margin: "20px 0px",
            }}>
            select theme
          </Typography>
          <ToastContainer />
          <Grid
            container
            spacing={3}
            justifyContent={"center"}
            sx={{ margin: 0, gap: "20px" }}>
            {themes.map((theme, index) => (
              <Box
                key={index}
                onClick={() => {
                  getThemeId(theme.id);
                  handleClickOpen();
                }}
                sx={{
                  bgcolor: "#2c2c2c",
                  p: 1,
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                style={{
                  border:
                    selectedTheme === theme.id
                      ? "4px solid green"
                      : "4px solid transparent",
                }}>
                <Grid item xs={6} sx={{ color: "#fff" }}>
                  <Image
                    src={`${process.env.API_BASE_URL}/images/${theme.theme}`}
                    alt="theme"
                    width={500}
                    height={400}
                    style={{ borderRadius: "10px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "19px",
                      textAlign: "center",
                      textTransform: "capitalize",
                      fontWeight: "600",
                      width: "500px",
                    }}>
                    {theme.name}
                  </Typography>
                </Grid>
              </Box>
            ))}
          </Grid>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            className="dialog">
            <Box className="mainbox">
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <button
                  className={styles.closebutton}
                  onClick={() => handleClose()}>
                  {" "}
                  <ClearIcon />
                </button>
              </Box>
              <DialogTitle>Generate / Check URL</DialogTitle>
              <DialogContent>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <p>http://localhost:3000/</p>
                  <form
                    onSubmit={formik.handleSubmit}
                    style={{ position: "relative" }}>
                    <input
                      type="text"
                      name="slug"
                      onChange={formik.handleChange}
                      value={formik.values.slug}
                      className={styles.input}
                    />
                    <Box
                      sx={{ position: "absolute", top: "10px", right: "10px" }}>
                      <Tooltip title={copyText}>
                        <Box className={styles.copybutton} onClick={copyClick}>
                          <ContentCopyIcon sx={{ color: "#fff" }} />
                        </Box>
                      </Tooltip>
                    </Box>
                  </form>
                </Box>
              </DialogContent>
              <DialogActions>
                <button
                  type="submit"
                  className={styles.submit_bottun}
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                  disabled={!formik.values.slug || formik.isSubmitting} // Disable if URL field is empty or form is submitting
                >
                  Check
                </button>
                <button
                  type="button"
                  className={styles.submit_bottun}
                  onClick={() => {
                    window.open(`http://localhost:3000/${data?.slug}`),
                      handleClose();
                  }}
                  disabled={!data?.slug || formik.isSubmitting} // Disable if no URL is generated or form is submitting
                >
                  Visit Your Site
                </button>
              </DialogActions>
            </Box>
          </Dialog>
        </Box>
      </DashboardLayout>
    </Box>
  );
};

export default Themes;
