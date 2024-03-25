/* eslint-disable react/prop-types */
 
import './cas.css'

import Parent from './Content/contents'
import Header from './Header/Header'
import FarmerGoodsForm from '../register'
 
function App() {
  return (
    <div className="App">
      <Header />
     <Parent />

     <FarmerGoodsForm />
    </div>
     
  )
}
 
export default App
