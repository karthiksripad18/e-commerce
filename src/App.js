import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';

function App() {
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
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <main>
        Content Goes here
      </main>
    </div>
  );
}

export default App;
