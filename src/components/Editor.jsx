import React from 'react'
// import { FacebookButton } from 'react-social'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import { showInfo } from '../redux/app/actions'
import { 
    init,
    publish,
    defaultMessage,
} from '../redux/theMessage/actions'
import {
    makeStyles,
    Button,
    ButtonBase,
    IconButton,
    CardContent,
    CardActions,
    Grid,
    Typography,
    FormControl,
    Select,
    MenuItem,
} from '@material-ui/core/'
import { Alert } from '@material-ui/lab/'
import { 
    Icon,
    InputTextfield,
} from './'
import {
    Ironavirus
} from '../graphics'

const useStyles = makeStyles(theme => ({
    menuWrap: {
        width: 265,
    },
    iconBtn:{
        marginRight: theme.spacing(),
    },
    menuHeader:{
        display: 'flex',
        marginTop: theme.spacing(),
        paddingLeft: theme.spacing(2),
    },
    iconMenu:{
        marginBottom: theme.spacing(),
    },
    menuHeaderTitle: {
        marginLeft: theme.spacing(),
        marginTop: theme.spacing(1.5),
        fontSize: '1.4rem',
    },
    logoDiv: {
        marginTop: theme.spacing(),
        width: 30,
        height: 30,
    },
    actionsMachine: {
        flexGrow: 1,
        marginRight: theme.spacing(5),
    },
    boSelecta: {
        marginTop: theme.spacing(),
        width: 55,
    },
    formControl: {
        margin: theme.spacing(),
    },
    alertPad: {
        margin: theme.spacing(2),
    },
    firstPlatitude:{
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

export default function Editor(props) {
    
    const dispatch = useDispatch()
    const classes = useStyles()
    const theMessageSlice = useSelector(state => state.theMessage)
    const {
        error,
        platitudeTop,
        platitudeMiddleA,
        platitudeMiddleB,
        platitudeBottom,
        threat,
        publishing,
        isPristine,
    } = theMessageSlice

    const validate = () => {
        let isValid = true
        if (platitudeTop === `STAY ALERT` && platitudeMiddleA === `CONTROL` && platitudeMiddleB === `THE VIRUS` && platitudeBottom === `SAVE LIVES`) isValid = false
        // console.log ('validate isValid', isValid)
        return isValid
    }

    return (
        <div className={classes.menuWrap}>
            <div className={classes.menuHeader}>
                    <Grid container>
                        <ButtonBase
                            onClick={(e) => {
                                e.preventDefault()
                                showInfo()
                            }}>
                            <Grid item>
                                <div className={classes.logoDiv}>
                                    <Ironavirus />
                                </div>
                            </Grid>
                            <Grid item>
                                <Typography variant={`h6`} className={classes.menuHeaderTitle}>
                                    {`IRONAVIRUS`}
                                </Typography>
                            </Grid>
                        </ButtonBase>
                        <Grid item className={classes.grow} />
                        <Grid item>
                            <IconButton
                                disabled={publishing}
                                color={`default`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: false })
                                }}> 
                                <Icon icon={`close`} color={`inherit`} />
                            </IconButton>
                        </Grid>
                    </Grid>
                
            </div>

            <CardContent>

                <div className={classes.firstPlatitude}>
                    <InputTextfield field={{
                        disabled: publishing,
                        autoFocus: true,
                        id: `platitudeTop`,
                        value: platitudeTop.toUpperCase(),
                        onChange: (value) => {
                            validate()
                            dispatch({ type: `THEMESSAGE/PRISTINE`, isPristine: false })
                            document.getElementById(`field-platitudeTop`).value = value.toUpperCase()
                            dispatch({type:`THEMESSAGE/PLAT-TOP`, platitudeTop: value.toUpperCase()})
                        },
                    }}/>
                </div>
                <div className={classes.platitude}>
                    <InputTextfield field={{
                        disabled: publishing,
                        id: `platitudeMiddleA`,
                        value: platitudeMiddleA.toUpperCase(),
                        onChange: (value) => {
                            validate()
                            dispatch({ type: `THEMESSAGE/PRISTINE`, isPristine: false })
                            document.getElementById(`field-platitudeMiddleA`).value = value.toUpperCase()
                            dispatch({type:`THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: value.toUpperCase()})
                        },
                    }}/>
                    <InputTextfield field={{
                      disabled: publishing,
                      id: `platitudeMiddleB`,
                      value: platitudeMiddleB.toUpperCase(),
                      onChange: (value) => {
                        validate()
                        dispatch({ type: `THEMESSAGE/PRISTINE`, isPristine: false })
                        document.getElementById(`field-platitudeMiddleB`).value = value.toUpperCase()
                        dispatch({type:`THEMESSAGE/PLAT-MID-B`, platitudeMiddleB: value.toUpperCase()})
                      },
                    }}/>
                </div>
                <div className={classes.platitudeLast}>
                    <InputTextfield field={{
                        disabled: publishing,
                        id: `platitudeBottom`,
                        value: platitudeBottom.toUpperCase(),
                        onChange: (value) => {
                            validate()
                            dispatch({ type: `THEMESSAGE/PRISTINE`, isPristine: false })
                            document.getElementById(`field-platitudeBottom`).value = value.toUpperCase()
                            dispatch({type:`THEMESSAGE/PLAT-BOTTOM`, platitudeBottom: value.toUpperCase()})
                        },
                    }}/>
                </div>
                <div className={classes.boSelecta}>
                    <FormControl fullWidth className={classes.formControl}>
                        <Select
                            disabled={publishing}
                            id={`threat`}
                            value={threat}
                            onChange={(e) => {
                                validate()
                                dispatch({type: `THEMESSAGE/THREAT`, threat: e.target.value})
                            }}>
                          <MenuItem value={`#eb1c24`}>
                            <div style={{width: '100%', height: 24, background: '#eb1c24'}} />                      
                          </MenuItem>
                          <MenuItem value={`#01a43b`}>
                            <div style={{width: '100%', height: 24, background: '#01a43b'}} />    
                          </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </CardContent>


            { !isPristine && validate() ? <CardActions>
                <Button
                    disabled={publishing}
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault()
                        if (validate()){
                            publish()
                        }
                    }}>
                    <span className={classes.btnTxt}>
                        Publish
                    </span>
                    <Icon icon={`play`} color={`inherit`} />
                </Button>
            </CardActions> : null }
            

            { error ? <div className={classes.alertPad}><Alert severity={`error`}>
                        {error}
            </Alert></div> : null }
            <CardActions>

                    <IconButton
                        className={classes.iconBtn}
                        disabled={publishing}
                        onClick={(e) => {
                            e.preventDefault()
                            showInfo()
                        }}>
                        <Icon icon={`info`} color={`inherit`} />
                    </IconButton>


                    <IconButton
                        className={classes.iconBtn}
                        disabled={publishing}
                        onClick={(e) => {
                            e.preventDefault()
                            defaultMessage()
                        }}>
                        <Icon icon={`waiting`} color={`inherit`} />
                    </IconButton>

                    <IconButton
                        className={classes.iconBtn}
                        disabled={publishing}
                        onClick={(e) => {
                            e.preventDefault()
                            init()
                        }}>
                        <Icon icon={`refresh`} color={`inherit`} />
                    </IconButton>

            </CardActions>
        </div>
    )
}
