import Header from "./components/Header";
import FirstView from "./components/FirstView";
import Tabpanel from "./components/Tabpanel";
import TopButton from "./components/TopButton";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstView />
      <Tabpanel />
      <TopButton/>
    </div>
  );
}
