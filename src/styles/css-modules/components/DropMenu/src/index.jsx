import styles from "./styles.module.css";
import DropCard from "../../../../styled-component/components/CardDrop/src";

export default function DropMenu() {
  const Cards = [
    {
      page: "Finance",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    },
    {
      page: "Streets",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    },
    {
      page: "Sports",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    },
    {
      page: "Foods",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    }
  ];

  return (
    <div className={styles.container}>
      {Cards.map((info, key) => (
        <DropCard key={key} page={info.page} description={info.description} />
      ))}
    </div>
  );
}
