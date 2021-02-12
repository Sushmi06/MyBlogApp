import topStory from './../../images/topStory.jpg';
import './../../css/bollywood.css';
import {Link} from 'react-router-dom';

function TopStoryItem(props){
    return(
        <>
        <Link to = {`${props.routeDetails.pathname}/topStory/${props.itemDetails.id}`} style = {{color:"black",textDecoration : "none"}}>
            <img src = {topStory} alt = "topStory"/>
        <div>
            <p className = "title" >{props.itemDetails.title}</p>
            <p className = "footer" >{props.itemDetails.footer}</p>
        </div>
        </Link>
        </>
    )
}

export default TopStoryItem;