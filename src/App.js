import React, {Component} from 'react';
import Navigation from "./components/Navigation.js";
import Logo from "./components/Logo.js";
import ImageLinkForm from "./components/ImageLinkForm.js";
import FaceRecongnition from "./FaceRecongnition.js";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Rank from "./components/Rank.js";
//import Particles, { initParticlesEngine } from "@tsparticles/react"; 
//import { loadSlim } from "@tsparticles/slim";
//import Clarifai  from "clarifai";
import "./App.css";
//You must add your own API key here from Clarifai.
/*const app = new Clarifai.App({
 apiKey: '8a56ebb4735c41ee860174ba7261ebc4'
});*/
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
  componentDidMount() {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(console.log)
  
  };
  /*componentDidMount() {
    const fetchData = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      this.setState({ init: true });
    };
    fetchData();
  }

 particlesLoaded = (_container) => {
  //console.log(_container);
  };
  getParticlesOptions = () => {
    return {
      background: {
        color: {
          value: "#",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#c4d7c6",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          density: {
            enable: true,
            value_area: 710.2328774690454
          },
          value: 133,
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        shape: {
          type: "triangle",
          stroke: {
            width: 0,
            color: "#060907"
          },
          size: {
            value: 4.008530152163807,
            random: false,
            anim: {
              enable: true,
              speed: 116.93911857139369,
              size_min: 21.114007519834974,
              sync: true
            }
          },
        },
        detectRetina: true,
      }
    };
  }*/

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmit = ()=>{
    this.setState({imageUrl:this.state.input});
    const raw = JSON.stringify({
      user_app_id : {
       user_id: "olajuwon",
       app_id: "face-detection",
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
        'Authorization': 'Key 8a56ebb4735c41ee860174ba7261ebc4 ' 
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
  /*onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
   
    // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    // If that isn't working, then that means you will have to wait until their servers are back up. 

    app.models.predict('face-detection', this.state.input)
      .then(response => {
        console.log('hi', response)
        if (response) {
          fetch('http://localhost:3000/image', {
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
  }*/

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
           />*/}   
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <Imagelinkform
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
export default App;