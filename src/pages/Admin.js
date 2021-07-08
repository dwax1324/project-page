import "../css/Admin.css"
import Card from "../components/Card"
import React, { useEffect, useState } from "react";
import firebase from "../firebase"

export default function Admin() {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onAddSubmit(e) {
        e.preventDefault();
        firebase.firestore().collection('toy').add({
            title: title,
            description: description,
            img: img
        }).then(() => {
            setTitle('')
            setDescription('')
            setImg('')
        })

    }
    // todo: 사용자 정보를 받아오는데 딜레이가 있음
    // 받아오고 나서 돔의 갱신이 안됨.
    // 어떤 행동이 있으면 로그인됨으로 바뀜.
    // 일단 1초뒤에 아무거나 바꿔서 로그인됨으로 바꿔놨음.
    useEffect(() => {
        setTimeout(() => {
            setTitle(" ")
        }, 1000);
    }, [])
    function onLoginSubmit(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            window.location.reload()
        })
        // console.log(firebase.auth().currentUser)
    }

    function handleSignout(e) {
        e.preventDefault();
        firebase.auth().signOut();
        window.location.reload()
    }
    return (
        <>
            {firebase.auth().currentUser !== null ?
                <>
                    <button onClick={handleSignout}> signout </button>
                    <div className="admin-container">
                        <form onSubmit={onAddSubmit}>
                            <div className="admin-input-window">
                                <div>
                                    title:
                                    <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}>

                                    </input>
                                </div>
                                <div>
                                    img:
                                    <input type="text" value={img} onChange={e => setImg(e.currentTarget.value)}>

                                    </input>
                                </div>
                                <div>
                                    description
                                    <textarea type="text" value={description} onChange={e => setDescription(e.currentTarget.value)} />

                                </div>

                                <div>
                                    tag:
                                    <input type="text">

                                    </input>
                                </div>
                                <button className="admin-form-button" type="submit">
                                    제출
                                </button>
                            </div>
                        </form>

                        <div className="admin-container2">
                            <Card />
                        </div>
                    </div>
                </> :
                <form onSubmit={onLoginSubmit} >
                    <input type='text' value={email} onChange={e => setEmail(e.currentTarget.value)}>
                    </input>
                    <input type='password' value={password} onChange={e => setPassword(e.currentTarget.value)}>
                    </input>
                    <button type="submit">login</button>
                </form>
            }
        </>
    );
}

