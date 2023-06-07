import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sign } from "firebase/auth";
import { StartAuth } from "../../components/firebase";
import { StartFirebase } from "../../components/firebase";
import { ref, update } from "firebase/database";
import { FormControl, Typography } from "@mui/material";
import Swal from 'sweetalert2'

import SharedForm from "../../components/sharedForm";
import { StyledButton, StyledInput, StyledInputLabel } from "./styles";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenteredPass, setReenteredPass] = useState("");
  const [username, setUsername] = useState("");
  const [matchError, setMatchError] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== reenteredPass) {
      setMatchError(true);
      return;
    }
    setMatchError(false);
    await createUserWithEmailAndPassword(StartAuth(), email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let obj = {
          username: username,
          userId: user.uid,
          email: email,
          password:password
        };
        const updates = {};
        updates["/Users/" + user.uid] = obj;
        update(ref(StartFirebase()), updates);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        setMatchError(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        const passwordlength = 'Password should be at least 6 characters'
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${errorMessage.split('/')[1].split(')')[0]} ${errorMessage.split('/')[1].split(')')[0] === "weak-password" ? passwordlength:''} `,
          
        })
      });
  };

  return (
    <SharedForm title="Create account" formType="signup">
      <FormControl variant="standard">
        <StyledInputLabel shrink htmlFor="name-input">
          Your name
        </StyledInputLabel>
        <StyledInput
          type="text"
          id="name-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </FormControl>
      <FormControl variant="standard">
        <StyledInputLabel shrink htmlFor="email-input">
          Email
        </StyledInputLabel>
        <StyledInput
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
        <StyledInput
          type="password"
          sx={{
            borderColor: matchError && "#d00",
            boxShadow: matchError && "0 0 0 3px rgba(221,0,0,.1) inset",
          }}
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormControl>
      <FormControl variant="standard">
        <StyledInputLabel shrink htmlFor="Reenter-input">
          Re-enter password
        </StyledInputLabel>
        <StyledInput
          type="password"
          sx={{
            borderColor: matchError && "#d00",
            boxShadow: matchError && "0 0 0 3px rgba(221,0,0,.1) inset",
          }}
          value={reenteredPass}
          id="Reenter-input"
          onChange={(e) => setReenteredPass(e.target.value)}
          required
        />
        <Typography sx={{ color: "red" }}>
          {" "}
          {matchError && "! Passwords must match"}
        </Typography>
      </FormControl>
      <StyledButton variant="outlined" type="submit" onClick={onSubmit}>
        {email ? "Verify Email" : "Continue"}
      </StyledButton>
    </SharedForm>
  );
};

export default Signup;
