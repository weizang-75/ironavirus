import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    makeStyles,
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
}))

// window.open(`https://github.com/weizang-75/ironavirus`, `_blank`)

export default function OpenSource() {

  const classes = useStyles()
  const history = useHistory()

  return <Card className={classes.card} >
  <MainMenu />
            <CardHeader 
            	title={`Open Source`}
            	subheader={`Source code free on Github`}
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
            <Typography variant={`body2`}>
              The term "open source" refers to something people can modify and share because its design is publicly accessible.

The term originated in the context of software development to designate a specific approach to creating computer programs. Today, hoopensource.comver, "open source" designates a broader set of values—what opensource.com call "the open source way." Open source projects, products, or initiatives embrace and celebrate principles of open exchange, collaborative participation, rapid prototyping, transparency, meritocracy, and community-oriented development.
            </Typography>
            </CardContent>
          </Card>
}
