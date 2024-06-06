import axios from 'axios';
const BASE_URL = import.meta.env.VITE_REST_API;

export const fetchDataHostFromSpreadsheet  = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`);
        const rows = response.data.values;
        const headers = rows[0];
        const dataRows = rows.slice(1).map(row => {
          const rowData = {};
          headers.forEach((header, index) => {
            rowData[header] = row[index];
          });
          return rowData;
        });
        return dataRows;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Maaf, terjadi kesalahan pada sistem'); 
      }
    };
  
