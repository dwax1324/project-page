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





const Card = () => {
    let cards = useCard()
    const [curr, setCurr] = useState([])
    const [user, setCurrentUser] = useState(null)

    return (
        <div className="card-container">

            {
                cards?.map((c) =>
                    <div key={c?.id}>
                        <input type="checkbox" id="popup" />
                        <label for="popup">
                            <div className="card-box" >
                                <img src={c?.img} onClick={() => {
                                    setCurr(c)
                                }
                                } className="card-img" />
                                <div className="card-title">
                                    {c?.title}
                                </div>
                            </div>
                        </label>
                        <div className="card-popup-window">
                            <div style={{
                                width: window.screen.width * 0.8,
                                marginTop: "100px",
                                marginBottom: "4px",
                                zIndex: "200",
                            }}>
                                <label className="card-close-button" for="popup" >
                                    <div />
                                    <div />
                                </label>
                            </div>
                            <div style={{
                                width: window.screen.width * 0.8,
                                height: window.screen.height * 0.7,
                                overflow: "scroll",
                            }}>
                                <div className="card-popup">
                                    <img className="card-popup-gif" src={curr.img} />
                                    <div className=".card-popup-title">
                                        {curr.title}
                                    </div>
                                    {curr.description}
                                    {curr.id}
                                </div>
                            </div>
                            <label className="card-popup-close-background" for="popup" />
                        </div>

                    </div>
                )

            }
        </div >
    );
}
export default Card;
