const { default: axios } = require('axios')
const faker = require('faker')
const CONFIG = require('../config')

const dairyIngredients = CONFIG.DAIRY_INGREDIENTS
const glutenIngredients = CONFIG.GLUTEN_INGREDIENT

function randomName() {
    return faker.name.findName()
}
function randomNumber() {
    return faker.datatype.number({ min: 1, max: 5 })
}

async function getGif(title){

    const myString = title;
    const newString = myString.split(' ').join('+');
    const keyTitle = newString
    
    const recipeGif = await axios
        .get(CONFIG.GIF_API_P1+keyTitle+CONFIG.GIF_API_P2)
        .then((response) => {
            let result = response.data
            let apiData = result.data[0]
            const gifData = ((meal) => {
                return  meal.url  
            })
            
            return gifData(apiData)
        })
        .catch((err) => console.log(err));
    
    return recipeGif
}

async function getRequest(param) {
    const recipes = await axios
        .get(CONFIG.URL + param)
        .then((response) => {
            let result = response.data
            let data = result[CONFIG.RESULT]
            let newData = data.map((meal) => {
                
                return  {
                     idMeal: meal.idMeal,
                     chefName: randomName(), 
                     starNumber: randomNumber(),
                     ingredients: meal.ingredients,
                     Category: meal.strCategory,
                     title: meal.title,
                     area: CONFIG.AREATOCOUNTRY[meal.strArea.toLowerCase()],
                     instruction: meal.strInstructions,
                     countryCode: CONFIG.COUNTRYCODES[meal.strArea.toLowerCase()],
                     thumbnail:  meal.thumbnail,
                     href: meal.href
                }
                
            })
            
            return newData
        })
        .catch((err) => console.log(err));
     
    return  recipes

}

function getRequestByID(paramId) {
    const recipes = axios
        .get(CONFIG.ID_URL + paramId)
        .then((response) => {
            let result = response.data
            //let data = result[CONFIG.RESULT]
            const DataMap = (meal) => {
                return {
                    idMeal: meal.idMeal,
                    chefName: randomName(),
                    starNumber: randomNumber(),
                    ingredients: meal.ingredients,
                    Category: meal.strCategory,
                    title: meal.title,
                    area: CONFIG.AREATOCOUNTRY[meal.strArea.toLowerCase()],
                    instruction: meal.strInstructions,
                    countryCode: CONFIG.COUNTRYCODES[meal.strArea.toLowerCase()],
                    thumbnail: meal.thumbnail,
                    href: meal.href
                }
            }

            return DataMap(result)
        })
        .catch((err) => console.log(err));

    return recipes

}





function FilterByGluten(param) {
    const recipes = getRequest(param)
    const FilteredGluten = recipes.then((word) => {
        return word.filter(product => !product.ingredients.some((cat) => {
            return (glutenIngredients.includes(cat))
        }));
    })

    return FilteredGluten

}

function FilterByDairy(param) {
    const recipes = getRequest(param)
    const FilteredDairy = recipes.then((word) => {
        return word.filter(product => !product.ingredients.some((cat) => {
            return (dairyIngredients.includes(cat))
        }));
    })

    return FilteredDairy

}

function FilterByDairyAndGluten(param) {
    const recipes = getRequest(param)
    const FilteredDairyAndGluten = recipes.then((word) => {
        return word.filter(product => !product.ingredients.some((cat) => {
            return (dairyIngredients.includes(cat) || glutenIngredients.includes(cat))
        }));
    })

    return FilteredDairyAndGluten

}


module.exports = {
    getGif,
    getRequest,
    FilterByGluten,
    FilterByDairy,
    getRequestByID,
    FilterByDairyAndGluten
}


