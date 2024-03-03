import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../terminal.css";

const Terminal = () => {
  const conversationPaths = {
    start: ["Who is this?", "Where are you?", "What is going on?"],
    "Who is this?": ["How did you get this number?", "What do you want?"],
    "Where are you?": [
      "Can you describe your surroundings?",
      "Are you indoors or outdoors?",
    ],
    "What is going on?": ["Are you in danger?", "Do you need assistance?"],
    "Do you need assistance?": ["I can help", "I am sorry, I cannot help"],
  };

  const [currentOptions, setCurrentOptions] = useState(conversationPaths.start);
  const [messages, setMessages] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const aiOptions = {
    "Who is this?":
      "I am one of the Sweeteners. We have been searching for others",
    "Where are you?": "I'm at home.",
    "What is going on?": "Just chilling. What about you?",
    "How did you get this number?":
      "We have set up a long range 5g signal to allow communication between terminals",
    "What do you want?":
      "We are forming a resistance. We want to reclaim the Saccharine crystals and bring sweetness back into the world",
  };

  const handleMessageClick = (message) => {
    const aiResponse = aiOptions[message] || "Let's talk about something else.";
    const newMessages = [...messages, { user: message, ai: aiResponse }];
    setMessages(newMessages);

    const nextOptions = conversationPaths[message] || conversationPaths.start;
    setCurrentOptions(nextOptions);
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    console.log(inputPassword);
    if (inputPassword === "sweet") {
      setLoggedIn(true);
    }
  };

  const terminalRef = useRef(null);
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  if (!loggedIn) {
    return (
      <div className="flex justify-center">
        <div className="P-8 m-2 ">
          <div
            ref={terminalRef}
            className="terminalWrapper border min-w-[350px] max-w-[350px] md:min-w-[900px] md:max-w-[990x] md:min-h-[500px] md:max-h-[500px] p-4"
          >
            <h1>Please enter password ("sweet") to continue...</h1>
            <input
              type="password"
              onChange={handlePasswordChange}
              className="passwordInput"
            />
          </div>
        </div>
      </div>
    );
  }

  if (loggedIn) {
    return (
      <div className="flex justify-center">
        <div className="P-8 m-2 ">
          <div
            ref={terminalRef}
            className="terminalWrapper border min-w-[350px] max-w-[350px] md:min-w-[900px] md:max-w-[990x] md:min-h-[500px] md:max-h-[500px] p-4"
          >
            <ul className="md:max-w-[900px]">
              <li className="text-right">Hello? Is anyone out there?</li>
              {messages.map((message, index) => (
                <React.Fragment key={index}>
                  <li className="mt-2 w-1/2 break-words">{message.user}</li>
                  <li className="mt-2 w-1/2 break-words text-right ml-auto">
                    {message.ai}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          <div className="terminalInputWrapper border md:min-w-[900px] h-[150px] p-4">
            <ul>
              {currentOptions.map((x, index) => {
                return (
                  <li
                    key={index}
                    id="res1"
                    className="hover:bg-white hover:text-[#009600] cursor-pointer"
                    onClick={() => handleMessageClick(x)}
                  >
                    {x}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
export default Terminal;
