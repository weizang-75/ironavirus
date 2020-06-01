import React from 'react'
import { 
    useSelector,
} from 'react-redux'
/*
  Yellow: #fef600
  Green: #01a43b
  Red: #eb1c24
*/

export default function TheMessage(props) {
    let platitudeTop, platitudeMiddleA, platitudeMiddleB, platitudeBottom, threatLevel
    const theMessageSlice = useSelector(state => state.theMessage)
    if (props.mode === `ui`){
          platitudeTop = theMessageSlice.platitudeTop
          platitudeMiddleA = theMessageSlice.platitudeMiddleA
          platitudeMiddleB = theMessageSlice.platitudeMiddleB
          platitudeBottom = theMessageSlice.platitudeBottom
          threatLevel = theMessageSlice.threatLevel
    } else {
          platitudeTop = props.virus.platitudeTop
          platitudeMiddleA = props.virus.platitudeMiddleA
          platitudeMiddleB = props.virus.platitudeMiddleB
          platitudeBottom = props.virus.platitudeBottom
          threatLevel = props.virus.threatLevel
    }
    let c = {
        background: `#fef600`,
        elements: threatLevel === `warning` ? `#01a43b` : `#eb1c24`,
    }
    
        let platitudeTopFontSize = 58
    let platitudeTopYpos = 65
    if (platitudeTop.length > 10) {
        platitudeTopFontSize = 46
        platitudeTopYpos = 60
    }
    if (platitudeTop.length > 12) {
        platitudeTopFontSize = 26
        platitudeTopYpos = 59
    }

    let platitudeMiddleAFontSize = 72
    let platitudeMiddleAYpos = 178
    if (platitudeMiddleA.length > 7) {
        platitudeMiddleAFontSize = 62
    }
    if (platitudeMiddleA.length > 10) {
        platitudeMiddleAFontSize = 42
        platitudeMiddleAYpos = 158
    }
    if (platitudeMiddleA.length > 12) {
        platitudeMiddleAFontSize = 32
    }

    let platitudeMiddleBFontSize = 68
    let platitudeMiddleBYpos = 244
    if (platitudeMiddleB.length > 8) {
        platitudeMiddleBFontSize = 58
    }
    if (platitudeMiddleB.length > 10) {
        platitudeMiddleBFontSize = 48
        platitudeMiddleBYpos = 234
    }
    if (platitudeMiddleB.length > 11) {
        platitudeMiddleBFontSize = 38
    }

    
    let platitudeBottomFontSize = 64
    let platitudeBottomBYpos = 345
    if (platitudeBottom.length > 6) {
        platitudeBottomFontSize = 54
        platitudeBottomBYpos = 335
    }
    if (platitudeBottom.length > 9) {
        platitudeBottomFontSize = 44
    }
    if (platitudeBottom.length > 12) {
        platitudeBottomFontSize = 34
    }
    

    
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 385 384" >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-0.000000, -0.887697)">
                        <g transform="translate(0.000000, 0.887697)" fill={c.background}>
                            <rect x="0" y="0" width="384" height="384"></rect>
                        </g>
                        <g id="elements" fill={c.elements}>
                            <polygon transform="translate(188.500000, 104.387697) scale(1, -1) translate(-188.500000, -104.387697) " points="188.5 91.8876972 218 116.887697 159 116.887697"></polygon>
                            <polygon points="188.5 0.887697219 206.070283 16.700118 171.739182 16.700118"></polygon>
                            <polygon points="188.5 367.887697 206.070283 383.700118 171.739182 383.700118"></polygon>
                            <polygon transform="translate(188.500000, 284.387697) scale(1, -1) translate(-188.500000, -284.387697) " points="188.5 271.887697 218 296.887697 159 296.887697"></polygon>
                            <polygon points="14.6254575 23 14.6254575 61.1953342 0.414870621 75.7747786 5.19600629e-14 37.2722508"></polygon>
                            <polygon points="14.6254575 99 14.6254575 137.195334 0.414870621 151.774779 5.19600629e-14 113.272251"></polygon>
                            <polygon points="14.6254575 174 14.6254575 212.195334 0.414870621 226.774779 5.19600629e-14 188.272251"></polygon>
                            <polygon points="14.6254575 249 14.6254575 287.195334 0.414870621 301.774779 5.19600629e-14 263.272251"></polygon>
                            <polygon points="14.6254575 324 14.6254575 362.195334 0.414870621 376.774779 5.19600629e-14 338.272251"></polygon>
                            <polygon transform="translate(377.312729, 49.387389) scale(-1, 1) translate(-377.312729, -49.387389) " points="384.625458 23 384.625458 61.1953342 370.414871 75.7747786 370 37.2722508"></polygon>
                            <polygon transform="translate(377.312729, 125.387389) scale(-1, 1) translate(-377.312729, -125.387389) " points="384.625458 99 384.625458 137.195334 370.414871 151.774779 370 113.272251"></polygon>
                            <polygon transform="translate(377.312729, 200.387389) scale(-1, 1) translate(-377.312729, -200.387389) " points="384.625458 174 384.625458 212.195334 370.414871 226.774779 370 188.272251"></polygon>
                            <polygon transform="translate(377.312729, 275.387389) scale(-1, 1) translate(-377.312729, -275.387389) " points="384.625458 249 384.625458 287.195334 370.414871 301.774779 370 263.272251"></polygon>
                            <polygon transform="translate(377.312729, 350.387389) scale(-1, 1) translate(-377.312729, -350.387389) " points="384.625458 324 384.625458 362.195334 370.414871 376.774779 370 338.272251"></polygon>
                            <polygon transform="translate(322.312729, 377.387389) rotate(90.000000) translate(-322.312729, -377.387389) " points="329.625458 351 329.625458 389.195334 315.414871 403.774779 315 365.272251"></polygon>
                            <polygon transform="translate(246.312729, 377.387389) rotate(90.000000) translate(-246.312729, -377.387389) " points="253.625458 351 253.625458 389.195334 239.414871 403.774779 239 365.272251"></polygon>
                            <polygon transform="translate(322.312729, 9.387389) rotate(90.000000) translate(-322.312729, -9.387389) " points="329.625458 -17 329.625458 21.1953342 315.414871 35.7747786 315 -2.72774915"></polygon>
                            <polygon transform="translate(246.312729, 9.387389) rotate(90.000000) translate(-246.312729, -9.387389) " points="253.625458 -17 253.625458 21.1953342 239.414871 35.7747786 239 -2.72774915"></polygon>
                            <polygon transform="translate(123.312729, 377.387389) scale(-1, 1) rotate(90.000000) translate(-123.312729, -377.387389) " points="130.625458 351 130.625458 389.195334 116.414871 403.774779 116 365.272251"></polygon>
                            <polygon transform="translate(47.312729, 377.387389) scale(-1, 1) rotate(90.000000) translate(-47.312729, -377.387389) " points="54.6254575 351 54.6254575 389.195334 40.4148706 403.774779 40 365.272251"></polygon>
                            <polygon transform="translate(123.312729, 9.387389) scale(-1, 1) rotate(90.000000) translate(-123.312729, -9.387389) " points="130.625458 -17 130.625458 21.1953342 116.414871 35.7747786 116 -2.72774915"></polygon>
                            <polygon transform="translate(47.312729, 9.387389) scale(-1, 1) rotate(90.000000) translate(-47.312729, -9.387389) " points="54.6254575 -17 54.6254575 21.1953342 40.4148706 35.7747786 40 -2.72774915"></polygon>
                        </g>
                        <g 
                            transform="translate(178, 9.887697)" 
                            fill="#000000" 
                            fontFamily="Hind-Bold, Hind" 
                            fontWeight="bold"
                        >
                            <text id="STAY-ALERT" fontSize={platitudeTopFontSize} textAnchor="middle">
                                <tspan x="14.391" y={platitudeTopYpos}>
                                    { platitudeTop.toUpperCase() }
                                </tspan>
                            </text>
                            <text id="SAVE-LIVES" fontSize={platitudeBottomFontSize} textAnchor="middle">
                                <tspan x="9.188" y={platitudeBottomBYpos}>
                                    { platitudeBottom.toUpperCase() }
                                </tspan>
                            </text>
                            <text id="CONTROL" fontSize={platitudeMiddleAFontSize} textAnchor="middle">
                                <tspan x="15.092" y={platitudeMiddleAYpos}>
                                    { platitudeMiddleA.toUpperCase() }
                                </tspan>
                            </text>
                            <text id="THE-VIRUS" fontSize={platitudeMiddleBFontSize} textAnchor="middle">
                                <tspan x="11.878" y={platitudeMiddleBYpos}>
                                    { platitudeMiddleB.toUpperCase() }
                                </tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
}
