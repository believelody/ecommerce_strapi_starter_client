import React from 'react'
import Mobile from './components/mobile/Mobile'
import Desktop from './components/desktop/Desktop'
import isMobile from './utils/isMobile.utils'

const App = ({}) => (
  isMobile() ? <Mobile /> : <Desktop />
);

export default App;
