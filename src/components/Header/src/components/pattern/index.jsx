import { HeaderContainer } from "./style";
import { Header } from "./composition";

export function HeaderComposition() {
  return (
    <HeaderContainer>
      <Header.Section
        tag={"Tagline"}
        title={"Short heading here"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
        }
      />
      <Header.Action submit={'Submit'} cancel={'Cancel'}/>
    </HeaderContainer>
  );
}
