const sharedDreams = [
  {
    title: "Un viaje azul frente al mar",
    time: "Proximo verano",
    description:
      "Escaparnos juntas, ver atardeceres y guardar fotos que cuenten una nueva aventura de nosotras.",
    photo: "https://picsum.photos/id/1018/900/620",
    alt: "Viaje romantico frente al mar",
  },
  {
    title: "Nuestro rincon bonito",
    time: "Cuando llegue el momento",
    description:
      "Construir un espacio que se sienta hogar, con plantas, musica suave y muchos abrazos.",
    photo: "https://picsum.photos/id/1043/900/620",
    alt: "Hogar en pareja",
  },
  {
    title: "Celebrar cada aniversario",
    time: "Cada 15 de marzo",
    description:
      "Seguir eligiendonos, brindar por nosotras y escribir nuevos capitulos llenos de amor.",
    photo: "https://picsum.photos/id/1060/900/620",
    alt: "Celebracion de aniversario",
  },
];

export default function DreamsSection() {
  return (
    <section id="suenos" className="dreams-section" aria-label="Sueños juntas">
      <header className="dreams-section__header">
        <p className="dreams-section__eyebrow">Lo que viene para nosotras</p>
        <h2>Sueños juntas</h2>
        <p>
          Esta parte es para imaginar lo mas lindo que todavia nos espera.
          Puedes editar cada tarjeta con sus planes reales.
        </p>
      </header>

      <div className="dreams-section__grid">
        {sharedDreams.map((dream) => (
          <article className="dream-card" key={dream.title}>
            <figure className="dream-card__photo-wrap">
              <img src={dream.photo} alt={dream.alt} loading="lazy" />
            </figure>

            <div className="dream-card__content">
              <p className="dream-card__time">{dream.time}</p>
              <h3>{dream.title}</h3>
              <p>{dream.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
