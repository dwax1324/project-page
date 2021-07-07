import "../css/Card.css"
import React, { useState, useEffect } from "react";
import firebase from "../firebase"


// to fix : toy(collection)
function useCard() {
    const [card, setCard] = useState([])

    useEffect(() => {
        firebase.firestore().collection('toy').onSnapshot((snapshot) => {

            const newCard = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setCard(newCard)
        })
    }, [])
    return card
}



const imgURL = "https://raw.githubusercontent.com/dwax1324/10print/master/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%20(1).png"
const Card = () => {

    let cards = useCard()
    return (
        <div className="card-container">
            {
                cards?.map((c) =>
                    <div className="card-box">
                        <img src={c?.img} className="card-img">

                        </img>
                        <div className="card-title">
                            {c?.title}
                        </div>
                    </div>
                )

            }
        </div >
    );
}
export default Card;
