import Header from "./components/header/Header";
import { HeroProvider } from "./context/HeroProvider";
import MainContent from "./layout/MainContent";

export default function App() {
  return (
    <>
      <Header />
      <HeroProvider>
        <MainContent />
      </HeroProvider>
    </>
  );
}
