'use client';

import { useEffect, useRef, useState } from 'react';

const loveCoupons = [
  {
    title: 'Vale por una cita sorpresa',
    description:
      'Tu eliges el dia y yo me encargo de prepararlo con todos tus detalles favoritos.',
    when: 'Disponible cuando tu quieras',
    tag: 'Plan especial',
    code: 'VA-LOVE-01',
    mood: 'sky',
  },
  {
    title: 'Vale por un dia sin preocupaciones',
    description:
      'Ese dia solo vas a sonreir: yo cocino, organizo y te consiento de principio a fin.',
    when: 'Canjeable 1 vez al mes',
    tag: 'Solo para ti',
    code: 'VA-LOVE-02',
    mood: 'rose',
  },
  {
    title: 'Vale por ver el atardecer juntas',
    description:
      'Nos escapamos a un lugar bonito, con musica, fotos y un abrazo largo frente al cielo.',
    when: 'Proximo cielo despejado',
    tag: 'Momento azul',
    code: 'VA-LOVE-03',
    mood: 'aurora',
  },
  {
    title: 'Vale por pelicula + abrazo eterno',
    description:
      'Tu eliges la peli, yo llevo snacks y prometo no soltar tu mano en toda la noche.',
    when: 'Valido para cualquier viernes',
    tag: 'Noche romantica',
    code: 'VA-LOVE-04',
    mood: 'sunset',
  },
  {
    title: 'Vale por desayuno en la cama',
    description:
      'Empiezas el dia sin levantarte: cafe, pan dulce y besitos incluidos.',
    when: 'Canjeable cualquier domingo',
    tag: 'Manana suave',
    code: 'VA-LOVE-05',
    mood: 'rose',
  },
  {
    title: 'Vale por paseo sin reloj',
    description:
      'Nos vamos a caminar sin prisa, hablando de todo y de nada, solo disfrutando.',
    when: 'Disponible en tardes libres',
    tag: 'Tiempo juntas',
    code: 'VA-LOVE-06',
    mood: 'sky',
  },
  {
    title: 'Vale por noche de karaoke',
    description:
      'Cantamos nuestras favoritas aunque desafinemos, pero con toda la actitud.',
    when: 'Valido una vez por mes',
    tag: 'Risas aseguradas',
    code: 'VA-LOVE-07',
    mood: 'aurora',
  },
  {
    title: 'Vale por picnic romantico',
    description:
      'Manta, fruta, postrecito y una playlist bonita en nuestro lugar favorito.',
    when: 'Proximo fin de semana soleado',
    tag: 'Aire libre',
    code: 'VA-LOVE-08',
    mood: 'sunset',
  },
  {
    title: 'Vale por masaje relajante',
    description:
      'Velitas, musica suave y un masaje completo para que te olvides del estres.',
    when: 'Cuando tengas un dia pesado',
    tag: 'Spa en casa',
    code: 'VA-LOVE-09',
    mood: 'rose',
  },
  {
    title: 'Vale por un postre juntos',
    description:
      'Horneamos algo rico, probamos la mezcla y terminamos llenas de harina y amor.',
    when: 'Disponible cualquier tarde',
    tag: 'Dulce plan',
    code: 'VA-LOVE-10',
    mood: 'aurora',
  },
];

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(
  /\D/g,
  '',
);

const getCouponWhatsappUrl = (coupon) => {
  const text = encodeURIComponent(
    `Hola amor, quiero canjear este cupon: ${coupon.title} (${coupon.code}).`,
  );

  if (!whatsappNumber) {
    return `https://wa.me/?text=${text}`;
  }

  return `https://wa.me/${whatsappNumber}?text=${text}`;
};

export default function CouponsSection() {
  const couponsGridRef = useRef(null);
  const [activeCouponIndex, setActiveCouponIndex] = useState(0);

  useEffect(() => {
    const grid = couponsGridRef.current;

    if (!grid) {
      return undefined;
    }

    const updateActiveCoupon = () => {
      const cards = Array.from(grid.querySelectorAll('[data-coupon-index]'));

      if (!cards.length) {
        return;
      }

      const viewportCenter = grid.scrollLeft + grid.clientWidth / 2;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActiveCouponIndex(nearestIndex);
    };

    let frameId = 0;
    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveCoupon);
    };

    updateActiveCoupon();
    grid.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveCoupon);

    return () => {
      cancelAnimationFrame(frameId);
      grid.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveCoupon);
    };
  }, []);

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

      <div className="coupons-grid coupons-grid--carousel" ref={couponsGridRef}>
        {loveCoupons.map((coupon, index) => (
          <article
            className={`coupon-card coupon-card--${coupon.mood} ${
              index === activeCouponIndex ? 'coupon-card--active' : ''
            }`}
            key={coupon.title}
            data-coupon-index={index}
          >
            <p className="coupon-card__tag">{coupon.tag}</p>
            <h3>{coupon.title}</h3>
            <p className="coupon-card__description">{coupon.description}</p>
            <div className="coupon-card__meta">
              <p className="coupon-card__when">{coupon.when}</p>
              <p className="coupon-card__code">{coupon.code}</p>
            </div>
            <a
              className="coupon-card__button"
              href={getCouponWhatsappUrl(coupon)}
              target="_blank"
              rel="noreferrer"
            >
              Canjear cupon
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
