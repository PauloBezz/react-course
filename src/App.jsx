import "./App.css";
import Content from "./components/Team/components/content";
import Section from "./components/Team/components/section";
import Main from "./components/Team/components/main";


export default function App() {
  return (
    <body>

      <Section tag={'Tagline'} title={'Our Team'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}/>

      <Content name={'Full name'} job={'Job title'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'} />

      <Main title={'We’re hiring!'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '} button={'Open positions'}/>
    
    </body>
  );
}
