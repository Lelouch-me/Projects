
import React from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import ReactBootstrap from './components/React-Bootstrap/Reactboot';
import State from './State'
import Conditional_Rendering from './Conditional_rendering/index';
import Event_Handler from './Event_Handler/index';
import Event_binding from './Event_binding/index';
import Hooks from './Hookss/index1';
import Hookss2 from './Hookss/index2';

function App() {
return ( 
  <div>
   <Card1 name="card1" desc="this is card1" />
   <Card2 name="card2"/>
   <ReactBootstrap />
   <State /> 
   <Conditional_Rendering />

   <Event_Handler />

   <Event_binding />

   <Hooks />
   <Hookss2 />
  </div>
 )
}
 
export default App;
