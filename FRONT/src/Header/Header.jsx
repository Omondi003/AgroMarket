// import FontAwesomeIcon 
import './Header.css'

function Header(){

    return (
        <div className="myheader">
           {/* logo */}
           {/* search button */}
           <Search />
           {/* Cart */}
           <Cart />
           {/* Log in */}
           <Login />
        </div>
    )
}

  function Search(){
      
    return (
        <form>
            <div className='myheader'>
                <input type="text" name="input" placeholder="Enter text to search"></input>
                <button>Search</button>
            </div>
        </form>
    )
  }

  function Cart(){
    return (
        <>
        {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> */}
        <p>Cart</p>
        </>
    )
  }

  function Login(){
    return (
        <>
         <img />
          <p>My Account</p>
        </>
          
    )
  }
export default Header