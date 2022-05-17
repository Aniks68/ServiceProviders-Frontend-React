import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import fisherShuffle from '../../components/common/Menu/Shuffler';

const Home = () => {
  const menuRef = useRef();

  const shuffledData = fisherShuffle(menuItemsData).slice(0, 6);

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={shuffledData} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
