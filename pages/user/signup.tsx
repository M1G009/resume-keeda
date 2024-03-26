import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/user.module.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import { UserSignup } from '../../services/user';
import HomeIcon from '@mui/icons-material/Home';


const Signin = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const SignUpHandler = async (data) => {
    try {
      const res = await UserSignup(data)
      console.log(res);

      return router.push("/user")
    } catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
      firstName: Yup.string().required('first name require'),
      lastName: Yup.string().required('last name require'),
    }),
    onSubmit: (values) => {
      SignUpHandler(values);
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <Box sx={{ display: 'grid', placeItems: 'center' }} className={styles.bg}>
      <Container maxWidth="sm">
        <Box sx={{ position: 'absolute', top: '30px', left: '30px' }}>
          <Link href="/">
            <button className={styles.homebutton} >
              <HomeIcon />
            </button>
          </Link>
        </Box>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Typography id={styles.heading}> Sign Up </Typography>
          <Box className={styles.field}>
            <TextField
              fullWidth
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.firstName && errors.firstName)}
              placeholder="First Name"
              className={styles.input_field}
              type="text"
            />
          </Box>
          <Box className={styles.field}>
            <TextField
              fullWidth
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.lastName && errors.lastName)}
              placeholder="Last Name"
              className={styles.input_field}
              type="text"
            />
          </Box>
          <Box className={styles.field}>
            <TextField
              fullWidth
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.email && errors.email)}
              placeholder="email"
              className={styles.input_field}
              type="email"
            />
          </Box>
          <Box className={styles.field}>
            <TextField
              placeholder="Password"
              fullWidth
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(touched.password && errors.password)}
              className={styles.input_field}
              type={showPassword ? 'text' : 'password'}
            />
            <Button onClick={togglePasswordVisibility}>
              {showPassword ? <VisibilityOffIcon sx={{ color: 'white' }} /> : <RemoveRedEyeIcon sx={{ color: 'white' }} />}
            </Button>
          </Box>

          <Box className={styles.btn} sx={{ marginBottom: '20px' }}>

            <button className={styles.button} type="submit">
              Sign Up
            </button>

          </Box>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography>Already have account? <Link href='/user/login' className={styles.link}>Get started</Link></Typography>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Signin;
