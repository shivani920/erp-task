import "./NewPurchaseOrder.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import ItemDetails from "./ItemDetails/ItemDetails.jsx";
import GSTDetails from "./GSTDetails/GSTDetails.jsx";
import ItemOther from "./ItemOther/ItemOther.jsx";
import Schedule from "./Schedule/Schedule.jsx";
import Ship from "./Ship/Ship.jsx";
import Poinfo from "./POInfo/Poinfo.jsx";
import { fetchSupplierData } from '../../Service/PurchaseApi.jsx';
const NewPurchaseOrder = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setSideNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (sideNavOpen) {
      document.body.classList.add("side-nav-open");
    } else {
      document.body.classList.remove("side-nav-open");
    }
  }, [sideNavOpen]);


  const [supplierData, setSupplierData] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchSupplierData();
        setSupplierData(data);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSupplierChange = async (e) => {
    const supplierName = e.target.value;
    setSelectedSupplier(supplierName);

    if (supplierName) {
      try {
        const data = await fetchSupplierData(supplierName);
        if (data.length > 0) {
          setSelectedCode(data[0].Code_No); // Assume the first result is the correct one
        } else {
          setSelectedCode('');
        }
      } catch (error) {
        console.error("Error fetching supplier code:", error);
      }
    } else {
      setSelectedCode('');
    }
  };

  const handleCodeChange = async (e) => {
    const code = e.target.value;
    setSelectedCode(code);

    if (code) {
      try {
        const data = await fetchSupplierData(code);
        if (data.length > 0) {
          setSelectedSupplier(data[0].Name); // Assume the first result is the correct one
        } else {
          setSelectedSupplier('');
        }
      } catch (error) {
        console.error("Error fetching supplier name:", error);
      }
    } else {
      setSelectedSupplier('');
    }
  };

  return (
    <div className="NewPurchaseMaster">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="Main-NavBar">
              <NavBar toggleSideNav={toggleSideNav} />
              <SideNav
                sideNavOpen={sideNavOpen}
                toggleSideNav={toggleSideNav}
              />

              <main className={`main-content ${sideNavOpen ? "shifted" : ""}`}>
                <div className="NewPurchse">
                  <div className="container-fluid">
                    <div className="newpurchase-header">
                      <div className="row flex-nowrap text-start">
                        <div className="col-md-2 mt-4">
                          <h5 className="header-title">New Order Purchase</h5>
                        </div>
                        <div className="col-md-1">
                          <label>PO Type:</label>
                          <select className="form-control">
                            <option value="">CLOSE</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label></label>
                          <select className="form-control">
                            <option value="">SHARP</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label>Series:</label>
                          <select className="form-control">
                            <option value="">RM</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                          </select>
                        </div>
                        <div className="col-md-1">
                          <label>Indent No:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-1">
                          <label>Supplier:</label>
                          <input
              type="text"
              className="form-control"
              value={selectedSupplier}
              onChange={handleSupplierChange}
              disabled={loading}
            />
                        </div>
                        <div className="col-md-1">
                        <button className="btn  mt-4" onClick={() => {}}>
            Select
          </button>
                        </div>
                        <div className="col-md-1">
                          <label>Code:</label>
                          <select
              className="form-control"
              value={selectedCode}
              onChange={handleCodeChange}
              disabled={loading}
            >
              <option value="">Select Code</option>
              {supplierData.map((supplier) => (
                <option key={supplier.id} value={supplier.Code_No}>
                  {supplier.Code_No}
                </option>
              ))}
            </select>
                        </div>
                        <div className="col-md-1 text-start mt-4">
                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-eye"
                          ></i>

                          <i
                            style={{ padding: "5px" }}
                            className="fas fa-bars"
                          ></i>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn newpurchase-btn">Clear</button>
                        </div>
                        <div className="col-md-1 mt-4">
                          <button className="btn newpurchase-btn">
                            PO List
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="newpirchase-main">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-Item-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Item-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-Item-Details"
                            aria-selected="true"
                          >
                            Item Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-GST-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-GST-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-GST-Details"
                            aria-selected="false"
                          >
                            GST Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-contact-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-contact"
                            type="button"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            Item Details Other
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Schedule-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Schedule"
                            type="button"
                            role="tab"
                            aria-controls="pills-Schedule"
                            aria-selected="false"
                          >
                            Schedule Line
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-Ship-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Ship"
                            type="button"
                            role="tab"
                            aria-controls="pills-Ship"
                            aria-selected="false"
                          >
                            Ship To Add
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-PO-Info-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-PO-Info"
                            type="button"
                            role="tab"
                            aria-controls="pills-PO-Info"
                            aria-selected="false"
                          >
                            PO Info
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-Item-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Item-Details-tab"
                          tabindex="0"
                        >
                          <ItemDetails />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-GST-Details"
                          role="tabpanel"
                          aria-labelledby="pills-GST-Details-tab"
                          tabindex="0"
                        >
                          <GSTDetails />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-contact"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                          tabindex="0"
                        >
                          <ItemOther />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Schedule"
                          role="tabpanel"
                          aria-labelledby="pills-Schedule-tab"
                          tabindex="0"
                        >
                          <Schedule />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-Ship"
                          role="tabpanel"
                          aria-labelledby="pills-Ship-tab"
                          tabindex="0"
                        >
                          <Ship />
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-PO-Info"
                          role="tabpanel"
                          aria-labelledby="pills-PO-Info-tab"
                          tabindex="0"
                        >
                          <Poinfo/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPurchaseOrder;