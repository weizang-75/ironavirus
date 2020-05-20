import React from 'react'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import { saveMessage } from '../redux/theMessage/actions'
import {
    makeStyles,
    Button,
    CardContent,
    CardActions,
} from '@material-ui/core/'
import { Alert } from '@material-ui/lab/'
import { 
    Icon,
    InputTextfield,
} from './'

const useStyles = makeStyles(theme => ({
    menuWrap:{
        width: 300,
    },
    platitude:{
        marginTop: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    actionBtns:{
        margin: theme.spacing()
    },
    btnTxt:{
        marginRight: theme.spacing()
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

    const severity = `info`

    return (
        <div className={classes.menuWrap}>
            <CardContent>
                <Alert 
                    severity={severity}
                    variant={`filled`}>
                    {`Control the message`}
                </Alert>
            </CardContent>
            <CardContent>
                <div className={classes.platitude}>
                    <InputTextfield field={{
                        autoFocus: true,
                        label: `First Platitude`,
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
                        label: `Second Platitude`,
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
                        label: `Third Platitude`,
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
                    fullWidth
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                        // dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
                        saveMessage()
                    }}>
                    <span className={classes.btnTxt}>
                        Save
                    </span>
                    <Icon icon={`save`} color={`inherit`} />
                </Button>
                <Button
                    fullWidth
                    variant={`text`}
                    color={`default`}
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
                    }}>
                    <span className={classes.btnTxt}>
                        Cancel
                    </span>
                    <Icon icon={`close`} color={`inherit`} />
                </Button>
            </CardActions>
        </div>
    )
}
