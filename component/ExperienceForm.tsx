import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as yup from 'yup';
import { getExperienceDetails, ExperienceDetails, removeExperience, ExperienceDetailsUpdate } from '../services/Experience';
import styles from './forms.module.css'
import { ToastContainer, toast } from 'react-toastify';

const validationSchema = yup.object({
    companyName: yup.string().required('Company Name is required'),
    title: yup.string().required('School is required'),
    startDate: yup.string().required('Start Date is required'),
    endDate: yup.string().required('End Date is required'),
    description: yup.string().required('Description is required'),
});

interface FormData {
    companyName: string,
    title: string,
    startDate: string,
    endDate: string,
    description: string,
    id: any
}

interface PropsInterface {
    handleNext: () => void
}

const ExperienceForm = ({ handleNext }: PropsInterface) => {

    const [data, setData] = useState<FormData[]>([]);
    const [selectedItem, setSelectedItem] = useState<FormData | null>(null);
    const [ID, setID] = useState('')

    const fetchData = async () => {
        try {
            const experienceData = await getExperienceDetails();
            console.log(experienceData);

            // Assuming experienceData contains an array of education details
            if (Array.isArray(experienceData)) {
                setData(experienceData);
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
            let res: any;
            if (ID) {
                res = await ExperienceDetailsUpdate({ ...values }, ID);
                toast.success("Data updated successfully");
            } else {
                res = await ExperienceDetails(values);
                toast.success("Data added successfully");
            }

            fetchData();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const formik = useFormik<FormData>({
        initialValues: {
            companyName: '',
            title: '',
            startDate: '',
            endDate: '',
            description: '',
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
            await removeExperience(id);
            toast.success("Data removed successfully");
            await fetchData();
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
                <ToastContainer />

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <form onSubmit={formik.handleSubmit} className='formborder'>
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={6}>
                                <Box>
                                    <label htmlFor="companyName" className='text' >Company Name</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="companyName"
                                            name="companyName"
                                            onChange={formik.handleChange}
                                            value={formik.values.companyName}
                                            placeholder='Enter your companyName'
                                        />
                                    </Box>
                                    {formik.errors.companyName && formik.touched.companyName && (
                                        <div className={styles.error}>{formik.errors.companyName}</div>
                                    )}

                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box>
                                    <label htmlFor="title" className='text'>Title</label>

                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="title"
                                            name="title"
                                            onChange={formik.handleChange}
                                            value={formik.values.title}
                                            placeholder='Enter your title'
                                        />
                                    </Box>
                                    {formik.errors.title && formik.touched.title && (
                                        <div className={styles.error}>{formik.errors.title}</div>
                                    )}
                                </Box>
                            </Grid>


                            <Grid item xs={6}>
                                <Box>
                                    <label htmlFor="startDate" className='text'>Start Date</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="startDate"
                                            name="startDate"
                                            type="date"
                                            onChange={formik.handleChange}
                                            value={formik.values.startDate}
                                        />
                                    </Box>
                                    {formik.errors.startDate && formik.touched.startDate && (
                                        <div className={styles.error}>{formik.errors.startDate}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={6}>
                                <Box>
                                    <label htmlFor="endDate" className='text'>End Date</label>
                                    <Box>
                                        <input
                                            className={styles.input}
                                            id="endDate"
                                            name="endDate"
                                            type="date"
                                            onChange={formik.handleChange}
                                            value={formik.values.endDate}
                                        />
                                    </Box>
                                    {formik.errors.endDate && formik.touched.endDate && (
                                        <div className={styles.error}>{formik.errors.endDate}</div>
                                    )}
                                </Box>
                            </Grid>

                            <Grid item xs={12}>
                                <Box>
                                    <label htmlFor="description" className='text'>Description</label>
                                    <Box>
                                        <textarea
                                            className={styles.textarea}
                                            id="description"
                                            name="description"
                                            rows={4}
                                            onChange={formik.handleChange}
                                            value={formik.values.description}
                                            placeholder='Enter Your description'
                                        />
                                    </Box>
                                    {formik.errors.description && formik.touched.description && (
                                        <div className={styles.error}>{formik.errors.description}</div>
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
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>companyName</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>title</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>startDate</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>endDate</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>description</TableCell>
                                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center', width: '290px' }}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((el, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ textAlign: 'center' }}>{el.companyName}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{el.title}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{new Date(el.startDate).toLocaleDateString()}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{new Date(el.endDate).toLocaleDateString()}</TableCell>
                                    <TableCell sx={{ textAlign: 'center' }}>{el.description}</TableCell>
                                    <TableCell>
                                        <button className={styles.remove_button} onClick={() => deleteHandler(el.id)}>
                                            Remove
                                        </button>
                                        <button className={styles.remove_button} onClick={() => updateHandler(el, el.id)}>
                                            Update
                                        </button>
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

export default ExperienceForm;
