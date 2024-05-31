import { Blog } from "./pattern/composition/index";
import "./styles.css";

export const BlogCards = [
  {
    image: 'https://files.sunoresearch.com.br/p/uploads/2017/12/financas-pessoais.jpg.jpg',
    category: 'Finance',
    title: 'Inflation makes workers situation worse',
    description: 'Inflation is the increase in prices of goods and services. It implies a decrease in the purchasing power of the currency.',
    icon: 'https://images.educamaisbrasil.com.br/content/noticias/dia-do-jornalista-saiba-quem-foi-a-primeira-jornalista-do-brasil_g.jpg',
    person: {
      name: 'Joana Lima',
      date: '29 May 2024',
      minutes: '10 min read'
    }
  },
  {
    image: 'https://vejasp.abril.com.br/wp-content/uploads/2023/12/ABRE-Bruno-Mars-credito-I-Hate-Flash_Divulgacao.jpg.jpg?quality=70&strip=info&w=1280&h=720&crop=1',
    category: 'Music',
    title: 'In October we will have Bruno Mars in São Paulo',
    description: 'The show will be the 20th performance in Brazil with the message of "Strength to continue"',
    icon: 'https://noticiasdatv.uol.com.br/media/_versions/artigos/daniel-adjuto-cnn-brasil-reproducao-instagram_fixed_large.jpg',
    person: {
      name: 'John Victor',
      date: '17 Jun 2024',
      minutes: '1 hour read'
    }

  },
  {
    image: 'https://psblog.com.br/wp-content/webp-express/webp-images/uploads/2024/02/Rumores-sobre-o-PS6-Lancamento-jogos-e-desafios-da-industria-750x430.jpg.webp',
    category: 'Games',
    title: 'The PS6 is already on sale at Casas Bahia',
    description: `'The beloved retail chain announced the sales launch of the PS6, being Sony's newest console that promised "Different from anything known in the gaming universe"'`,
    icon: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/extra-globo-com/tv-e-lazer/24757726-3ce-ac6/w448/screenshot_4.jpg',
    person: {
      name: 'Paul Bezerra',
      date: '03 Set 2024',
      minutes: 'Now read'
    }
  }
]

export default function BlogComposition() {
  return (
    <>
      < div className="blog-container">
        <Blog.Section
          blog={"Blog"}
          title={"Short heading goes here"}
          description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        />

        <div className="blog-content">
          {BlogCards.map((info, key) => {
            return (
              <Blog.Card
                key={key}
                image={info.image}
                category={info.category}
                title={info.title}
                description={info.description}
                icon={info.icon}
                name={info.person.name}
                date={info.person.date}
                minutes={info.person.minutes}

              />
            )
          })}
        </div>

        <Blog.Button button={"View all"} />
      </div >
    </>
  );
}