import { useEffect, useState } from "react";
import { Hero } from "../types/hero";
import styles from "./HeroForm.module.css";

interface Props {
  onSubmit: (hero: Hero) => void;
  initialData?: Hero;
}

export default function HeroForm({ onSubmit, initialData }: Props) {
  const [nome, setNome] = useState("");
  const [habilidades, setHabilidades] = useState("");
  const [origem, setOrigem] = useState("");

  useEffect(() => {
    if (initialData) {
      setNome(initialData.nome);
      setHabilidades(initialData.habilidades.join(", "));
      setOrigem(initialData.origem);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hero: Hero = {
      _id: initialData?._id,
      nome,
      habilidades: habilidades.split(",").map((h) => h.trim()),
      origem,
    };
    onSubmit(hero);
    setNome("");
    setHabilidades("");
    setOrigem("");
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.heading}>
          <span style={{ fontSize: "2rem" }}>🦸‍♂️</span>
          <h2 className={styles.title}>
            {initialData ? "Editar Herói Marvel" : "Novo Herói Marvel"}
          </h2>
        </div>

        <div className={styles.group}>
          <label htmlFor="nome" className={styles.label}>Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome do herói"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="habilidades" className={styles.label}>Habilidades</label>
          <input
            id="habilidades"
            type="text"
            placeholder="Ex: Força, Voo, Inteligência"
            value={habilidades}
            onChange={(e) => setHabilidades(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="origem" className={styles.label}>Origem</label>
          <input
            id="origem"
            type="text"
            placeholder="Ex: Terra, Asgard, Wakanda"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          {initialData ? "Atualizar Herói" : "Criar Herói"}
        </button>
      </form>
    </section>
  );
}
