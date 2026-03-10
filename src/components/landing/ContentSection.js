export default function ContentSection({ id, title, children }) {
  return (
    <section id={id} className="landing-section">
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
