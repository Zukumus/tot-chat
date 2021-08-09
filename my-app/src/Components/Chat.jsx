import './chat.css';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import Loader from './Loader';


const Chat = () => {
   const { auth, firestore } = useContext(Context);
   const [user] = useAuthState(auth);
   const [value, setValue] = useState('');
   const [messages, loading] = useCollectionData(
      firestore.collection('messages').orderBy('createdAt')
   );

   const sendMessage = async () => {
      console.log(value)
      firestore.collection('messages').add({
         uid: user.uid,
         displayName: user.displayName,
         photoURL: user.photoURL,
         text: value,
         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setValue('');
   };


   if (loading) {
      return <Loader />;
   };


   return (
      <div className='wrapper__chat' >
         <div className='wrapper__chat-border'>
            <div className='chat__border-group'>
               {messages.map(messages =>
                  <div className='chat__border-message-group'>
                     <div className='border-message-group'>
                        <img className='border-message-group-img' src={messages.photoURL} />
                        <div className='border-message-group-author'>{messages.displayName}</div>
                     </div>
                     <div className='border-message-group-message'>{messages.text}</div>
                  </div>
                  // 
               )}
            </div>
            <div className='chat__border-button-group'>
               <input
                  className='chat__border-input'
                  value={value}
                  onChange={e => setValue(e.target.value)}
               />
               <button onClick={sendMessage} className='chat__border-button-input'>enter message</button>
            </div>
         </div >
      </div >
   );
};
export default Chat