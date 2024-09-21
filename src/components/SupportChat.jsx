import React, { useState } from "react";
import emailjs from "emailjs-com";

const SupportChat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [emailProvided, setEmailProvided] = useState(false);

  const handleSendMessage = () => {
    // Don't send an empty message
    if (!inputValue.trim()) return;

    // Capture the user's message
    const userMessage = {
      text: inputValue,
      sender: "user",
    };

    // Add the user's message to the messages state
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Check if the email has been provided
    if (!emailProvided) {
      // Simulate a response from the support admin
      setTimeout(() => {
        const supportResponse = {
          text: "Please provide us with your email address.",
          sender: "admin",
        };
        setMessages((prevMessages) => [...prevMessages, supportResponse]);
      }, 1000);
    } else {
      // Send the thank you message to EmailJS
      const staticEmail = "musaumarfaruq17@gmail.com"; // Your email

      emailjs
        .send(
          "service_xu61oai", // Your EmailJS service ID
          "template_mlkf9th", // Your EmailJS template ID
          {
            message: `User message: ${inputValue}\nThank you! We will contact you as soon as possible.`,
            to_email: staticEmail,
          },
          "qopzs3LgsY1-Ao458" // Your EmailJS user ID
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully!",
              response.status,
              response.text
            );
          },
          (err) => {
            console.error("Failed to send email:", err);
          }
        );

      // Respond with a thank you message
      setTimeout(() => {
        const supportResponse = {
          text: "Thanks! We will contact you as soon as possible.",
          sender: "admin",
        };
        setMessages((prevMessages) => [...prevMessages, supportResponse]);
      }, 1000);
    }

    // Clear the input field after sending the message
    setInputValue("");
  };

  const handleEmailProvided = () => {
    setEmailProvided(true);
    handleSendMessage(); // Call send message to include email
  };

  return (
    <div className="support-chat">
      <h2>Support Chat</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="text-area">
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={emailProvided ? handleSendMessage : handleEmailProvided}
        >
          {emailProvided ? "Send" : "send"}
        </button>
      </div>
    </div>
  );
};

export default SupportChat;
