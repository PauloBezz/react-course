import '../../styles.css'

export default function Section(props){
    return(
        <div className='section-container'>
            <h4>{props.blog}</h4>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}