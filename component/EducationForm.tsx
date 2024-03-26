import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container } from '@mui/material';
import * as yup from 'yup';
import { getEducation, removeEducation, EducationDetails, EducationDetailsUpdate } from '../services/Education';
import styles from "./forms.module.css"
import { ToastContainer, toast } from 'react-toastify';

const validationSchema = yup.object({
    degree: yup.string().required('Degree is required'),
    school: yup.string().required('School is required'),
    grade: yup.string().required('Grade is required'),
    passingYear: yup.number().required('Passing year is required'),
});

interface FormData {
    degree: string,
    school: string,
    grade: string,
    passingYear: string,
    id: any
}

interface PropsInterface {
    handleNext: () => void
}




const EducationalForm = ({ handleNext }: PropsInterface) => {
    const [educationList, setEducationList] = useState<FormData[]>([]);
    const [selectedItem, setSelectedItem] = useState<FormData | null>(null);
    const [ID, setID] = useState('')


    const fetchData = async () => {
        try {
            const educationData = await getEducation();
            console.log(educationData);

            // Assuming educationData contains an array of education details
            if (Array.isArray(educationData)) {
                setEducationList(educationData);
            } else {
                console.log("Education data is not in the expected format");
            }
        } catch (error) {
            console.log("Error fetching education data:");
            console.log(error);
        }
    };

    const submitHandler = async (values: FormData) => {
        try {
            let res: any
            if (ID) {
                await EducationDetailsUpdate({ ...values }, ID)
                toast.success("Data Updated successfully");
            }
            else {
                await EducationDetails(values)
                toast.success("Data added successfully");
            }
            console.log(res);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }

    const formik = useFormik<FormData>({
        initialValues: {
            degree: '',
            school: '',
            grade: '',
            passingYear: '',
            id: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, action) => {
            submitHandler(values);
            action.resetForm();
        },
    });



    useEffect(() => {

        fetchData();
    }, []);


    const deleteHandler = async (id: any) => {
        console.log(id);
        try {
            const res = await removeEducation(id);
            toast.success("Data removed successfully");
            console.log(res);

            fetchData();
        } catch (error) {
            console.log("Delete error:", error);
            console.log("Failed to remove education!"); // Alert if deletion fails
        }
    };
    const updateHandler = async (data: FormData, id: any) => {
        setSelectedItem(data);
        formik.setValues(data);
        setID(id)
    }

    return (
        <Box className='parent'>
            <Container maxWidth='md'>
                <Box>
                    <ToastContainer />
                    <form onSubmit={formik.handleSubmit} className='formborder'>
                        <Grid container spacing={3} justifyContent="center" alignItems="center">
                            <Grid item sm={6} xs={12}>
                                <Box>
                                    <label htmlFor="degree" className='text'>degree</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="degree"
                                            name="degree"
                                            onChange={formik.handleChange}
                                            value={formik.values.degree}
                                            placeholder='Enter your degree'
                                        />
                                    </Box>
                                    {formik.errors.degree && formik.touched.degree && (
                                        <div className={styles.error}>{formik.errors.degree}</div>
                                    )}
                                </Box>

                            </Grid>

                            <Grid item sm={6} xs={12}>
                                <Box>
                                    <label htmlFor="school" className='text'>school</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="school"
                                            name="school"
                                            onChange={formik.handleChange}
                                            value={formik.values.school}
                                            placeholder='Enter your school/collage'
                                        />
                                    </Box>
                                    {formik.errors.school && formik.touched.school && (
                                        <div className={styles.error}>{formik.errors.school}</div>
                                    )}
                                </Box>

                            </Grid>


                            <Grid item sm={6} xs={12}>
                                <Box>
                                    <label htmlFor="grade" className='text'>Parsantage/Grade</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="grade"
                                            name="grade"
                                            onChange={formik.handleChange}
                                            value={formik.values.grade}
                                            placeholder='Enter your grade/percentage'
                                        />
                                    </Box>
                                    {formik.errors.grade && formik.touched.grade && (
                                        <div className={styles.error}>{formik.errors.grade}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item sm={6} xs={12}>

                                <Box>
                                    <label htmlFor="passingYear" className='text'>passingYear</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="passingYear"
                                            name="passingYear"
                                            onChange={formik.handleChange}
                                            value={formik.values.passingYear}
                                            placeholder='Enter your passingYear'
                                            type='number'
                                            min='1930'
                                            max='3000'
                                            
                                        />
                                    </Box>
                                    {formik.errors.passingYear && formik.touched.passingYear && (
                                        <div className={styles.error}>{formik.errors.passingYear}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={1} my={3}>
                                <Box>
                                    <button className={styles.button} type="submit">
                                        <span className={styles.button_hover}>Add</span>
                                    </button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
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
                {/* <Button onClick={() => handleNext()}>Next</Button> */}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>Degree</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>School</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>Grade</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>Passing Year</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center', maxWidth: '290px' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {educationList.map((edu, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ textAlign: 'center' }}>{edu.degree}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{edu.school}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{edu.grade}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{edu.passingYear}</TableCell>
                                    <TableCell>
                                        <button className={styles.remove_button} onClick={() => deleteHandler(edu.id)}>
                                            Remove
                                        </button>
                                        <button className={styles.remove_button} onClick={() => updateHandler(edu, edu.id)}>
                                            Update
                                        </button>

                                        {/* <Button onClick={() => deleteHandler(edu.id)}>Remove</Button> */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    )
}

export default EducationalForm;
