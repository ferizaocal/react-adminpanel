import React, { useState } from 'react'
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router';

export default function Login() {

    const navigate = useNavigate(); 
    const [email, setEmail] = useState('ferizaocal60@gmail.com');
    const [password, setPassword] = useState('123456');
    console.log(email);
 


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admin Girişi
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)}
                      
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-posta adresi"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    {
                        email.length !== 0 ? "" : "E-posta giriniz."
                    }
                    <TextField
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Şifre"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                       onClick={()=>{
                          
                            if(email == "ferizaocal60@gmail.com" && password == "123456"){
                                navigate("/dashboard");
                            }
                            
                       }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        GİRİŞ YAP
                    </Button>
                </Box>
            </Box>
       
        </Container>
    )
}
