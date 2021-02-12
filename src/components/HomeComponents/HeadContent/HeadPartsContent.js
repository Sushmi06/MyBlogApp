import Natures from './../../../images/natures.jpg';
import './../../../css/headContent.css';
import {Link} from 'react-router-dom';

function HeadPartsContent(props){
   return(
       <>
        <Link to = {`/article/${props.headPartValues.id}`} style = {{color:"black",textDecoration : "none"}}>
            <div style = { {backgroundImage: `url(${Natures})`} } className = "main-image-part">
                <p className = "head-part-content">{props.headPartValues.title} <br/> {props.headPartValues.body}</p>
                <p className = "footer-part-content">{props.headPartValues.footer}</p>
            </div>
        </Link>
       </>
   )
}

export default HeadPartsContent;