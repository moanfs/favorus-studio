import { useEffect, useState } from 'react';
import axios from 'axios';

const HostLiveTalent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
        setData(dataRows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data.map((row, index) => (
        <div key={index} className="col">
          <div className="card-talents card ">
            <img src={row.images} alt={row.nama} className="talent-image card-img-top"/>
            <h2>{row.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default HostLiveTalent;
