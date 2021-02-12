import Adventure from './../../../images/adventure.jpg';
import './../../../css/latest.css';
import {Link} from 'react-router-dom';

function LatestItem(props){
    return(
        <>
        <Link to = {`/latest/${props.latestDetails.id}`} style = {{color:"black",textDecoration : "none"}}>
            <div className = "latest-item-container">
                <img src = {Adventure} alt = "Aventures"></img>
                <p className = "latest-title">{props.latestDetails.title}</p>
                <p className = "latest-content">{props.latestDetails.content}</p>
                <p className = "latest-footer">{props.latestDetails.footer}</p>
            </div>
        </Link>
        </>
    )
}

export default LatestItem;

