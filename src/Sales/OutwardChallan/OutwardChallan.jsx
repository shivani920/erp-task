import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../NavBar/NavBar.js";
import SideNav from "../../SideNav/SideNav.js";
import "./OutwardChallan.css";


const OutwardChallan = () => {
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
    <div className="OutwardChallanMaster">
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
                <div className="OutwardChallan mt-5">
                  <div className="OutwardChallan-header mb-4 text-start">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <h5 className="header-title">Outward Challan</h5>
                      </div>
                      <div className="col-md-1">Plant</div>
                      <div className="col-md-1">
                        <select>
                          <option>ProduLink</option>
                        </select>
                      </div>
                      <div className="col-md-1">Series</div>
                      <div className="col-md-1">
                        <select>
                          <option> Select </option>
                          <option> 57F5 </option>
                          <option> Rework </option>
                          <option> Maintenance </option>
                          <option> OPEN </option>
                          <option> Not For Bill </option>
                          <option> Tool And Die </option>
                        </select>
                      </div>
                      <div className="col-md-1">
                        <input type="text" placeholder=" ## " className="w-50" />
                      </div>
                        <div className="col-md-1">
                        <label for="">Vender</label>
                        </div>
                        <div className="col-md-2">
                         <input type="text" placeholder="Enter Name" className="form-control" />
                        </div>
                        <div className="col-md-1">
                        <button type="button" className="btn">
                          Select
                        </button>
                        </div>
                        <div className="col-md-1">
                        <button type="button" className="btn">
                          Cancel
                        </button>
                        </div>
                    </div>
                  </div>

                  <div className="OutwardChallan-main mt-5">
                    <div className="OutwardChallan-tabs">
                   
                      <div className="tab-content mt-4" id="productionEntryTabsContent" >

                          <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th className="d-flex align-items-center">
                                        Type
                                        <input type="radio" id="fg" name="fav_language" value="FG" className="ms-2" />
                                        <label for="fg" className="ms-1">FG</label>
                                        <input type="radio" id="rm" name="fav_language" value="RM" className="ms-2" />
                                        <label for="rm" className="ms-1">RM</label>
                                        <input type="radio" id="itemmaster" name="fav_language" value="ITEMMASTER" className="ms-2" />
                                        <label for="itemmaster" className="ms-1">ITEM MASTER</label>
                                        </th>
                                        <th>Item Desc.</th>
                                        <th className="d-flex align-items-center">
                                        <input type="radio" id="mainstore" name="fav_language" value="MainStore" className="ms-2" />
                                        <label for="mainstore" className="ms-1">Main Store</label>
                                        <input type="radio" id="reworkstore" name="fav_language" value="ReworkStore" className="ms-2" />
                                        <label for="reworkstore" className="ms-1">Rework Store</label>
                                        </th>
                                        <th>Quantity</th>
                                        <th>Process/Operation</th>
                                        <th>Package</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input type="text" placeholder="Enter Name" className="form-control" /></td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td>
                                        <select name="" className="form-control">
                                            <option value="">NOS</option>
                                        </select>
                                        <br />
                                        Supp. Ref. No :
                                        <input type="text" className="form-control" />
                                        </td>
                                        <td>
                                        No :
                                        <input type="text" className="form-control" />
                                        <br />
                                        Kg :
                                        <input type="text" className="form-control" />
                                        </td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td><textarea className="form-control"></textarea></td>
                                        <td>
                                        W.Rate :
                                        <input type="text" className="form-control" />
                                        <br />
                                        W.Value :
                                        <input type="text" className="form-control" />
                                        </td>
                                        <td><button className="btn">Add</button></td>
                                    </tr>
                                    </tbody>
                                </table>
                          </div>

                            <div className="table-responsive">
                                        <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th>Sr.</th>
                                            <th>Item Code</th>
                                            <th>Description</th>
                                            <th>Heat Code</th>
                                            <th>Qty</th>
                                            <th>WIP Wt.</th>
                                            <th>Total Wt.</th>
                                            <th>Process Name</th>
                                            <th>Pkg</th>
                                            <th>Value</th>
                                            <th>Del</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td></td>
                                                <td><span>HSN Code :</span> </td>
                                                <td className="text-start">
                                                    Supp. Ref. NO :
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><span style={{border:"1px solid black"}}>X</span></td>
                                            </tr>
                                        </tbody>
                                        </table>
                            </div>

                      </div>

                      <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <tbody>
                                  <tr>
                                    <td>Challan No:</td>
                                    <td><input type="text" className="form-control"/></td>
                                    <td>Transport Name:</td>
                                    <td><input type="text" className="form-control"/>  </td>
                                    <td>EWay Bill No:</td>
                                    <td><input type="text" className="form-control"/></td>
                                    <td>EWay Bill Qty:</td>
                                    <td><input type="text" className="form-control"/></td>
                                  </tr>
                                  <tr>
                                    <td>Challan Date:</td>
                                    <td><input type="date" className="form-control"/></td>
                                    <td>Vehicle No:</td>
                                    <td><input type="text" className="form-control" /></td>
                                    <td>EWay Bill Date:</td>
                                    <td><input type="date" className="form-control" /></td>
                                    <td rowSpan="2">Remarks / Note:</td>
                                    <td rowSpan="2"><textarea className="form-control"></textarea></td>
                                  </tr>
                                  <tr>
                                    <td>Challan Time:</td>
                                    <td><input type="time" className="form-control" /></td>
                                    <td>Estimated Value:</td>
                                    <td><input type="text" className="form-control"/></td>
                                    <td>Rev. Charges:</td>
                                    <td>
                                      <select className="form-control">
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td> D.C No:</td>
                                    <td><input type="text" className="form-control" /></td>
                                    <td>DC Date:</td>
                                    <td><input type="date" className="form-control" /></td>
                                    <td>Rev.Ch.Amt:</td>
                                    <td><input type="text" className="form-control" /></td>
                                    <td colSpan="2"> <button className="btn btn-primary">Save Challan</button> </td>
                                  </tr>
                                </tbody>
                              </table>
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


export default OutwardChallan