import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
    Box,
    Typography,
    Button,
    Link,
    Divider,
    FormControlLabel,
    InputAdornment,
    IconButton,
    Checkbox,
    Snackbar,
    Alert,
    CircularProgress,
    Grid
} from '@mui/material';
import { Google, Facebook, Apple, Visibility, VisibilityOff } from '@mui/icons-material';
import CustomTextField from '../components/UI/CustomTextField';
import bgImage from '../assets/bg-login-img.png';
import CustomButton from '../components/UI/CustomButton';
import { signupUser, clearError, socialLoginUser } from '../store/slices/authSlice';
import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const SignUp = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });
    const [formErrors, setFormErrors] = useState({});
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: 'error' });
        }
    }, [error]);

    const validateForm = () => {
        const errors = {};
        const phoneRegex = /^[0-9]{10,15}$/;

        if (!formData.firstname.trim()) {
            errors.firstname = 'First name is required';
        }

        if (!formData.lastname.trim()) {
            errors.lastname = 'Last name is required';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(formData.phone)) {
            errors.phone = 'Please enter a valid phone number';
        }

        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const userData = {
            firstname: formData.firstname.trim(),
            lastname: formData.lastname.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            password: formData.password
        };

        try {
            const resultAction = await dispatch(signupUser(userData));

            if (signupUser.fulfilled.match(resultAction)) {
                // Show success message from backend if available, otherwise show default message
                const token = resultAction.payload?.data?.tokens?.access?.token;
                if (token) {
                    localStorage.setItem('token', token);
                    // console.log('Token saved in SignUp component:', token);
                }

                const successMessage = resultAction.payload?.message;
                enqueueSnackbar(successMessage, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }
                });

                // Navigate after showing the success message
                setTimeout(() => {
                    navigate('/verification-code', {
                        state: {
                            email: formData.email,
                            token: resultAction.payload?.data?.tokens?.access?.token
                        }
                    });
                }, 2000);
            }
            // } else if (signupUser.rejected.match(resultAction)) {
            //     enqueueSnackbar(error , { variant: 'error' });
            // }
            else if (signupUser.rejected.match(resultAction)) {
                // Check if the error is a 400 error (email exists)
                if (resultAction.error?.message?.includes('400')) {
                    enqueueSnackbar('Email already exists', {
                        variant: 'error',
                        autoHideDuration: 2000,
                        onClose: () => navigate('/select-account-type')
                    });
                } else {
                    enqueueSnackbar(error, { variant: 'error' });
                }
            }
        }
        catch (err) {
            console.error('Signup error:', err);
        }
    };

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        if (error) {
            dispatch(clearError());
        }
    };

    const handleCloseSnackbar = () => {
        dispatch(clearError());
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSocialLogin = async (provider) => {
        try {
            // This is a simplified example. In a real app, you would integrate with the provider's SDK
            // and get the user's information from the OAuth response
            const mockSocialData = {
                provider: provider.toUpperCase(),
                providerId: `mock_${provider}_id_${Date.now()}`,
                email: `user_${Date.now()}@${provider}.com`,
                firstName: provider.charAt(0).toUpperCase() + provider.slice(1),
                lastName: 'User',
            };

            const resultAction = await dispatch(socialLoginUser(mockSocialData));

            if (socialLoginUser.fulfilled.match(resultAction)) {
                navigate('/dashboard'); // Redirect to dashboard on success
            }
        } catch (error) {
            console.error('Social login error:', error);
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
            ></Box>

            {/* Sign Up Form */}
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    width: '100%',
                    maxWidth: '450px',
                    p: { xs: '20px', sm: 4 },
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    zIndex: 1,
                    position: 'relative',
                    margin: { xs: '2%', md: '0 0 0 0' },
                    mx: { md: 0 },
                    mr: { md: '10%' }
                }}
            >
                {/* Header */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h5"
                        sx={{
                            color: '#000',
                            fontWeight: 'bold',
                            mb: 1,
                            fontFamily: 'Google Sans, Roboto, Arial, sans-serif'
                        }}
                    >
                        Create an Account
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
                        Create account for Function at Location
                    </Typography>
                </Box>

                {/* Name Fields */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <CustomTextField
                        label="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!formErrors.firstname}
                        helperText={formErrors.firstname}
                        margin="normal"
                    />
                    <CustomTextField
                        label="Last name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!formErrors.lastname}
                        helperText={formErrors.lastname}
                        margin="normal"
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>

                    {/* Email Field */}
                    <CustomTextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                        margin="normal"
                    />

                    <CustomTextField
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        // placeholder="e.g., 1234567890"
                        fullWidth
                        required
                        error={!!formErrors.phone}
                        helperText={formErrors.phone}
                        margin="normal"
                    />
                </Box>


                <Box sx={{ display: 'flex', gap: 2 }}>
                    {/* Password Field */}
                    <CustomTextField
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!formErrors.password}
                        helperText={formErrors.password}
                        margin="normal"
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
                            ),
                        }}
                    />

                    {/* Confirm Password Field */}
                    <CustomTextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!formErrors.confirmPassword}
                        helperText={formErrors.confirmPassword}
                        margin="normal"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={toggleConfirmPasswordVisibility}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>

                {/* Terms and Conditions */}
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            name="agreeTerms"
                            color="primary"
                            size="small"
                        />
                        <Typography variant="body2" color={formErrors.agreeTerms ? 'error' : 'textSecondary'}>I agree to the Terms and Conditions</Typography>
                        {formErrors.agreeTerms && (
                            <Typography variant="caption" color="error">
                                {formErrors.agreeTerms}
                            </Typography>
                        )}
                    </Box> */}

                {/* Sign Up Button */}
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <CustomButton
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={loading}
                        sx={{
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 500,
                            textTransform: 'none',
                            borderRadius: '8px',
                            boxShadow: 'none',
                            '&:hover': {
                                boxShadow: 'none',
                            },
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={24} color="inherit" />
                        ) : (
                            'Sign Up'
                        )}
                    </CustomButton>

                </Box>

                {/* Divider with text */}
                <Box sx={{ textAlign: 'center', mb: 1 }}>

                    <Typography variant="body2" color="#000">
                        Have an account? <Link component={RouterLink} to="/login" sx={{ color: '#1a73e8' }}
                            onClick={() => dispatch(clearError())}
                        >Sign in</Link>
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

                {/* Social Login Buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', mb: 2 }}>
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
                        onClick={() => handleSocialLogin('google')}
                        disabled={loading}
                        sx={{
                            height: '40px',
                            borderRadius: '10px',
                            borderColor: '#dadce0',
                            color: '#000',
                            textTransform: 'none',
                            fontSize: '14px',
                            // fontWeight: 'bold',
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
                            }
                        }}
                    >
                        Continue with Google
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
        </Box>

    );
};

export default SignUp;
