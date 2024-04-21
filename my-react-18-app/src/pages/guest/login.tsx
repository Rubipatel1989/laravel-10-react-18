import { Button, Card, CardContent, TextField } from "@mui/material";
import { error } from "console";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email:yup.string().required('This is required').email('This is invalid email'),
    password:yup.string().required('This is required').min(6, 'Minimum length should be 6 characters')
})
const Login = () => {
    const {
        handleSubmit,
        register,
        control,
        formState:{errors, isSubmitting},
    } = useForm({
        resolver:yupResolver(schema),
        defaultValues:{
            email:"",
            password:""
        }
    });
    const onsubmit = (data:any) => {
        console.log(data);
    };
    return (
        <div style={{display:'flex', justifyContent:'center', height:'100vh',alignItems:'center'}}>
            <Card sx={{minWidth:450, justifyContent:'center'}}>
                <CardContent>
                    <form onSubmit={handleSubmit(onsubmit)}>
                    <h1>Login Page</h1>
                    <Controller name="email" control={control} render={({ field }) => (
                            <TextField fullWidth label="Email" variant="filled" error = {!!errors.email} helperText={errors.email ? errors.email.message : ''} {...field} />
                        )}
                    />
                    <Controller name="password" control={control} render={({ field }) => (
                            <TextField fullWidth label="Password" variant="filled" error = {!!errors.password} helperText={errors.password ? errors.password.message : ''} {...field} />
                        )}
                    />
                        <Button sx={{ mt:3}} variant="contained" color="primary" type="submit" disabled={isSubmitting}>Login</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
export default Login