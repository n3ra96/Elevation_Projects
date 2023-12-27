const express = require('express')
const router = express.Router()
const Function = require('./Functions')
//////////////

let FavRecipes = []


router.get('/recipes/:name', async function (req, res) {
  let recipe = req.params.name
  let dataset = await Function.getRequest(recipe)
  console.log(dataset)
  console.log(dataset.length)
  for(let i = 0 ; i<dataset.length ; i++){
      dataset[i].thumbnail = Function.getGif(dataset[i].title)
  }

  console.log(dataset)

  res.send(await Function.getRequest(recipe))
  
  

})


router.get('/recipes', async function (req, res) {
  let params = JSON.parse(req.query.filter)
  let recipe = params[0]
  let Gluten = false
  let Dairy = false
  params.forEach(sensitive => {
    if (sensitive === "Gluten") {
      Gluten = true
    }
    if (sensitive === "Dairy") {
      Dairy = true
    }
  });

  if (Gluten && Dairy) {
    res.send(await Function.FilterByDairyAndGluten(recipe))
  } else if (!Gluten && Dairy) {
    res.send(await Function.FilterByDairy(recipe))
  } else if (Gluten && !Dairy) {
    res.send(await Function.FilterByGluten(recipe))
  }

})

router.get('/favourites', function (req, res) {
    res.send(FavRecipes)
})



router.post('/recipes/favourites', function (req, res) {
  let recipeId = req.body
  Function.getRequestByID(recipeId.idNumber).then((FavRecipe) => {
    FavRecipes.push(FavRecipe)
    res.send("completed adding favourite recipe")
  })

  
})

router.delete('/recipes/favourites/:id', function (req, res) {
  let recipeId = req.params.id
  let recipesIndex = FavRecipes.findIndex(w => w.idMeal === recipeId)
  FavRecipes.splice(recipesIndex, 1)
  res.end()
})





module.exports = router