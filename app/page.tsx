import Header from "./components/Header";
import FirstView from "./components/FirstView";
import GridCard from "./components/GridCard";
import YearGridCard from "./components/YearGridCard";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstView />
      <GridCard />
      <YearGridCard yearProps="25卒" />
    </div>
  );
}
