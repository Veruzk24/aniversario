const timelineMoments = [
  {
    date: "15 marzo 2022",
    title: "El inicio de nosotros",
    description:
      "Ese día empezó esta historia bonita. Desde entonces, cada recuerdo contigo tiene su propio brillo.",
    photo: "https://picsum.photos/id/1062/900/620",
    alt: "Primer recuerdo juntos",
  },
  {
    date: "20 agosto 2023",
    title: "Una aventura inolvidable",
    description:
      "Nos perdimos en risas, caminatas largas y miradas que lo decían todo. Fue uno de esos días que quiero repetir siempre.",
    photo: "https://picsum.photos/id/1015/900/620",
    alt: "Viaje especial en pareja",
  },
  {
    date: "15 marzo 2024",
    title: "Otro aniversario a tu lado",
    description:
      "Celebrar contigo se siente como volver a elegirnos. Cada año confirma que eres mi lugar favorito.",
    photo: "https://picsum.photos/id/1003/900/620",
    alt: "Celebracion de aniversario",
  },
  {
    date: "Hoy",
    title: "Seguimos escribiendo nuestra historia",
    description:
      "Lo mejor de nosotros es que todavia quedan muchos capitulos por vivir, fotos por tomar y abrazos por guardar.",
    photo: "https://picsum.photos/id/1027/900/620",
    alt: "Momento actual en pareja",
  },
];

export default function LoveTimeline() {
  return (
    <section
      id="timeline"
      className="love-timeline"
      aria-label="Timeline de nuestra historia"
    >
      <header className="love-timeline__header">
        <p className="love-timeline__eyebrow">Nuestra linea del tiempo</p>
        <h2>Nuestros momentos, uno por uno</h2>
        <p>
          Puedes cambiar cada foto, fecha y texto para contar su historia tal
          como la han vivido.
        </p>
      </header>

      <ol className="love-timeline__list">
        {timelineMoments.map((moment, index) => (
          <li
            className={`love-timeline__item ${index % 2 === 0 ? "love-timeline__item--left" : "love-timeline__item--right"}`}
            key={`${moment.date}-${moment.title}`}
          >
            <span className="love-timeline__dot" aria-hidden="true" />

            <article className="love-timeline__card">
              <figure className="love-timeline__photo-wrap">
                <img src={moment.photo} alt={moment.alt} loading="lazy" />
              </figure>

              <div className="love-timeline__content">
                <p className="love-timeline__date">{moment.date}</p>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
