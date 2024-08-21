import React, { useState } from "react";
import "./Poinfo.css";
import { FaPlus, FaSync, FaEdit, FaTrash } from "react-icons/fa";
import { createPOInfo } from "../../../Service/PurchaseApi";
import { toast, ToastContainer } from "react-toastify";

const Poinfo = () => {
  const [showCard, setShowCard] = useState(false);
  const handleAddClick = () => {
    setShowCard(true);
  };
  const handleRefreshClick = () => {
    console.log("Data refreshed");
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };
  const [formData, setFormData] = useState({
    PoNo: "",
    EnquiryNo: "",
    QuotNo: "",
    PaymentTerms: "",
    DeliveryDate: "",
    AMC_PO: "",
    ModeOfShipment: "",
    PreparedBy: "",
    PoNote: "",
    PoSpecification: "",
    PoDate: "",
    EnquiryDate: "",
    QuotDate: "",
    PaymentRemark: "",
    DeliveryType: "",
    DeliveryNote: "",
    IndentNo: "",
    ApprovedBy: "",
    InspectionTerms: "",
    PF_Charges: "",
    Time: "",
    PoFor: "",
    Freight: "",
    PoRateType: "",
    ContactPerson: "",
    PoValidityDate: "",
    PoEffectiveDate: "",
    TransportName: "",
    PoValidity_WarrantyTerm: "",
    GstTaxes: "",
  });

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    // let validationErrors = {};
    // for (const [key, value] of Object.entries(formData)) {
    //   if (!value.trim()) {
    //     validationErrors[key] = "This field is required";
    //   }
    // }

    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }

    // setErrors({}); // Clear errors if validation passes

    try {
      await createPOInfo(formData);
      toast.success("Purchase Order submitted successfully!");
      console.log("formData", formData);
      handleClear(); // Optionally clear the form after successful submission
    } catch (error) {
      toast.error("Failed to submit Purchase Order.");
      console.log(error);
    }
  };

  const handleClear = () => {
    setFormData({
      PoNo: "",
      EnquiryNo: "",
      QuotNo: "",
      PaymentTerms: "",
      DeliveryDate: "",
      AMC_PO: "",
      ModeOfShipment: "",
      PreparedBy: "",
      PoNote: "",
      PoSpecification: "",
      PoDate: "",
      EnquiryDate: "",
      QuotDate: "",
      PaymentRemark: "",
      DeliveryType: "",
      DeliveryNote: "",
      IndentNo: "",
      ApprovedBy: "",
      InspectionTerms: "",
      PF_Charges: "",
      Time: "",
      PoFor: "",
      Freight: "",
      PoRateType: "",
      ContactPerson: "",
      PoValidityDate: "",
      PoEffectiveDate: "",
      TransportName: "",
      PoValidity_WarrantyTerm: "",
      GstTaxes: "",
    });
    // setErrors({});
  };

  return (
    <div className="Poinfo">
      <ToastContainer />
      <div className="Poinfo1">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PoNo">PO No:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PoNo"
                        className="form-control"
                        placeholder="Enter PO Number"
                        value={formData.PoNo}
                        onChange={handleChange}
                      />
                        {/* {errors.PoNo && <div className="invalid-feedback">{errors.PoNo}</div>} */}
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="EnquiryNo">Enquiry No:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="EnquiryNo"
                        className="form-control"
                        placeholder="Enter Enquiry Number"
                        value={formData.EnquiryNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="QuotNo">Quot No/Ref:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="QuotNo"
                        className="form-control"
                        placeholder="Enter Quotation Number"
                        value={formData.QuotNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PaymentTerms">Payment Terms:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PaymentTerms"
                        className="form-control"
                        placeholder="Enter Payment Terms"
                        value={formData.PaymentTerms}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="DeliveryDate">Delivery Date:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="DeliveryDate"
                        className="form-control"
                        value={formData.DeliveryDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="AMC_PO">AMC PO:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="AMC_PO"
                        className="form-control"
                        placeholder="Enter AMC PO"
                        value={formData.AMC_PO}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="ModeOfShipment">Mode of Shipment:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="ModeOfShipment"
                        className="form-control"
                        placeholder="Enter Mode of Shipment"
                        value={formData.ModeOfShipment}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label htmlFor="PreparedBy">Prepared by:</label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PreparedBy"
                        className="form-control"
                        placeholder="Enter Prepared by"
                        value={formData.PreparedBy}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="PoDate">
                        PO Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="PoDate"
                        className="form-control"
                        placeholder="Select PO Date"
                        value={formData.PoDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="EnquiryDate">
                        Enquiry Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="EnquiryDate"
                        className="form-control"
                        placeholder="Select Enquiry Date"
                        value={formData.EnquiryDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="QuotDate">
                        Quot Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="QuotDate"
                        className="form-control"
                        placeholder="Select Quot Date"
                        value={formData.QuotDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="PaymentRemark"
                      >
                        Payment Remark:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PaymentRemark"
                        className="form-control"
                        placeholder="Enter Payment Remark"
                        value={formData.PaymentRemark}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="DeliveryType"
                      >
                        Delivery Type/Period:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="DeliveryType"
                        className="form-control"
                        placeholder="Enter Delivery Type/Period"
                        value={formData.DeliveryType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="DeliveryNote"
                      >
                        Delivery/Note:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="DeliveryNote"
                        className="form-control"
                        placeholder="Enter Delivery Note"
                        value={formData.DeliveryNote}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="IndentNo"
                      >
                        Indent No/Note:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="IndentNo"
                        className="form-control"
                        placeholder="Enter Indent No/Note"
                        value={formData.IndentNo}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="ApprovedBy">
                        Approved by:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="ApprovedBy"
                        className="form-control"
                        placeholder="Enter Approved by"
                        value={formData.ApprovedBy}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="Time">
                        Time:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="Time"
                        className="form-control"
                        placeholder="Enter Time"
                        value={formData.Time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="PoFor">
                        PO For:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PoFor"
                        className="form-control"
                        placeholder="Enter PO For"
                        value={formData.PoFor}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="Freight">
                        Freight:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="Freight"
                        className="form-control"
                        placeholder="Enter Freight"
                        value={formData.Freight}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-1">
                    <button
                      type="button"
                      className="po1btn"
                      onClick={handleAddClick}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <div className="col-md-1">
                    <button
                      type="button"
                      className="po1btn"
                      onClick={handleRefreshClick}
                    >
                      <FaSync />
                    </button>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label className="form-check-label" htmlFor="PoRateType">
                        PO Rate Type:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="PoRateType"
                        className="form-control"
                        placeholder="Enter PO Rate Type"
                        value={formData.PoRateType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="ContactPerson"
                      >
                        Contact Person:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="ContactPerson"
                        className="form-control"
                        placeholder="Enter Contact Person"
                        value={formData.ContactPerson}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="PoValidityDate"
                      >
                        PO Validity Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="PoValidityDate"
                        className="form-control"
                        placeholder="Select PO Validity Date"
                        value={formData.PoValidityDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="PoEffectiveDate"
                      >
                        PO Effective Date:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="date"
                        id="PoEffectiveDate"
                        className="form-control"
                        placeholder="Select PO Effective Date"
                        value={formData.PoEffectiveDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row text-start">
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label
                        className="form-check-label"
                        htmlFor="TransportName"
                      >
                        Transport Name:
                      </label>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        id="TransportName"
                        className="form-control"
                        placeholder="Enter Transport Name"
                        value={formData.TransportName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-md-4 mb-3">
                <label htmlFor="PoNote" className="form-label">
                  PO Note
                </label>
                <textarea
                  id="PoNote"
                  className="form-control"
                  rows="3"
                  placeholder="Enter PO Note"
                  value={formData.PoNote}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="InspectionTerms" className="form-label">
                  Inspection Terms
                </label>
                <textarea
                  id="InspectionTerms"
                  className="form-control"
                  rows="3"
                  placeholder="Enter Inspection Terms"
                  value={formData.InspectionTerms}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="POValidity" className="form-label">
                  PO Validity/Warranty Terms
                </label>
                <textarea
                  id="POValidity"
                  className="form-control"
                  rows="3"
                  placeholder="Enter PO Validity"
                  value={formData.PoValidity}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="row text-start">
              <div className="col-md-6 mb-3">
                <label htmlFor="SpecificationDocuments" className="form-label">
                  PO Specification/Schedule/Documents Required/Transit Insurance
                </label>
                <textarea
                  id="SpecificationDocuments"
                  className="form-control"
                  rows="3"
                  placeholder="Enter Specification/Schedule/Documents Required/Transit Insurance"
                  value={formData.SpecificationDocuments}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="PFChangesNote" className="form-label">
                  P&F Changes Note
                </label>
                <textarea
                  id="PFChangesNote"
                  className="form-control"
                  rows="3"
                  placeholder="Enter P&F Changes Note"
                  value={formData.PFChangesNote}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="col-md-3 mb-3">
                <label htmlFor="GstTaxes" className="form-label">
                  GST (Taxes) Note/Other Charges
                </label>
                <textarea
                  id="GstTaxes"
                  className="form-control"
                  rows="3"
                  placeholder="Enter GST Note/Other Charges"
                  value={formData.GstTaxes}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="row text-end">
            <div className="col-md-11">
          <button type="submit" className="pobtn">
            Save Purchase Order
          </button>
        </div>
        <div className="col-md-1">
          <button type="button" className="pobtn" onClick={handleClear}>
            Clear
          </button>
        </div>
            </div>
            {showCard && (
              <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div className="row">
                        <div className="col-md-12 text-start">
                          <h5 className="modal-title text-primary">
                            Freight Master
                          </h5>
                        </div>
                        {/* <div className="col-md-12 text-end">
                <button type="button" className="close" onClick={handleCloseCard}>
            <span aria-hidden="true">&times;</span>
          </button>
                </div> */}
                      </div>
                    </div>
                    <div className="modal-body">
                      {/* Form content */}
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <label htmlFor="freightName">
                            Enter Freight Name:
                          </label>
                          <input
                            type="text"
                            id="freightName"
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-6">
                          <button type="button" className="btn mt-4">
                            Save
                          </button>
                        </div>
                      </div>
                      {/* Table content */}
                      <table className="table mt-4">
                        <thead>
                          <tr>
                            <th>Sr No.</th>
                            <th>Freight Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Example row */}
                          <tr>
                            <td>1</td>
                            <td>Example Freight</td>
                            <td>
                              <button className="btn">
                                <FaEdit />
                              </button>
                            </td>
                            <td>
                              <button className="btn">
                                <FaTrash />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn"
                        onClick={handleCloseCard}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Poinfo;