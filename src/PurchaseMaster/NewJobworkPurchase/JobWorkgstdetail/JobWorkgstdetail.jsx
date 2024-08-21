import React from 'react'
import './JobWorkgstdetail.css'
const JobWorkgstdetail = () => {
  return (
    <div className="JobworkGStDetails">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Item Code</th>
                <th>HSN</th>
                <th>Rate</th>
                <th>Qty</th>
                <th>Sub Total</th>
                <th>Discount</th>
                <th>Packing</th>
                <th>Transport</th>
                <th>Tool Amort</th>
                <th>Ass Value</th>
                <th>CGST</th>
                <th>SGST</th>
                <th>IGST</th>
                <th>Vat</th>
                <th>Cess</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="number" className="form-control" /></td>
                <td><input type="number" className="form-control" /></td>
                <td><input type="text" className="form-control" readOnly /></td>
                <td>
                  <div>Disc:</div>
                  <div>Amt:</div>
                </td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td>
                  <input type="number" className="form-control" />
                  <div>Amt:</div>
                </td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" /></td>
                <td><input type="text" className="form-control" readOnly /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="jobworkgsttable">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
        <table className="table table-bordered table-responsive">
        <tbody>
          
          <tr>
            <td>TDC Assable Value:</td>
            <td><input type="text" className="form-control" value="00.00" /></td>
            <td>CGST:</td>
            <td><input type="text" className="form-control" value="00.00" /></td>
          </tr>
          
          <tr>
            <td>
              {/* <input type="checkbox" id="packForward" /> */}
              <label htmlFor="packForward">Pack. & Fwrd. Charges:</label>
            </td>
            <td><input type="text" className="form-control" value="00.00" /></td>
            <td>SGST:</td>
            <td><input type="text" className="form-control" value="00.00" /></td>
          </tr>
          
          <tr>
            <td>
              {/* <input type="checkbox" id="transportCharges" /> */}
              <label htmlFor="transportCharges">Transport Charges:</label>
            </td>
            <td><input type="text" className="form-control" value="00.00" /></td>
            <td>IGST:</td>
            <td><input type="text" className="form-control" value="00.00" /></td>
          </tr>
          
          <tr>
            <td>
              {/* <input type="checkbox" id="insurance" /> */}
              <label htmlFor="insurance">Insurance:</label>
            </td>
            <td><input type="text" className="form-control" value="00.00" /></td>
            <td>VAT:</td>
            <td><input type="text" className="form-control" value="00.00" /></td>
          </tr>
          
          <tr>
            <td>
              {/* <input type="checkbox" id="installationCharges" /> */}
              <label htmlFor="installationCharges">Installation Charges:</label>
            </td>
            <td><input type="text" className="form-control" value="00.00" /></td>
            <td>CESS:</td>
            <td><input type="text" className="form-control" value="00.00" /></td>
          </tr>
        </tbody>
      </table>
        </div>
      </div>
    
    </div>
    </div>
  
    </div>
  )
}

export default JobWorkgstdetail