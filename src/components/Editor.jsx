import React from 'react'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import {
    newVirus,
    publish,
    defaultMessage,
} from '../redux/theMessage/actions'
import {
    makeStyles,
    Button,
    IconButton,
    CardContent,
    CardActions,
    FormControl,
    Select,
    MenuItem,
} from '@material-ui/core/'
import { Alert } from '@material-ui/lab/'
import { 
    Icon,
    InputTextfield,
} from './'

const useStyles = makeStyles(theme => ({
    doneBtn:{
        marginLeft: theme.spacing(),
    },
    actionsMargin:{
        marginLeft: theme.spacing(),
    },
    oneDivToRule: {
        display: 'block',
    },
    innerDivToRule:{
        width: 350,
        margin: 'auto',
    },
    boSelecta: {
        marginTop: theme.spacing(2),
        width: 234,
    },
    publishBtn: {
        marginBottom: theme.spacing(),
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
    preset:{
        marginBottom: theme.spacing(),
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
        threatLevel,
        publishing,
    } = theMessageSlice

    const validate = () => {
        let isValid = true
        if (platitudeTop === `STAY ALERT` && platitudeMiddleA === `CONTROL` && platitudeMiddleB === `THE VIRUS` && platitudeBottom === `SAVE LIVES`) isValid = false
        return isValid
    }

    return (
        <div className={classes.oneDivToRule}>
            <div className={classes.innerDivToRule}>
                <CardContent>
                    <div className={classes.preset}>
                        <FormControl fullWidth className={classes.boSelecta}>
                            <Select
                            style={{padding: 8}}
                              labelId={`preset-select-label`}
                              id={`preset-select`}
                              value={`choose`}
                              onChange={(e) => {
                                if (e.target.value === `ukgov`) defaultMessage()
                                if (e.target.value === `blank`) newVirus()
                              }}>
                              <MenuItem value={`choose`}>
                                Preset virus
                              </MenuItem>
                              <MenuItem value={`blank`}>Blank</MenuItem>
                              <MenuItem value={`ukgov`}>UK Government</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    
        
                    <div className={classes.none}>
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
                    <div className={classes.none}>
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
                    </div>
                    <div className={classes.none}>
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
                    <div className={classes.none}>
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

                    <div className={classes.none}>
                        <FormControl fullWidth className={classes.boSelecta}>
                            <Select
                                style={{padding: 8}}
                                labelId={`threatLevel-select-label`}
                                id={`threatLevel-select`}
                                value={threatLevel}
                                onChange={(e) => {
                                    dispatch({type:`THEMESSAGE/THREATLEVEL`, threatLevel: e.target.value})
                                }}>
                              <MenuItem value={`warning`}>Warning</MenuItem>
                              <MenuItem value={`alert`}>Alert</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                </CardContent>

                <CardActions>
                    <div className={classes.actionsMargin}>
                        <Button
                            disabled={publishing}
                            variant={`contained`}
                            color={`primary`}
                            onClick={(e) => {
                                e.preventDefault()
                                //if (validate()){
                                    publish()
                                //}
                            }}>
                            <span className={classes.btnTxt}>
                                Next
                            </span>
                            <Icon icon={`play`} color={`inherit`} />
                        </Button>
                        <span className={classes.doneBtn}>
                            <IconButton
                                disabled={publishing}
                                color={`default`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch({ type: `APP/EDITOR_OPEN`, editorOpen: false })
                                }}> 
                                <Icon icon={`tick`} color={`inherit`} />
                            </IconButton>
                        </span>
                        </div>

                        

                </CardActions>
                <CardActions>
                { error ? <div className={classes.none}><Alert severity={`error`}>
                                {error}
                    </Alert></div> : null }
                    </CardActions>
            </div>
        </div>
    )
}
/*

<InputLabel id={`threatLevel-select-label`}>
                        Threat Level
                    </InputLabel>
*/