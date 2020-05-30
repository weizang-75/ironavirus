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
    Grid,
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
    marginBottom: theme.spacing(),
  }
}))

export default function OpenSource() {

  const classes = useStyles()
  const history = useHistory()

  return <div className={classes.card} >
  <MainMenu />
            <CardHeader 
            	title={`Free Source code`}
            	subheader={`Make your own PWA`}
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

              <Grid container>

                <Grid item xs={12} md={6}>
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
                </Grid>    

                <Grid item xs={12} md={6}>
                  <Typography variant={`body2`} gutterBottom>
                    This Progressive Web App is based on an Open Source Project 
                    from listingslab called <Link style={{cursor: 'pointer'}} onClick={(e) => {
                              e.preventDefault()
                              window.open(`https://listingslab.com/open-source`,`_blank`)
                            }}>Whitelabel PWA</Link>. 
                    It uses React, and Material UI to provide a fully bootstrapped Progressive 
                    Web App which really works straight out of the box.
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>
          </div>
}
