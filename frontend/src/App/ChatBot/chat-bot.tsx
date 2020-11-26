import React, { useState } from 'react';
import bigCloud from '../../assets/big-blue-cloud.png'
import cloud from '../../assets/small-blue-cloud.png'
import './chat-bot.css'

function ChatBotPage() {
    // TODO: Use state for input field

    return (
        <div className="chatbot">
            <div className="top_part">
                <img src={bigCloud} alt="Weathr Logo" />
                <p>Chat Bot is here to :) Find out what you can talk about here</p>
                <img src={cloud} alt="Weathr Logo" />

            </div>
            <div className="chat-container">
                <div>
                    <p>Hellooo</p>
                    <p>Helooo</p>
                </div>
                <input></input>
                <button>Send</button>
            </div>
        </div>
    )
}

export default ChatBotPage;