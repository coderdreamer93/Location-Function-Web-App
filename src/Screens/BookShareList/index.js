import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faEye, faCheck, faTimes, faFilter, faEdit } from "@fortawesome/free-solid-svg-icons";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";

export const BookShareList = () => {
  // const base_url = 'https://custom.mystagingserver.site/Tim-WDLLC/public/'
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const hanldeRoute = () => {
    navigate('/add-book')
  }

  const inActive = () => {
    setShowModal(false)
    setShowModal2(true)
  }
  const ActiveMale = () => {
    setShowModal3(false)
    setShowModal4(true)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const filterData = data?.filter(item =>
    item?.book?.book_name?.toLowerCase().includes(inputValue.toLowerCase())
  );


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);


  const BookShareData = () => {
    const LogoutData = localStorage.getItem('login');
    document.querySelector('.loaderBox').classList.remove("d-none");
    fetch(`${BASE_URL}api/admin/book-share-stats`,
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
        setData(data.data);
      })
      .catch((error) => {
        document.querySelector('.loaderBox').classList.add("d-none");
        console.log(error)
      })

  }

  console.log(data)
  useEffect(() => {
    document.title = 'Wisdom For Life | Book Share List';
    BookShareData()

  }, []);

  const maleHeaders = [
    {
      key: "id",
      title: "S.No",
    },
    {
      key: "name",
      title: "Book Name",
    },
    {
      key: "share_user",
      title: "Share User Name",
    },
    {
      key: "semail",
      title: "Share User Email",
    },
    {
      key: "receiveName",
      title: "Receiver User Name",
    },
    {
      key: "remail",
      title: "Receiver User Email",
    },
    {
      key: "created_at",
      title: "Created On",
    }
  ];


  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row mb-3 justify-content-between">
                  <div className="col-md-6 mb-2">
                    <h2 className="mainTitle">Book Share List</h2>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="addUser">
                      {/* <CustomButton text="Add New Book" variant='primaryButton' onClick={hanldeRoute} /> */}
                      <CustomInput type="text" placeholder="Search Here..." value={inputValue} inputClass="mainInput" onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">

                  <div className="col-12">
                    <CustomTable
                      headers={maleHeaders}

                    >
                      <tbody>
                        {

                          currentItems.map((item, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <div className="bookInfoBox">
                                  <div className="bookImage">
                                    <img src={BASE_URL + item?.book?.book_cover} className="avatarIcon p-1" />
                                  </div>
                                  <div className="bookName">
                                    {item?.book?.book_name}
                                  </div>
                                </div>
                              </td>
                              <td className="text-capitalize">
                                {item?.share_user?.name}
                              </td>
                              <td>{item?.share_user?.email}</td>
                              <td className="text-capitalize">
                                {item?.receiver_user?.name}
                              </td>
                              <td>{item?.receiver_user?.email}</td>
                              <td>{item?.created_at}</td>
                              {/* <td className={item.status == 1 ? 'greenColor' : "redColor"}>{item.status == 1 ? 'Active' : "Inactive"}</td> */}
                              {/* <td>
                                <Dropdown className="tableDropdown">
                                  <Dropdown.Toggle variant="transparent" className="notButton classicToggle">
                                    <FontAwesomeIcon icon={faEllipsisV} />
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu align="end" className="tableDropdownMenu">

                                    <Link to={`/book-management/book-details/${item?.book_slug}`} className="tableAction"><FontAwesomeIcon icon={faEye} className="tableActionIcon" />View</Link>
                                    <Link to={`/book-management/edit-book/${item?.book_slug}`} className="tableAction"><FontAwesomeIcon icon={faEdit} className="tableActionIcon" />Edit</Link>

                                  </Dropdown.Menu>
                                </Dropdown>
                              </td> */}
                            </tr>
                          ))}
                      </tbody>
                    </CustomTable>
                    <CustomPagination
                      itemsPerPage={itemsPerPage}
                      totalItems={data.length}
                      currentPage={currentPage}
                      onPageChange={handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CustomModal show={showModal} close={() => { setShowModal(false) }} action={inActive} heading='Are you sure you want to mark this user as inactive?' />
          <CustomModal show={showModal2} close={() => { setShowModal2(false) }} success heading='Marked as Inactive' />

          <CustomModal show={showModal3} close={() => { setShowModal3(false) }} action={ActiveMale} heading='Are you sure you want to mark this user as Active?' />
          <CustomModal show={showModal4} close={() => { setShowModal4(false) }} success heading='Marked as Active' />



        </div>
      </DashboardLayout>
    </>
  );
};
