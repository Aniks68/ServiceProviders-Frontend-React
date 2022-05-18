import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/FoodHome/Banner/FoodHome';
import Menu from '../../components/common/Menu/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import fisherShuffle from '../../components/common/Menu/Shuffler';

const Home = () => {
  const menuRef = useRef();

  const shuffledData = fisherShuffle(menuItemsData).slice(0);

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
