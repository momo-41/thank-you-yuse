import Header from "./components/Header";
import FirstView from "./components/FirstView";
import GridCard from "./components/GridCard";
import YearGridCard from "./components/YearGridCard";
import Tabpanel from "./components/Tabpanel";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstView />
      <Tabpanel />
    </div>
  );
}
