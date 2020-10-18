import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Button, ButtonGroup, Checkbox, FormControlLabel,
  TextField, makeStyles, ThemeProvider, createMuiTheme,
  Typography
} from '@material-ui/core'
import { Save, Delete } from '@material-ui/icons'
import { green, orange } from '@material-ui/core/colors'

// The following will change the default font.
// Installed with yarn add fontsource-roboto
import 'fontsource-roboto'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, lightgreen, lightblue)',
    border: 0,
    borderRadius: 15,
    color: 'black',
    padding: '5px 30px',
    marginBottom: 20
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700]
    },
    secondary: {
      main: orange[500]
    }  }
})

function ButtonStyled() {
  const classes = useStyles()
  return (
    <Button className={classes.root}>Test Styles Button</Button>
  )
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
          checked={checked}
          icon={<Save />}
          checkedIcon={<Delete />}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
        label='checkbox label'
      />
    </div>
  )
}
function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <header className='App-header'>
          <Typography variant='h3'>
            Welcome to material W3B
          </Typography>
          <Typography variant='subtitle1' component='div'>
            Rich Dad Poor Dad
          </Typography>
          <ButtonStyled />
          <TextField
            variant='filled'
            color='primary'
            type='email'
            label='email'
            placeholder='monkey@example.com'
          /> {/* text color in App.css: input */}
          <CheckBoxExample />
          <ButtonGroup
              variant='contained'
              size='large'
              style={{
                fontSize: 21
              }}
          >
          <Button
              onClick={_ => {}}
              startIcon={<Save />}
              color='primary'
            >save</Button>
            <Button
              onClick={_ => {}}
              startIcon={<Delete />}
              color='secondary'
            >discard</Button>
          </ButtonGroup>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
      </ThemeProvider>
    </div>
  )
}

export default App
