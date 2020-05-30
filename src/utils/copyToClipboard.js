  const copyToClipboard = str => {
    console.log('copyToClipboard', str)
    const el = document.createElement('textarea')
    el.value = str
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    dispatch({type: `APP/SNACKBAR`, snackbar: {
              message: `Virus copied`,
              severity: `success`,
            }})
  }