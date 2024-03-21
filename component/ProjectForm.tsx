import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as yup from 'yup';
import { Project, ProjectUpdate, getProjects, removeProject } from '../services/Project';
import Image from 'next/image';
import style from "./forms.module.css"
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

interface FormData {
  images: File | null;
  title: string;
  url: string;
  description: string;
  id: string;
}

const validationSchema = yup.object({
  images: yup.mixed().required('Image file is required'),
  title: yup.string().required('Title is required'),
  url: yup.string().required('URL is required'),
  description: yup.string().required('Description is required'),
});

const Personal: React.FC = () => {
  const router = useRouter()
  const [data, setData] = useState<FormData[]>([]);
  const [selectedItem, setSelectedItem] = useState<FormData | null>(null);
  const [ID, setID] = useState('')

  const fetchData = async () => {
    try {
      const projectData = await getProjects();
      console.log(projectData);

      // Assuming projectData contains an array of project details
      if (Array.isArray(projectData)) {
        setData(projectData);
      } else {
        console.log("Project data is not in the expected format");
      }
    } catch (error) {
      console.log("Error fetching project data:", error);
    }
  };

  const submitHandler = async (values: any) => {

    try {
      let res: any;
      if (ID) {
        res = await ProjectUpdate({ ...values }, ID);
        toast.success("Data updated successfully");
      } else {
        res = await Project(values);
        toast.success("Data added successfully");
      }

      fetchData();
      console.log(res);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const themepage = () => {
    router.push('/user/themes')
  }

  const formik = useFormik<FormData>({
    initialValues: {
      images: null,
      title: '',
      url: '',
      description: '',
      id: '', // Assuming id is initialized as an empty string
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

  const deleteHandler = async (id: string) => {
    console.log(id);
    try {
      await removeProject(id);
      toast.success("Project removed successfully");
      fetchData();
    } catch (error) {
      console.error("Error removing project:", error);
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
            <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}>
              <Grid item xs={4}>
                <Box>
                  <label htmlFor="images" className='text'>Images</label>
                  <Box>
                    <input
                      className={style.input}
                      type="file"
                      id="images"
                      onChange={(event) => {
                        formik.setFieldValue('images', event.currentTarget.files?.[0] || null);
                      }}
                    />
                    {formik.errors.images && formik.touched.images && (
                      <div className={style.error}>{`${formik.errors.images}`}</div>
                    )}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box>
                  <label htmlFor="title" className='text'>Title</label>
                  <Box>
                    <input
                      className={style.input}
                      id="title"
                      name="title"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      placeholder='Enter the Title'
                    />
                  </Box>
                  {formik.errors.title && formik.touched.title && (
                    <div className={style.error}>{formik.errors.title}</div>
                  )}
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box>
                  <label htmlFor="url" className='text'>URL</label>
                  <Box>
                    <input
                      className={style.input}
                      id="url"
                      name="url"
                      type="url"
                      onChange={formik.handleChange}
                      value={formik.values.url}
                      placeholder='Enter the URL '
                    />
                  </Box>
                  {formik.errors.url && formik.touched.url && (
                    <div className={style.error}>{formik.errors.url}</div>
                  )}
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box>
                  <label htmlFor="description" className='text'>Description</label>
                  <Box>
                    <Box>
                      <textarea
                        className={style.textarea}
                        id="description"
                        name="description"
                        rows={4}
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        placeholder='Enter Your description'
                      />
                    </Box>
                    {formik.errors.description && formik.touched.description && (
                      <div className={style.error}>{formik.errors.description}</div>
                    )}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={2} mt={3} mb={8} mx={2}>
                <Box>
                  <button className={style.button} type="submit">
                    <span className={style.button_hover}>Add</span>
                  </button>
                </Box>
              </Grid>
              <Grid item xs={2} mt={3} mb={8} mx={2}>
                <Box>
                  <button className={style.button} type='button' onClick={() => { themepage() }}>
                    <span className={style.button_hover}>Finish</span>
                  </button>
                </Box>
              </Grid>

            </Grid>
          </form>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>Image</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>URL</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center' }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textAlign: 'center', width: '290px' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((el, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <Image src={`${process.env.API_BASE_URL}/images/${el.images}`} alt='' width={50} height={50} />
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{el.url}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{el.title}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>{el.description}</TableCell>
                  <TableCell>
                    <button className={style.remove_button} onClick={() => deleteHandler(el.id)}>
                      Remove
                    </button>
                    <button className={style.remove_button} onClick={() => updateHandler(el, el.id)}>
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
  );
};

export default Personal;
