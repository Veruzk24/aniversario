const glowBits = [
  {
    id: 1,
    left: "6%",
    size: "20px",
    delay: "-2s",
    duration: "17s",
    drift: "18px",
    tone: "blue",
  },
  {
    id: 2,
    left: "14%",
    size: "14px",
    delay: "-7s",
    duration: "20s",
    drift: "14px",
    tone: "pink",
  },
  {
    id: 3,
    left: "24%",
    size: "16px",
    delay: "-4s",
    duration: "19s",
    drift: "16px",
    tone: "blue",
  },
  {
    id: 4,
    left: "36%",
    size: "24px",
    delay: "-11s",
    duration: "24s",
    drift: "20px",
    tone: "pink",
  },
  {
    id: 5,
    left: "48%",
    size: "12px",
    delay: "-5s",
    duration: "18s",
    drift: "12px",
    tone: "blue",
  },
  {
    id: 6,
    left: "61%",
    size: "18px",
    delay: "-8s",
    duration: "22s",
    drift: "18px",
    tone: "pink",
  },
  {
    id: 7,
    left: "72%",
    size: "15px",
    delay: "-3s",
    duration: "21s",
    drift: "14px",
    tone: "blue",
  },
  {
    id: 8,
    left: "84%",
    size: "22px",
    delay: "-9s",
    duration: "23s",
    drift: "18px",
    tone: "pink",
  },
  {
    id: 9,
    left: "93%",
    size: "13px",
    delay: "-6s",
    duration: "19s",
    drift: "13px",
    tone: "blue",
  },
];

export default function RomanceBackdrop() {
  return (
    <div className="romance-backdrop" aria-hidden="true">
      {glowBits.map((bit) => (
        <span
          key={bit.id}
          className={`romance-backdrop__orb romance-backdrop__orb--${bit.tone}`}
          style={{
            "--left": bit.left,
            "--size": bit.size,
            "--delay": bit.delay,
            "--duration": bit.duration,
            "--drift": bit.drift,
          }}
        />
      ))}
    </div>
  );
}
