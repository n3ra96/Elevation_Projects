const { default: axios } = require('axios')
const express = require('express')
const router = express.Router()
//////////////
const recipes = axios
  .get("https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/sugar")
  .then((response) => {
    let result = response.data
    let data = result["results"]
    let newData = data.map( (meal) => {return {idMeal: meal.idMeal , ingredients: meal.ingredients
    , title: meal.title , thumbnail: meal.thumbnail ,href: meal.href}})
    return newData
  })
  .catch((err) => console.log(err));

  console.log(recipes)


router.get('/recipes', function (req, res) {
    recipes.then((word) => {
      res.send(word);
  })
    
  
})

router.get('/recipes/:name', function (req, res) {
      let recipe = req.params.name
      const str = recipe.toLowerCase()
      const str2 = str.charAt(0).toUpperCase() + str.slice(1);
      recipes.then((word) => {
        let wantedRecipe = word.filter(product =>  product.ingredients.some((cat) => {
          return ( (cat === str) || (cat === str2) || (cat === recipe) ) 
        }));
        res.send(wantedRecipe);
    })
      
  })

// router.post('/recipe', function (req, res) {
//     console.log("Someone's trying to make a post request")
//     let recipe = req.body
//     recipe.visited = false
//     recipes.push(recipe)
//     res.send("completed adding recipe")
    
// })

// router.put('/recipe/:name', function (req, res) {
//     console.log("About to update someone")
//     let recipe = req.params.name
//     recipes.find(w => w.name === recipe).visited = true
//     res.end()// don't forget to end the cycle!
    
// })

// router.delete('/recipe/:name', function (req, res) {
//     let recipe = req.params.name
//     let recipesIndex = recipes.findIndex(w => w.name === recipe)
//     recipes.splice(recipesIndex, 1)
//     res.end()
// })




module.exports = router