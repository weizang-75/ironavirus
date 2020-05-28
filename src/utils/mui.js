/*
  Yellow: #fef600
  Orange: #fed100
  Green: #01a43b
  Red: #eb1c24
  Black: #211b1f
*/

const muiTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#fef600',
    },
    secondary: {
      main: '#fef600',
    },
    default: {
      main: '#211b1f'
    },
    info: {
      main: '#211b1f'
    },
    warning: {
      main: '#eb1c24'
    },
    error: {
      main: '#ffffff'
    },
    text: {
      disabled: `rgba(255,255,255,0.5)`,
      hint: `#fed100`,
      primary: `#FFF`,
      secondary: `#fef600`,
    },
  },

  typography: {
    fontSize: 16,
    fontFamily: [
      'Hind',
    ].join(','),
  },
}
export {
  muiTheme,
}

