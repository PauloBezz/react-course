import { Team } from './src/pattern/composition'
import './styles.css';

export default function TeamComposition(){
  return(
    <div className="team-container">
      <Team.Section tag={'Tagline'} title={'Our Team'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '}/>
      <Team.Content name={'Full name'} job={'Job title'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'}/>
      <Team.Main title={'We’re hiring!'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '} button={'Open options'}/>
    </div>
  )
}