import axios from 'axios';
const client_key = import.meta.env.VITE_SPREADSHEET_KEY
const client_sheet = import.meta.env.VITE_SPREADSHEET_SHEET

export const fetchDataHostFromSpreadsheet  = async () => {
      try {
        const response = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${client_sheet}/values/Sheet1?key=${client_key}`);
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
  
