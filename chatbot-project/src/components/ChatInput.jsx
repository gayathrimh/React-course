import { useState } from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages,setChatMessages}){              //using chatinput outside thsi function
      const [inputText,setInputText]=useState('');
      function saveInputText(event){
        setInputText(event.target.value);
      }

      function sendMessage(){
        const newChatMessages=[
          
        ...chatMessages,
        {
          message:inputText,
          sender:'user',
          id:crypto.randomUUID()
        }
       ];
        
         setChatMessages(newChatMessages);

       const response=Chatbot.getResponse(inputText);
        setChatMessages([
        ...newChatMessages,
        {
          message:response,
          sender:'robot',
          id:crypto.randomUUID()
        }
       ]);
       setInputText('')
      }

      return (
        <div className="chat-input-container">
        <input
           placeholder="Send message to chatbot"
           size="30"
           onChange={saveInputText}                //change function its prop
           value={inputText}
           className="chat-input"
        />
        <button
        onClick={sendMessage}
        className="send-button"
        >Send</button>
      </div>
      );
    }
