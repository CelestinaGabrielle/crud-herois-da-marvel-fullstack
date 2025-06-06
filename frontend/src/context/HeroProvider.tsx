import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { Hero } from "../types/hero";

interface HeroContextType {
  heroes: Hero[];
  editingHero: Hero | null;
  addHero: (hero: Hero) => Promise<void>;
  updateHero: (hero: Hero) => Promise<void>;
  deleteHero: (id: string) => Promise<void>;
  setEditingHero: (hero: Hero | null) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export const HeroProvider = ({ children }: { children: React.ReactNode }) => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [editingHero, setEditingHero] = useState<Hero | null>(null);

  useEffect(() => {
    loadHeroes();
  }, []);

  const loadHeroes = async () => {
    try {
      const response = await api.get("/heroes");
      setHeroes(response.data);
    } catch (err) {
      console.error("Erro ao carregar heróis:", err);
    }
  };

  const addHero = async (hero: Hero) => {
    try {
      const response = await api.post("/heroes", hero);
      setHeroes((prev) => [...prev, response.data]);
    } catch (err) {
      console.error("Erro ao adicionar herói:", err);
    }
  };

  const updateHero = async (hero: Hero) => {
    try {
      const response = await api.put(`/heroes/${hero._id}`, hero);
      setHeroes((prev) =>
        prev.map((h) => (h._id === hero._id ? response.data : h))
      );
      setEditingHero(null);
    } catch (err) {
      console.error("Erro ao atualizar herói:", err);
    }
  };

  const deleteHero = async (id: string) => {
    try {
      await api.delete(`/heroes/${id}`);
      setHeroes((prev) => prev.filter((h) => h._id !== id));
    } catch (err) {
      console.error("Erro ao deletar herói:", err);
    }
  };

  return (
    <HeroContext.Provider
      value={{
        heroes,
        editingHero,
        addHero,
        updateHero,
        deleteHero,
        setEditingHero,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export const useHeroContext = () => {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("useHeroContext deve ser usado dentro de um HeroProvider");
  }
  return context;
};
