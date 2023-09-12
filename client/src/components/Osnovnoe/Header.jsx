import React, {useState} from "react";
import styles from "./styles/Header.module.css";
import {Link} from "react-router-dom";

const Header=()=>{
    let [text, setText] = useState("");
    function Knophead(props){
        return(
            <button className={styles.head3knop}>
                <img src={props.img} alt=""/>
                <span>{props.text}</span>
            </button>
        );
    }
    function ontext(e){setText(e.target.value);}
    <script src={require("./script/heaqderscript")}></script>
    return(
        <>
            <div className={styles.head1}>
                <ul className={styles.headspis}>
                    <li className={styles.sposobpoluch}>
                        <img src={require("./styles/img/free-icon-box-3638894.png")} className={styles.headertovar}/>
                        Способы получения
                        <div className={styles.vsplivsposobpoluch}>Здесь добавить способы получения товара</div>
                    </li>
                    <li>
                        <img src={require("./styles/img/free-icon-mobile-phone-3617011.png")} className={styles.headertovar}/>
                        <a className={styles.phone} href={"https://wa.me/79153513480"} target="_blank">+7 (915) 351-34-80 </a>|
                        <a className={styles.phone} href={"https://wa.me/79153513480"} target="_blank"> +7 (915) 351-34-80 </a>
                    </li>
                    <li>
                        <img src={require("./styles/img/free-icon-consultancy-6456150.png")} className={styles.headertovar}/>
                        Консультация с 9:00 до 18:00
                    </li>
                     <li>
                        <img src={require("./styles/img/free-icon-goods-1069102.png")} className={styles.headertovar}/>
                        Пункт выдачи с 10:00 до 21:00
                    </li>
                </ul>
            </div>
            <div className={styles.head2}>
                <div className={styles.head2pere}>
                    <Link to="/">
                    <img className={styles.logo} src={require("./styles/img/png-transparent-blue-and-pink-logo-european-fashion-home-logo-purple-blue-furniture-transformed.png")} alt=""/>
                    </Link>
                    <ul className={styles.head2perechen}>
                        <Link to="/companiya" className={styles.link}><li>О компании</li></Link>
                        <Link to="/" className={styles.link}><li>Доставка и оплата</li></Link>
                        <Link to="/" className={styles.link}><li>Самовывоз</li></Link>
                        <Link to="/" className={styles.link}><li>Гарантия и возврат</li></Link>
                        <Link to="/" className={styles.link}><li>FAQ</li></Link>
                        <Link to="/" className={styles.link}><li>Контакты</li></Link>
                    </ul>
                    <img className={styles.menu} src={require("./styles/img/free-icon-menu-2976215.png")}/>
                </div>
            </div>
            <div className={styles.head3} id="myHeader">
                <div className={styles.head3sh}>
                    <button className={styles.headcatalog}>
                        <img src={require("./styles/img/category.png")} alt=""/>
                        <span>Каталог</span>
                    </button>
                    <input className={styles.headpoisk} type="text" value={text} onChange={ontext} placeholder="Название или ID товара"/>
                    <Knophead img={require("./styles/img/free-icon-user-1077114.png")} text="Кабинет"/>
                    <Knophead img={require("./styles/img/free-icon-graph-4623609.png")} text="Сравнение"/>
                    <Knophead img={require("./styles/img/free-icon-add-to-favorites-4989206.png")} text="Избранное"/>
                    <Knophead img={require("./styles/img/neisp6957439.png")} text="Корзина"/>
                </div>
            </div>
        </>
    );
}
export default Header;