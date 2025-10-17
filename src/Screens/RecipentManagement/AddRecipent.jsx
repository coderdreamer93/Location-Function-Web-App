import { useState, useEffect } from "react";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from '../../Components/CustomInput';
import { SelectBox } from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
import { BASE_URL } from "../../Api/apiConfig";
export const AddRecipent = () => {
    const [categories, setCategories] = useState({});
    const [unit, setUnit] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [genre, setGenre] = useState({});
    const [type, setType] = useState(false);
    const [formData, setFormData] = useState({
        role: 0
    });







    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData)
    };

    const LogoutData = localStorage.getItem('login');


    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new FormData object
        const formDataMethod = new FormData();
        for (const key in formData) {
            formDataMethod.append(key, formData[key]);
        }

        console.log(formData)
        document.querySelector('.loaderBox').classList.remove("d-none");
        // Make the fetch request
        fetch(`${BASE_URL}api/admin/recipient`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${LogoutData}`
            },
            body: formDataMethod // Use the FormData object as the request body
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(data);
                setShowModal(true)
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    };




    return (
        <>
            <DashboardLayout>
                <div className="dashCard mb-4">
                    <div className="row mb-3">
                        <div className="col-12 mb-2">
                            <h2 className="mainTitle">
                                <BackButton />
                                Add New Recipent
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <CustomInput
                                                    label='Enter Name'
                                                    required
                                                    id='name'
                                                    type='text'
                                                    placeholder='Enter Recipent Name'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <CustomInput
                                                    label='Enter Email'
                                                    required
                                                    id='email'
                                                    type='email'
                                                    placeholder='Enter Recipent Email'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <CustomInput
                                                    label='Password'
                                                    required
                                                    id='pass'
                                                    type='password'
                                                    placeholder='Enter Password'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <CustomButton variant='primaryButton' text='Add Book' type='submit' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <CustomModal show={showModal} close={() => { setShowModal(false) }} success heading='Recipent Added Successfully.' />

            </DashboardLayout>
        </>
    );
};

