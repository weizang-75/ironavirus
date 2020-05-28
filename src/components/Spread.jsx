import React from 'react'
import {
    makeStyles,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardActions,
} from '@material-ui/core/'
import { 
    Icon,
    CopyUrl,
} from './'

const useStyles = makeStyles(theme => ({
  spreadCard:{
    marginBottom: theme.spacing(),
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
  btnTxt:{
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },
}))

export default function Spread(props) {
  
  const classes = useStyles()
  const {id} = props
  // console.log (id)
  if (!id) return null

  return  <Card className={classes.spreadCard}>
            <CardHeader
              title={`Spread Ironavirus`}
              subheader={`on facebook & stuff`}
              avatar={<Icon icon={`share`} color={`inherit`} />}
              action={null}/>

              <CardContent>
                
                <CopyUrl id={id} />

              </CardContent>

              <CardActions>
                <Button
                  variant={`text`}
                  color={`primary`}
                  onClick={(e) => {
                    e.preventDefault()
                    window.location.assign(`/`)
                  }}>
                  <Icon icon={`ironavirus`} color={`none`} />
                  <span className={classes.btnTxt}>
                    Create New Virus
                  </span>
                </Button>

              </CardActions>
            
      </Card>
}
/*

*/