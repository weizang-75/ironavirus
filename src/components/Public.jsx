import React, { useEffect } from 'react'
import {
    makeStyles,
} from '@material-ui/core'
import { 
    useSelector, 
    useDispatch 
} from 'react-redux'
import {
    makeFingerprint,
    fetchIpgeo,
} from '../redux/userentities/actions'
import { 
    Ironavirus,
} from '../graphics'

import { 
    // TheMessage,
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
    theMessage:{
        position: 'relative',
    },
    theMessageGrid: {
        zIndex: 10,
        position: 'absolute',
        border: '1px solid red',
    },
    warningElements: {
        zIndex: 5,
        position: 'absolute',
        border: '1px solid pink',
    }
}))

export default function Public(props) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const userentitiesSlice = useSelector(state => state.userentities)
    const {
        saved,
        saving,
        ipgeoFetched,
        ipgeoFetching,
        fingerprinted,
        fingerprint,
        fingerprinting,
    } = userentitiesSlice
    const animationSlice = useSelector(state => state.animation)
    const {
        logoFaded,
        logoFading,
    } = animationSlice

    useEffect(() => {
        if (!fingerprinted && !fingerprinting) makeFingerprint()
        if (!saving && !saved){
            if (!ipgeoFetching && !ipgeoFetched) fetchIpgeo()
        }
        // console.log ('logoFading', logoFading)
        // platitude 

        if (!logoFaded && !logoFading){
            setTimeout(() => {
                dispatch({type:`ANIMATION/LOGOFADING`, logoFading: true})
                fade(`fadeOutSpin`, `#logo`, () => {
                    dispatch({type:`ANIMATION/LOGOFADED`, logoFaded: true})
                    dispatch({type:`ANIMATION/LOGOFADING`, logoFading: false})
                })
            }, 333)
        }

    }, [ dispatch, fingerprint, fingerprinted, fingerprinting, 
            ipgeoFetched, ipgeoFetching, saving, saved, 
            logoFaded, logoFading])

    if (!logoFaded){
        return <div className={classes.screen}>
                    <div 
                        className={classes.logo}
                        id={`logo`}>
                        <Ironavirus />
                    </div> 
                </div>
    }

    return  <UI />
}

/*

<div className={classes.warningElements}>
                        <WarningElements />
                    </div>
<div className={classes.screen}>
                <div className={classes.theMessage}>
                    The. Message
                </div>
                <div className={classes.warningElements}>
                    
                </div>
            </div>
*/