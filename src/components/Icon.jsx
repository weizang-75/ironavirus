import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import IconHome from '@material-ui/icons/Home'
import IconLeftArrow from '@material-ui/icons/ArrowBackIosOutlined'
import IconRightArrow from '@material-ui/icons/ArrowForwardIosOutlined'
import IconLogout from '@material-ui/icons/ExitToApp'
import IconAffiliates from '@material-ui/icons/HowToReg'
import IconAffiliate from '@material-ui/icons/HowToReg'
import IconSeeds from '@material-ui/icons/Visibility'
import IconRefresh from '@material-ui/icons/Refresh'
import IconLinks from '@material-ui/icons/Link'
import IconAdd from '@material-ui/icons/AddCircle'
import IconDelete from '@material-ui/icons/DeleteOutlineOutlined'
import IconSave from '@material-ui/icons/Save'
import IconCancel from '@material-ui/icons/Close'
import IconReset from '@material-ui/icons/Refresh'
import IconScraper from '@material-ui/icons/PlaylistPlay'
import IconFullscreen from '@material-ui/icons/Fullscreen'
import IconBreeder from '@material-ui/icons/PersonOutline'
import IconTitle from '@material-ui/icons/Title'
import IconPrice from '@material-ui/icons/CreditCardOutlined'
import IconMore from '@material-ui/icons/MoreHorizOutlined'
import IconStart from '@material-ui/icons/PlayArrowSharp'
import IconFilter from '@material-ui/icons/Sort'
import IconQuestion from '@material-ui/icons/Help'
import IconSearch from '@material-ui/icons/Search'
import IconWaiting from '@material-ui/icons/AvTimer'
import IconAdmin from '@material-ui/icons/Security'
import IconUserentity from '@material-ui/icons/ContactMail'
import IconBuy from '@material-ui/icons/AddShoppingCart'
import IconMenu from '@material-ui/icons/Menu'
import IconQueue from '@material-ui/icons/PlaylistAdd'
import IconEdit from '@material-ui/icons/Edit'
import IconPlay from '@material-ui/icons/Forward'
import IconAccount from '@material-ui/icons/AccountCircle'
import IconMap from '@material-ui/icons/AddLocation'
import IconPrivacy from '@material-ui/icons/VpnLock'
import IconWork from '@material-ui/icons/Build'
import IconLife from '@material-ui/icons/BeachAccess'
import IconBalance from '@material-ui/icons/Spa'
import IconDesktop from '@material-ui/icons/Computer'
import IconMobile from '@material-ui/icons/PhoneAndroid'
import IconContent from '@material-ui/icons/Description'
import IconMessage from '@material-ui/icons/Message'
import IconNewContent from '@material-ui/icons/NoteAdd'
import IconNav from '@material-ui/icons/Navigation'
import IconSettings from '@material-ui/icons/Settings'
import IconPushToTalk from '@material-ui/icons/TouchApp'
import IconUI from '@material-ui/icons/TouchApp'
import IconTick from '@material-ui/icons/DoneOutline'
import IconShare from '@material-ui/icons/Share'
import IconInfo from '@material-ui/icons/ContactSupport'
import IconListingslab from '@material-ui/icons/EmojiPeople'
import IconDefaultMessage from '@material-ui/icons/VerticalSplit'
import IconCopy from '@material-ui/icons/FileCopy'
import IconCode from '@material-ui/icons/Code'

import {
    Github,
    Ironavirus,
    Facebook,
    Twitter,
} from '../graphics/'

const styles = theme => ({
    iconButton: {
        width: 24,
        height: 24,
    },
    white: {
        color: 'white',
    }
})

class Icon extends Component {

    render() {
        const {
            classes,
            icon,
            color,
        } = this.props
        let iconColor = `secondary`
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `listingslab`:
                return (<IconListingslab color={iconColor} />)

            case `tick`:
                return (<IconTick color={iconColor} />)


            case `code`:
                return (<IconCode color={iconColor} />)
                
            case `ui`:
                return (<IconUI color={iconColor} />)

            case `copy`:
                return (<IconCopy color={iconColor} />)

            case `navigation`:
                return (<IconNav color={iconColor} />)

            case `default-message`:
                return (<IconDefaultMessage color={iconColor} />)

            case `pushToTalk`:
                return (<IconPushToTalk color={iconColor} />)

            case `settings`:
                return (<IconSettings color={iconColor} />)

            case `twitter`:
                return (<Twitter className={classes.iconButton} color={iconColor} />)

            case `ironavirus`:
                return (<Ironavirus className={classes.iconButton} color={iconColor} />)

            case `facebook`:
                return (<Facebook className={classes.iconButton} color={iconColor} />)

            case `github`:
                return (<Github className={classes.iconButton} color={iconColor} />)

            case `home`:
                return (<IconHome color={iconColor} />)

            case `play`:
                return (<IconPlay color={iconColor} />)

            case `back`:
                return (<IconLeftArrow color={iconColor} />)

            case `supplier`:
                return (<IconBuy color={iconColor} />)

            case `suppliers`:
                return (<IconBuy color={iconColor} />)

            case `left`:
                return (<IconLeftArrow color={iconColor} />)

            case `right`:
                return (<IconRightArrow color={iconColor} />)

            case `logout`:
                return (<IconLogout color={iconColor} />)

            case `affiliates`:
                return (<IconAffiliates color={iconColor} />)

            case `affiliate`:
                return (<IconAffiliate color={iconColor} />)

            case `seed`:
                return (<IconSeeds color={iconColor} />)

            case `person`:
                return (<IconBreeder color={iconColor} />)

            case `seeds`:
                return (<IconSeeds color={iconColor} />)

            case `refresh`:
                return (<IconRefresh color={iconColor} />)

            case `question`:
                return (<IconQuestion color={iconColor} />)

            case `info`:
                return (<IconInfo color={iconColor} />)

            case `link`:
                return (<IconLinks color={iconColor} />)

            case `links`:
                return (<IconLinks color={iconColor} />)

            case `add`:
                return (<IconAdd color={iconColor} />)

            case `delete`:
                return (<IconDelete color={iconColor} />)

            case `trash`:
                return (<IconDelete color={iconColor} />)

            case `save`:
                return (<IconSave color={iconColor} />)

            case `filter`:
                return (<IconFilter color={iconColor} />)

            case `close`:
                return (<IconCancel color={iconColor} />)

            case `cancel`:
                return (<IconCancel color={iconColor} />)

            case `reset`:
                return (<IconReset color={iconColor} />)

            case `scraper`:
                return (<IconScraper color={iconColor} />)

            case `title`:
                return (<IconTitle color={iconColor} />)

            case `price`:
                return (<IconPrice color={iconColor} />)

            case `fullscreen`:
                return (<IconFullscreen color={iconColor} />)

            case `more`:
                return (<IconMore color={iconColor} />)

            case `start`:
                return (<IconStart color={iconColor} />)

            case `find`:
                return (<IconSearch color={iconColor} />)

            case `search`:
                return (<IconSearch color={iconColor} />)

            case `waiting`:
                return (<IconWaiting color={iconColor} />)

            case `admin`:
                return (<IconAdmin color={iconColor} />)

            case `manager`:
                return (<IconAdmin color={iconColor} />)

            case `userentity`:
                return (<IconUserentity color={iconColor} />)

            case `privacy`:
                return (<IconPrivacy color={iconColor} />)

            case `buy`:
                return (<IconBuy color={iconColor} />)

            case `menu`:
                return (<IconMenu color={iconColor} />)
            
            case `queue`:
                return (<IconQueue color={iconColor} />)

            case `edit`:
                return (<IconEdit color={iconColor} />)

            case `account`:
                return (<IconAccount color={iconColor} />)
            
            case `map`:
                return (<IconMap color={iconColor} />)   

            case `work`:
                return (<IconWork color={iconColor} />) 

            case `life`:
                return (<IconLife color={iconColor} />) 

            case `balance`:
                return (<IconBalance color={iconColor} />) 

            case `desktop`:
                return (<IconDesktop color={iconColor} />) 

            case `mobile`:
                return (<IconMobile color={iconColor} />) 

            case `content`:
                return (<IconContent color={iconColor} />) 

            case `new-content`:
                return (<IconNewContent color={iconColor} />)  

            case `message`:
                return (<IconMessage color={iconColor} />)   

            case `share`:
                return (<IconShare color={iconColor} />)                     
                
            default: {
                // return (<IconMessage color={iconColor} />)
                return null
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)
