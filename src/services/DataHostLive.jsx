import axios from 'axios';
export const fetchDataHostFromSpreadsheet  = async () => {
      try {
        const response = await axios.get(
            'https://sheets.googleapis.com/v4/spreadsheets/1_y3jvecuBTGsIfvQP5g1OIUZ8OJjqAUFExN5VGUGMWA/values/Sheet1?key=AIzaSyDalBzbOFFOl6ZElLBcfXMJJB0fg4ML0cM' 
        );
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
  
