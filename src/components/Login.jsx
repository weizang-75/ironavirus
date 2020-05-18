import React from 'react'
import { 
    useSelector, 
    // useDispatch 
} from 'react-redux'
import { 
    // sendEmail,
    // logout,
} from '../redux/app/actions'
import {
    makeStyles,
    Button,
    CardContent,
    CardActions,
    TextField,
} from '@material-ui/core/'
import { Alert } from '@material-ui/lab/'
import { signin } from '../redux/app/actions'
import { 
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
    loginFormWrap:{
    },
    contentIcon:{
        background: 'none',
    },
    loginForm: {
        padding: theme.spacing(),
    },
    inputChunk:{
        margin: theme.spacing(),
    },
    btnTxt:{
        marginLeft: theme.spacing()
    },
    authBtn:{
        marginLeft: theme.spacing()
    },
    vSpace:{
        height: theme.spacing(2)
    },
    link:{
        cursor: 'pointer',
    }
}))

export default function Login(props) {
    // const dispatch = useDispatch()
    const [creds, setCreds] = React.useState({ email: null, password: null })
    const classes = useStyles()
    const appSlice = useSelector(state => state.app)
    const {
        authing,
        authDone,
        authError,
        user,
    } = appSlice

    const validate = () => {
        let isValid = true
        const email = document.getElementById(`email`).value
        const password = document.getElementById(`password`).value
        if (email === ``){
            isValid = false
        }
        if (password === ``){
            isValid = false
        }
        let result = {
            isValid,
            email,
            password,
        }
        setCreds({ email, password })
        return result
    }

    return (
        <div className={classes.loginFormWrap}>       
            { authError ? <CardContent>
                    <Alert severity="warning">
                        {authError}
                    </Alert>
                </CardContent> : null }
            
            { authing && !authDone ? null : 
                user ? null : <React.Fragment>

                    <CardContent>
                        <TextField
                            fullWidth
                            onChange={(e) => {
                                validate()
                            }}
                            label={`Email`}
                            id={`email`}
                            variant={`outlined`}
                            size={`small`}
                        />
                        <div className={classes.vSpace} />
                        <TextField
                            fullWidth
                            onChange={(e) => {
                                validate()
                            }}
                            type={`password`}
                            label={`Password`}
                            id={`password`}
                            variant={`outlined`}
                            size={`small`}
                        />
                    </CardContent>
                    <CardActions>
                        <Button
                            className={classes.authBtn}
                            variant={`text`}
                            color={`primary`}
                            onClick={(e) => {
                                e.preventDefault()
                                signin(creds)
                            }}>
                            <Icon icon={`logout`} color={`inherit`} />
                            <span className={classes.btnTxt}>
                                Sign In
                            </span>
                        </Button>
                    </CardActions>
                </React.Fragment>
            }
    		
        </div>
    )
}




/*
<CardContent>
    <Typography variant={`body2`} gutterBottom>
         Wenn Sie möchten, dass wir antworten, 
         müssen Sie uns mitteilen, 
         wie wir Sie kontaktieren können
    </Typography>
</CardContent>
*/