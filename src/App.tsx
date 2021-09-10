import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      Price: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Chicken Pizza",
      Price: 1800,
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2011%2F12%2F14%2Fchicken-pizza-ck-x.jpg&q=85",
      note: "Large",
    },
    {
      name: "Starbucks Coffe",
      Price: 1600,
      img: "https://live.staticflickr.com/3070/13077033213_1c3bc10c90_n.jpg",
      note: "With Extra Cream",
    },
    {
      name: "Cupertino",
      Price: 1200,
      img: "https://fastly.4sqi.net/img/general/600x600/238481_lyF0L_gWpDMfFEma94PQ6Sxq8ED-wFRHGVSONc0nsN0.jpg",
      note: "Flavour",
    }
  ])

  return (
    <div className="App">
      <h1>Products List</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
