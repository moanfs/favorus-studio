import { useEffect, useState } from 'react';
import { fetchDataHostFromSpreadsheet } from '../services/DataHostLive';
import CardHostLive from './cards/CardHostLive';
import ButtonCustom from './buttons/ButtonCustom';

const HostLiveTalent = () => {
    const [data, setData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const dataFromSpreadsheet = await fetchDataHostFromSpreadsheet();
                setData(dataFromSpreadsheet);
              } catch (error) {
                setError(error.message);
              }
        }
        fetchData();
    }, []);
    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 5);
      };
    
    const handleShowLess = () => {
        setVisibleCount(prevCount => (prevCount - 5 >= 5 ? prevCount - 5 : 5));
    };

    return(
        <>
         {error ? (
        <div className="text-center mt-5">
          <p>{error}</p>
        </div>
      ) : (
        <>
          {data.slice(0, visibleCount).map((row, index) => (
            <div key={index} className="col-10 col-lg-4 card-talents">
              <CardHostLive data={row} />
            </div>
          ))}
          <div className="gap-2 col-8 col-lg-12 d-flex justify-content-center">
            {visibleCount > 5 && (
              <ButtonCustom color="primary" position="center" onClick={handleShowLess}>Show Less</ButtonCustom>
            )}
            {visibleCount < data.length && (
              <ButtonCustom color="primary" position="center" onClick={handleShowMore}>Show More</ButtonCustom>
            )}
          </div>
        </>
      )}
        </>
    )
}

export default HostLiveTalent