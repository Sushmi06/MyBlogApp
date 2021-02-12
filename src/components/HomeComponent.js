import React,{ Component } from 'react';
import HeadContent from './HomeComponents/HeadContent/HeadContent';
import LatestHeading from './HomeComponents/Latest/LatestHeading';
import Latest from './HomeComponents/Latest/Latest';
import LatestArticlesHeading from './HomeComponents/LatestArticle/LatestArticlesHeading';
import LatestArticles from './HomeComponents/LatestArticle/LatestArticles';
import LatestStoriesHeading from './HomeComponents/LatestStory/LatestStoriesHeading';
import LatestStories from './HomeComponents/LatestStory/LatestStories';
import axios from 'axios';

class HomeComponent extends Component{
    
    state = {
        headText : [],
        headPart : [],
        latestDetails : [],
        latestArticleDetails : [],
        latestStoryDetails : []
    }

    componentDidMount(){

        axios.get("https://myblogappserver.herokuapp.com/latest/stories")
        .then((response)=>{
            this.setState({
                latestStoryDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/latest/articles")
        .then((response)=>{
            this.setState({
                latestArticleDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/latest/details")
        .then((response)=>{
            this.setState({
                latestDetails : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/head/parts")
        .then((response)=>{
            this.setState({
                headPart : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });

        axios.get("https://myblogappserver.herokuapp.com/head/text")
        .then((response)=>{
            this.setState({
                headText : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })

    }

    render(){
        return (
            <>
                <HeadContent headTextValues = {this.state.headText} headPartValues = {this.state.headPart}/>
                <LatestHeading />
                <Latest latestDetails = {this.state.latestDetails}/>
                <LatestArticlesHeading />
                <LatestArticles latestArticleDetails = {this.state.latestArticleDetails}/>
                <LatestStoriesHeading/>
                <LatestStories latestStoryDetails = {this.state.latestStoryDetails}/>
            </>
        )
    }
}

export default HomeComponent;