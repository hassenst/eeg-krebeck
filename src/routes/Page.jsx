import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const apiUrl = 'https://thb.haseundrudi.com/api/';
import HTMLReactParser from 'html-react-parser';
import Form from '../components/Form';
import Button from '../components/Button';
import Footer from '../components/Footer';

/**
 * @param {*} timestamp
 * @returns DateString
 */

const date = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

const Page = (props) => {
  const [data, setData] = useState(null);
  let { id } = useParams();
  let contentPath = props.type ? `${props.type}/${id}` : `page/${props.pageId}`;

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (await fetch(`${apiUrl}content/item/${contentPath}`)).json();
      // set state when the data received
      setData(data);
      document.title = `Bioenergie Krebeck | ${data.title}`;
    };

    dataFetch();
  }, [contentPath]);

  return (
    data && (
      <div className="max-w-screen-2xl flex flex-col m-auto h-full">
        <Header />
        <main className="grow">
          <article className="mt-24 p-5 lg:flex gap-6">
            <div className="lg:w-6/12 lg:sticky top-32 lg:self-start">
              {props.type && <p className="text-sm">{date(data._created)}</p>}
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-sky-800">
                {data.title}
              </h1>
              {data.image && (
                <figure>
                  <img
                    className="mt-3 object-cover w-full aspect-video"
                    src={`https://thb.haseundrudi.com/storage/uploads/${data.image.path}`}
                    alt={data.image.description}
                  />
                  <figcaption className="mt-1 text-xs">
                    {data.image.description}
                  </figcaption>
                </figure>
              )}
              {data.hasCta && (
                <Button
                  bg="amber"
                  color="white"
                  cta="Jetzt Energiegenosse werden"
                  url="#form"
                />
              )}
              {data.hasForm && <Form data={data._id} />}
            </div>
            <div className="lg:w-6/12 content">{HTMLReactParser(data.content)}</div>
          </article>
        </main>

        <Footer />
      </div>
    )
  );
};

export default Page;
