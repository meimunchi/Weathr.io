import React, { useState } from 'react';
import cloudLogo from '../../assets/cloud-logo.png'
import smallCloud from '../../assets/small-blue-cloud.png'
import './chat-bot.css'

function submit() {
    console.log("yo it's submitted.")
}

function ChatBotPage() {
    // TODO: Use state for input field

    return (
        <div className="chatbot">
            <div className="header">
                <img src={cloudLogo} alt="Weathr Logo" />
                <p data-testid='cloud-logo'>Chat Bot is here to :) Find out what you can talk about here</p>
                <img src={smallCloud} alt="Weathr Logo" />
            </div>

            <div className="chat-container">
                <div className="textbox">
                    <p>Hellooo</p>
                    <p>Helooo</p>
                </div>

                <input></input>
                <button onSubmit={submit}>Send</button>
            </div>

        </div>
    )
}

export default ChatBotPage;