import { useEffect, useState } from "react";
import Header from './components/Header';
import Home from './pages/Home';
import api from './services/api';
import { Hero } from './types/hero';

export default function App() {
  const [herois, setHerois] = useState<Hero[]>([]);
  const [editingHero, setEditingHero] = useState<Hero | null>(null);

  // Carrega a lista de heróis ao iniciar
  useEffect(() => {
    api.get("/")
      .then(res => setHerois(res.data))
      .catch(err => console.error(err));
  }, []);

  // Adiciona um novo herói
  const handleAdd = (hero: Hero) => {
    api.post("/", hero)
      .then(res => setHerois([...herois, res.data]))
      .catch(err => console.error(err));
  };

  // Atualiza um herói existente
  const handleUpdate = (hero: Hero) => {
    api.put(`/${hero._id}`, hero)
      .then(res => {
        setHerois(herois.map(h => h._id === hero._id ? res.data : h));
        setEditingHero(null);
      })
      .catch(err => console.error(err));
  };

  // Cancela a edição
  const handleCancel = () => setEditingHero(null);

  return (
    <>
      <Header />
      <Home
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editingHero={editingHero}
        onCancel={handleCancel}
      />
      {/* Aqui você pode renderizar a lista de heróis */}
      <ul>
        {herois.map(hero => (
          <li key={hero._id}>
            {hero.nome} - {hero.origem}
            <button onClick={() => setEditingHero(hero)}>Editar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
