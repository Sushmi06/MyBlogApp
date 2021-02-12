import './../../../css/latestStory.css';
import {Link} from 'react-router-dom';

function LatestStoryItem(props){
    return(
        <>
            <Link to = {`/latestStory/${props.latestStoryDetailItem.id}`} style = {{color:"black",textDecoration : "none"}}>
            <div className = "latest-story-item-container">
                <p className ="latest-title">{props.latestStoryDetailItem.title}</p>
                <p className = "latest-content">{props.latestStoryDetailItem.content}</p>
                <p className = "latest-footer">{props.latestStoryDetailItem.footer}</p>
            </div>
            </Link>
        </>
    )
}

export default LatestStoryItem;