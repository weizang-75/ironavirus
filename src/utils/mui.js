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
      main: '#211b1f',
    },
    secondary: {
      main: '#01a43b',
    },
    success: {
      main: '#01a43b'
    },
    info: {
      main: '#211b1f'
    },
    warning: {
      main: '#eb1c24'
    },
    error: {
      main: '#eb1c24'
    },
    text: {
      disabled: `#fed100`,
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

