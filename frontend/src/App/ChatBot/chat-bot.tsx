import React, { useEffect, useState } from 'react'
import cloudLogo from '../../assets/cloud-logo.png'
import smallCloud from '../../assets/small-blue-cloud.png'
import './chat-bot.css'
import Axios from 'axios'
import 'react-html-parser'
import HtmlParser from 'react-html-parser'

function ChatBotPage() {
  const [msg, setMsg] = useState('')
  const [chatMessages, setChatMessages] = useState('')

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

      const response = await Axios.post(`${process.env.REACT_APP_PROXY}/chat`, { msg })

      updatedChatMessages += '<div class="msg-container">\n' +
        `<p class="receive">${response.data.msg}</p>\n` +
        '</div>\n'
      setChatMessages(updatedChatMessages)

      localStorage.setItem('chat-messages', updatedChatMessages)
    }
  }

  useEffect(() => {
    const msgCache = localStorage.getItem('chat-messages')
    if (msgCache) {
      setChatMessages(msgCache)
    }
  }, [])

  return (
    <div className="chatbot">
      <div className="header">
        <img src={cloudLogo} alt="Weathr Logo" />
        <p data-testid='cloud-logo'>Weathr.io Chat is here to enlighten the soul</p>
        {/*<img src={smallCloud} alt="Small Weathr Logo" />*/}
      </div>
      <form className="chat-container" onSubmit={submit}>
        <div className="textbox">
          { HtmlParser(chatMessages) }
        </div>
        <input value={msg} onChange={changeMsg}/>
        <button type="submit">Send</button>
      </form>
    </div>
    )
}

export default ChatBotPage;
