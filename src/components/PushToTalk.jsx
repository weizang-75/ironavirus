import React, {useState/*, useEffect*/} from 'react'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
import { clientSend } from '../redux/pushToTalk/actions'
import {
    makeStyles,
    Avatar,
    Button,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Grid,
    LinearProgress,
} from '@material-ui/core/'
import { 
    Icon,
    InputTextfield,
} from '../components'

const useStyles = makeStyles(theme => ({
    contentView:{
        marginBottom: 100,
    },
    contentIcon:{
        background: 'none',
    },
    content:{
        padding: theme.spacing(),
    },
    btnTxtLeft: {
        marginLeft: theme.spacing(),
    },
    talkBtn:{
        marginRight: theme.spacing(),
    },
}))

export default function PushToTalk(props) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const pushToTalkSlice = useSelector(state => state.pushToTalk)
    const {
        sending,
        message,
    } = pushToTalkSlice

    const userentitiesSlice = useSelector(state => state.userentities)
    const {
        fingerprint,
    } = userentitiesSlice

    const [valid, setValid] = useState(false)

    const validate = (value) => {
        value.length > 3 ? setValid(true) : setValid(false)
    }

    return (
        <div id={`messages`} className={classes.contentView}>
            <Grid container>
                <Grid item xs={12} md={8} className={classes.content}>
                    <Card>
                        <CardHeader 
                            title={`Push To Talk`}
                            avatar={<Avatar className={classes.contentIcon}>
                                        <Icon icon={`pushToTalk`} color={`primary`} />
                                    </Avatar>}/>
                        <Grid container>
                            <Grid item xs={12}>
                                <CardContent>
                                    <InputTextfield field={{
                                        id: `newMessage`,
                                        value: message,
                                        disabled: sending,
                                        autoFocus: true,
                                        error: false,
                                        multiline: true,
                                        rows: 2,
                                        onChange: (value) => {
                                            // setMessage(value)
                                            dispatch({type: `PUSH-TO-TALK/MESSAGE`, message: value})
                                            validate(value)
                                        },
                                    }}/>
                                </CardContent>
                                
                                {sending ? <LinearProgress /> : <CardActions>
                                        <div style={{flexGrow:1}} />
                                        <Button 
                                        className={classes.talkBtn}
                                        disabled={!valid}
                                        variant={`contained`}
                                        color={`primary`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            clientSend(message, fingerprint)
                                        }}>
                                        <Icon icon={`pushToTalk`} color={`inherit`} />
                                        <span className={classes.btnTxtLeft}>
                                            Talk
                                        </span>
                                    </Button>
                                </CardActions> }
                                    
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

/*
*/