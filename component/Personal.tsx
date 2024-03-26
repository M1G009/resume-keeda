import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import {  Container, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
import * as yup from 'yup';
import { Personaldetails, getPersonaldetails } from '../services/Personal';
import styles from "./forms.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = yup.object({
    userProfileImage: yup.string().required('Image URL is required'),
    mobileNumber: yup.string().required('Mobile Number is required'),
    DOB: yup.string().required('Date of Birth is required'),
    gender: yup.string().required('Gender is required'),
    Address: yup.string().required('Address is required'),
    pincode: yup.string().required('Pincode is required'),
});


interface FormData {
    userProfileImage: File | null;
    mobileNumber: string;
    DOB: string;
    gender: string;
    Address: string;
    pincode: string;
}

interface PropsInterface {
    handleNext: () => void;
}

const Personal: React.FC<PropsInterface> = ({ handleNext }) => {

    const [data, setData] = useState<FormData>()
    const [id, setid] = useState<string>()


    const submitHandler = async (values) => {
        try {
            if (id) {
                // If an ID is available, call Personaldetails with the ID
                const res = await Personaldetails({ ...values }, id);
                toast.success("Data updated successfully");
                console.log(res);
            } else {
                // If no ID is available, call Personaldetails without the ID
                const res = await Personaldetails({ ...values });
                toast.success("Data submitted successfully");
                console.log(res);
            }


            // handleNext();
        } catch (error) {
            toast.warning("there is something worng");
            console.log(error);
        }
    };



    const fetchData = async () => {
        try {
            const userData: any = await getPersonaldetails();
            setData(userData);
            setid(userData.id)

        } catch (error) {
            console.log("Error fetching data:");
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

    const Reinitialize = data ? true : false;

    let dateStr: string = data?.DOB
    let formattedDate: string = ''
    if (dateStr) {
        let date = new Date(dateStr);
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0'); // January is 0!
        let year = date.getFullYear();

        formattedDate = `${year}-${month}-${day}`; // Assign formatted date to the variable
        console.log(formattedDate);

    }

    const formik = useFormik<FormData>({
        initialValues: {
            userProfileImage: data ? data.userProfileImage : null,
            mobileNumber: data ? data.mobileNumber : '',
            DOB: data ? formattedDate : '',
            gender: data ? data.gender : '',
            Address: data ? data.Address : '',
            pincode: data ? data.pincode : '',
        },
        enableReinitialize: Reinitialize,
        validationSchema: validationSchema,

        onSubmit: (values) => {
            submitHandler(values)
        },
    });

    return (
        <Box className='parent' mt={4}>
            <Container maxWidth='md'>
                <Box>
                    <ToastContainer />
                    <form onSubmit={formik.handleSubmit} className='formborder'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <label htmlFor="userProfileImage" className='text'>User Profile Image</label>
                                    <Box>
                                        <input className={styles.input}
                                            type="file"
                                            onChange={(event) => {
                                                formik.setFieldValue('userProfileImage', event?.target?.files ? event.target.files[0] : null);
                                            }}
                                        />
                                    </Box>
                                    {formik.errors.userProfileImage && formik.touched.userProfileImage && (
                                        <div className={styles.error}>{`${formik.errors.userProfileImage}`}</div>
                                    )}

                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <label htmlFor="mobileNumber" className='text'>Mobile Number</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="mobileNumber"
                                            name="mobileNumber"
                                            type="number"
                                            onChange={formik.handleChange}
                                            value={formik.values.mobileNumber}
                                            placeholder='Enter Mobile Number'
                                        />
                                    </Box>
                                    {formik.errors.mobileNumber && formik.touched.mobileNumber && (
                                        <div className={styles.error}>{formik.errors.mobileNumber}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Box>
                                    <label htmlFor="DOB" className='text'>Date of Birth</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="DOB"
                                            name="DOB"
                                            type="date"
                                            onChange={formik.handleChange}
                                            value={formik.values.DOB}
                                        />
                                    </Box>
                                    {formik.errors.DOB && formik.touched.DOB && (
                                        <div className={styles.error}>{formik.errors.DOB}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <label className='text'>Gender</label>
                                    <RadioGroup
                                        // className={styles.input}
                                        sx={{ color: 'white' }}
                                        name="gender"
                                        row
                                        onChange={formik.handleChange}
                                        value={formik.values.gender}

                                    >
                                        <FormControlLabel value="Female" control={<Radio sx={{ color: 'white' }} />} label="Female" />
                                        <FormControlLabel value="Male" control={<Radio sx={{ color: 'white' }} />} label="Male" />
                                    </RadioGroup>
                                    {formik.errors.gender && formik.touched.gender && (
                                        <div className={styles.error}>{formik.errors.gender}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box>
                                    <label htmlFor="pincode" className='text'>Pincode</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="pincode"
                                            name="pincode"
                                            type="number"
                                            onChange={formik.handleChange}
                                            value={formik.values.pincode}
                                            placeholder='Enter your pincode'
                                        />
                                    </Box>
                                    {formik.errors.pincode && formik.touched.pincode && (
                                        <div className={styles.error}>{formik.errors.pincode}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box>
                                    <label htmlFor="Address" className='text'>Address</label>
                                    <Box>
                                        <textarea
                                            className={styles.textarea}
                                            id="Address"
                                            name="Address"
                                            rows={4}
                                            onChange={formik.handleChange}
                                            value={formik.values.Address}
                                            placeholder='Enter Your Address'
                                        />
                                    </Box>
                                    {formik.errors.Address && formik.touched.Address && (
                                        <div className={styles.error}>{formik.errors.Address}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                                <Box>
                                    {
                                        Reinitialize ?
                                            <button  className={styles.button} type="submit">
                                                <span className={styles.button_hover}>Update</span>
                                            </button>
                                            :
                                            <button  className={styles.button} type="submit">
                                                <span className={styles.button_hover}>Submit</span>
                                            </button>

                                    }
                                </Box>
                                <Box>
                                    <button className={styles.cta} onClick={() => handleNext()}>
                                        <span className={styles.span}>NEXT</span>
                                        <span className={styles.second}>
                                            <svg width="50px" height="20px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <path className={styles.one} d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                                    <path className={styles.two} d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                                                    <path className={styles.three} d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </button>
                                </Box>
                            </Grid>

                          
                        </Grid>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default Personal;
