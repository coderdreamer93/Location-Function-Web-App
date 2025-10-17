import { useState, useEffect } from "react";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomInput from '../../Components/CustomInput';
import { SelectBox } from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
import { BASE_URL } from "../../Api/apiConfig";
export const AddBook = () => {
    const [categories, setCategories] = useState({});
    const [unit, setUnit] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [genre, setGenre] = useState({});
    const [type, setType] = useState(false);
    const [formData, setFormData] = useState({
        book_cover: '', // Initialize image as an empty string
        book_pdf: ''
    });

    const bookType = [
        {
            id: 1,
            name: 'Book'
        },
        {
            id: 2,
            name: 'Novel'
        }
    ]

    const fetchCatories = () => {
        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/admin/category_listing',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

            .then(response =>
                response.json()
            )
            .then((data) => {
                console.log(data)
                document.querySelector('.loaderBox').classList.add("d-none");
                setCategories(data.data);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    }

    const NovelCategoriesList = () => {
        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/novel_category_listing',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

            .then(response =>
                response.json()
            )
            .then((data) => {
                console.log(data)
                document.querySelector('.loaderBox').classList.add("d-none");
                setCategories(data.data);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    }

    const GenreData = () => {
        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/admin/genre_listing',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )

            .then(response =>
                response.json()
            )
            .then((data) => {
                console.log(data.data)
                document.querySelector('.loaderBox').classList.add("d-none");
                setGenre(data.data);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })

    }


    useEffect(() => {
        GenreData()
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(formData)
    };

    const filehandleChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/pdf') {
                // Store PDF file
                setFormData((prevData) => ({
                    ...prevData,
                    book_pdf: file,
                }));
            } else if (file.type.startsWith('image/')) {
                // Store image file
                setFormData((prevData) => ({
                    ...prevData,
                    book_cover: file,
                }));
            }
        }
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
        fetch(`${BASE_URL}api/admin/book`, {
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
                                Add New Book
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
                                                    label='Add Book Title'
                                                    required
                                                    id='name'
                                                    type='text'
                                                    placeholder='Enter Book Title'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="book_name"
                                                    value={formData.book_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <CustomInput
                                                    label='Upload Product Image'
                                                    required
                                                    id='file'
                                                    type='file'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="book_cover"
                                                    accept="image/png, image/gif, image/jpeg" 
                                                    // value={formData.image}
                                                    onChange={filehandleChange}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <CustomInput
                                                    label='Upload Book Pdf'
                                                    required
                                                    id='file'
                                                    type='file'
                                                    labelClass='mainLabel'
                                                    inputClass='mainInput'
                                                    name="book_pdf"
                                                    accept="application/pdf"
                                                    // value={formData.image}
                                                    onChange={filehandleChange}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-4">
                                                <div className="inputWrapper">
                                                    <div className="form-controls">
                                                        <label htmlFor="">Description</label>
                                                        <textarea
                                                            name="book_description"
                                                            className="form-control shadow border-0"
                                                            id=""
                                                            cols="30"
                                                            rows="10"
                                                            value={formData.book_description}
                                                            onChange={handleChange}
                                                        >
                                                        </textarea>
                                                    </div>
                                                </div>
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

                <CustomModal show={showModal} close={() => { setShowModal(false) }} success heading='Book Added Successfully.' />

            </DashboardLayout>
        </>
    );
};

