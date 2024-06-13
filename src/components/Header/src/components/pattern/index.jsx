import { HeaderContainer } from "./style";
import { Header } from "./composition";

export function HeaderComposition() {
  return (
    <HeaderContainer>
      <Header.Section
        tag={"Tecnologia"}
        title={"Experiência nesse mercado de utilidades"}
        description={
          "O mercado de tecnologia da informação (TI) é um dos setores que mais crescem e se inovam no mundo."
        }
      />

      <Header.Action submit={'Submit'} link={"https://www.pichau.com.br/?gad_source=1&gclid=Cj0KCQjw6uWyBhD1ARIsAIMcADpVyHWBa99gwwlVRvxbduDClazReiIUZvJcltd92LqEYZf9kehVzXIaAo4IEALw_wcB"} cancel={'Buy'} linkBuy={'https://www.pichau.com.br/cadeira-office-zinnia-valencia-preto-zne-vlc-bk'} />

    </HeaderContainer>
  );
}
