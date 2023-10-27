import { Box, Typography, TextField, Button } from "@mui/material";
import styles from "../../styles/login/loginStyles";
import authService from "../../services/authService";
import { useEffect, useState } from "react";
type Props = {
  setAuth: (isAuth: boolean) => void;
};

export default function Login(props: Props) {
const [loginData, setloginData] = useState<any>({})

  const handlelogin = async () =>{
    try {
      const login = await authService.login(loginData);
      if (login.data.success) {
        localStorage.setItem("token", login.data.data.token);
        props.setAuth(true);
      }
      // console.log(login);

    } catch (error) {
      console.log(error);
      
    }
  };
  const handleChange = (e: any) => {
    setloginData({...loginData, [e.target.name]: e.target.value});
  };
  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Login</Typography>
      <form style={styles.form}>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={styles.button} onClick={handlelogin}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
