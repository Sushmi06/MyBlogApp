import {Component} from 'react';
import ReactPage from './ReactPageComponents/ReactPage';
import ReactFooter from './ReactPageComponents/ReactFooter';
import './../css/react.css';
import axios from 'axios';

class ReactPageComponent extends Component{
    state = {
        reactPageDetails : [],
        footerDetails : []
    }

    componentDidMount(){

        axios.get("https://myblogappserver.herokuapp.com/reactPage")
        .then((response)=>{
            this.setState({
                reactPageDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/footer")
        .then((response)=>{
            this.setState({
                footerDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
        
    }

    render(){
        return(
            <>
            <div className = "react-page-container">
                <h2>5 ways to animate a React app</h2>
                <ReactPage pageDetails = {this.state.reactPageDetails}/>
            </div>
            <div>
                <h2>More the Siren</h2>
                <hr/>
                <ReactFooter footerDetails = {this.state.footerDetails} />
            </div>
            </>
        )
    }
}

export default ReactPageComponent;