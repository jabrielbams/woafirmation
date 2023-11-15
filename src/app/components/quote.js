"use client";

import React, { useEffect } from "react";
import styles from "../page.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Quotes({ token, signature }) {
  // const token = token
  // const signature = signature
  const [data, setData] = useState();

  console.log(token, signature);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://encouraging-bear-gaiters.cyclic.app/getQuotes`,
          {
            params: {
              token: token,
              signature: signature,
            },
          }
        );
        // const result = await response.json()
        console.log("response" + result);
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token, signature]);

  return (
    <div className={styles.content}>
      <div className={styles.leftContent}>
        <h1 className={styles.idContent}>01</h1>
      </div>
      <div className={styles.rightContent}>
        <p className={styles.textContent}>{data.quotes}</p>
        <p className={styles.author}>{data.author}</p>
      </div>
    </div>
  );
}
