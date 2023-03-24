import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';



import { Link, Navigate, useNavigate, useOutlet } from "react-router-dom";



import { AppBar, Button, createTheme, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, ThemeProvider, Toolbar } from "@mui/material";
import { AccountCircle, Dashboard, DesignServices, Dns, Menu, Person, StorageSharp } from "@mui/icons-material";


export const ProtectedLayout = () => {
    const [open, setOpen] = useState(false);
    const outlet = useOutlet();
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => setOpen(!open)}
                        size="large"
                        edge="start"
                        color="inherit"

                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <IconButton

                        color="inherit"
                        size="large"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="main">
                {outlet}
            </Box>

            <LeftDrawerMenu bubirTasarim={<div></div>} isDrawerOpen={open} handleDrawerClose={() =>{
                
                for (let index = 0; index < 10; index++) {
                 console.log("feriza nur öcal");
                 console.log(index);
                    
                }
                 setOpen(false)}} />

           
        </Box>
    );


};

const menu =
    [// dizi işareti
        {// obje
            menuName: "Anasayfa",
            menuUrl: "/dashboard"
        },
        {// obje
            menuName: "Randevular",
            menuUrl: "/dashboard"
        },
        {// obje
            menuName: "Müşteriler",
            menuUrl: "/customers" // butonlara tıklama olayı verdik ama navigate ile yönlendirmedik
        },
        {// obje
            menuName: "Çalışanlar",
            menuUrl: "/dashboard"
        },
        {// obje
            menuName: "Hizmetler",
            menuUrl: "/dashboard"
        },
        {// obje
            menuName: "Ayarlar",
            menuUrl: "/dashboard"
        },
    ]
const LeftDrawerMenu = (props) => {

    const navigate = useNavigate();

    const theme = createTheme({
        typography: {
            body1: {
                fontWeight: 'bold'
            }
        },
        components: {
            MuiGrid: {
                styleOverrides: {
                    root: {
                        background: '#3C0631',
                        paddingTop: '50px'
                    }
                }
            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        color: '#fff',
                    }
                }
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        color: '#fff'
                    }
                }
            }
        }
    })
    return (
        <React.Fragment key={'left'}>
            <Drawer
                sx={{ '.MuiDrawer-paper': { width: '300px' } }}
                anchor={'left'}
                open={props.isDrawerOpen}
                onClose={props.handleDrawerClose}
            >
                <Grid>
                    <Box sx={{
                        padding: '20px',
                    }}>
                        <Box sx={{ height: '200px' }}>
                            <div >
{/* js tarafına erişmek için {bunu yapıyoruz} */}
{
    props.bubirTasarim
}
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <ThemeProvider theme={theme}>
                    <Grid flex={1}>
                        <List>
                            {
                                
                                menu.map((item, index) => {
                                   
                                    return <ListItem key={index}> 
                                        <ListItemButton onClick={()=>{
                                         
                                            console.log(item)
                                            navigate(item.menuUrl)
                                            props.handleDrawerClose();

                                        }}>
                                            <ListItemIcon>
                                                <Dashboard />
                                            </ListItemIcon>
                                            <ListItemText primary={item.menuName} />
                                        </ListItemButton>
                                    </ListItem>
                                })
                            }
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Çıkış Yap"} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </ThemeProvider>
            </Drawer>
        </React.Fragment>
    )
}
