import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    makeStyles,
    Card,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
// import { showMainMenu } from '../redux/app/actions'
import { 
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(),
    minWidth: 320,
  },
}))

export default function Privacy() {

  const classes = useStyles()
  const history = useHistory()

  return <Card className={classes.card} >
            <CardHeader 
            	title={`Privacy`}
            	subheader={`lorem Ipsum`}
            	avatar={<Icon icon={`privacy`} color={`inherit`} />}
            	action={<IconButton
            			onClick={(e) => {
            				e.preventDefault()
            				history.push(`/`)
            			}}
            		>
            		<Icon icon={`home`} color={`inherit`} />
            	</IconButton>}
            />
          </Card>
}
