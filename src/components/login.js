import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Paper, Avatar,TextField,Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "40px auto" }
    const avatarStyle = { backgroundColor: '#1e9de2' }
    const buttonStyle = { margin: "20px auto" }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='Center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField label='Username/Email' placeholder='Enter username/email' fullWidth required ></TextField>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required ></TextField>
                <Button style={buttonStyle} type='submit' color='primary' variant='contained' fullWidth >LOGIN</Button>

                <Typography>Don't have an account ?
                    <Link to="/registration">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )

}

export default Login