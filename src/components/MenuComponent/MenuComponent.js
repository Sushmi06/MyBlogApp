import MenuItem from './MenuItem';

function MenuComponent(props){
    return(
        <>
         {props.menuList.map(item =>(
             <MenuItem key = {item.id} menuItem = {item} />
         )) }
         <hr />
        </>
    );
}


export default MenuComponent;