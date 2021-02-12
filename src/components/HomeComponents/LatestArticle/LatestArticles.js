import LatestArticleItem from './LatestArticleItem';

function LatestArticles(props){
    return(
        <>
            <div>
            {props.latestArticleDetails.map(item => (
                <LatestArticleItem key = {item.id} latestArticleItemDetails={item}/>
            ))}
            </div>

        </>
    )
}

export default LatestArticles;