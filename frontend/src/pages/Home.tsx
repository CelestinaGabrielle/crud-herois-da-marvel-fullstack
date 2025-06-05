import { useEffect, useState } from "react";
import { Hero } from "../types/hero";
import styles from "./Home.module.css";

interface Props {
  onAdd: (hero: Hero) => void;
  onUpdate: (hero: Hero) => void;
  editingHero: Hero | null;
  onCancel: () => void;
}

export default function HeroForm({ onAdd, onUpdate, editingHero, onCancel }: Props) {
  const [nome, setNome] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [origem, setOrigem] = useState("");

  useEffect(() => {
    if (editingHero) {
      setNome(editingHero.nome);
      setHabilidades(editingHero.habilidades.join(", "));
      setOrigem(editingHero.origem);
    } else {
      setNome("");
      setHabilidades("");
      setOrigem("");
    }
  }, [editingHero]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hero: Hero = {
      _id: editingHero?._id,
      nome,
      habilidades: habilidades.split(",").map((h) => h.trim()),
      origem,
    };
    if (editingHero) {
      onUpdate(hero);
    } else {
      onAdd(hero);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nome do herói"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Habilidades (separadas por vírgula)"
        value={habilidades}
        onChange={(e) => setHabilidades(e.target.value)}
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Origem"
        value={origem}
        onChange={(e) => setOrigem(e.target.value)}
        className={styles.input}
        required
      />
      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          {editingHero ? "Salvar Alterações" : "Adicionar Herói"}
        </button>
        {editingHero && (
          <button type="button" onClick={onCancel} className={styles.cancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
