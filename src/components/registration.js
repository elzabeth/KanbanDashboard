import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'

const Registration = () => {

    const paperStyle = { padding:'30px 20px', height: '70vh', width: 300, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1e9de2' }
    const headerStyle = { margin: 0 }
    const buttonStyle = { margin: "20px auto"}

    return <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='Center'>
                <Avatar style={avatarStyle}><AddCircleOutlinedIcon /></Avatar>
                <h2 style={headerStyle}>Registration</h2>
                <Typography variant='caption'>
                    Please fill this form to create an account !
                </Typography>
            </Grid>
            <form>
                <TextField label="Name" placeholder="Enter name" fullWidth required></TextField>
                <TextField label="Username" placeholder="Enter username" fullWidth required></TextField>
                <TextField label="Email" placeholder="Enter email" fullWidth required></TextField>
                <TextField label="Contact Number" placeholder="Enter contact number" fullWidth></TextField>
                <TextField label="Password" placeholder="Enter password" fullWidth required></TextField>
                <Button style={buttonStyle} type='submit' color='primary' variant='contained' fullWidth>REGISTER</Button>
            </form>
        </Paper>
        </Grid>
}

export default Registration;