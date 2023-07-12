import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = ({ hasHeaderImage }) => {
  const [show, setShow] = useState('hidden');
  const [navigation, setNavigation] = useState('');
  const [offset, setOffset] = useState(0);
  const [fade, setFade] = useState('');
  const [color, setColor] = useState('lg:text-white');
  const [fill, setFill] = useState('#ffffff');

  /**
   * Show or hide menu on  mobile
   */

  const toogle = () => {
    if (show == '') {
      setShow('hidden');
      setNavigation('');
    } else {
      setShow('');
      setNavigation('h-screen fixed z-40 w-full top-0 left-0 bg-white');
    }
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (offset < 100 && hasHeaderImage) {
      setFade('');
      setColor('lg:text-white');
      setFill('#ffffff');
    } else {
      setFade('bg-white');
      setColor('lg:text-black');
      setFill('#000000');
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return (
    <header className={`py-4 fixed z-50 w-full max-w-screen-2xl top-0 m-auto ${fade}`}>
      <div className="flex items-center justify-between px-5">
        <div className="w-25">
          <NavLink to={`/`} title="BEWK eG">
            <div className="flex items-center">
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 100 100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
              >
                <path
                  fill="rgb(7 89 133)"
                  d="M50,0C22.387,0 0,22.386 0,50C0,77.614 22.387,100 50,100C77.614,100 100,77.614 100,50C100,22.386 77.614,0 50,0ZM50,19.913C56.011,25.128 59.64,36.086 57.219,42.079C56.128,44.777 53.95,46.063 50.749,45.956L50.749,41.53L54.736,39.215C55.093,39.007 55.215,38.548 55.007,38.19C54.8,37.833 54.343,37.711 53.982,37.919L50.749,39.797L50.749,30.199C50.749,29.785 50.413,29.449 49.999,29.449C49.585,29.449 49.249,29.785 49.249,30.199L49.249,35.071L46.96,32.944C46.657,32.662 46.182,32.679 45.9,32.983C45.618,33.287 45.635,33.761 45.939,34.043L49.249,37.117L49.249,45.957C46.058,46.066 43.871,44.779 42.781,42.081C40.359,36.087 43.989,25.128 50,19.913ZM52.979,57.077C55.296,57.077 57.182,58.963 57.182,61.28L57.182,69.739L42.816,69.739L42.816,61.28C42.816,58.963 44.702,57.077 47.02,57.077L52.979,57.077ZM49.25,55.577L49.25,47.463C49.497,47.456 49.743,47.449 49.999,47.427L50,47.427C50.255,47.449 50.502,47.456 50.75,47.463L50.75,55.577L49.25,55.577ZM45.216,79.337C45.216,79.751 44.88,80.087 44.466,80.087C44.052,80.087 43.716,79.751 43.716,79.337L43.716,75.558L45.216,75.558L45.216,79.337ZM56.283,79.337C56.283,79.751 55.947,80.087 55.533,80.087C55.119,80.087 54.783,79.751 54.783,79.337L54.783,75.558L56.283,75.558L56.283,79.337ZM58.537,74.058L41.463,74.058L41.463,71.24L58.537,71.24L58.537,74.058Z"
                />
              </svg>
              <span className="pl-2 text-sky-800 font-extrabold">BEWK</span>
            </div>
          </NavLink>
        </div>
        <nav>
          <button className="lg:hidden w-6" onClick={toogle}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 60 45"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
            >
              <g transform="matrix(1,0,0,1,-20,-25)">
                <g>
                  <rect x="20" y="46" width="40" height="4" fill={`${fill}`} />
                  <rect x="20" y="25" width="60" height="4" fill={`${fill}`} />
                  <rect x="20" y="66" width="60" height="4" fill={`${fill}`} />
                </g>
              </g>
            </svg>
          </button>
          <button className={`fixed top-5 right-5 z-50 ${show} w-12`} onClick={toogle}>
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
              width="100%"
              height="100%"
            >
              <g transform="translate(0,-952.36218)">
                <path
                  d="M 28.8496,978.36218 26,981.21178 47.1504,1002.3622 26,1023.5126 28.8496,1026.3622 50,1005.2118 71.1504,1026.3622 74,1023.5126 52.8496,1002.3622 74,981.21178 71.1504,978.36218 50,999.51258 28.8496,978.36218 z"
                  fill="#000000"
                  fillOpacity="1"
                  stroke="none"
                  visibility="visible"
                  display="inline"
                  overflow="visible"
                />
              </g>
            </svg>
          </button>
          <ul
            className={`bg-white lg:bg-transparent ${show} ${navigation} flex lg:flex flex-col lg:flex-row text-center items-center justify-center text-2xl lg:text-lg font-bold ${color}`}
          >
            <li className="md:hidden">
              <NavLink
                className="block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/news`}
              >
                Aktuelles
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/biogas`}
              >
                Biogas
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/wind`}
              >
                Wind
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/solar`}
              >
                Solar
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/fernwaerme`}
              >
                Wärme
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block p-4 hover:text-sky-700 transition-colors duration-300 ease-in-out"
                to={`/genosse-werden`}
              >
                Genosse werden
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
