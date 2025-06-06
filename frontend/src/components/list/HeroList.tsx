import { Hero } from "../../types/hero";
import styles from "./HeroList.module.css";

interface Props {
  heroes: Hero[];
  onEdit: (hero: Hero) => void;
  onDelete: (id: string) => void;
}

export default function HeroList({ heroes, onEdit, onDelete }: Props) {
  return (
    <ul className={styles.list}>
      {heroes.map((hero) => (
        <li key={hero._id} className={styles.card}>
          <div>
            <h3 className={styles.title}>
              <span>🦸‍♂️</span> {hero.nome}
            </h3>
            <p className="mt-3">
              <span className={styles.label}>Habilidades:</span>{" "}
              <span className={styles.value}>{hero.habilidades.join(", ")}</span>
            </p>
            <p className="mt-1">
              <span className={styles.label}>Origem:</span>{" "}
              <span className={styles.value}>{hero.origem}</span>
            </p>
          </div>

          <div className={styles.actions}>
            <button
              onClick={() => onEdit(hero)}
              className={`${styles.button} ${styles.edit}`}
            >
              ✏️ Editar
            </button>
            <button
              onClick={() => hero._id && onDelete(hero._id)}
              className={`${styles.button} ${styles.delete}`}
            >
              🗑️ Deletar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
