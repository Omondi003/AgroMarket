/* eslint-disable react/prop-types */
import { useState } from "react";
import './cont.css'

let Contents=[
    {
        img: 'images/apple.jpg',
        title:'AN APPLE FARM',
        description: 'A large array of apple produce to be sold',
        quantity:44

    },
    
    {
        img: 'images/carrot.jpg',
        title:'A CARROT FARM',
        description: 'A large array of carot produce to be sold',
        quantity:33

    },
    {
        img: 'images/cows.jpg',
        title:'COWS FARM',
        description: 'A large NUMBER IF COWS to be sold',
        quantity:223

    },

    {
        img: 'images/fish.jpg',
        title:'FISH FARM',
        description: 'A large NUMBER OS to be sold',
        quantity: 873

    },

    {
        img: 'images/hen.jpg',
        title:'AN APPLE FARM',
        description: 'A large array of apple produce to be sold',
        quantity:897

    },

    {
        img: 'images/milk drums.jpg',
        title:'AN APPLE FARM',
        description: 'A large array of apple produce to be sold',
        quantity:'345 LITRES'

    },

    {
        img: 'images/run.jpg',
        title:'AN APPLE FARM',
        description: 'A large array of apple produce to be sold',
        quantity:'many'

    },
    {
        img: 'images/skuma.jpg',
        title:'AN APPLE FARM',
        description: 'A large array of apple produce to be sold',
        quantity:'456 hectares'

    },
]


 
 

function Products({Contents}){


    const [quantities, setQuantities] = useState(Contents.map(() => 0));

    // Function to update quantity for a specific product
    const updateQuantity = (index, value) => {
      const newQuantities = [...quantities];
      newQuantities[index] = value;
      setQuantities(newQuantities);
    };

   
    return (
   <>
        <h1>CONTENTS TO BE SOLD</h1>
        <ul>
            {Contents.map((content,index)=> (
               <li key={index}>
                
            <div className="image">
              <img src={content.img} />
            </div>
            <div>
                <p>Title {content.title}</p>
               <p>Description {content.description}</p>
               <p>Quantity {content.quantity}</p>
               <p>How many do you want {quantities[index]}</p>
               <button onClick={() => updateQuantity(index, quantities[index] + 1)}>ADD</button>
            <button onClick={() => updateQuantity(index, quantities[index] - 1)}>SUBTRACT</button>
   

                </div>
          </li>
            ))}
                 
        </ul>
        
   </>
        
    )
}
    
function Parent(){
    return (
        
        <Products Contents={Contents}/>
    )
}

export default Parent;