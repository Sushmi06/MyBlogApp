import latestArticleImage from './../../../images/latestArticles.jpg';
import './../../../css/latestArticle.css';
import {Link} from 'react-router-dom';

function LatestArticleItem(props){
    return(
        <>
         <Link to = {`/latestArticle/${props.latestArticleItemDetails.id}`} style = {{color:"black",textDecoration : "none"}}>
            <div className = "latest-article-item-container">
                <div style = { {width : "400px"} }>
                    <img src ={latestArticleImage} alt = "Latest Article"></img>
                </div>
                <div>
                    <p className = "latest-title">{props.latestArticleItemDetails.title}</p>
                    <p className = "latest-content">{props.latestArticleItemDetails.content}</p>
                    <p className = "latest-footer">{props.latestArticleItemDetails.footer}</p>
                </div>
            </div>
        </Link>
        <hr/>
        </>
    )
}

export default LatestArticleItem;