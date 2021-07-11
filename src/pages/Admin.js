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
    const [editId, setEditId] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editImg, setEditImg] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [deleteId, setDeleteId] = useState('')


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

    function handleIdSubmit(e) {
        e.preventDefault();
        firebase.firestore().collection('toy').doc(editId).get().then((doc) => {
            if (doc.exists) {
                setEditTitle(doc.data().title)
                setEditDescription(doc.data().description)
                setEditImg(doc.data().img);
            } else {
                console.log("no doc")
            }
        }).catch((error) => {
            console.log("doc error", error)
        })

    }

    function handleEditSubmit(e) {
        e.preventDefault();
        firebase.firestore().collection('toy').doc(editId).set({
            title: editTitle,
            description: editDescription,
            img: editImg
        })
    }

    function handleDeleteSubmit(e) {
        e.preventDefault();
        console.log(deleteId);
        firebase.firestore().collection('toy').doc(deleteId).get().then((doc) => {
            if (doc.exists) {
                if (window.confirm(`delete?\n
                        id: ${deleteId}\n
                        title: ${doc.data().title}\n
                        description:${doc.data().description}\n
                `
                )) {

                    firebase.firestore().collection('toy').doc(deleteId).delete().then(() => {
                        window.alert("data was deleted!")
                    }).catch(error => {
                        window.alert(`error removing data${error}`)
                    })
                }
                setDeleteId('')
            } else {
                alert('incorrect ID!! :(')
                setDeleteId('')
            }
        })

    }
    return (
        <>
            {firebase.auth().currentUser !== null ?
                <>
                    <button onClick={handleSignout}> signout </button>
                    <div className="admin-container">
                        <form onSubmit={onAddSubmit}>
                            <div className="admin-input-window">
                                <h1 style={{ fontSize: 30 }}>
                                    ADD
                                </h1>
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
                                    추가
                                </button>
                            </div>
                        </form>

                        <div className="admin-input-window">
                            <h1 style={{ fontSize: 30 }}>
                                EDIT
                            </h1>

                            <form onSubmit={handleIdSubmit}>
                                id:
                                <input type="text" onChange={e => setEditId(e.currentTarget.value)} />
                                <button type='submit'>
                                    submit
                                </button>

                            </form>
                            <form onSubmit={handleEditSubmit}>
                                <div>
                                    title:
                                    <input type="text" value={editTitle} onChange={e => setEditTitle(e.currentTarget.value)}>

                                    </input>
                                </div>
                                <div>
                                    img:
                                    <input type="text" value={editImg} onChange={e => setEditImg(e.currentTarget.value)}>

                                    </input>
                                </div>
                                <div>
                                    description
                                    <textarea style={{
                                        width: '500px',
                                        height: '350px',

                                    }} type="text" value={editDescription} onChange={e => setEditDescription(e.currentTarget.value)} />

                                </div>

                                <div>
                                    tag:
                                    <input type="text">

                                    </input>
                                </div>
                                <button className="admin-form-button" type="submit">
                                    편집
                                </button>
                            </form>
                            <form onSubmit={handleDeleteSubmit}>
                                <h1 style={{ fontSize: 30 }}>
                                    DELETE
                                </h1>

                                <div>
                                    ID:
                                    <input type="text" value={deleteId} onChange={e => setDeleteId(e.currentTarget.value)} />
                                </div>
                                <button className="admin-form-button" type="submit">
                                    삭제
                                </button>
                            </form>

                        </div>

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

