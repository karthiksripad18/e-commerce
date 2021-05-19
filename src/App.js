import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import {selectLoadingState} from './redux/loadingSlice';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Routes from './Routes';

function App() {
  const loader = useSelector(selectLoadingState);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(
    () => {
      const hideMenu = () => {
        if (window.innerWidth > 768 && isOpen ) setIsOpen(false);
      };
      window.addEventListener('resize', hideMenu);
      return () => {
        window.removeEventListener('resize', hideMenu);
      }
    }
  );

  return (
    <div className="font-rochester text-white min-w-screen">
      <LoadingOverlay active={loader.isLoading} spinner text={loader.loadingMessage}>
        <Navbar toggle={toggle} />
        <Dropdown toggle={toggle} isOpen={isOpen} />
        <main className="min-w-screen h-90v">
            <Routes />
        </main>
      </LoadingOverlay>
    </div>
  );
}

export default App;
