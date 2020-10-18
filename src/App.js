import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Button, ButtonGroup, Checkbox, FormControlLabel, TextField, makeStyles, ButtonBase
} from '@material-ui/core'
import { Save, Delete } from '@material-ui/icons'

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
      <header className='App-header'>
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
            color='primary'
          >discard</Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  )
}

export default App
