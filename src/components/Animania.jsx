import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../img/QGoo1FD07t.json';

const Animania = () => {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      });
      return () => anim.destroy(); // Limpia la animación cuando el componente se desmonta
    }
  }, []);

  return <div ref={container} />;
};

export default Animania;
