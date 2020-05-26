import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    makeStyles,
    Button,
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
} from '@material-ui/core/'
// import { showMainMenu } from '../redux/app/actions'
import { 
    Icon,
    MainMenu,
} from './'

const useStyles = makeStyles(theme => ({
  card: {
    width: '100vh',
    maxWidth: '100vw',
  },
  btnTxt:{
    marginLeft: theme.spacing(),
  },
}))

export default function OpenSource() {

  const classes = useStyles()
  const history = useHistory()

  return <Card className={classes.card} >
  <MainMenu />
            <CardHeader 
            	title={`Free Source code`}
            	subheader={`Explore this app and build your own`}
            	avatar={<Icon icon={`github`} color={`white`} />}
            	action={<IconButton
            			onClick={(e) => {
            				e.preventDefault()
            				history.push(`/`)
            			}}
            		>
            		<Icon icon={`home`} color={`inherit`} />
            	</IconButton>}
            />
            <CardContent>

              <Typography variant={`body2`} gutterBottom>
                Based on an Open Source Progressive Web App from listingslab
              </Typography>
              <Button
                variant={`contained`}
                color={`secondary`}
                onClick={(e) => {
                  e.preventDefault()
                  window.open(`https://github.com/weizang-75/ironavirus`, `_blank`)
                }}>
                <Icon icon={`github`} color={`black`} />
                <span className={classes.btnTxt}>
                View on GitHub
                </span>
              </Button>
            
            </CardContent>
          </Card>
}
