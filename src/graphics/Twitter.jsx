import React from 'react'

const Twitter = props => {
    const { color } = props
    let c = `#1DA1F2`
    if (color) {
        c = color
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 250 204" >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g fill={c} fillRule="nonzero">
                        <path d="M78.62,203.59 C172.96,203.59 224.56,125.43 224.56,57.65 C224.56,55.43 224.56,53.22 224.41,51.02 C234.448314,43.7591086 243.113555,34.768794 250,24.47 C240.638791,28.6180177 230.708293,31.3382865 220.54,32.54 C231.24744,26.1298206 239.261235,16.0477199 243.09,4.17 C233.021575,10.1445532 222.006461,14.3551202 210.52,16.62 C194.620828,-0.286057212 169.357194,-4.42387416 148.895493,6.52679928 C128.433792,17.4774727 117.86275,40.7932573 123.11,63.4 C81.8689574,61.3324954 43.4447578,41.8532327 17.4,9.81 C3.78622756,33.2464473 10.7398788,63.2285948 33.28,78.28 C25.117412,78.0380755 17.1327937,75.8361318 10,71.86 C10,72.07 10,72.29 10,72.51 C10.0066813,96.9259297 27.2175149,117.955352 51.15,122.79 C43.598696,124.8494 35.6758059,125.150443 27.99,123.67 C34.7094793,144.564228 53.9657456,158.877839 75.91,159.29 C57.7473504,173.564319 35.3105951,181.313277 12.21,181.29 C8.12903569,181.282165 4.05204065,181.035075 0,180.55 C23.4563595,195.602766 50.749134,203.587169 78.62,203.55"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default Twitter
