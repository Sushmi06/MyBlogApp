import {Component} from 'react';
import {Switch, BrowserRouter,Route} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import HeadingComponent from './HeadingComponent';
import BollywoodComponent from './BollywoodComponent';
import PathNotFoundComponent from './PathNotFoundComponent';
import './../css/app.css';
import ReactPageComponent from './ReactPageComponent';
import MenuComponent from './MenuComponent/MenuComponent';
import axios from 'axios';

class App extends Component{

    state = {
        menuList : []
    }

    componentDidMount(){

        axios.get("https://myblogappserver.herokuapp.com/menu")
        .then((response)=>{
            this.setState({
                menuList : response.data
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
        <>
            <div className = "container">
                <BrowserRouter>
                <HeadingComponent />
                <MenuComponent menuList = {this.state.menuList}/>
                <Switch>
                    <Route path = "/:heading/:id/:subheading/:id" component = {ReactPageComponent} exact/>
                    <Route path = "/:menu/:subheading/:id" component = {ReactPageComponent} exact/>
                    <Route path = "/:heading/:id" component = {BollywoodComponent} exact/>
                    <Route path = "/Home" component = {HomeComponent} exact/>
                    <Route path = "/:menu" component = {BollywoodComponent} exact/>
                    <Route path = "/" component = {HomeComponent} exact/>
                    <Route component = {PathNotFoundComponent}/>
                </Switch>
                </BrowserRouter> 
            </div>
        </>
    
        )
    }
}

export default App;