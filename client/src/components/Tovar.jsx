import React from "react";
import styles from "../components/Osnovnoe/styles/tovar/Tovar.module.css";

const Tovar=(props)=>{
    return(
        <> 
            <div className={styles.kartochka}>
                <img src={require("./Osnovnoe/styles/tovar/testtovariphoto/"+props.img)} alt="" className={styles.photo}/> {/* Тут должна быть фотография товара */}
                <div className={styles.cenaIzbSr}>
                    <span className={styles.price}>{String(props.price).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} ₽</span>
                    <div className={styles.icon}>
                        <img className={styles.icon1} src={require("./Osnovnoe/styles/tovar/img/obich-icon-analysis-310875.png")} alt=""/> {/* Обновлять состояние */}
                        <img className={styles.icon1} src={require("../components/Osnovnoe/styles/img/free-icon-add-to-favorites-4989206.png")} alt=""/> {/* Обновлять состояние */}
                    </div>
                </div>
                <span className={styles.id}>ID: {props.id}</span>
                <span className={styles.nametovar}>{props.name}</span>
                <span className={styles.opisanietovar}>{props.opisanie}</span>
                <button className={styles.knoptovar}>
                    <img src={require("./Osnovnoe/styles/img/neisp6957439.png")}/>
                    В корзину</button>
            </div>
        </>
    );
}

export default Tovar;