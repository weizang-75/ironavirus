import React from 'react'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import { 
    publish,
    defaultMessage,
} from '../redux/theMessage/actions'
import {
    makeStyles,
    Button,
    IconButton,
    CardContent,
    CardActions,
    Grid,
    Typography,
    FormControl,
    Select,
    MenuItem,
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
    formControl:{
        margin: theme.spacing(),
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
    firstPlatitude:{
        // marginTop: theme.spacing(2),
    },
    platitude:{
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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
        threat,
    } = theMessageSlice

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

                <div className={classes.firstPlatitude}>
                    <InputTextfield field={{
                        autoFocus: true,
                        id: `platitudeTop`,
                        value: platitudeTop.toUpperCase(),
                        onChange: (value) => {
                            document.getElementById(`field-platitudeTop`).value = value.toUpperCase()
                            dispatch({type:`THEMESSAGE/PLAT-TOP`, platitudeTop: value.toUpperCase()})
                        },
                    }}/>
                </div>
                <div className={classes.platitude}>
                    <InputTextfield field={{
                        id: `platitudeMiddleA`,
                        value: platitudeMiddleA.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: value.toUpperCase()})
                        },
                    }}/>
                    <InputTextfield field={{
                      id: `platitudeMiddleB`,
                      value: platitudeMiddleB.toUpperCase(),
                      onChange: (value) => {
                        dispatch({type:`THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: value.toUpperCase()})
                      },
                    }}/>
                </div>
                <div className={classes.platitudeLast}>
                    <InputTextfield field={{
                        id: `platitudeBottom`,
                        value: platitudeBottom.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: value.toUpperCase()})
                        },
                    }}/>
                </div>

            </CardContent>
            <CardActions>

                <IconButton
                    onClick={(e) => {
                        e.preventDefault()
                        defaultMessage()
                    }}>
                    <Icon icon={`refresh`} color={`inherit`} />
                </IconButton>


                <FormControl className={classes.formControl}>
                    <Select
                        id={`threat`}
                        value={threat}
                        onChange={(e) => {
                            dispatch({type: `THEMESSAGE/THREAT`, threat: e.target.value})
                        }}>
                      <MenuItem value={`#eb1c24`}>
                        <div style={{width: 24, height: 24, background: '#eb1c24'}} />                      
                      </MenuItem>
                      <MenuItem value={`#01a43b`}>
                        <div style={{width: 24, height: 24, background: '#01a43b'}} />    
                      </MenuItem>
                    </Select>
                </FormControl>
                
                <Button
                    variant={`text`}
                    // color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                        publish()
                    }}>
                    <span className={classes.btnTxt}>
                        Publish
                    </span>
                    <Icon icon={`play`} color={`inherit`} />
                </Button>
            </CardActions>
        </div>
    )
}