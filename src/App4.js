/*import React, {Component} from 'react';
import Navigation from "./components/Navigation.js";
import Logo from "./components/Logo.js";
import ImageLinkForm from "./ImageLinkForm.js";
import FaceRecongnition from "./FaceRecongnition.js";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Rank from "./components/Rank.js";
//import Particles, { initParticlesEngine } from "@tsparticles/react"; 
//import { loadSlim } from "@tsparticles/slim";
import "./App.css";
//You must add your own API key here from Clarifai.

const initialState = {

 input: '',
      imageUrl: '',
      box: {},
      route: 'signing',
      isAssignedIn: false,
      user: {
        id:'',
        name:'',
        // password:'',
        email:'',
        entries:0,
        joined: '',
}
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }
 /
 

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  /*onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input});
    const raw = JSON.stringify({
      user_app_id : {
       user_id: "",
       app_id: "",
      },
      inputs:[
      {
        data:{
          image:{
            url:this.state.input
          },
        },
      },              
      ],
    });
  const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key' 
    },
    body: raw
};
        fetch("https://api.clarifai.com/v2/models/face-detection/outputs" ,requestOptions)
        .then(response =>response.json())
        .then(result => {
        if (result) {
        fetch('http://localhost:3000/image',{
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user,{ entries: count}))
        })
      }
      this.displayFaceBox(this.calculateFaceLocation(result))
    })
    .catch(console.log)
    .catch(err=>console.log("oops", err));

  };
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    // If that isn't working, then that means you will have to wait until their servers are back up. 
    fetch('https://backend-server-bppy.onrender.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input : this.state.input
      })
    })
    .then(response => response.json())
      .then(response => {
        //console.log('hi', response)
        if (response) {
          fetch('https://backend-server-bppy.onrender.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box} = this.state;
    return (
        <div className="App">
        {/* init &&
       <Particles
             id="tsparticles"
             particlesLoaded={particlesLoaded}
             options={options}
           />  
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecongnition box={box} imageUrl={imageUrl} />
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}
export default App;*/