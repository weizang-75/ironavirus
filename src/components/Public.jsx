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
    WarningElements,
} from '../graphics'
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
            }, 1000)
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

    return  <WarningElements />
}
