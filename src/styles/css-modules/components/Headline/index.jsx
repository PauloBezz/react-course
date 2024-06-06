import styles from "./syles.module.css";

export default function Headline() {
  return (
    <div>
      <h1 className={styles.title}>
        Descoberta revolucionária: Nova tecnologia transforma lixo em plástico
        em combustivel limpo
      </h1>
      <p className={styles.descricao}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        consequuntur accusantium cumque odio voluptas qui expedita eius ad animi
        aliquam possimus nam, dolorum, consequatur, iusto quam ipsam sunt.
        Dignissimos, laudantium.
      </p>
    </div>
  );
}
