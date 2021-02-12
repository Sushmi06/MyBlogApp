import reactFooter from './../../images/latestArticles.jpg';

function ReactFooter(props){
    return(
        <>
        <div className = "react-footer-container">
        {props.footerDetails.map(item =>(
            <div>
                <img src = {reactFooter} alt = "Footer"/>
                <p className = "title">{item.title}</p>
            </div>
        ))}
        </div>
        </>
    )
}

export default ReactFooter;