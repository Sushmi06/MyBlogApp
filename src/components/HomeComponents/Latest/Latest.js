import LatestItem from './LatestItem';

function Latest(props){
    return(
        <>
            <div className = "latest-container">
                {props.latestDetails.map(item => (
                    <LatestItem key = {item.id} latestDetails = {item}/>
                ))}
            </div>
        </>
    )
}

export default Latest;