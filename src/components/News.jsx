import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import timestampToDatestring from '../helper';
const apiUrl = 'https://thb.haseundrudi.com/api/';

const News = (params) => {
  const [data, setData] = useState(null);
  const limit = params.limit ? params.limit : 10;

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(`${apiUrl}content/items/news?limit=${limit}`)
      ).json();
      setData(data);
    };

    dataFetch();
  }, []);

  let conditionalClass = 'mt-24';

  return (
    <div>
      {data && (
        <div
          className={`grid md:grid-cols-2 md:grid-rows-2 md:gap-4 p-5 ${
            params.category && conditionalClass
          }`}
        >
          <div className=" py-3 md:p-3 ">
            <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-sky-800">
              Aktuelles
            </h2>
            <p>Wichtige Neuigkeiten für unsere Mitglieder</p>
          </div>
          {data.map((news) => (
            <div
              key={news._id}
              className="md:bg-sky-50 hover:md:bg-sky-200 py-3 md:p-3 border-t border-black border-solid md:border-none flex flex-col justify-between transition-colors ease-in-out duration-300"
            >
              <h3 className="font-bold md:text-3l">
                <Link to={`/news/${news._id}`}>{news.title}</Link>
              </h3>
              <p className="md:mt-3 text-sm">{timestampToDatestring(news._created)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
