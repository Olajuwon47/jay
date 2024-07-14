import React, { useState } from 'react';
    const SignIn=({onRouteChange}) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

  const onSubmitSignIn= (event) => {
    event.preventDefault();
        fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: email,
            password:password,
          })
        })
        .then(respone => respone.json())
        .then(user => {
          if (user.id) {
            this.props.loadUser(user)
            onRouteChange ('home');
          }
        })
       // .catch(err => console.log(err));
      }
        return(
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <form className="measure" onSubmit={onSubmitSignIn}>
            <fieldset
              id="sign_up"
              className="ba b--transparent ph0 mh0"
            >
            <legend className="f2 fw6 ph0 mh0">
            Sign In
            </legend>
            <div className="mt3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="email-address"
            >
            Email
            </label>
            <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            name="email-address"
            id="email-address"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email" required
          />
            </div>
            <div className="mv3">
            <label
              className="db fw6 lh-copy f6"
              htmlFor="password"
            >
            Password
            </label>
            <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password" required
          />
            </div>
            </fieldset>
            <div className="">
            <input
          // onClick={() =>onRouteChange ('home',{onSubmitSignIn})}
          onClick={onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
             type="submit"
              value="Sign In"
            />
            </div>
            <div className="lh-copy mt3">
            <p
              onClick={() =>onRouteChange ('signup')}
              className="f6 link dim black pointer db"
            >
            SignUp
            </p>
      </div>
            </form>
            </main>
          </article>
        )
    };
export default SignIn;

