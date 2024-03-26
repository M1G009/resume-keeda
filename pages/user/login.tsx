import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import style from '../../styles/user.module.css';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UserLogin } from '../../services/user';
import HomeIcon from '@mui/icons-material/Home';

const Login: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const LoginHandler = async (data: { email: string; password: string }) => {
    try {
      const res = await UserLogin(data);
      console.log(res);
      return router.push('/user');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit: (values) => {
      LoginHandler(values);
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <Box position={"relative"} className={style.bg}>
      <Box sx={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
        <Container maxWidth="sm" >
          <Box sx={{ position: 'absolute', top: '30px', left: '30px' }}>
            <Link href="/">
              <button className={style.homebutton} >
                <HomeIcon />
              </button>
            </Link>
          </Box>
          <form className={style.form} onSubmit={handleSubmit}>
            <Typography id={style.heading}>Login</Typography>
            <Box className={style.field}>
              <AlternateEmailIcon className={style.input_icon} />
              <TextField
                fullWidth
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.email && errors.email)}
                placeholder="email"
                className={style.input_field}
                type="text"
              />
            </Box>
            <Box className={style.field}>
              <LockIcon className={style.input_icon} />
              <TextField
                placeholder="Password"
                fullWidth
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(touched.password && errors.password)}
                className={style.input_field}
                type={showPassword ? 'text' : 'password'}
              />
              <Button onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOffIcon sx={{ color: 'white' }} /> : <RemoveRedEyeIcon sx={{ color: 'white' }} />}
              </Button>
            </Box>
            <Box className={style.btn} sx={{ marginBottom: '20px' }}>
              <button className={style.button} type="submit" >
                Login
              </button>
              {/* <Button className={style.button}>
                <Link href="/user/signup">Sign Up</Link>
              </Button> */}

            </Box>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography>No account? <Link href='/user/signup' className={style.link}>Sign up</Link></Typography>
            </Box>
          </form>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
