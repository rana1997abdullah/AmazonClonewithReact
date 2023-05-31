import { FormControl } from "@mui/material";
import SharedForm from "../../components/sharedForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledButton, StyledInputLabel, TextInput } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { StartAuth } from "../../components/firebase";
import { useEffect } from "react";
import Swal from 'sweetalert2'

const Login = ({signIn}) => {
  const navigate = useNavigate();
  const userDataFromStorage = 
  JSON.parse(localStorage.getItem("userData")) || {};
  const [userData,setUserData] = useState(userDataFromStorage);
  const [userid,setUserId] = useState(localStorage.getItem("uid")|| "");


useEffect(() => {
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("uid",userid);
}, [userData,userid]);

function handleChange(event) {
  const { name, value } = event.target;
  
  setUserData((prevInputData) => ({ ...prevInputData, [name]: value }));
console.log(userData)
}

  const onSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(StartAuth(),
    userData.email,userData.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        signIn(); 
        console.log(user);
        setUserId(user.uid);
        localStorage.setItem("uid",user.uid);
        navigate("/", 
        { state: { userId: user.uid, 
          loggedIn: true } });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: errorMessage,
          
        })
      });
  };
  return (
    <SharedForm title="Sign in" marginLeft="-8.5em">
      <FormControl variant="standard">
        <StyledInputLabel shrink htmlFor="email-input">
          Email
        </StyledInputLabel>
        <TextInput
        name="email"
          type="email"
          id="email-input"
          value={userData.email}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl variant="standard">
        <StyledInputLabel shrink htmlFor="password-input">
          Password
        </StyledInputLabel>
        <TextInput
          type="password"
          id="password-input"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
      </FormControl>

      <StyledButton variant="outlined" type="submit" onClick={onSubmit}>
        Continue
      </StyledButton>
    </SharedForm>
  );
};
export default Login;
