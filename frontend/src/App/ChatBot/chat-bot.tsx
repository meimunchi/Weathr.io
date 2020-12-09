import React, { useEffect, useState } from 'react'
import cloudLogo from '../../assets/cloud-logo.png'
import './chat-bot.css'
import Axios from 'axios'
import 'react-html-parser'
import HtmlParser from 'react-html-parser'
import ChatMenu from './chat-menu'
import { LocationCoords } from '../location-coords'

function ChatBotPage() {
  const [msg, setMsg] = useState('')
  const [chatMessages, setChatMessages] = useState('')
  const [locationCoords, setLocationCoords] = useState(null as null | LocationCoords)

  useEffect(() => {
    const chatOutput = document.querySelector('.textbox');
    if (chatOutput) {
      chatOutput.scrollTop = chatOutput.scrollHeight;
    }
  });

  const changeMsg = (e: any) => {
    setMsg(e.target.value)
  }

  const submit = async (e: any) => {
    e.preventDefault()
    if (msg.length > 0) {
      let updatedChatMessages = chatMessages + '<div class="msg-container">\n' +
        `<p class="send">${msg}</p>\n` +
        '</div>\n'

      setChatMessages(updatedChatMessages)
      setMsg('')

      const response = await Axios.post(`${process.env.REACT_APP_PROXY}/chat`, {
        lat: locationCoords ? locationCoords.lat : null,
        long: locationCoords ? locationCoords.long : null, msg
      })

      updatedChatMessages += '<div class="msg-container">\n' +
        `<p class="receive">${response.data.msg}</p>\n` +
        '</div>\n'
      setChatMessages(updatedChatMessages)

      sessionStorage.setItem('chat-messages', updatedChatMessages)
    }
  }

  useEffect(() => {
    const msgCache = localStorage.getItem('chat-messages')
    if (msgCache) {
      setChatMessages(msgCache)
    }
  }, [])

  return (
    <div className="chatbot" data-testid="chat-container">
      <div className="header">
        <img src={cloudLogo} alt="Weathr Logo" />
        <p data-testid='header-text'>Weathr.io Chat is here to enlighten the soul</p>
        <p>To try chatting over SMS, text +16204224617 here now!</p>
        <ChatMenu />
      </div>


      <form className="chat-container" onSubmit={submit}>
        <div className="textbox">
          { HtmlParser(chatMessages) }
        </div>
        <input value={msg} onChange={changeMsg} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatBotPage;
