import React, { useEffect, useState} from "react";
import styles from "./styles/Glavniy.module.css";
import Tovar from "./Tovar";
import cors from "cors";

const Glavniy=()=>{
    const [datebase, setDatebase] = useState();
    const [loadidng, setLoading] = useState();

    useEffect(()=>{
        setLoading(false);
        fetch("http://localhost:3001/api").then(res=>res.json())
        .then(res1=>{
            setDatebase(res1);
            setLoading(true);
        });
    },[]);
    console.log(datebase);

    return(
        <div>
            <div className={styles.videoblock}>
                <video className={styles.video} autoPlay loop muted>
                    <source type="video/mp4" src={require("./styles/video/istockphoto-1425614751-640_adpp_is (online-video-cutter.com).mp4")}/>
                </video>
                <div className={styles.videoblocknadpis}>
                    <h4>НАЗВАНИЕ ФИРМЫ</h4>
                    <p>перетяжка салона для ваших автомобилей</p>
                    <button>Проконсультироваться</button>
                    <button>Перейти в магазин</button>
                </div>
            </div>
            <div className={styles.vivodglekr}>
                <p>Популярные товары</p>
                <div className={styles.vivodtovar}>
                    <div className={styles.vivodtovarlenta}>
                        {!loadidng && <h1>Идёт загрузка</h1>}
                        {loadidng && (datebase
                            .sort((x,y)=>y.prodaz - x.prodaz)
                            .slice(0,5)
                            .map((n,index)=><Tovar key={index}
                            id={n.id}
                            img={n.img}
                            name={n.name}
                            price={n.price}
                            opisanie={n.opisanie}
                        />))}
                    </div>
                </div>
            </div>
            <div className={styles.vivodglekr}>
                <p>Фотогаллерея (слайдер)</p>
            </div>
            <div className={styles.vivodglekr}>
                <p>Мы в инстаграм</p>
            </div>
            <div className={styles.vivodglekr}>
                <p>Где мы находимся</p>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A008d19e03655463cd96650f41ea6757ffb8cf55b2d00a7b6985e2af0f3bf2688&amp;source=constructor"></iframe>
            </div>
        </div>
    );
}

export default Glavniy;