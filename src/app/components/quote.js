"use client";

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

    fetchData(); // Call the fetchData function when the component mounts

    // If you need to clean up, you can return a cleanup function from useEffect
    return () => {
      // Cleanup logic (if needed)
    };
  }, [token, signature]); // Dependency array to re-run effect when token or signature changes

  return (
    <div className={styles.content}>
      {data ? (
        <>
          <div className={styles.leftContent}>
            <h1 className={styles.idContent}>01</h1>
          </div>
          <div className={styles.rightContent}>
            <p className={styles.textContent}>{data.quotes}</p>
            <p className={styles.author}>{data.author}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quotes;
