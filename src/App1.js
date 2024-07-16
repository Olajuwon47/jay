/*import React, {useEffect, useMemo, useState } from 'react';
import Navigation from "./components/Navigation.js";
import Logo from "./components/Logo.js";
import Imagelinkform from "./components/ImageLinkForm.js";
import FaceRecongintion from "./FaceRecongnition.js";
import SignIn from "./Signin.js";
import SignUp from "./Signup.js";
import Rank from "./components/Rank.js";
import Particles, { initParticlesEngine } from "@tsparticles/react"; 
import { loadSlim } from "@tsparticles/slim";
//import Clarifai  from "clarifai";
import "./App.css";
 const App = () => {
  const [init, setInit] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBOX] = useState({});
 const [route, setRoute] = useState('signin');
 const [user, setUser] = useState({id: '',
 name: '',
 email: '',
 entries: 0,
 joined: ''
  });
const [isSignedIn, setIsSignedIn] = useState(false);
  //const [clarifaiFace, setClarifaiFace]=useState('')
 // In this section, we set the user authentication, app ID, and input URL. 
    // Change these strings to run your own example
    /*componentDidMount(); {
      fetch('http://localhost:4000/')
      .then(response => response.json())
      .then(console.log)
    
    }; 
 useEffect(()=> {
  fetch('http://localhost:3000')
  .then(response => response.json())
  .then(console.log);

}, []);
const returnClarifaiRequestOptions =(imageUrl) =>{
 const USER_ID = 'olajuwon';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = '8a56ebb4735c41ee860174ba7261ebc4';
const APP_ID = 'face-detection';
// Change this to whatever image input you want to add
const IMAGE_URL = imageUrl; 
const raw = JSON.stringify({
  "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL,
                  "allow_duplicate_url": true
              }
          }
      }
  ]
});
const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' +  PAT
  },
  body: raw
};
return requestOptions 
}
const calculateFaceLocation=(data) => {
  const clarifaiFace =data.output[0].data.regions[0].region_info.bounding_box;
  const image= document.getElementById ('inputimage');
  const width=Number(image.width);
  const height=Number(image.height);
  //console.log(width, height)
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}
 const displayFaceBox = (box) => {
  console.log(box)
  setBOX({box: box});
};
 const onRouteChange = (newRoute) => {
 /*if (route === 'signup') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }*
  if (newRoute === 'signout') {
    setIsSignedIn(false);
    setRoute('signin');
  } else if (newRoute === 'Home') {
    setIsSignedIn(true);
    setRoute('home');
  } else {
    setRoute(newRoute);
  }
}
// onClick={() => onRouteChange('newRoute')}>Change Route</button>
    const loadUser = (data) => {
      setUser({
        id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
  });
}
  useEffect(() => {
    const fetchData =async () =>{
      await initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
      setInit(true);
    };
     fetchData();

  }, []);

 const particlesLoaded = (_container) => {
  //console.log(_container);
  };
  const options = useMemo(
    () => ({
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
    }),
    [],
  );
const OnInputChange=(event) =>{
setInputValue(event.target.value);
setImageUrl(event.target.value);
};
const onButtonSubmit= () => {
  this.setState({imageUrl: this.state.input})
  App.models.predict('face-detection', this.state.input)
 // Clarifai.COLOR_MODEL, 'eeed0b6733a644cea07cf4c60f87ebb7',
   fetch("https://api.clarifai.com/v2/models", returnClarifaiRequestOptions(inputValue, imageUrl, isSignedIn, route ))
  //.then(response => response.JSON())
      .then(response => {
      //.then(data => {
        //console.log(response)
        if (response) {
       /// if (data) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id:user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(user, { entries: count}))
             // setUser(prevUser => ({ ...prevUser, entries: count }));
            })
        }
        displayFaceBox(calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="App">
                 { init &&
                <Particles
                      id="tsparticles"
                      particlesLoaded={particlesLoaded}
                      options={options}
                    />}    
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
      
    {route === 'home' ? 
  <div>
    <Logo />
    <Rank name={user.name} entries={user.entries} />
    <Imagelinkform 
      OnInputChange={OnInputChange}
      onbuttonsubmit={onButtonSubmit} 
    />
    <FaceRecongintion imageUrl={imageUrl} box={box} />
  </div>
    :
  (route === 'signin' ?
    <SignIn loadUser={loadUser} onRouteChange={onRouteChange} /> :
    <SignUp loadUser={loadUser} onRouteChange={onRouteChange} />
  )
};
 </div>
  );
};
export default App;*/