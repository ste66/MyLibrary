import React, {useEffect, useState} from 'react';
import Recipe from './Components/Recipe'
import './App.css';

// import axios from "axios"

const App = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
  fetch(`https://api.edamam.com/search?q=${query}&app_id=50626bff&app_key=b27deb4199489bc7fd61542bcde9c59b`)
    .then (res => res.json()) // we are parsing JSon body here! 
    .then ( res => {
      setRecipes(res.hits)
      console.log(res.hits);
    }) // Change the state with fetched data
    .catch(err=> console.log(err)); 

    // ==============axios=========================================

    // axios
    //     .get(`https://api.edamam.com/search?q=${query}&app_id=50626bff&app_key=b27deb4199489bc7fd61542bcde9c59b`)
    //     .then ( res => {
    //       setRecipes(res.data.hits)
    //       console.log(res.data.hits);
    //     }) // Change the state with fetched data
    //     .catch(err=> console.log(err));
  
    //getRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }


  return(
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input 
          className="search-bar" 
          type="text" 
          value={search} 
          onChange={updateSearch} 
        />
        <button className="search-button" type="submit">Search</button>
      </form>

      <div className="recipes">{recipes.map(item =>(
        <Recipe
          key={item.recipe.label} 
          title={item.recipe.label} 
          calories={item.recipe.calories} 
          image={item.recipe.image} 
          ingredients={item.recipe.ingredients}
        />
      ))}
 </div>
    </div>
  )
}
export default App;
