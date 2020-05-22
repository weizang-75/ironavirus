import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStore } from '../'
import { 
    initFingerprint,
    // firstTing,
    // ting,
    Info,
} from './'

class PushToTalk extends Component {

    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const store = getStore()
        store.dispatch({ type: `PUSHTOTALK/TICK` }) 
        const { 
            ticks,
            fingerprint,
            fingerprinting,
            tinging,
            firstTingResult,
        } = this.props.pushToTalk
        if (ticks > 1 && !fingerprinting && !fingerprint) {
            initFingerprint()
        }
        if (fingerprint && !tinging && !firstTingResult){
            // firstTing()
        }
        if (firstTingResult && !tinging){
            if (ticks % 10 === 0){
                // ting()
            }
        }
    }

    startTimer = () => {
        const { tickInterval} = this.props.pushToTalk
        const {
            timer
        } = this.state
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickInterval * 1000) })
        }
        this.tick()
    }

    stopTimer = () => {
        const {
            timer
        } = this.state
        if (timer) {
            clearInterval(timer)
            this.setState({ timer: null })
        }
    }

    render() {
        const { 
            info,
        } = this.props.pushToTalk
        return info ? <Info /> : null
    }
}

const mapStateToProps = (store) => {
    return {
        pushToTalk: store.pushToTalk,
    }
}

export default (connect(mapStateToProps, null)(PushToTalk))
