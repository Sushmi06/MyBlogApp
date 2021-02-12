import {Link} from 'react-router-dom';
import './../../css/menu.css';

function MenuItem(props){
    
    return(
    <> 
    <div className = "menu-item">
        <Link className = "menu" to = {`/${props.menuItem.menu}`}><h4>{props.menuItem.menu}</h4></Link>
    </div>
    </>
    );
}

export default MenuItem;