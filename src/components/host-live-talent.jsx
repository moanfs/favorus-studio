import { useEffect, useState } from 'react';
import axios from 'axios';

const HostLiveTalent = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5); //jumlah yang ditampilkan awal
  const [error, setError] = useState(null); // untuk mencatat error

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
        setError('Maaf, terjadi kesalahan pada sistem'); // pesan kesalahan
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Tambahkan 5 item lagi setiap kali tombol diklik
  };

  const handleShowLess = () => {
    setVisibleCount(prevCount => (prevCount - 5 >= 5 ? prevCount - 5 : 5)); // Kurangi 5 item dengan batas minimal 5
  };

  return (
    <>
      {error ? (
        <div className="text-center mt-5">
          <p>{error}</p>
        </div>
      ) : (
      <>
        {/* {data.map((row, index) => ( */}
        {data.slice(0, visibleCount).map((row, index) => (
          <div key={index} className="col-10 col-lg-4 card-talents">
            {/* <div className=""> */}
              <img src={row.images} alt={row.nama} className="talent-image card-img-top"/>
              <h5 className="text-capitalize">{row.name}</h5>
            {/* </div> */}
          </div>
          ))}
        {/* ))} */}
        <div className="d-flex flex-row-reverse col-10 col-lg-12">
          {visibleCount < data.length && (
            <button className="btn btn-show-more fs-6" onClick={handleShowMore}>Show More <i className="bi bi-arrow-right"></i></button>
          )}
          {visibleCount > 5 && (
              <button className="btn btn-show-more fs-6" onClick={handleShowLess}><i className="bi bi-arrow-left"></i> Show Less</button>
            )}
        </div>
      </>
      )}
    </>
  );
};

export default HostLiveTalent;
