import React, { useEffect, useState } from 'react';
import SiteCard from './SiteCard';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const SiteList = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, 'proyectos' ));
    const dataArray = [];
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data());
    })
    console.log("data", dataArray)
    setData(dataArray)
    };

    fetchData()
  }, [])
  return (
    <div className='div-container-proyectos'>
      {/* Renderiza los datos obtenidos de la base de datos */}
      {data.map((item, index) => (
        <div key={index} className='div-poyectos' > 
          {/* <h2>{item.img}</h2>
          <p>{item.category}</p> */}
          <img src={item.img} alt="" className='img-proyectos' />
          {/* Agrega otros datos que desees mostrar */}
        </div>
      ))}
    </div>
  );
};

export default SiteList;
