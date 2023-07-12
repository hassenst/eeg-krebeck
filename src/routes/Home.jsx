import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import News from '../components/News';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Header hasHeaderImage={true} />
      <Hero />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Home;
