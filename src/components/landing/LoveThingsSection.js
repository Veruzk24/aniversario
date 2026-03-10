const loveThings = [
  'Amo tu sonrisa',
  'Amo como me abrazas',
  'Amo como haces que todo sea mas facil',
  'Amo la vida contigo',
  'Amo nuestra complicidad',
  'Amo como me haces sentir en casa',
  'Amo nuestras risas sin parar',
  'Amo cada plan contigo',
];

export default function LoveThingsSection() {
  return (
    <section
      id="amo-de-ti"
      className="love-things"
      aria-label="Cosas que amo de ti"
    >
      <header className="love-things__header">
        <p className="love-things__eyebrow">6. Cosas que amo de ti</p>
        <h2>Lo que amo de ti</h2>
        <p>
          Una coleccion de razones que me recuerdan todos los dias por que te
          elijo.
        </p>
        <small className="love-things__hint">
          Pasa el cursor para descubrir el efecto
        </small>
      </header>

      <div className="love-things__grid">
        {loveThings.map((item, index) => (
          <article
            className="love-things__card"
            key={item}
            style={{ '--card-delay': `${index * 70}ms` }}
          >
            <span className="love-things__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="love-things__icon" aria-hidden="true">
              💖
            </p>
            <p className="love-things__text">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
