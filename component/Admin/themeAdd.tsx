import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as yup from 'yup';
import style from "../forms.module.css";
import { ThemePost, getThemes, removeTheme } from '../../services/themes'; // Make sure you import addTheme and updateTheme
import Image from 'next/image';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  theme: yup.mixed().required('Theme is required'), // Change yup.string() to yup.mixed()
});

interface FormData {
  name: string;
  theme: File | null;
  id: string;
}

const ThemeAdd = () => {
  const [data, setData] = useState<FormData[]>([]);
  const [selectedItem, setSelectedItem] = useState<FormData | null>(null);
  const [ID, setID] = useState('')


  const fetchData = async () => {
    try {
      const themedata = await getThemes();
      setData(themedata);
    } catch (error) {
      console.log("Error fetching theme data:");
      console.log(error);
    }
  };

  const submitHandler = async (values: FormData) => {
    try {
      let res: any;
      if (ID) {
        res = await ThemePost({ ...values }, ID);
      } else {
        res = await ThemePost(values);
      }

      fetchData();
      console.log(res);
    } catch (error) {
      console.log(error);
    }


  };

  const updateHandler = async (data: FormData, id: any) => {
    setSelectedItem(data);
    formik.setValues(data);
    setID(id)
  }



  const formik = useFormik<FormData>({
    initialValues: {
      name: '',
      theme: null,
      id: ''
    },
    enableReinitialize: true,
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
    try {
      await removeTheme(id);
      fetchData();
    } catch (error) {
      console.log("Delete error:", error);
      console.log("Failed to remove theme!");
    }
  };

  return (
    <Box className='parent'>
      <Container maxWidth='md'>
        <Box>
          <form onSubmit={formik.handleSubmit} className='formborder'>
            <Grid container spacing={2} justifyContent="center" alignItems="center">

              <Grid item xs={6}>
                <Box>
                  <label htmlFor="name" className='text'>Name</label>
                  <input
                    className={style.input}
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder='Enter name'

                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className={style.error}>{formik.errors.name}</div>
                  )}
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <label htmlFor="theme" className='text'>Theme</label>
                  <input className={style.input}
                    type="file"
                    onChange={(event) => {
                      formik.setFieldValue('theme', event?.target?.files ? event.target.files[0] : null);
                    }}
                  />
                  {formik.errors.theme && formik.touched.theme && (
                    <div className={style.error}>{formik.errors.theme}</div>
                  )}
                </Box>
              </Grid>

              <Grid item xs={1} my={3}>
                <Box>
                  <Button className={style.button} type="submit">
                    <span className={style.button_hover}>Add</span>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center' }}>Theme</TableCell>
                <TableCell sx={{ fontWeight: 600, fontSize: '17px', textTransform: 'capitalize', textAlign: 'center', width: '290px' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((el, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: 'center' }}>{el.name}</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    <Image src={`${process.env.API_BASE_URL}/images/` + el.theme} alt='theme img' width={200} height={150} />
                  </TableCell>
                  <TableCell sx={{ width: '190px' }}>
                    <button className={style.remove_button} onClick={() => deleteHandler(el.id)}>
                      Remove
                    </button>
                    <button className={style.remove_button} onClick={() => updateHandler(el, el.id)}>
                      update
                    </button>
                    {/* <button className={style.remove_button} onClick={() => updateHandler(el.id)}>
                      Update
                    </button> */}
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

export default ThemeAdd;
