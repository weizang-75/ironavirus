import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    makeStyles,
    CardHeader,
    CardContent,
    IconButton,
    // Typography,
    // Link,
} from '@material-ui/core/'
// import { 
//     useSelector,
// } from 'react-redux'
import { 
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
  card: {
    width: '99vh',
    maxWidth: '99vw',
  },
  varHighlight: {
    color: '#13883d',
  },
}))

export default function Privacy() {

  const classes = useStyles()
  const history = useHistory()

  // const pushToTalkSlice = useSelector(state => state.pushToTalk)
  // const {
  //   fingerprint,
  //   ipgeo,
  //   ua,
  // } = pushToTalkSlice
  // let ip = `0.0.0.0`
  // let city = `City`
  // let country = `Country`
  // let browser = `Browser`
  // let device = `Device`
  // let os = `OS`
  // if (ua) {
  //   browser = ua.browser.name
  //   os = ua.os.name
  //   device = ua.device.model === undefined ? `Desktop` : ua.device.model
  // }
  // if(ipgeo){
  //   ip = ipgeo.ip
  //   city = ipgeo.city
  //   country = ipgeo.countryName
  // }
    
  return <div className={classes.card} >
            <CardHeader 
            	title={`Privacy is important to everyone`}
            	subheader={`We don't use cookies`}
            	avatar={<Icon icon={`privacy`} color={`error`} />}
            	action={<IconButton
            			onClick={(e) => {
            				e.preventDefault()
            				history.push(`/`)
            			}}
            		>
            		<Icon icon={`home`} color={`error`} />
            	</IconButton>}
            />
            <CardContent>

  
            </CardContent>
          </div>
}

/*

            <Typography variant={`body2`} gutterBottom>
              Your device's request for this app includes a userAgent string. 
              When we parse that with <Link style={{cursor: 'pointer'}} onClick={(e) => {
                e.preventDefault()
                window.open(`https://www.npmjs.com/package/ua-parser-js`,`_blank`)
              }}>ua-parser-js</Link>, 
              we see that your browser is <span className={classes.varHighlight}>{browser}</span>, 
              your Operating System is <span className={classes.varHighlight}>{os}</span> and
              your device is <span className={classes.varHighlight}>{device}</span>
            </Typography>

            <Typography variant={`body2`} gutterBottom>
              Put this data together and running it through 
              Valve's <Link style={{cursor: 'pointer'}} onClick={(e) => {
                e.preventDefault()
                window.open(`https://fingerprintjs.com`,`_blank`)
              }}>Fingerprint.js</Link>, 
              algorithm yields a unique fingerprint for your device. 
              Your fingerprint is <span className={classes.varHighlight}>{fingerprint}</span>
            </Typography>

            <Typography variant={`body2`} gutterBottom>
              A reference to your device's fingerprint has been created and stored 
              in our database. When you return to the app, it will remember you
              More interestingly, your IP address is <span className={classes.varHighlight}>{ip}</span>
            </Typography>

            <Typography variant={`body2`} gutterBottom>
              That tells us much more. Using a free service 
              from <Link style={{cursor: 'pointer'}} onClick={(e) => {
                e.preventDefault()
                window.open(`https://ipgeolocation.io `,`_blank`)
              }}>ipgeolocation.io</Link> we can find the Geo Location for that IP.
              It resolves to <span className={classes.varHighlight}>{city}, {country}</span>. 
              If you wish to obscure that information, you should use a VPN.
            </Typography>

*/