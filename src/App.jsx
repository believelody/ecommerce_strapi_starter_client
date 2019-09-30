import React from 'react'
import Mobile from './components/mobile/Mobile'
import Desktop from './components/desktop/Desktop'
import isMobile from './utils/isMobile.utils'
import 'react-animated-slider/build/horizontal.css';

const App = ({}) => (
  isMobile() ? <Mobile /> : <Desktop />
);

export default App;
