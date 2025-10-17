import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const BookShareListDetail = () => {

    const { slug, id } = useParams();

    const [data, setData] = useState({});

    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [message, setMessage] = useState(false)


    const inActive = () => {
        setShowModal(false)
        setShowModal2(true)
    }
    const Active = () => {
        setShowModal3(false)
        setShowModal4(true)
    }

    useEffect(() => {
        const LogoutData = localStorage.getItem('login');
        document.title = 'Wisdom For Life | Book Detail';
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch(`${BASE_URL}api/admin/book/${slug}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(data)

                setData(data?.data)

            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error);
            })
    }, [id]);
    console.log(data)

    return (
        <>
            <DashboardLayout>
                <div className="dashCard mb-4">
                    <div className="row mb-3">
                        <div className="col-12 mb-2">
                            <h2 className="mainTitle">
                                <BackButton />
                                Book Details
                            </h2>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            {/* <div className="row mb-3 justify-content-end">
                <div className="col-lg-4 text-end order-1 order-lg-2 mb-3">
                  <button onClick={() => {
                    data?.status ? setShowModal(true) : setShowModal3(true)
                  }} className="notButton primaryColor fw-bold text-decoration-underline">Mark as {data?.status ? 'Inactive' : 'Active'}</button>
                  <span className={`statusBadge ${data?.status == 1 ? 'statusBadgeActive' : 'statusBadgeInactive'}`}>{data?.status == 1 ? 'Active' : 'Inactive'}</span>
                </div>
              </div> */}


                            <div className="row">
                                <div className="col-md-6 mb-4">

                                    <div className="productImage">
                                        <img src={BASE_URL + data?.book_cover} />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="productInfo">
                                        <h3 className="text-capitalize">{data?.book_name}</h3>
                                        <p>{data?.book_description}</p>
                                    </div>
                                    <div className="pdfCover">
                                        <div className="pdfBook">
                                            <a href={BASE_URL + data?.book_pdf} target="_blank"><FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inActive} heading='Are you sure you want to mark this user as inactive?' />
                <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />

                <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={Active} heading='Are you sure you want to mark this user as Active?' />
                <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />
            </DashboardLayout>
        </>
    );
};

