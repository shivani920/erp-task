// src/Service/PurchaseApi.jsx

import axios from 'axios';

// Services/PurchaseApi.jsx
// const BASE_URL = "http://3.7.91.234:8000/Purchase/";
const BASE_URL = "api/Purchase/";
export const addItem = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}ItemDetail/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding item:', error);
        throw error;
    }
};

export const getItems = async () => {
    try {
        const response = await fetch(`${BASE_URL}ItemDetail/`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};

export const updateItem = async (id, data) => {
    try {
        const response = await fetch(`${BASE_URL}ItemDetail/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};


// Po info
export const getPOInfo = async () => {
    const response = await fetch(`${BASE_URL}PO_Info/`);
    return response.json();
};

export const createPOInfo = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}generate_code/`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error('Error adding item:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};

export const saveJwPoInfo = async (data) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Authentication token not found. Please log in again.");
    }

    const response = await fetch(`${BASE_URL}api/NewJobWorkPO/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error saving PO info:", error);
    throw error;
  }
};


// Fetch existing Job Work PO data by ID
export const fetchJobWorkPOById = async (id) => {
  try {
    const token = localStorage.getItem("accessToken")
    const headers = {
      "Content-Type": "application/json",
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    console.log("Fetching Job Work PO with ID:", id)

    const response = await fetch(`${BASE_URL}api/NewJobWorkPO/${id}/`, {
      method: "GET",
      headers,
    })

    console.log("Fetch response status:", response.status)

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`
      try {
        const errorData = await response.text()
        console.log("Fetch error response body:", errorData)
        errorMessage += ` - ${errorData}`
      } catch (e) {
        console.log("Could not parse fetch error response")
      }
      throw new Error(errorMessage)
    }

    const result = await response.json()
    console.log("Fetched data:", result)
    return result
  } catch (error) {
    console.error("Error fetching job work PO by ID:", error)
    throw error
  }
}

// Update existing Job Work PO data
export const updateJobWorkPO = async (id, data) => {
  try {
    const token = localStorage.getItem("accessToken")

    if (!token) {
      throw new Error("Authentication token not found. Please log in again.")
    }

    // Log the data being sent for debugging
    console.log("Updating Job Work PO with ID:", id)
    console.log("Data being sent:", JSON.stringify(data, null, 2))

    const response = await fetch(`${BASE_URL}api/NewJobWorkPO/${id}/`, {
      method: "PATCH", // Try PATCH instead of PUT
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })

    // Log response details for debugging
    console.log("Response status:", response.status)
    console.log("Response headers:", response.headers)

    if (!response.ok) {
      // Try to get error details from response
      let errorMessage = `HTTP error! status: ${response.status}`
      try {
        const errorData = await response.text()
        console.log("Error response body:", errorData)
        errorMessage += ` - ${errorData}`
      } catch (e) {
        console.log("Could not parse error response")
      }
      throw new Error(errorMessage)
    }

    const result = await response.json()
    console.log("Update response:", result)
    return result
  } catch (error) {
    console.error("Error updating job work PO:", error)
    throw error
  }
}

// Fetch Job Work PO List
export const fetchJobWorkPOList = async () => {
  try {
    const token = localStorage.getItem("accessToken")

    if (!token) {
      throw new Error("Authentication token not found. Please log in again.")
    }

    const response = await fetch(`${BASE_URL}JobWorkPOList/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching Job Work PO List:", error)
    throw error
  }
}




//   Quote Comparisionexport
export const getQuotes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}Quote_Comparison_Statement/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching quotes:", error);
      throw error;
    }
  };

export const addQuote = async (data) => {
  const response = await fetch(`${BASE_URL}Quote_Comparison_Statement/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const updateQuote = async (id, data) => {
  const response = await fetch(`${BASE_URL}Quote_Comparison_Statement/${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Network response was not ok.');
  return response.json();
};

export const deleteQuote = async (id) => {
  const response = await fetch(`${BASE_URL}Quote_Comparison_Statement/${id}/`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Network response was not ok.');
};


// fetch supplier
export const fetchSupplierData = async (searchTerm = '') => {
  try {
    const response = await axios.get(`${BASE_URL}Fetch_Supplier_Code/`, {
      params: { search: searchTerm }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching supplier data:", error);
    throw error;
  }
};


export const fetchSupplierjobWorkData = async (searchTerm = '') => {
  try {
    const response = await axios.get(`${BASE_URL}SuppilerJobWorkPoFetch/`, {
      params: { search: searchTerm }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching supplier data:", error);
    throw error;
  }
};


//   fetch itme 




// Fetch the next code based on the series and year
export const fetchNextCode = async (series, year) => {
  try {
    const response = await axios.get(
      `${BASE_URL}get_next_code/`, 
      { params: { field: series, year: year } }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching next code:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
  


export const fetchNextJobWorkNumber = async (shortyear) => {
  try {
    const response = await axios.get(`${BASE_URL}get_next_job_work_number/`, {
      params: { Shortyear: shortyear },
    });
    return response.data; // Return the response data containing next_PoNo
  } catch (error) {
    console.error("Error fetching next job work number:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};

// Function to fetch the next PO code
export const getNextPoNumber = async (year) => {
  try {
    // Use the correct API endpoint and query parameter
    const response = await axios.get(
      `${BASE_URL}get_next_PurchaseNewIndent/?Shortyear=${year}`
    );
    return response.data.next_PoNo; // Ensure the key matches the API response
  } catch (error) {
    throw new Error("Error fetching next PO number: " + error.message);
  }
};


export const registerPurchaseOrder = async (data) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Authentication token not found. Please log in again.");
    }

    console.log("Sending payload:", data);

    const response = await axios.post(
      `${BASE_URL}RegisterPO_All_Series/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("API Response:", response);
    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    throw error;
  }
};


export const updatePurchaseOrder = async (id, data) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }

    const response = await fetch(`${BASE_URL}RegisterPO_All_Series/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating purchase order:", error);
    throw error;
  }
};


export const fetchPurchaseOrderById = async (id) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      throw new Error("Authentication token not found. Please login again.");
    }

    const response = await fetch(`${BASE_URL}RegisterPO_All_Series/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const order = await response.json();
    return order;
  } catch (error) {
    console.error("Error fetching purchase order:", error);
    throw error;
  }
};

export const fetchPurchaseOrders = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Authentication token not found. Please log in again.");
    }

    const response = await fetch(`${BASE_URL}PurchaseOrderList/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching purchase orders:", error);
    throw error;
  }
};




export const getItems1 = async () => {
  try {
    const response = await axios.get(`${BASE_URL}get-item-details/`)
    return response.data.ItemDetails
  } catch (error) {
    console.error("Error fetching items:", error)
    throw error
  }
}

export const fetchItemFields1 = async (itemCode) => {
  try {
    const response = await axios.get(`${BASE_URL}get-item-details/?item=${itemCode}`)
    return response.data.ItemDetails
  } catch (error) {
    console.error("Error fetching item fields:", error)
    throw error
  }
}

// ✅ GET GST Details from API
export const getGSTDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-gst-details/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GST details:", error);
    throw error;
  }
};

// ✅ POST (Update) GST Details to API
export const updateGSTDetails = async (gstDetails) => {
  try {
    const response = await axios.post(`${BASE_URL}/update-gst-details/`, gstDetails);
    return response.data;
  } catch (error) {
    console.error("Error updating GST details:", error);
    throw error;
  }
};

// ✅ GET Item Details (For GST Calculation)
export const getItemDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-item-details/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw error;
  }
};



// ✅ POST (Create Full Purchase Order)
export const createPurchaseOrder = async (purchaseData) => {
  try {
    const response = await axios.post(`${BASE_URL}/RegisterPO_All_Series/`, purchaseData);
    return response.data;
  } catch (error) {
    console.error("Error creating purchase order:", error);
    throw error;
  }
};

export const fetchScheduleData = async () => {
  try {
    const response = await fetch(`${BASE_URL}get-item-details/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    return null;
  }
};

// ✅ Update schedule data to API
export const updateScheduleData = async (scheduleLine) => {
  try {
    const response = await fetch(`${BASE_URL}update-schedule/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Schedule_Line: scheduleLine }),
    });

    return response.ok;
  } catch (error) {
    console.error("Error updating schedule:", error);
    return false;
  }
};





// ✅ Add a new item
export const addItemToAPI = async (itemData) => {
  try {
    const response = await fetch(`${BASE_URL}add-item-detail/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    });

    return response.ok ? await response.json() : null;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
};



// ✅ Fetch unit codes
export const getUnitCode = async () => {
  try {
    const response = await fetch(`${BASE_URL}get-unit-codes/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching unit codes:", error);
    return [];
  }
};



// Function to fetch item details by ID
export const    fetchItemDetails = async (id) => {
  try {
    console.log(`Fetching details for ID: ${id}`);
    const response = await axios.get(`${BASE_URL}get-item-details/${id}/`);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching item details:", error);
    throw error;
  }
};


// Function to add a new item (if needed for your use case)
export const addItemDetails = async (itemData) => {
  try {
    const response = await axios.post(`${BASE_URL}add-item/`, itemData);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};


export const createTransaction = async (transactionData) => {
  try {
    const response = await fetch(`${BASE_URL}api/transaction/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating transaction:", error);
    throw error;
  }
};

// Function to fetch transaction by ID
export const fetchTransactionById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}api/transaction/${id}/`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching transaction:", error);
    throw error;
  }
};







// Function to delete an item by ID
export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}delete-item/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

export const getNextIndentNo = async (year) => {
  try {
    const response = await axios.get(`${BASE_URL}get-next-indent-no/?year=${year}`);
    return response.data.next_IndentNo; // Correct access after await
  } catch (error) {
    throw new Error("Error fetching next indent number: " + error.message);
  }
};


// In Services/PurchaseApi.jsx
export const postIndent = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}api/indents/`, data);
    return response.data;
  } catch (error) {
    console.error("Error saving indent:", error);
    throw error;
  }
};


