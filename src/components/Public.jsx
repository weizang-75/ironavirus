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
import { Ironavirus } from '../graphics'

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

    useEffect(() => {
        if (!fingerprinted && !fingerprinting) makeFingerprint()
        if (!saving && !saved){
            if (!ipgeoFetching && !ipgeoFetched) fetchIpgeo()
        }
    }, [ dispatch, fingerprint, fingerprinted, fingerprinting, 
            ipgeoFetched, ipgeoFetching, saving, saved])

    return  <div className={classes.screen}>
                <div 
                    className={classes.logo}
                    id={`logo`}>
                    <Ironavirus />
                </div>
            </div>
}
