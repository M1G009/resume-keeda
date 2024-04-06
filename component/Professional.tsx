import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import * as yup from "yup";
import { UserProfession, getProfession } from "../services/Profession";
import styles from "./forms.module.css";
import { ToastContainer, toast } from "react-toastify";

const validationSchema = yup.object({
  Profession: yup.string().required("Profession is required"),
  Qualification: yup.string().required("Qualification is required"),

  yearsOfExperience: yup.number().required("yearsOfExperience is required"),
  Object: yup
    .string()
    .required("object is required")
    .test(
      "word-count",
      "Object must contain between 100 and 200 words",
      (value) => {
        if (!value) return false;
        const wordCount = value.trim().split(/\s+/).length;
        return wordCount >= 20 && wordCount <= 200;
      }
    ),
});

interface formdata {
  Profession: string;
  Qualification: string;
  languageKnown: string;
  yearsOfExperience: string;
  Object: string;
  linkedinurl: string;
  stackoverflowurl: string;
  github: string;
  dribble: string;
  behance: string;
}

interface propsInterface {
  handleNext: () => void;
}

const Professional = ({ handleNext }: propsInterface) => {
  const [id, setid] = useState<string>();
  const [data, setData] = useState<formdata>();
  const [remainingWords, setRemainingWords] = useState(70); // Initialize with the maximum word count

  const updateWordCount = (text) => {
    const wordCount = text.trim().split(/\s+/).length;
    const remainingWords = 70 - wordCount;
    // Update state or perform any other action with the word count
    setRemainingWords(remainingWords);
  };

  const submitHandler = async (values) => {
    try {
      if (id) {
        const res = await UserProfession({ ...values }, id);
        toast.success("Data updated successfully");
      } else {
        const res = await UserProfession({ ...values });
        toast.success("Data submitted successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      const userData: any = await getProfession();
      setData(userData.data);
      setid(userData.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Reinitialize = data ? true : false;

  const formik = useFormik<formdata>({
    initialValues: {
      Profession: data ? data.Profession : "",
      Qualification: data ? data.Qualification : "",
      languageKnown: data ? data.languageKnown : "",
      yearsOfExperience: data ? data.yearsOfExperience : "",
      Object: data ? data.Object : "",
      linkedinurl: data ? data.linkedinurl : "",
      stackoverflowurl: data ? data.stackoverflowurl : "",
      github: data ? data.github : "",
      dribble: data ? data.dribble : "",
      behance: data ? data.behance : "",
    },

    enableReinitialize: Reinitialize,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });

  return (
    <div className="parent">
      <Container maxWidth="md">
        <ToastContainer />
        <form onSubmit={formik.handleSubmit} className="formborder">
          <Grid container spacing={3}>
            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="Profession" className="text">
                  Profession <span style={{ color: "red" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="Profession"
                    name="Profession"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Profession}
                    placeholder="Enter Profession"
                  />
                </Box>
                {formik.errors.Profession && formik.touched.Profession && (
                  <div className={styles.error}>{formik.errors.Profession}</div>
                )}
              </Box>
            </Grid>

            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="Qualification" className="text">
                  Qualification <span style={{ color: "red" }}>*</span>{" "}
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="Qualification"
                    name="Qualification"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.Qualification}
                    placeholder="Enter Qualification"
                  />
                </Box>
                {formik.errors.Qualification &&
                  formik.touched.Qualification && (
                    <div className={styles.error}>
                      {formik.errors.Qualification}
                    </div>
                  )}
              </Box>
            </Grid>

            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="languageKnown" className="text">
                  languageKnown <span style={{ color: "green" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="languageKnown"
                    name="languageKnown"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.languageKnown}
                    placeholder="Enter languageKnown"
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="yearsOfExperience" className="text">
                  yearsOfExperience <span style={{ color: "red" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.yearsOfExperience}
                    placeholder="Enter years Of Experience"
                  />
                </Box>
                {formik.errors.yearsOfExperience &&
                  formik.touched.yearsOfExperience && (
                    <div className={styles.error}>
                      {formik.errors.yearsOfExperience}
                    </div>
                  )}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <label htmlFor="object" className="text">
                  Object <span style={{ color: "red" }}>*</span>
                </label>
                <Box sx={{ position: "relative" }}>
                  {/* <Box sx={{ display: remainingWords <= 0 ? 'none' : 'block', position: 'absolute', right: 10, bottom: 0, zIndex: '999', color: 'green' }}>
                                        <p>Minimum words: {remainingWords}</p>
                                    </Box> */}
                  <textarea
                    className={styles.textarea}
                    id="Object"
                    name="Object"
                    rows={7}
                    onChange={(e) => {
                      formik.handleChange(e);
                      updateWordCount(e.target.value);
                    }}
                    value={formik.values.Object}
                    placeholder="Enter Your object"
                  />
                  {formik.errors.Object && formik.touched.Object && (
                    <div className={styles.error}>{formik.errors.Object}</div>
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="linkedinurl" className="text">
                  Linkedin Account <span style={{ color: "green" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="linkedinurl"
                    name="linkedinurl"
                    type="url"
                    onChange={formik.handleChange}
                    value={formik.values.linkedinurl}
                    placeholder="Enter Linkedin url"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="stackoverflowurl" className="text">
                  Stackoverflow Account{" "}
                  <span style={{ color: "green" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="stackoverflowurl"
                    name="stackoverflowurl"
                    type="url"
                    onChange={formik.handleChange}
                    value={formik.values.stackoverflowurl}
                    placeholder="Enter Stackoverflow url"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="github" className="text">
                  Github Account <span style={{ color: "green" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="github"
                    name="github"
                    type="url"
                    onChange={formik.handleChange}
                    value={formik.values.github}
                    placeholder="Enter Github Account url"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="dribble" className="text">
                  Dribble Account <span style={{ color: "green" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="dribble"
                    name="dribble"
                    type="url"
                    onChange={formik.handleChange}
                    value={formik.values.dribble}
                    placeholder="Enter Dribble Account url"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box>
                <label htmlFor="behance" className="text">
                  Behance Account <span style={{ color: "green" }}>*</span>
                </label>
                <Box>
                  <input
                    className={styles.input}
                    id="behance"
                    name="behance"
                    type="url"
                    onChange={formik.handleChange}
                    value={formik.values.behance}
                    placeholder="Enter Behance Account url"
                  />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
              <Box>
                {Reinitialize ? (
                  <button className={styles.button} type="submit">
                    <span className={styles.button_hover}>Update</span>
                  </button>
                ) : (
                  <button className={styles.button} type="submit">
                    <span className={styles.button_hover}>Submit</span>
                  </button>
                )}
                {/* <button style={{ minWidth: 150 }} className={styles.button} type="submit">
                                    <span className={styles.button_hover}>Submit</span>
                                </button> */}
              </Box>
              <Box>
                <button className={styles.cta} onClick={() => handleNext()}>
                  <span className={styles.span}>NEXT</span>
                  <span className={styles.second}>
                    <svg
                      width="50px"
                      height="20px"
                      viewBox="0 0 66 43"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg">
                      <g
                        id="arrow"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd">
                        <path
                          className={styles.one}
                          d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                          fill="#FFFFFF"></path>
                        <path
                          className={styles.two}
                          d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                          fill="#FFFFFF"></path>
                        <path
                          className={styles.three}
                          d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                          fill="#FFFFFF"></path>
                      </g>
                    </svg>
                  </span>
                </button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Professional;
