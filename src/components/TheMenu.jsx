import React from 'react'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
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

    return (
        <div className={classes.menuWrap}>

            <React.Fragment>

                <CardContent>
                    <Alert variant={`outlined`} severity="success">
                        {`变更讯息`}
                    </Alert>
                </CardContent>


                <CardContent>
                    
                    <InputTextfield field={{
                        label: `First Platitude`,
                        id: `platitudeTop`,
                        defaultValue: platitudeTop.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-TOP`, platitudeTop: value.toUpperCase()})
                        },
                    }}/>
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

                    <InputTextfield field={{
                        label: `Third Platitude`,
                        id: `platitudeBottom`,
                        defaultValue: platitudeBottom.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: value.toUpperCase()})
                        },
                    }}/>
                </CardContent>
                
                <CardActions className={classes.actionBtns}>
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            e.preventDefault()
                            dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
                        }}>
                        <span className={classes.btnTxt}>
                            Done
                        </span>
                        <Icon icon={`tick`} color={`inherit`} />
                    </Button>
                </CardActions>

            </React.Fragment>
        </div>
    )
}


/*


<Typography 
    gutterBottom
    className={classes.title}
    variant={`h5`}>
    The Message
</Typography>


<Button
    variant={`text`}
    color={`default`}
    onClick={(e) => {
        e.preventDefault()
        dispatch({ type: `APP/UI_OPEN`, uiOpen: false })
    }}>
    <span className={classes.btnTxt}>
        Close
    </span>
    <Icon icon={`close`} color={`inherit`} />
</Button>



<div className={classes.grow} />



// const validate = () => {
//     console.log (theMenu)
//     return true
// }

// let isValid = true
// const email = document.getElementById(`email`).value
// const password = document.getElementById(`password`).value
// if (email === ``){
//     isValid = false
// }
// if (password === ``){
//     isValid = false
// }
// let result = {
//     isValid,
//     email,
//     password,
// }
// setCreds({ email, password })
*/