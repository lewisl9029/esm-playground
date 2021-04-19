import * as react from '@dep/react'
import * as reactDom from '@dep/react-dom'
import * as useStyles from '@dep/@lewisl9029/use-styles'

const Root = () => react.createElement(
  useStyles.StylesProvider,
  undefined, 
  react.createElement(
    'div', 
    { className: useStyles.useStyles({ color: 'orange' }, [])}, 
    'working if this text is orange'
  )
)

const root = document.getElementById('root')

const mount = () => {
  reactDom.render(react.createElement(Root), root)
}

mount()