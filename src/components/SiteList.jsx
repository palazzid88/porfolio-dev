import React from 'react';
import SiteCard from './SiteCard';


const SiteList = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <SiteCard
        title="Val di Sole Bikes"
        description="e commers tienda de bicicletas"
        image=""
        link="https://proyecto-backend-9f3q.onrender.com/auth/login"
      />
      <SiteCard
        title="Desde la huerta a tu casa"
        image=""
        link="https://proyecto-react-44970.web.app/"
      />
      <SiteCard
        title="Yaguaron extremo"
        image=""
        link="https://palazzid88.github.io/YaguaronExtremo/"
      />
    </div>
  );
};

export default SiteList;
