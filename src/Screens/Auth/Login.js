import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./style.css";

import { AuthLayout } from '../../Components/Layout/AuthLayout';
import CustomButton from '../../Components/CustomButton';
import CustomInput from "../../Components/CustomInput"
import { BASE_URL } from '../../Api/apiConfig';


const AdminLogin = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

  

    console.log(formData.password);

    useEffect(() => {
        document.title = 'ASL | Login';
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // const formDataMethod = new FormData();
        // formDataMethod.append('email', formData.email);
        // formDataMethod.append('password', formData.password);
        // console.log(formData)
        // document.querySelector('.loaderBox').classList.remove("d-none");

        // const apiUrl = `${BASE_URL}api/auth/login`;


        // try {
        //     const response = await fetch(apiUrl, {
        //         method: 'POST',
        //         body: formDataMethod
        //     });

        //     if (response.ok) {
               
        //         const responseData = await response.json();
        //         localStorage.setItem('login', responseData.data.token);
        //         console.log('Login Response:', responseData);
        //         document.querySelector('.loaderBox').classList.add("d-none");
        //         navigate('/dashboard')
                
        //     } else {
        //         document.querySelector('.loaderBox').classList.add("d-none");
        //         alert('Invalid Credentials')

        //         console.error('Login failed');
        //     }
        // } catch (error) {
        //     document.querySelector('.loaderBox').classList.add("d-none");
        //     console.error('Error:', error);
        // }

        document.querySelector('.loaderBox').classList.add("d-none");
        localStorage.setItem('login', '1212213');
        navigate('/dashboard')
    };


    return (
        <>
            <AuthLayout authTitle='Welcome! Sign to continue' authPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ">
                <form onSubmit={handleSubmit}>
                    <CustomInput
                        label='Email Address'
                        required
                        id='userEmail'
                        type='email'
                        placeholder='Enter Your Email Address'
                        labelClass='mainLabel'
                        inputClass='mainInput'
                        onChange={(event) => {
                            setFormData({ ...formData, email: event.target.value });
                            console.log(event.target.value);
                        }}
                    />
                    <CustomInput
                        label='Password'
                        required
                        id='pass'
                        type='password'
                        placeholder='Enter Password'
                        labelClass='mainLabel'
                        inputClass='mainInput'
                        onChange={(event) => {
                            setFormData({ ...formData, password: event.target.value });
                            console.log(event.target.value);
                        }}
                    />
                    <div className="d-flex align-items-baseline justify-content-between mt-1">
                        <div className="checkBox">
                            <input type="checkbox" name="rememberMe" id="rememberMe" className='me-1' />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <Link to={'/forget-password'} className='text-theme-secondary text-decoration-underline'>Forget Password?</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <CustomButton variant='primaryButton' text='Login' type='submit' />
                    </div>
                </form>
            </AuthLayout>
        </>
    )
}


export default AdminLogin
