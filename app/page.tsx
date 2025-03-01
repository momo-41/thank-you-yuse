import Header from "./components/Header";
import PictureCard from "./components/PictureCard";
import MessageCard from "./components/MessageCard";
import { messageData } from "./data/data";

export default function Home() {
  return (
    <div>
      <Header />
      <PictureCard />
      <MessageCard name={messageData.name} message={messageData.message} />
    </div>
  );
}
