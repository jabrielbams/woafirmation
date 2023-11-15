"use client";

import Image from "next/image";
import styles from "../page.module.css";
import Quotes from "../components/quote.js";
import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();

export default function Main() {
  // Acak urutan quotes
  // const shuffledQuotes = shuffleArray(quotes);
  // Pilih quote pertama setelah diacak
  // const randomQuote = shuffledQuotes[0];
  const signature = searchParams.get("signature");
  const token = searchParams.get("token");
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
        <Quotes />
      </div>

      <div className={styles.graphic}>
        <div className={styles.box} />
        <div className={styles.ellipse} />
      </div>
    </main>
  );
}
