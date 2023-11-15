"use client";
// Import library yang diperlukan
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Quotes from "./components/quote";
import { useParams } from "react-router-dom";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const getCurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  return days[currentDayIndex];
};

const Home = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const signature = searchParams.get("signature");
  const [currentDay, setCurrentDay] = useState(getCurrentDay());

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update current day every minute
      setCurrentDay(getCurrentDay());
    }, 60000); // Update every minute

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.leftText}>Quotes for you</p>
          <p className={styles.leftDate}>Today - {currentDay}</p>
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
        <Quotes
          token={token}
          signature={signature}
        />
      </div>

      <div className={styles.graphic}>
        <div className={styles.box} />
        <div className={styles.ellipse} />
      </div>
    </main>
  );
};

export default Home;
