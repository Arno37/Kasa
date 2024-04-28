import React from "react";
import { useEffect, useState } from "react";
import CardsAppartments from '../components/Card/Cards'
import HomeBanner from "../components/Banner/HomeBanner";

export default function Home(){

    const [appartments, setAppartments] = useState([]);
    useEffect(()=> {
        fetch('/data/appartments-list.json')
        .then(res => res.json())
        .then(data => setAppartments(data))
        .catch(error => console.log(error))
    },[]);

    return (
        <>
            <HomeBanner />
            <div className="appartments-cards">
                {appartments.map(appartment =>
                    <CardsAppartments title={appartment.title} image={appartment.cover} id={appartment.id} key={appartment.id}/>
                )}
            </div>
        </>
    );
}
