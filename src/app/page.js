import Image from "next/image";
import styles from "./page.module.css";

const quotes = [
  {
    id: 1,
    text: "Jika kamu benar-benar menginginkan sesuatu, kamu dapat mencari cara untuk mewujudkannya. - Cher",
  },
  {
    id: 2,
    text: "Keyakinan itu menular dan begitu pula kurangnya rasa percaya diri.",
  },
  {
    id: 3,
    text: "Ada banyak cara untuk maju, tetapi hanya satu cara untuk diam.",
  },
];

const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Home() {
  // Acak urutan quotes
  const shuffledQuotes = shuffleArray(quotes);
  // Pilih quote pertama setelah diacak
  const randomQuote = shuffledQuotes[0];

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.leftText}>Quotes for you</p>
          <p className={styles.leftDate}>Today - Friday</p>
        </div>
        <div className={styles.rightHeader}>
          <Image
            src='/woa.svg'
            alt='WOA Logo'
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
      <div className={styles.divider}></div>

      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h1 className={styles.idContent}>01</h1>
          </div>
          <div className={styles.rightContent}>
            <p className={styles.textContent}>
              "Hidup bukanlah masalah yang harus dipecahkan, tetapi kenyataan
              yang harus dialami."
            </p>
            <p className={styles.author}>Soren Kierkegaard</p>
          </div>
        </div>
      </div>

      <div className={styles.graphic}>
        <div className={styles.box} />
        <div className={styles.ellipse} />
      </div>
    </main>
  );
}
