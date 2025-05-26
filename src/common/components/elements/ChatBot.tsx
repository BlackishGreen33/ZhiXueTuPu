import * as React from 'react';

const PureChatBot: React.FC = () => (
  <iframe
    src="https://www.chatbase.co/chatbot-iframe/yywnk94ZYc4X6DzPiNKFv"
    title="智学图谱系统小助理"
    width="100%"
    className="h-full min-h-[700px]"
    frameBorder="0"
  ></iframe>
);

const ChatBot = React.memo(PureChatBot);

export default React.memo(ChatBot);
