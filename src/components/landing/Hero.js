const heroPhotos = [
  {
    src: "https://picsum.photos/id/1005/600/760",
    alt: "Recuerdo juntos en la naturaleza",
    large: true,
  },
  {
    src: "https://picsum.photos/id/1011/480/360",
    alt: "Foto espontanea en viaje",
  },
  {
    src: "https://picsum.photos/id/1012/480/360",
    alt: "Momento especial en pareja",
  },
];

export default function Hero() {
  return (
    <section id="inicio" className="hero-banner">
      <div className="hero-banner__inner">
        <div className="hero-banner__text">
          <p className="hero-banner__eyebrow">Desde el 15 de marzo de 2022</p>
          <h1>4 AÑOS</h1>
          <p>Y sigo enamorandome cada dia, un poquito mas de ti.</p>
          <p className="hero-banner__whisper">
            Eres mi casualidad favorita y mi hogar.
          </p>
          <a href="#timeline" className="hero-banner__cta">
            Ver nuestra historia
          </a>
        </div>

        <div className="hero-banner__photos" aria-label="Galeria principal">
          {heroPhotos.map((photo, index) => (
            <article
              key={photo.src}
              className={`hero-photo ${photo.large ? "hero-photo--large" : ""} ${index === 1 ? "hero-photo--tilt-left" : ""} ${index === 2 ? "hero-photo--tilt-right" : ""}`.trim()}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
