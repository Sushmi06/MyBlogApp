import './../../css/bollywood.css';
import BollywoodImage from './../../images/topStoryPost.jpg';
import {Link} from 'react-router-dom';

function TopSubPostItem(props){
    return(
        <>
            <Link to = {`${props.routeDetails.pathname}/topPost/${props.postDetails.id}`}  style = {{color:"black",textDecoration : "none"}}>
                <div className = "bollywood-container">
                    <div style = {{width : "300px"}}>
                        <img src = {BollywoodImage} alt = "Top-Sub-post"/>
                    </div>
                    <div>
                        <p className = "title">{props.postDetails.title}</p>
                        <p className = "footer">{props.postDetails.footer}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default TopSubPostItem;