import TopStoryItem from './TopStoryItem';
function TopPost(props){
    return(
        <>
        {props.topStoryDetails.map(item =>(
            <TopStoryItem key = {item.id} itemDetails = {item} routeDetails = {props.routeDetails}/>
        ))}
        
        </>
    )
}

export default TopPost;