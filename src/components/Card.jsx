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
    const getId = (e) => {
        console.log(e.target);
    }

    let cards = useCard()
    return (
        <div className="card-container">

            {
                cards?.map((c) =>
                    <div key={c?.id}>
                        <input type="checkbox" id="popup" />
                        <label for="popup">
                            <div className="card-box" onClick={(e) => getId(e)}>
                                <img src={c?.img} className="card-img" />
                                <div className="card-title">
                                    {c?.title}
                                </div>
                            </div>
                        </label>
                        <div>
                            <div>
                                <label for="popup" />
                                {c?.title}
                                {c?.description}
                                <img src={c?.img} />
                            </div>
                            <label for="popup"></label>
                        </div>

                    </div>
                )

            }
        </div >
    );
}
export default Card;
