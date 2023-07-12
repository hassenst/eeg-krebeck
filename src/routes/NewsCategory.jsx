import Header from '../components/Header';
import News from '../components/News';

const NewsCategory = (params) => {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Header></Header>
      <News category="true" />
    </div>
  );
};

export default NewsCategory;
