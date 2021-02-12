import TopSubPostItem from './TopSubPostItem';

function TopSubPosts(props){
    return(
        <>
        {props.topPostDetails.map(item => (
            <TopSubPostItem key = {item.id} postDetails = {item} routeDetails = {props.routeDetails}/>
        ))}
        </>
    )
}

export default TopSubPosts;