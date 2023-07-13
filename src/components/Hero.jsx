const Hero = () => {
  return (
    <section className="relative">
      <img
        src="https://thb.haseundrudi.com/assets/link/a21d1efb363866a61f00010d"
        alt=""
        className="w-full  object-cover aspect-square md:aspect-auto lg:h-[600px]"
      />
      <div className="md:bg-transparent p-5 md:absolute top-24 left-5 md:[text-shadow:_0_0px_8px_rgb(0_0_0_/_50%)] md:text-white">
        <p className="font-bold mb-3">Klimaneutral. Regional. Nachhaltig.</p>
        <h1 className="text-4xl md:text-5xl font-extrabold lg:leading-tight">
          <span className="text-amber-600 md:text-sky-700 [text-shadow:_0_0px_8px_rgb(255_255_255_/_50%)]">
            Erneuerbare Energie
          </span>{' '}
          für Krebeck <span className="md:block">aus Biogas, Sonne und Wind</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
