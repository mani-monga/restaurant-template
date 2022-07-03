import './App.css';
import React from 'react'
import Card from './components/Card'
import Carosel from './components/Carosel'
import Navbar from './components/Navbar'
import data from './components/menu'
import { useState } from 'react';

const uniquelist =[ ...new Set(data.map((currEle)=>{
return currEle.category;
})),"All"
];

console.log(uniquelist);

const App = () => { 
  const [menu, setmenu] = useState(data);
  const [menuList, setmenuList] = useState(uniquelist)


  const filteritem = (category) => {
    if(category === "All"){
      setmenu(data);
      return;
    }
    const updated = data.filter((curElem)=>{
      return curElem.category === category ;
    });
    setmenu(updated);
  };   
  return (
    <>
      <Navbar filteritem = {filteritem} menuList = {menuList}/>
      <Carosel/>
      <div className="list">
        <Card menuData={menu} />
      </div>
      {/* <Hooks/> */}
    </>
  )
}

export default App