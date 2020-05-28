import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    makeStyles,
    Button,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
    Link,
} from '@material-ui/core/'
// import { showMainMenu } from '../redux/app/actions'
import { 
    Icon,
    MainMenu,
} from './'

const useStyles = makeStyles(theme => ({
  card: {
    width: '99vh',
    maxWidth: '99vw',
  },
  btnTxt:{
    marginLeft: theme.spacing(2),
  },
  btn:{
    marginTop: theme.spacing(),
  }
}))

export default function OpenSource() {

  const classes = useStyles()
  const history = useHistory()

  return <div className={classes.card} >
  <MainMenu />
            <CardHeader 
            	title={`Free Source code`}
            	subheader={`Build your own`}
            	avatar={<Icon icon={`code`} color={`error`} />}
            	action={<IconButton
            			onClick={(e) => {
            				e.preventDefault()
            				history.push(`/`)
            			}}>
            		<Icon icon={`home`} color={`error`} />
            	</IconButton>}
            />
            <CardContent>

              <Typography variant={`body2`} gutterBottom>
                Based on an Open Source Progressive Web App from listingslab 
                called <Link style={{cursor: 'pointer'}} onClick={(e) => {
                          e.preventDefault()
                          window.open(`https://listingslab.com/whitelabel-pwa`,`_blank`)
                        }}>Whitelabel PWA</Link>. 
                It uses React, and Material UI and 
                provides a fully bootstrapped Progressive Web App which actually 
                works straight out of the box.
              </Typography>

              <Button
                className={classes.btn}
                variant={`text`}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(`https://github.com/weizang-75/ironavirus`, `_blank`)
                }}>
                <Icon icon={`github`} color={`black`} />
                <span className={classes.btnTxt}>
                  GitHub
                </span>
              </Button>
            
            </CardContent>
          </div>
}
