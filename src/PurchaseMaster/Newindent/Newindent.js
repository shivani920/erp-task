import "./Newindent.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar";
import SideNav from "../../SideNav/SideNav";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const Newindent = () => {
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
  return (
    <div className="NewindentMaster">
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
                <div className="Newindent">
                  <div className="container-fluid">
                    <div className="col-md-12">
                      <div className="newindent1">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6 text-start">
                              <h5 style={{ color: "blue" }}>New Indent</h5>
                            </div>
                            <div className="col-md-6 text-end">
                              <button className="btn-bus">Indent List</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="newindent2">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12">
                              <form className="d-flex flex-wrap">
                                <div className="form-group">
                                  <select id="sharp" className="form-control">
                                    <option value="">Sharp...</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="series">Series:</label>
                                </div>
                                <div className="form-group">
                                  <select
                                    id="purchase"
                                    className="form-control"
                                  >
                                    <option value="">Purchase..</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="indentNo">Indent No:</label>
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="indentNo"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="indent">Inden:</label>
                                </div>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="indent"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="date">Date:</label>
                                </div>
                                <div className="form-group">
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="date"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="time">Time:</label>
                                </div>
                                <div className="form-group">
                                  <input
                                    type="time"
                                    className="form-control"
                                    id="time"
                                  />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="category">Category:</label>
                                </div>
                                <div className="form-group">
                                  <select
                                    id="category"
                                    className="form-control"
                                  >
                                    <option value="">Office</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                  </select>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="newindentmain">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-12 text-start">
                              <button className="newindentmainbtn">
                                Item Details
                              </button>
                            </div>
                          </div>
                          <div className="newindenttable">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Select Item & CPC Code</th>
                                        <th>Description</th>
                                        <th>Available Stock</th>
                                        <th>Unit</th>
                                        <th>Machine | Department</th>
                                        <th>Qty</th>
                                        <th>Type</th>
                                        <th>Remark</th>
                                        <th>Use For</th>
                                        <th>MD Ref</th>
                                        <th>Sch. Date</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <select className="form-control">
                                            <option value="">
                                              Select Item
                                            </option>
                                            <option value="item1">
                                              Item 1
                                            </option>
                                            <option value="item2">
                                              Item 2
                                            </option>
                                          </select>
                                          <button className="indenttablebtn">
                                            Search
                                          </button>
                                          <br />
                                          <select className="form-control">
                                            <option value="">
                                              Select Item
                                            </option>
                                            <option value="item1">
                                              Item 1
                                            </option>
                                            <option value="item2">
                                              Item 2
                                            </option>
                                          </select>
                                        </td>
                                        <td>
                                          <textarea
                                            className="form-control"
                                            rows="2"
                                          ></textarea>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          <select className="form-control">
                                            <option value="unit1">Nos</option>
                                            <option value="unit2">
                                              Unit 2
                                            </option>
                                          </select>
                                        </td>
                                        <td>
                                          <select className="form-control">
                                            <option value="machine1">
                                              Select
                                            </option>
                                            <option value="department1">
                                              Department 1
                                            </option>
                                          </select>
                                          <br />
                                          <select className="form-control">
                                            <option value="machine1">
                                              Quality
                                            </option>
                                            <option value="department1">
                                              Department 1
                                            </option>
                                          </select>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          <select className="form-control">
                                            <option value="type1">
                                              Regular
                                            </option>
                                            <option value="type2">
                                              Type 2
                                            </option>
                                          </select>
                                        </td>
                                        <td>
                                          <textarea
                                            className="form-control"
                                            rows="2"
                                          ></textarea>
                                        </td>
                                        <td>
                                          <textarea
                                            className="form-control"
                                            rows="2"
                                          ></textarea>
                                        </td>
                                        <td>
                                          <textarea
                                            className="form-control"
                                            rows="2"
                                          ></textarea>
                                        </td>
                                        <td>
                                          <input
                                            type="date"
                                            className="form-control"
                                          />
                                        </td>
                                        <td>
                                          <button className="indenttablebtn me-2">
                                            <FaPlus /> 
                                          </button>
                                          <button className="indenttablebtn">
                                            <FaTrash /> 
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="newindenttable1">
                            <div className="container-fluid">
                              <div className="row">
                                <div className="table-responsive">
                                  <table className="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Sr.</th>
                                        <th>Item No & CPC Code</th>
                                        <th>Description</th>
                                        <th>Unit</th>
                                        <th>Machine | Department</th>
                                        <th>Qty</th>
                                        <th>Type</th>
                                        <th>Remark</th>
                                        <th>Use For</th>
                                        <th>MD Ref</th>
                                        <th>Sch. Date</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                          <button className="indenttablebtn">
                                            <FaTrash />
                                          </button>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="newindentbottom">
                        <div className="container-fluid">
                          <div className="row text-start">
                            <div className="col-md-1">
                              <label>CPU Code :</label>
                            </div>
                            <div className="col-md-2">
                              <input className="form-control" />
                            </div>
                            <div className="col-md-1">
                              <label>Work Order:</label>
                            </div>
                            <div className="col-md-2">
                              <input className="form-control" />
                            </div>
                            <div className="col-md-1">
                              <label>Remark:</label>
                            </div>
                            <div className="col-md-2">
                              <input className="form-control" />
                            </div>
                            <div className="col-md-2">
                              <button className="newindentbottombtn">
                                Save indent
                              </button>
                            </div>
                          </div>
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

export default Newindent;
