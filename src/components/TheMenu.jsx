import React from 'react'
// import { FacebookButton } from 'react-social'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import { 
    init,
    publish,
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
    menuHeader:{
        display: 'flex',
        //margin: theme.spacing(),
        paddingLeft: theme.spacing(2),
    },
    iconMenu:{
        marginBottom: theme.spacing(),
    },
    menuHeaderTitle: {
        marginLeft: theme.spacing(),
        marginTop: theme.spacing(),
        fontSize: '1.4rem',
    },
    logoDiv: {
        marginTop: theme.spacing(),
        width: 30,
        height: 30,
    },
    actionsMachine: {
        flexGrow: 1,
        marginLeft: theme.spacing(2),
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

export default function TheMenu(props) {
    
    const dispatch = useDispatch()
    const classes = useStyles()
    const theMessageSlice = useSelector(state => state.theMessage)
    // const [anchorEl, setAnchorEl] = React.useState(null)
    const {
        error,
        platitudeTop,
        platitudeMiddleA,
        platitudeMiddleB,
        platitudeBottom,
        threat,
        publishing,
    } = theMessageSlice

    // const openShareMenu = (event) => {
    //     setAnchorEl(event.currentTarget)
    // }

    // const closeShareMenu = () => {
    //     setAnchorEl(null)
    // }

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
                            disabled={publishing}
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

                <div className={classes.iconMenu}>
                
                    <IconButton
                        disabled={publishing}
                        onClick={(e) => {
                            e.preventDefault()
                            // defaultMessage()
                        }}>
                        <Icon icon={`info`} color={`inherit`} />
                    </IconButton>

                    <IconButton
                        disabled={publishing}
                        onClick={(e) => {
                            e.preventDefault()
                            init()
                        }}>
                        <Icon icon={`refresh`} color={`inherit`} />
                    </IconButton>
                    
                </div>

                <div className={classes.firstPlatitude}>
                    <InputTextfield field={{
                        disabled: publishing,
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
                        disabled: publishing,
                        id: `platitudeMiddleA`,
                        value: platitudeMiddleA.toUpperCase(),
                        onChange: (value) => {
                            dispatch({type:`THEMESSAGE/PLAT-MID-A`, platitudeMiddleA: value.toUpperCase()})
                        },
                    }}/>
                    <InputTextfield field={{
                      disabled: publishing,
                      id: `platitudeMiddleB`,
                      value: platitudeMiddleB.toUpperCase(),
                      onChange: (value) => {
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
            <CardActions>
                <div className={classes.actionsMachine}>
                    <Button
                        fullWidth
                        disabled={publishing}
                        variant={`contained`}
                        color={`secondary`}
                        onClick={(e) => {
                            e.preventDefault()
                            publish()
                        }}>
                        <span className={classes.btnTxt}>
                            Publish
                        </span>
                        <Icon icon={`play`} color={`inherit`} />
                    </Button>
                </div>
            </CardActions>

            { error ? <div className={classes.alertPad}><Alert severity={`error`}>
                        {error}
            </Alert></div> : null }

            
        </div>
    )
}

/*

                    <FacebookButton 
                        url={`https://ironavirus.web.app/`} 
                        appId={`566945017574013`}>
                        Facebook
                    </FacebookButton>



                    <IconButton
                        disabled={publishing}
                        onClick={openShareMenu}>
                        <Icon icon={`share`} color={`inherit`} />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeShareMenu}>
                        menu
                    </Menu>


onClick={closeShareMenu}
                        <MenuItem></MenuItem>
                        <MenuItem >Facebook</MenuItem>
                        <MenuItem onClick={closeShareMenu}>Twitter</MenuItem>
                        <MenuItem onClick={closeShareMenu}>Linkedin</MenuItem>

                        <EmailShareButton />

                        <WhatsappShareButton />
                        <FacebookShareButton />
                        <LinkedinShareButton />

                          WhatsappShareButton,
    EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
*/