import styles from "./styles.module.css";
import DropCard from "../../../../styled-component/components/CardDrop/src";

export default function DropMenu() {
  const Cards = [
    {
      page: "Page one",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    },
    {
      page: "Page two",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    },
    {
      page: "Page three",
      description: "Lorem ipsum dolor sit amet consectetur elit",
    },
    {
      page: "Page four",
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
