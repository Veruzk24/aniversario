import styles from "./AnniversaryLanding.module.css";
import IntroChapter from "./chapters/IntroChapter";
import StoryChapter from "./chapters/StoryChapter";
import MemoriesChapter from "./chapters/MemoriesChapter";
import LetterChapter from "./chapters/LetterChapter";
import EndingChapter from "./chapters/EndingChapter";
import {
  endingData,
  introData,
  letterData,
  memoriesData,
  relationshipStart,
  storyData,
} from "@/content/anniversaryData";

const floatingBits = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  size: `${8 + (index % 4) * 4}px`,
  left: `${5 + index * 6}%`,
  delay: `${index * 0.5}s`,
  duration: `${10 + (index % 4)}s`,
}));

export default function AnniversaryLanding() {
  return (
    <main className={styles.landing}>
      <div className={styles.floatLayer} aria-hidden="true">
        {floatingBits.map((item) => (
          <span
            key={item.id}
            className={styles.floatBit}
            style={{
              "--bit-size": item.size,
              "--bit-left": item.left,
              "--bit-delay": item.delay,
              "--bit-duration": item.duration,
            }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <IntroChapter
          introData={introData}
          relationshipStart={relationshipStart}
        />
        <StoryChapter storyData={storyData} />
        <MemoriesChapter memoriesData={memoriesData} />
        <LetterChapter letterData={letterData} />
        <EndingChapter endingData={endingData} />
      </div>
    </main>
  );
}
