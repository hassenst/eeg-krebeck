import Button from './Button';
import CountUp from './CountUp';
import News from './News';

const ContentSection = (props) => {
  return (
    <>
      <section className=" p-5">
        <div className="lg:flex gap-4">
          <div className="lg:w-6/12 text-3xl font-extrabold my-3">
            <h2 className="text-sky-700">
              Seit 2009: Die Bioenergiedörfer Krebeck, Wollbrandhausen und Bodensee
            </h2>
          </div>
          <div className="lg:w-6/12 mt-3">
            <p>
              Ganz Deutschland redet vom kommenden Gebäudeenergiegesetz. Ganz Deutschland?
              Wir nicht. Bereits seit 2009 produzieren wir klimaneutral Strom und Wärme,
              anfangs nur für die Gemeinden Krebeck und Wollbrandshausen, ab 2024 auch für
              unsere Nachbargemeinde Bodensee.
            </p>
            <p className="mt-3">
              Damals angetrieben von steigenden Preisen für fossile Energien und der Sorge
              um die Klimanwandel, erzeugen wir mittlerweile mit unserer Biogasnalage, dem
              Windpark auf dem Höherberg und einer 3 Hektar Photvoltikanlage pro Jahr ca.
              60 Mio. GWh Elekrizität.
            </p>
            <p className="mt-3">
              Mit unseren zwei Blockheizkraftwerken liefern wir zudem in der kalten
              Jahreszeit Fernwärme an unsere Mitglieder.
            </p>
          </div>
        </div>
        <div className="lg:w-8/12 my-5 lg:ml-[33.33333%]">
          <img
            src="https://thb.haseundrudi.com/assets/link/b93669f23031649d460000f3"
            alt=""
          />
        </div>
        <div className="mt-5 pt-5 border-b border-black border-solid">
          <div className="mt-5 pt-5 text-3xl font-extrabold  w-full md:flex gap-4">
            <div className="md:w-4/12 text-center md:border-r-2 mb-10 md:my-10">
              <CountUp int={21} className="text-sky-700" unit="Mio. Euro Umsatz" />
            </div>
            <div className="md:w-4/12 text-center md:border-r-2 mt-10 md:my-10">
              <CountUp int={60} className="text-sky-800" unit="GWh Strom/Jahr" />
            </div>

            <div className="md:w-4/12 text-center my-10">
              <CountUp int={400} className="text-sky-900" unit="Fernwärmeanschlüsse" />
            </div>
          </div>
        </div>
      </section>
      <div className="2xl:my-10">
        <News limit={3} />
      </div>
      <section className="p-5 my-5">
        <div className="py-10 w-full lg:flex gap-4 border-t border-black border-solid">
          <div className="lg:w-6/12 flex flex-col justify-between">
            <h2 className="text-amber-600 font-bold text-3xl mb-5">
              Reich uns die Flosse, werde Genosse
            </h2>
            {/** Button Component */}
            <div className="hidden lg:block">
              <Button
                bg="amber"
                color="white"
                cta="Jetzt Energiegenosse werden"
                url="genosse-werden"
              />
            </div>
          </div>
          <div className="lg:w-6/12">
            <p>
              Sie wohnen in Krebeck, Wollbrandshausen oder Bodensee? Sie haben noch eine
              <strong> alte Öl- oder Gasheizung?</strong> Dann wird's aber Zeit, dass wir
              uns unterhalten.
            </p>
            <p className="mt-3">
              Werden Sie Mitglied unserer Energiegenossenschaft und beziehen Sie{' '}
              <strong>günstige Fernwärme aus eneuerbaren Energien</strong>. Nie mehr ein
              schlechtes Gewissen. Der steigende CO2-Preis kann Ihnen ab sofort egal sein.{' '}
            </p>
            <p className="mt-3">
              Vereinbaren Sie einen unverbindlichen Beratungstermin. Wir informieren Sie
              über Ihre Möglichkeit des Anschlusses an das bereits bestehende
              Fernwärmenetz, Anschlussgebühren und alle Vorteile, die Sie genießen werden.
            </p>
            <p className="mt-3">
              Als Energiegenosse sind Sie nicht unser Kunde. Sie sind Miteigentümer und
              entscheiden über die Zukunft der Genossenschaft. Zudem haben Sie die
              Möglichkeit, neben Ihrem Genossenschaftsanteil, renditestarke, sichere
              Kapitalanlagen abzuschließen.
            </p>
            <div className="lg:hidden mt-5">
              <Button
                bg="amber"
                color="white"
                cta="Jetzt Energiegenosse werden"
                url="genosse-werden"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection;
