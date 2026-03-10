const loveCoupons = [
  {
    title: "Vale por una cita sorpresa",
    description:
      "Tu eliges el dia y yo me encargo de prepararlo con todos tus detalles favoritos.",
    when: "Disponible cuando tu quieras",
    tag: "Plan especial",
    code: "VA-LOVE-01",
    mood: "sky",
  },
  {
    title: "Vale por un dia sin preocupaciones",
    description:
      "Ese dia solo vas a sonreir: yo cocino, organizo y te consiento de principio a fin.",
    when: "Canjeable 1 vez al mes",
    tag: "Solo para ti",
    code: "VA-LOVE-02",
    mood: "rose",
  },
  {
    title: "Vale por ver el atardecer juntas",
    description:
      "Nos escapamos a un lugar bonito, con musica, fotos y un abrazo largo frente al cielo.",
    when: "Proximo cielo despejado",
    tag: "Momento azul",
    code: "VA-LOVE-03",
    mood: "aurora",
  },
  {
    title: "Vale por pelicula + abrazo eterno",
    description:
      "Tu eliges la peli, yo llevo snacks y prometo no soltar tu mano en toda la noche.",
    when: "Valido para cualquier viernes",
    tag: "Noche romantica",
    code: "VA-LOVE-04",
    mood: "sunset",
  },
];

export default function CouponsSection() {
  return (
    <section
      id="cupones"
      className="coupons-section"
      aria-label="Cupones romanticos"
    >
      <header className="coupons-section__header">
        <p className="coupons-section__eyebrow">Detalles para nosotras</p>
        <h2>Cupones de amor</h2>
        <p>
          Pensados para sorprenderte. Puedes editar los textos para
          personalizarlos con sus planes favoritos.
        </p>
      </header>

      <div className="coupons-grid">
        {loveCoupons.map((coupon) => (
          <article
            className={`coupon-card coupon-card--${coupon.mood}`}
            key={coupon.title}
          >
            <p className="coupon-card__tag">{coupon.tag}</p>
            <h3>{coupon.title}</h3>
            <p className="coupon-card__description">{coupon.description}</p>
            <div className="coupon-card__meta">
              <p className="coupon-card__when">{coupon.when}</p>
              <p className="coupon-card__code">{coupon.code}</p>
            </div>
            <button type="button" className="coupon-card__button">
              Canjear cupon
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
