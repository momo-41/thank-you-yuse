import Header from "./components/Header";
import FirstView from "./components/FirstView";
import MessageCard from "./components/MessageCard";
import { messageData } from "./data/data";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstView />
      <MessageCard name={messageData.name} message={messageData.message} />
    </div>
  );
}
