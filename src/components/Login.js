import { React, useState } from 'react';
// import axios from "axios"
function Login() {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const handlechange = (e) => {
        user[e.target.name] = e.target.value;
        setUser(user)
    }
    const userRegistration = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("valid input received");
             fetchData(user)
        }
    }
    const  fetchData = () => {
        console.log(user);
         fetch('http://localhost:8081/user',{
          method:"POST",
          body:JSON.stringify(user),
          headers:{
           'Content-Type':'application/json'
          }
          })
          
      }


    const validateForm = () => {

        let error = {}
        let formIsValid = true;
        //email
        if (!user["email"]) {
            formIsValid = false;
            error["email"] = "please enter a valid email";
        }

        if (typeof user["email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!user["email"].match(pattern)) {
                formIsValid = false
                error["email"] = "please enter valid email-id"
            }
        }
        if ((!user["password"]) && (!user["confirmpassword"])) {
            formIsValid = false;
            error["password"] = "please enter your password"
            error["confirmpassword"] = "please enter yout confirm password"

        }

        if (typeof user["password"] !== "undefined") {

            if (!user["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                error["password"] = "please enter a strong password"
                error["confirmpassword"] = "please enter a strong password"
            }
        }
        setError(error)
        return formIsValid;

    }


    return (

        <div>

            <h1>login</h1>
            <form method='post' name="userRegistration" onSubmit={userRegistration}>
                <input type="text" name="email" placeholder='email-id' onChange={handlechange} /><br /><br />
                <div>{error.email}</div>

                <input type="password" name="password" placeholder='password' onChange={handlechange} /><br /><br />
                <div>{error.password} </div>
                {/* <input type="password" name="confirmpassword" placeholder='confirmpassword' onChange={handlechange} /><br /><br />
                <div>{error.password} </div> */}

                <input type="submit" value="Login" />

            </form>
        </div>
    )
}

export default Login



