import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getStore } from './'
import { 
    userentityInitialPing,
    userentityPing,
} from './redux/userentities/actions'

class Clockwork extends Component {

    state = { timer: null }
    componentDidMount() { this.startTimer() }
    componentWillUnmount() { this.stopTimer() }

    tick = () => {
        const store = getStore()
        store.dispatch({ type: `CLOCKWORK/TICK` }) 
        //console.log ('tick')
        const { ticks } = this.props.clockwork
        const { 
            readyToPing, 
            doneFirstPing,
        } = this.props.userentities
        
        if (readyToPing && !doneFirstPing ){
            store.dispatch({ type: `USERENTITY/DONE_FIRST_PING`, doneFirstPing: true })
            userentityInitialPing ()
        }

        if (ticks === 4 && doneFirstPing) {
            userentityPing ()
        }
        
        if (ticks % 10 === 0 && doneFirstPing) {
            userentityPing ()
        }

    }

    startTimer = () => {
        const tickDelay = 1
        const {
            timer
        } = this.state
        if (!timer) {
            this.setState({ timer: setInterval(this.tick, tickDelay * 1000) })
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
        const { ticks} = this.props.clockwork
        const showClock = false
        if (!showClock) {
            return null
        }
        return <React.Fragment>{ticks}</React.Fragment>
    }
}

const mapStateToProps = (store) => {
    return {
        clockwork: store.clockwork,
        userentities: store.userentities
    }
}

export default (connect(mapStateToProps, null)(Clockwork))
