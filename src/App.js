import React, {useEffect, useState} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {

    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {

      setMessages(snapshot.docs.map(doc => ({id: doc.id, message:doc.data()})))
    });

  }, [])

  useEffect(() => {

    setUsername(prompt('set your name...'))
  },[]);

  const sendMessage = (event) => {
    event.preventDefault()

    db.collection('messages').add({

      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })

    setMessages([...messages, {username: username, message: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <img src="data:image/png;base64,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" />
      <h1>Hello Developer</h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>

      <FlipMove>

      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }

      </FlipMove>
      
    </div>
  );
}

export default App;
