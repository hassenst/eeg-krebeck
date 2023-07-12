import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative">
      <footer className="text-white bg-sky-900 p-5 py-10 text-center">
        <nav>
          <ul className="md:flex ">
            <li>
              <NavLink to={`/impressum`} className="p-3 lg:pl-0 hover:text-sky-200 block">
                Impressum
              </NavLink>
            </li>
            <li>
              <NavLink to={`/datenschutz`} className="p-3 hover:text-sky-200 block">
                Datenschutz
              </NavLink>
            </li>
            <li>
              <NavLink to={`/kontakt`} className="p-3 hover:text-sky-200 block">
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
