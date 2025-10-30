import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Link,
  Divider,
  FormControlLabel,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  Checkbox,
} from '@mui/material';
import { Google, Facebook, Apple, VisibilityOff, Visibility } from '@mui/icons-material';
import CustomTextField from '../components/UI/CustomTextField';
import bgImage from '../assets/bg-login-img.png';
import CustomButton from '../components/UI/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError, socialLoginUser } from '../store/slices/authSlice';
import { supabase } from '../lib/supabase';
import { useSnackbar } from 'notistack';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  // Add this useEffect to handle errors
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        }
      });
      dispatch(clearError());
    }
  }, [error, dispatch, enqueueSnackbar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        emailOrPhone,
        password
      };
      const result = await dispatch(loginUser(loginData)).unwrap();

      if (result?.data?.tokens?.access?.token) {
        enqueueSnackbar('Login successful!', {
          variant: 'success',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          }
        });

        setTimeout(() => {
          navigate('/dashboard', {
            state: {
              email: emailOrPhone,
              token: result.data.tokens.access.token
            }
          });
        }, 2000);
      }
    } catch (error) {
      // Error is already handled by the effect hook
      console.error('Login error:', error);
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) throw error;

    } catch (error) {
      console.error('Google login error:', error);
      // You can add error handling here (e.g., show a snackbar)
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        p: 0,
        m: 0,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      {/* Full Screen Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }
        }}
      />

      {/* Login Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: '450px',
          p: { xs: 3, sm: 4 },
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 1,
          position: 'relative',
          // Center on mobile, right on desktop
          // margin: { xs: 'auto', md: '0 10% 0 auto' },
          // Horizontal margin for mobile
          mx: { xs: 2, md: 0 },
          // Right margin for desktop
          mr: { md: '10%' }
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              color: '#000',
              // fontSize: '24px',
              fontWeight: 'bold',
              mb: 1,
              fontFamily: 'Google Sans, Roboto, Arial, sans-serif'
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'text.secondary',
              fontSize: '16px',
              fontWeight: 400,
              mb: 3,
              fontFamily: 'Roboto, Arial, sans-serif'
            }}
          >
            Let’s login to continue for Feedback Work
          </Typography>
        </Box>

        {/* Social Login Buttons */}


        <CustomTextField
          label="Email"
          value={emailOrPhone}
          name="emailOrPhone"
          type="emailOrPhone"
          onChange={handleEmailChange}
          // placeholder="Enter your email"
          required
          fullWidth
          autoComplete="emailOrPhone"
          sx={{ mb: 2 }}
        />

        <CustomTextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          name="password"
          onChange={handlePasswordChange}
          // placeholder="Enter your password"
          required
          fullWidth
          autoComplete="current-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControlLabel
            control={
              <Checkbox
                // checked={showPassword}
                // onChange={togglePasswordVisibility}
                size="small"
                sx={{
                  color: '#5f6368',
                  // p: '4px',
                  '&.Mui-checked': {
                    color: '#1a73e8',
                  },
                }}
              />
            }
            label={
              <Typography sx={{
                fontSize: '14px',
                color: '#000',
                fontFamily: 'Roboto, Arial, sans-serif'
              }}>
                Keep me signed in
              </Typography>
            }
          // sx={{ m: 0 }}
          />
          <Link
            component={RouterLink}
            to="/reset-verify-code"
            sx={{
              color: '#1a73e8',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'Roboto, Arial, sans-serif',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Forgot password?
          </Link>
        </Box>

        {/* Sign In Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <CustomButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              maxWidth: '200px',
              backgroundColor: '#1a73e8',
              '&:hover': {
                backgroundColor: '#1b66c9',
              }
            }}
          >
            Sign in
          </CustomButton>
        </Box>

        {/* Divider with text */}
        <Box sx={{ textAlign: 'center', mb: 1 }}>

          <Typography variant="body2" color="#000">
            Don't have an account? <Link component={RouterLink} to="/signup" sx={{ color: '#1a73e8' }}>Sign up</Link>
          </Typography>
        </Box>
        <Box sx={{ position: 'relative', my: 1 }}>
          <Divider sx={{ borderColor: '#e0e0e0' }}>
            <Box
              component="span"
              sx={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                px: 2,
                backgroundColor: 'white',
                color: '#5f6368',
                fontSize: '14px',
                fontFamily: 'Roboto, Arial, sans-serif'
              }}
            >
              or
            </Box>
          </Divider>
        </Box>

        {/* Social Icon */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mb: 3 }}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.83 15.72 17.62V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.72 17.62C14.74 18.27 13.48 18.75 12 18.75C9.14 18.75 6.71 16.88 5.86 14.27H2.18V17.05C3.99 20.59 7.7 23 12 23Z" fill="#34A853" />
                <path d="M5.86 14.27C5.46 13.09 5.46 11.83 5.86 10.65V7.87H2.18C0.79 10.58 0.79 13.65 2.18 16.36L5.86 14.27Z" fill="#FBBC05" />
                <path d="M12 5.25C13.53 5.25 14.91 5.8 15.98 6.88L19.36 3.5C17.45 1.69 14.96 0.5 12 0.5C7.7 0.5 3.99 2.9 2.18 6.87L5.86 9.96C6.71 7.35 9.14 5.25 12 5.25Z" fill="#EA4335" />
              </svg>
            }
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
            sx={{
              height: '40px',
              borderRadius: '10px',
              borderColor: '#dadce0',
              color: '#000',
              textTransform: 'none',
              fontSize: '14px',
              fontFamily: 'Roboto, Arial, sans-serif',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderColor: '#d2e3fc',
              },
              '& .MuiButton-startIcon': {
                margin: 0,
                marginRight: '8px',
                '& > *': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  overflow: 'visible'
                }
              },
              '&:disabled': {
                opacity: 0.7,
                cursor: 'not-allowed'
              }
            }}
          >
            {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <Apple sx={{ color: '#000' }} />
            }
            sx={{
              height: '40px',
              borderRadius: '10px',
              borderColor: '#dadce0',
              // color: '#3c4043',
              color: '#000000',

              textTransform: 'none',
              fontSize: '14px',
              // fontWeight: 'bold',
              fontFamily: 'Roboto, Arial, sans-serif',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                borderColor: '#d2e3fc',
              },
              '& .MuiButton-startIcon': {
                margin: 0,
                marginRight: '8px',
                '& > *': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  overflow: 'visible'
                }
              }
            }}
          >
            Continue with Apple
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12.06C22 6.57 17.5 2.06 12 2.06C6.5 2.06 2 6.57 2 12.06C2 16.98 5.66 21.03 10.38 21.8V14.81H7.9V12.06H10.38V9.91C10.38 7.43 11.86 6.06 14.1 6.06C15.17 6.06 16.29 6.26 16.29 6.26V8.56H15.04C13.83 8.56 13.48 9.26 13.48 9.98V12.06H16.16L15.73 14.81H13.48V21.8C18.34 21.03 22 16.98 22 12.06Z" fill="#1877F2" />
              </svg>
            }
            sx={{
              height: '40px',
              borderRadius: '10px',
              borderColor: '#dadce0',
              color: '#000000',
              textTransform: 'none',
              fontSize: '14px',
              // fontWeight: 'bold',
              fontFamily: 'Roboto, Arial, sans-serif',
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',

              '&:hover': {
                backgroundColor: 'rgba(24, 119, 242, 0.04)',
                borderColor: '#d2e3fc',
              },
              '& .MuiButton-startIcon': {
                margin: 0,
                marginRight: '8px',
                '& > *': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  overflow: 'visible'
                }
              }
            }}
          >
            Continue with Facebook
          </Button>

        </Box>
      </Box>

      {/* Password Field - Initially Hidden */}
      <Box sx={{ display: 'none', mb: 2 }}>
        <TextField
          fullWidth
          label="Enter your password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  sx={{ color: '#5f6368' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '54px',
              '& fieldset': {
                borderColor: '#e0e0e0',
                borderRadius: '4px',
              },
              '&:hover fieldset': {
                borderColor: '#bdbdbd',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1a73e8',
                borderWidth: '2px',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#5f6368',
              '&.Mui-focused': {
                color: '#1a73e8',
              },
            },
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={showPassword}
                onChange={togglePasswordVisibility}
                size="small"
                sx={{
                  color: '#5f6368',
                  p: '4px',
                  '&.Mui-checked': {
                    color: '#1a73e8',
                  },
                }}
              />
            }
            label={
              <Typography sx={{
                fontSize: '14px',
                color: '#5f6368',
                fontFamily: 'Roboto, Arial, sans-serif'
              }}>
                Show password
              </Typography>
            }
            sx={{ m: 0 }}
          />
          <Link
            href="#"
            sx={{
              color: '#1a73e8',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              fontFamily: 'Roboto, Arial, sans-serif',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            Forgot password?
          </Link>
        </Box>

        {/* Sign In Button */}
        <Box sx={{ width: '100%' }}>
          <CustomButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#1a73e8',
              '&:hover': {
                backgroundColor: '#1b66c9',
              }
            }}
          >
            {error ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
          </CustomButton>
        </Box>
      </Box>


    </Box>
  );
};

export default Login;