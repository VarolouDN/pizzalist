import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



function App(){
    return <div className='container'>
         <Header/>
        <Menu/>
        <Footer/>
        </div>
}


function Header(){
    const style={/*color:'red',fontSize:'48px',textTransform:'uppercase'*/}
    return <header className="header footer">
        <h1 style={style} >Fast React Pizza Co.</h1>
         </header>
}
function Menu(){
    /*const pizzas=[]*/
    const pizzas=pizzaData
    const numPizzas=pizzas.length

 return <main className='menu'>
     <h2>Our Menu</h2>


     {numPizzas>0 ? (
         <>
             <p>Authentic Italian cuisine .6 creative dishes to choose from.
                 All from our stone oven,all organic,all delicious </p>
         <ul className='pizzas'>{pizzas.map((pizza)=>{
     return <Pizza key ={pizza.name} pizzaObj={pizza}/>
     }
         )}</ul></>):<p>We are still working on our menu.Please come back later</p>}

     </main>
}
function Pizza({pizzaObj}){
    //if(pizzaObj.soldOut) return  null
    return <li className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
        <img src={pizzaObj.photoName} alt='Pizza spinaci'/>
        <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut?"SOLD OUT":pizzaObj.price}</span>
        </div>
    </li>
}


function Footer(){
    const hour=new Date().getHours()

    const openHour=12
    const closeHour=22
    const isOpen=hour>=openHour && hour <=closeHour

    return <footer>{isOpen && (
        <Order closeHour={closeHour} openHour={openHour}/>

    )}</footer>
}
function Order({closeHour,openHour}){
    return    <div className='order'>
        <p>We are open from {openHour}:00 until {closeHour}:00.
            Come visit us or order online.</p>
        <button className='btn'>Order</button>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)

