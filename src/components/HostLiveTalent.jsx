import { useEffect, useState } from 'react';
import { fetchDataHostFromSpreadsheet } from '../services/DataHostLive';
import CardHostLive from './cards/CardHostLive';

const HostLiveTalent = () => {
    const [data, setData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
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
        setVisibleCount(prevCount => prevCount + 4);
      };
    
    const handleShowLess = () => {
        setVisibleCount(prevCount => (prevCount - 4 >= 4 ? prevCount - 4 : 4));
    };

    return(
        <>
         {error ? (
        <div className="text-center mt-5">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <div className='grid lg:grid-cols-4 xs:grid-cols-1 md:grid-cols-2 gap-5'>
          {data.slice(0, visibleCount).map((row, index) => (
          <div key={index} className="">
              <CardHostLive data={row}/>
          </div>
          ))}
          </div>
          <div className="flex justify-end gap-5">
            {visibleCount > 5 && (
              <button onClick={handleShowLess}>Show Less</button>
            )}
            {visibleCount < data.length && (
               <button onClick={handleShowMore}>Show Less</button>
            )}
          </div>
        </>
      )}
        </>
    )
}

export default HostLiveTalent