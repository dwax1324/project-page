// import "../css/Card.css"
// import React, { useState, useEffect } from "react";
// import firebase from "../firebase"

// function useCard() {
//     const [card, setCard] = useState([])

//     useEffect(() => {
//         firebase.firestore().collection('toy').onSnapshot((snapshot) => {

//             const newCard = snapshot.docs.map((doc) => ({
//                 id: doc.id,
//                 ...doc.data()
//             }))
//             setCard(newCard)
//         })
//     }, [])
//     return card
// }



const Card = () => {
    return <span>3</span>

    // let cards = useCard()
    // debugger
    // for (let i = 0; i < 100; i++) {
    //     console.log(cards)
    // }
    // return (
    //     <div className="card-container">
    //         {
    //             cards?.map((c) =>
    //                 <div className="card-box">
    //                     <div className="card-title">
    //                         {c?.title}
    //                     </div>
    //                     <div className="card-description">
    //                         {c?.description}
    //                     </div>
    //                 </div>
    //             )

    //         }
    //     </div>
    // );
}
export default Card;

/*

About

Choi Woojong , 최우종
SungKyunKwan University, 성균관대학교
major : biological science, 전공 : 생명과학과
double major : computer science, 복수전공: 융합소프트웨어연계전공

*/