import React, { useState } from 'react';
import cloudLogo from '../../assets/cloud-logo.png'
import smallCloud from '../../assets/small-blue-cloud.png'
import './chat-bot.css'



function ChatBotPage() {
    const [chatInput, setChatInput] = useState({
        userMessage: "",
        responseMessage: ""
    })

    const updateChatInput = (e: any) => {
        setChatInput({
            ...chatInput, [e.target.name]: e.target.value
        })
    }

    const submitForm = async (e: any) => {
        e.preventDefault();
        let userInput = chatInput.userMessage;

        console.log(userInput);
    }
    const showMenu = async (e: any) => {
        console.log("showing menu")
    }

    /*
    const Modal = async (e: any) => {
        <div
            role="button"
            className="modal-wrapper"
        />
    }
*/

    return (
        <form className="chatbot" onSubmit={submitForm}>
            <div className="header">
                <img className="cloudLogo" src={cloudLogo} alt="Weathr Logo" />
                <p data-testid='header'>Click here to view the menu options for the chat box.</p>
                <img onClick={showMenu} className="smallCloud" src={smallCloud} alt="Weathr Logo" />

            </div>

            <div className="chat-container">
                <div className="textbox">
                    <p>Hellooo</p>
                    <p>Helooo</p>
                </div>

                <input
                    type="text"
                    name="userMessage"
                    onChange={updateChatInput}
                    value={chatInput.userMessage}
                />

                <button type="submit">Send</button>
            </div>

        </form>
    )
}

export default ChatBotPage;