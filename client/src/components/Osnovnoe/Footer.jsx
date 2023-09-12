import React from "react";
import {Link} from "react-router-dom";
import styles from "./styles/Footer.module.css";

const Footer=()=>{
    return(
        <div className={styles.listfooter}>
            <div className={styles.gllistfooter}>
                <div className={styles.blockfooter}>
                    <ul>
                        <Link to="/companiya" className={styles.link}><li>О компании</li></Link>
                        <Link to="" className={styles.link}><li>Доставка и оплата</li></Link>
                        <Link to="" className={styles.link}><li>Самовывоз</li></Link>
                        <Link to="" className={styles.link}><li>Гарантия и возврат</li></Link>
                    </ul>
                    <div className={styles.iconcont}>
                        <p>
                            <img src={require("./styles/img/vkontakte.png")}/>
                            <img src={require("./styles/img/telegram.png")}/>
                            <img src={require("./styles/img/instagramm.png")}/>
                        </p>
                    </div>
                </div>
                <div className={styles.blockfooter}>
                    <ul>
                        <Link to="" className={styles.link}><li>FAQ</li></Link>
                        <Link to="" className={styles.link}><li>Контакты</li></Link>
                        <Link to="" className={styles.link}><li>Обратная связь</li></Link>
                        <Link to="" className={styles.link}><li>Каталог изделий</li></Link>
                    </ul>
                    <div className={styles.iconcont}>
                        <img src={require("./styles/img/vse-karty.png")}/>
                    </div>
                </div>
                <div className={styles.blockfooter}>
                    <div>
                        <a href="">nomertel1</a>
                        <a href="">nomertel2</a>
                        <span>Бесплатно по России</span>
                        <a href="">Перезвоните мне</a>
                    </div>
                    <div>
                        <a href="">Скачать прайс-лист ()</a>
                        <span>Обновлен ()</span>
                    </div>
                </div>
                <div className={styles.blockfooterskr}>тут - рандомный товар</div>
            </div>
            <div className={styles.footerblack}>
                <p>Ⓒ 2023 НАЗВАНИЕ КОМПАНИИ. Все права защищены.</p>
                <Link to=""><p>Пользовательское соглашение</p></Link>
                <p>???</p>
            </div>
        </div>
    );
}

export default Footer;