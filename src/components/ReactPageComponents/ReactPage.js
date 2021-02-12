import react from './../../images/react.png';
import reactContent from './../../images/reactContent.jpg';

function ReactPage(props){
    return(
        <>
        {props.pageDetails.map(item =>(
            <div key = {item.id}>
                <img src = {react} alt = "React"/>
                <p className = "content">{item.content}</p>
                <p className = "content">{item.body}</p>
                <img src = {reactContent} alt = "React-content" />
            </div>    
        ))}
        </>
    )
}

export default ReactPage;