import React from 'react'
import { Share } from 'react-facebook'
import {
    makeStyles,
    Button,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
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
    marginLeft: theme.spacing(2),
  },
  copyUrl:{
    margin: theme.spacing(2),
  },
}))

export default function Spread(props) {
  
  const classes = useStyles()
  const {
    id,
    virusTitle,
  } = props
  // console.log (id)
  if (!id) return null

  return  <div className={classes.spreadCard}>
            <CardHeader
              title={`Spread Ironavirus`}
              avatar={<Icon icon={`share`} color={`inherit`} />}
              action={null}/>

              <CardContent>


                  <Share 
                    href={`https://ironavirus.web.app/virus/${id}`}
                    hashtag={`#ironavirus`}
                    quote={virusTitle}
                  >
                    {({ handleClick, loading }) => (
                      <Button type="button" onClick={handleClick}>
                        <Icon icon={`facebook`} />
                        <span className={classes.btnTxt}>
                          Spread on Facebook
                        </span>
                      </Button>
                    )}
                  </Share>

                
                <div className={classes.copyUrl}>
                  <Typography variant={`body2`}>
                    Copy url
                  </Typography>
                  <CopyUrl id={id} />
                </div>

                <List dense>
                  <ListItem button
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.assign(`/`)
                    }}>
                    <ListItemIcon>
                      <Icon icon={`ironavirus`} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={`Create New Virus`}
                      
                    />
                  </ListItem>
                </List>

              </CardContent>            
      </div>
}
/*
                  <Share href={`https://ironavirus.web.app/virus/${id}`}>
                    {({ handleClick, loading }) => (
                      <Button type="button" onClick={handleClick}>
                        <Icon icon={`facebook`} />
                        <span className={classes.btnTxt}>
                          Spread on Facebook
                        </span>
                      </Button>
                    )}
                  </Share>
*/