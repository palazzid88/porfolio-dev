import React from 'react';

const SiteCard = (props) => {
  const { title, image, link } = props;

  return (
    <div style={{ margin: '20px', width: '300px' }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
        <div style={{ textAlign: 'center' }}>{title}</div>
      </a>
    </div>
  );
};

export default SiteCard;
