import {Component} from 'react';
import BollywoodHeading from './BollywoodComponent/BollywoodHeading';
import './../css/bollywood.css'
import TopPostHeading from './BollywoodComponent/TopPostHeading';
import BollywoodPosts from './BollywoodComponent/BollywoodPosts';
import TopPost from './../components/BollywoodComponent/TopPost';
import TopSubPosts from './BollywoodComponent/TopSubPosts';
import axios from 'axios';

class BollywoodComponent extends Component{
    state = {
        postDetails : [],
        topStoryDetails : [],
        topPostDetails : [],
        routeDetails : this.props.location
    }

    componentDidMount(){

        axios.get("https://myblogappserver.herokuapp.com/bollyWood")
        .then((response)=>{
            this.setState({
                postDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/top/stories")
        .then((response)=>{
            this.setState({
                topStoryDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/top/subPosts")
        .then((response)=>{
            this.setState({
                topPostDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(
            <>
            <div className = "bollywood-container">
                <div className = "bollywood">
                    <BollywoodHeading />
                    <BollywoodPosts postDetails = {this.state.postDetails} routeDetails = {this.state.routeDetails}/>
                </div>
                <div className = "topStory">
                    <TopPostHeading />
                    <TopPost topStoryDetails = {this.state.topStoryDetails} routeDetails = {this.state.routeDetails}/>
                    <TopSubPosts topPostDetails = {this.state.topPostDetails} routeDetails = {this.state.routeDetails}/>
                </div>
            </div>
            </>
        )
    }
}

export default BollywoodComponent;