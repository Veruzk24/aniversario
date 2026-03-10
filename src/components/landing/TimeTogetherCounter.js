"use client";

import { useEffect, useState } from "react";

const RELATIONSHIP_START_DATE = new Date(2022, 2, 15, 0, 0, 0, 0);

const ZERO_TIME_PARTS = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const counterUnits = [
  { key: "years", label: "A\u00f1os" },
  { key: "months", label: "Meses" },
  { key: "days", label: "D\u00edas" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

function addDatePart(date, part) {
  const next = new Date(date.getTime());

  if (part === "years") {
    next.setFullYear(next.getFullYear() + 1);
  } else if (part === "months") {
    next.setMonth(next.getMonth() + 1);
  } else {
    next.setDate(next.getDate() + 1);
  }

  return next;
}

function getElapsedTimeParts(now, start) {
  if (now <= start) {
    return ZERO_TIME_PARTS;
  }

  let cursor = new Date(start.getTime());
  let years = 0;
  let months = 0;
  let days = 0;

  while (true) {
    const nextYear = addDatePart(cursor, "years");
    if (nextYear > now) {
      break;
    }
    cursor = nextYear;
    years += 1;
  }

  while (true) {
    const nextMonth = addDatePart(cursor, "months");
    if (nextMonth > now) {
      break;
    }
    cursor = nextMonth;
    months += 1;
  }

  while (true) {
    const nextDay = addDatePart(cursor, "days");
    if (nextDay > now) {
      break;
    }
    cursor = nextDay;
    days += 1;
  }

  const remainingMs = Math.max(0, now.getTime() - cursor.getTime());
  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

export default function TimeTogetherCounter() {
  const [timeTogether, setTimeTogether] = useState(ZERO_TIME_PARTS);

  useEffect(() => {
    const updateTimeTogether = () => {
      const now = new Date();
      setTimeTogether(getElapsedTimeParts(now, RELATIONSHIP_START_DATE));
    };

    updateTimeTogether();
    const intervalId = window.setInterval(updateTimeTogether, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-banner__countdown" aria-live="polite">
      <p className="hero-banner__countdown-title">
        Tiempo juntas desde el 15 de marzo de 2022
      </p>
      <div className="hero-banner__countdown-grid">
        {counterUnits.map((unit) => (
          <article className="hero-countdown-card" key={unit.key}>
            <strong className="hero-countdown-card__value">
              {String(timeTogether[unit.key]).padStart(2, "0")}
            </strong>
            <span className="hero-countdown-card__label">{unit.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
