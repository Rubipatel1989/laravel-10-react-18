import { Button, Card, CardContent, TextField } from "@mui/material";
import React from "react";
const Login = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', height:'100vh',alignItems:'center'}}>
            <Card sx={{minWidth:450, justifyContent:'center'}}>
                <CardContent>
                    <h1>Login Page</h1>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <TextField fullWidth type="text" id="email" label="Email Id" placeholder="Enter Email Id"></TextField>
                        <TextField fullWidth type="password" id="password" label="Password" placeholder="Enter Password"></TextField>
                        <Button variant="contained" color="primary" type="submit">Login</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default Login