import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './components/Header.js'
import {BasicModal} from './components/Header.js'
import Post from './components/Post.js'
import { db } from './firebase';

function App() {
    const [posts, setPosts] = useState ([])
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
        //every time the database changes(updates), this code will go off.
            setPosts(snapshot.docs.map(doc => ({
            post: doc.data(),
            id: doc.id
            })));
        }) }, []);
    return (
        <div >
             <Header 
             />
             <BasicModal />
             <div id='app-container'>
             {
                    posts.map(({id, post}) => (
                        // this unique key{id} helps react understand which posts were already there and thus are not refreshed
                        <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
                    ))
                 }
            </div>
        </div>
    )
}

export default App;
