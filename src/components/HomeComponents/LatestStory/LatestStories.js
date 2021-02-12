import LatestStoryItem from './LatestStoryItem';
import './../../../css/latestStory.css';

function LatestStories(props){
    return(
        <>
            <div className = "latest-story-container">
                {props.latestStoryDetails.map(item => (
                    <LatestStoryItem key = {item.id} latestStoryDetailItem = {item}/>
                ))}
            </div>
            <hr/>
        </>
    )
}

export default LatestStories;