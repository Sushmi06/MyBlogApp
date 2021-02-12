import BollywoodImage from './../../images/latestArticles.jpg';
import './../../css/bollywood.css';
import {Link} from 'react-router-dom';

function BollywoodPostItem(props){
    return(
        <>
        <Link to = {`${props.routeDetails.pathname}/bollywood/${props.postItemDetails.id}`} style = {{color:"black",textDecoration : "none"}}>
        <div className = "bollywood-container">
            <div style = {{width : "400px"}}>
                <img src = {BollywoodImage} alt = "Bollywood-post"/>
            </div>
            <div>
                <p className = "title">{props.postItemDetails.title}</p>
                <p className = "content">{props.postItemDetails.content}</p>
                <p className = "footer">{props.postItemDetails.footer}</p>
            </div>
        </div>
        </Link>
        </>
    )
}

export default BollywoodPostItem;