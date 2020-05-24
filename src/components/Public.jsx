import React, { useEffect } from 'react'
import {
    makeStyles,
} from '@material-ui/core'
import { 
    useSelector, 
    useDispatch, 
} from 'react-redux'
import { 
    Ironavirus,
} from '../graphics'
import {
    UI,
} from '../components'
import { fade } from '../animation'

const useStyles = makeStyles(theme => ({
    screen:{
        height: '99vh',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    logo: {
        width: 256,
        height: 256,
    },
}))

export default function Public(props) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const appSlice = useSelector(state => state.app)
    const {
        logoFaded,
        logoFading,
    } = appSlice

    useEffect(() => {
        if (!logoFaded && !logoFading){
            setTimeout(() => {
                dispatch({type:`APP/LOGOFADING`, logoFading: true})
                fade(`fadeOutSpin`, `#logo`, () => {
                    dispatch({type:`APP/LOGOFADED`, logoFaded: true})
                    dispatch({type:`APP/LOGOFADING`, logoFading: false})
                })
            }, 333)
        }
    }, [dispatch, logoFaded, logoFading])

    if (!logoFaded){
        return <div className={classes.screen}>
                    <div className={classes.logo} id={`logo`}>
                        <Ironavirus />
                    </div> 
                </div>
    }
    return  <UI />
}
