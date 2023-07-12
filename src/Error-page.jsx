import { useRouteError } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="max-w-screen-2xl flex flex-col m-auto h-full rotate-180">
      <Header />
      <main className="grow mt-24 p-5 flex flex-col justify-center items-center rotate-180">
        <h1 className="text-8xl lg:text-9xl font-extrabold mb-5">404</h1>
        <p>Es tut uns leid</p>
        <p>Etwas ist schief gelaufen</p>
      </main>

      <Footer />
    </div>
  );
}
