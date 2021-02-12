import Nature from './../../../images/nature.jpg';
import HeadPartsContent from './HeadPartsContent';
import './../../../css/headContent.css';
import {Link} from 'react-router-dom';

function HeadContent(props){
    return(
        <>
        <Link to = "/article" style = {{color:"black",textDecoration : "none"}}>
            <div className = "head-container">
                {props.headTextValues.map(item => (
                    <div key = {item.id} style = { {backgroundImage:`url(${Nature})`} } className = "main-image">
                        <p className = "head-content">{item.title}</p>
                        <p className = "footer-content">{item.footer}</p>
                    </div>
                ))}
                <div className = "head-part-container">
                    {props.headPartValues.map(item =>(
                    <HeadPartsContent key = {item.id} headPartValues = {item}/>
                    ))}
                </div>
            </div>    
        </Link>
        </>
    )
}

export default HeadContent;