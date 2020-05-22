import React from 'react'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import { saveMessage } from '../redux/theMessage/actions'
import {
    makeStyles,
    // useTheme,
    Button,
    IconButton,
    CardContent,
    CardActions,
    Grid,
    Typography,
} from '@material-ui/core/'
import { 
    Icon,
    InputTextfield,
} from './'
import {
    Ironavirus
} from '../graphics'

const useStyles = makeStyles(theme => ({
    menuWrap:{
        width: 300,
    },
    menuHeader:{
        display: 'flex',
        margin: theme.spacing(),
        padding: theme.spacing(),
    },
    menuHeaderTitle:{
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(),
        fontSize: '1.5rem',
    },
    logoDiv:{
        width: 50,
        height: 50,
    },
    platitude:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    actionBtns:{
        margin: theme.spacing()
    },
    btnTxt:{
        marginRight: theme.spacing()
    },
    btnTxtL:{
        marginLeft: theme.spacing()
    },
    link:{
        cursor: 'pointer',
    },
    grow:{
        flexGrow: 1,
    }
}))

export default function TheMenu(props) {
    
    const dispatch = useDispatch()
    const classes = useStyles()
    const theMessageSlice = useSelector(state => state.theMessage)
    const {
        platitudeTop,
        platitudeMiddleA,
        platitudeMiddleB,
        platitudeBottom,
    } = theMessageSlice

    // const theme = useTheme()
    // console.log (theme)

    return (
        <div className={classes.menuWrap}>
            <div className={classes.menuHeader}>
                <Grid container>
                    <Grid item>
                        <div className={classes.logoDiv}>
                            <Ironavirus />
                        </div>
                    </Grid>
                    <Grid item className={classes.grow}>
                        <Typography variant={`h6`} className={classes.menuHeaderTitle}>
                            {`IRONAVIRUS`}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton
                            color={`default`}
                            onClick={(e) => {
                                e.preventDefault()
                                dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
                            }}>
                            
                            <Icon icon={`close`} color={`inherit`} />
                        </IconButton>
                    </Grid>

                </Grid>
            </div>

            
            <CardContent>
                <div>
                    <InputTextfield field={{
                        autoFocus: true,
                        // label: `First Platitude`,
                        id: `platitudeTop`,
                        defaultValue: platitudeTop.toUpperCase(),
                        onChange: (value) => {
                            document.getElementById(`field-platitudeTop`).value = value.toUpperCase()
                            dispatch({type:`THEMESSAGE/PLAT-TOP`, platitudeTop: value.toUpperCase()})
                        },
                    }}/>
                </div>
                <div className={classes.platitude}>
                    <InputTextfield field={{
                        // label: `Second Platitude`,
                        id: `platitudeMiddleA`,
                        defaultValue: platitudeMiddleA.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: value.toUpperCase()})
                        },
                    }}/>
                    <InputTextfield field={{
                      id: `platitudeMiddleB`,
                      defaultValue: platitudeMiddleB.toUpperCase(),
                      onChange: (value) => {
                        dispatch({type:`THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: value.toUpperCase()})
                      },
                    }}/>
                </div>
                <div className={classes.platitude}>
                    <InputTextfield field={{
                        // label: `Third Platitude`,
                        id: `platitudeBottom`,
                        defaultValue: platitudeBottom.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: value.toUpperCase()})
                        },
                    }}/>
                </div>
            </CardContent>
            <CardActions className={classes.actionBtns}>
                <Button
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault()
                        // dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
                        saveMessage()
                    }}>
                    
                    <Icon icon={`save`} color={`inherit`} />
                    <span className={classes.btnTxtL}>
                        Save
                    </span>
                </Button>
            </CardActions>
        </div>
    )
}






/*
<CardContent>
    <Alert 
        severity={severity}
        variant={`filled`}>
        {`Control the message`}
    </Alert>
</CardContent>
import { Alert } from '@material-ui/lab/'
const severity = `info`
*/