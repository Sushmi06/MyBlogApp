import BollyWoodPostItem from './BollywoodPostItem';
function BollywoodPosts(props){
    return(
        <>
            {props.postDetails.map(item => (
                <BollyWoodPostItem key = {item.id} postItemDetails = {item} routeDetails = {props.routeDetails}/>
            ))}
        </>
    )
}

export default BollywoodPosts;