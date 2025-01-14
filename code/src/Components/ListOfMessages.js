import React from "react";
import LikeBtn from "./LikeBtn";
import { formatDistance } from "date-fns";

const ListOfMessages = ({ loading, messages, fetchMessages }) => {
  if (loading) {
    return <h1>Happy Thoughts Loading...</h1>;
  }

  return (
    <section>
      {messages.map((singleMessage) => (
        <div key={singleMessage._id} className="message-card">
          <div className="message-container">
            <p>{singleMessage.message}</p>
          </div>
          <div className="likes-container">
            <LikeBtn
              messageID={singleMessage._id}
              messages={singleMessage}
              fetchMessages={fetchMessages}
            />
            <span className="likes">
              <p>
                {formatDistance(new Date(singleMessage.createdAt), Date.now())}
              </p>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListOfMessages;
