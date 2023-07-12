import { Link } from 'react-router-dom';

const Button = ({ bg, cta, url, color }) => {
  return (
    <div>
      <Link
        className={`text-sm md:text-lg bg-amber-600 hover:bg-amber-700 text-${color} p-3 font-bold inline-block transition ease-in-out duration-300`}
        to={`${url}`}
      >
        {cta} <span>⟶</span>
      </Link>
    </div>
  );
};

export default Button;
