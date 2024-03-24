/* eslint-disable react/prop-types */

import './page.css'

function Page() {
    return (
        <div className='page'>
          <Photo />
          <Description />
          <Listitems />
        </div>
    )
}

function Photo() {
    return <img src='joel.JPG' alt='Omondi image' className='img'/>
}
 
function Description(){
   return (
     <div>
        <h1>WEB DEVELOPER</h1>
        <p> a passionate and versatile web 
            designer with a flair for creating
         visually captivating and user-friendly 
         digital experiences</p>
     </div>
   )
}

function Listitems() {
    return (
      <div className='List'>
        <List name='Javascript' emoji='😊' />
        <List name="React" emoji="💪" color="blue" />
        <List name="HTML+CSS" emoji="💪" color="orange" />
         <List name="JavaScript" emoji="💪" color="yellow" />
        <List name="Svelte" emoji="👶" color="orangered" />
 

      </div>
    )
}

function List(props) {
    return(
        <div className='myList' style={{backgroundColor: props.color}}>
             <span>{props.name}</span>
             <span>{props.emoji}</span>
        </div>
        
    )
}

export default Page