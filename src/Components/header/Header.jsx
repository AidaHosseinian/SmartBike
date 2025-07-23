import React, {useState , useEffect, useCallback} from "react";
import  "./header.scss";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false) 

  const toggleMenu = useCallback((e) => { 
    e.stopPropagation(); 
    setIsOpen(prev => !prev);
  }, []);
  
  const handleClickOutside = useCallback(e => {  
    setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  },[handleClickOutside]);


  return (
    <header className="header">
      <div className="header-inner">
        <div className="header__login">left</div>
        <div className="header__logo">center</div>
        <div className="header__nav">
          <div className="header__nav__item">تماس با ما</div>
          <div className="header__nav__item">درباره ما</div>
          <div className="header__nav__item">محصولات</div>

          <div className="menu-container" >
              <button className="menu-toggle" onClick={toggleMenu}>
                <i class='fa fa-bars'></i>
              </button>
               
                <div className={`menu-window ${isOpen ? "menu-window--open" : ''}`}>
                  <ul>
                    <li><a href="/products">محصولات</a></li>
                    <li><a href="/about us">درباره ما</a></li>
                    <li><a href="/contact">تماس با ما</a></li>
                    <li><a href="/log in">ورود</a></li>
                  </ul>
                </div>
               
          </div>

        </div>
      </div>
    </header>
  );
};   

export default Header;