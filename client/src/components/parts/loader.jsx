import React from "react";
import styles from "./styles/loader.module.css";

export default function(){
    return(
        <div className={styles.loader}>
            <div className={styles.centered}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>
        </div>
    );
}