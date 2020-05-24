import React from 'react'
import { useHistory } from 'react-router-dom'
import {
    makeStyles,
    Card,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
// import { showInfo } from '../redux/app/actions'
import { 
    Icon,
} from './'

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(),
    minWidth: 320,
  },
}))

export default function Share() {

  const classes = useStyles()
  const history = useHistory()

  return <Card className={classes.card} >
            <CardHeader 
            	title={`Share`}
            	subheader={`Spread your virus`}
            	avatar={<Icon icon={`share`} color={`inherit`} />}
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