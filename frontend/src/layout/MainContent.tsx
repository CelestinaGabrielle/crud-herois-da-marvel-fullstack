import Home from "../pages/Home";
import HeroList from "../components/list/HeroList";
import { useHeroContext } from "../context/HeroProvider";

export default function MainContent() {
  const {
    heroes,
    editingHero,
    addHero,
    updateHero,
    deleteHero,
    setEditingHero
  } = useHeroContext();

  return (
    <>
      <Home
        onAdd={addHero}
        onUpdate={updateHero}
        editingHero={editingHero}
        onCancel={() => setEditingHero(null)}
      />
      <HeroList
        heroes={heroes}
        onEdit={setEditingHero}
        onDelete={deleteHero}
      />
    </>
  );
}
