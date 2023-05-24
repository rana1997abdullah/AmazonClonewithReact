import { FormControl } from "@mui/material";
import SharedForm from "../sharedForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { StyledButton, StyledInputLabel, TextInput } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { StartAuth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(StartAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home", { state: { userId: user.uid, loggedIn: true } });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <SharedForm title="Sign in" marginLeft="-8.5em">
      <FormControl variant="standard">
        <StyledInputLabel shrink htmlFor="email-input">
          Email
        </StyledInputLabel>
        <TextInput
          type="email"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
