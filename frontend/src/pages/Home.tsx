import HeroForm from "../components/form/HeroForm";
import { Hero } from "../types/hero";
import styles from "./Home.module.css";

interface Props {
  onAdd: (hero: Hero) => void;
  onUpdate: (hero: Hero) => void;
  editingHero: Hero | null;
  onCancel: () => void;
}

export default function Home({ onAdd, onUpdate, editingHero, onCancel }: Props) {
  const handleSubmit = (hero: Hero) => {
    if (editingHero) {
      onUpdate(hero);
    } else {
      onAdd(hero);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {editingHero ? "Editar Herói" : "Cadastrar Novo Herói"}
      </h2>

      <HeroForm
        onSubmit={handleSubmit}
        initialData={editingHero || undefined}
      />

      {editingHero && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button onClick={onCancel} className={styles.cancelButton}>
            Cancelar edição
          </button>
        </div>
      )}
    </div>
  );
}
