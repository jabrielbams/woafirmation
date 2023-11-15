// "use client";

import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Quotes = ({ token, signature }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://encouraging-bear-gaiters.cyclic.app/getQuotes/${token}/${signature}`
        );
        const result = response.data;
        setData(result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic (if needed)
    };
  }, [token, signature]);
  return (
    <div className={styles.content}>
      {data ? (
        <>
          <div className={styles.leftContent}>
            <h1 className={styles.idContent}>001</h1>
          </div>
          <div className={styles.rightContent}>
            <p className={styles.textContent}>&quot;{data.quotes}&quot;</p>
            <p className={styles.author}>- {data.author} -</p>
          </div>
        </>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

export default Quotes;
