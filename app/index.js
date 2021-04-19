import * as react from '@dep/react'
import * as reactDom from '@dep/react-dom'

const Root = () => react.createElement('div', undefined, 'working!')

const root = document.getElementById('root')

const mount = () => {
  reactDom.render(react.createElement(Root), root)
}

mount()