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

    const setScrollTop = (e) => {
        document.getElementsByClassName("card-popup-description")[0].scrollTop = 0;
    }



    return (
        <div className="card-container">

            {
                cards?.map((c) =>
                    <div key={c?.id}>
                        <input type="checkbox" id="popup" />
                        <label for="popup">
                            <div className="card-box" onClick={(e) => {
                                setCurr(c)
                                setScrollTop(e)
                            }
                            } >
                                <img src={c?.img} className="card-img" />
                                {firebase.auth().currentUser !== null ?
                                    c.id : ""
                                }
                                <div className="card-title">
                                    {c?.title}
                                </div>
                            </div>
                        </label>
                        <div className="card-popup-window"
                            style={{
                                position: "fixed",
                            }}
                        >
                            <div>
                                <div style={{
                                    backgroundColor: "black",
                                }}>
                                    {/* <label className="card-close-button" for="popup" >
                                        <div />
                                        <div />
                                    </label> */}
                                </div>
                                <div className="card-popup"
                                    style={{
                                        width: document.body.clientWidth * 0.8,
                                        height: window.screen.height * 0.7,
                                        margin: "5% auto",
                                        left: 0,
                                        right: 0,

                                    }}
                                >
                                    <img className="card-popup-gif" src={curr.img} />
                                    <div
                                        className="card-popup-description">
                                        {curr.description}
                                    </div>

                                </div>
                            </div>
                            <label
                                style={{
                                    width: window.screen.width * 2,
                                    height: window.screen.height * 2,
                                }}
                                className="card-popup-close-background" for="popup" />
                        </div>

                    </div>
                )

            }
        </div >
    );
}
export default Card;
