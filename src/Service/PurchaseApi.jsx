// src/Service/PurchaseApi.jsx

import axios from 'axios';

// Services/PurchaseApi.jsx
const BASE_URL = "http://13.201.136.34:8000/Purchase/";
// const BASE_URL = "api/Purchase/";
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

export const deleteItem = async (id) => {
    try {
        await fetch(`${BASE_URL}ItemDetail/${id}/`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting item:', error);
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

// JobWork Poinfo
export const saveJwPoInfo = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}register_purchase_order/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const jsonResponse = await response.json();
        console.log("Response from API:", jsonResponse); // Add this line to check the full response
        return jsonResponse;
    } catch (error) {
        console.error('Error adding item:', error);
        throw error;
    }
};

// Jobwork Item


export const jobgetItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}JwItem/`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

export const jobaddItem = async (item) => {
  try {
    const response = await fetch(`${BASE_URL}JwItem/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return await response.json();
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

export const jobupdateItem = async (id, item) => {
  try {
    const response = await fetch(`${BASE_URL}JwItem/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return await response.json();
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

export const deleteItemjob = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}JwItem/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Assuming successful deletion, response might be empty
      return await response.text(); // Or use `response.json()` if expecting JSON
    } catch (error) {
      console.error('Error deleting item: ', error);
      throw error;
    }
  };


//   Ship To Add
export const saveShipToAdd = async (data) => {
    try {
      const response = await fetch(`${BASE_URL}JwShipAdd/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error saving Ship To Add:", error);
      return null;
    }
  };

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



//   fetch itme 
export const fetchItemFields = async (searchTerm = '') => {
    try {
      const response = await axios.get(`${BASE_URL}Fetch_Item_fields/`, {
        params: { search: searchTerm }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching item fields:", error);
      throw error;
    }
  };



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
export const getNextPoNumber = async (field, year) => {
  try {
    const response = await axios.get(`${BASE_URL}/get_next_code/?field=${field}&year=${year}`);
    return response.data.next_code;
  } catch (error) {
    throw new Error("Error fetching next code: " + error.message);
  }
};

export const registerPurchaseOrder = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/RegisterPO_All_Series/`, payload);
    return response.data;
  } catch (error) {
    throw new Error("Error saving purchase order: " + error.message);
  }
};
