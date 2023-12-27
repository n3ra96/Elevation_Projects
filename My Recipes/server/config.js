const URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/"
const ID_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/id/"
const RESULT = "results"
const DAIRY_INGREDIENTS = ["Cream","Cheese","Milk","Butter","Creme","Ricotta","Mozzarella","Custard","Cream Cheese"]
const GLUTEN_INGREDIENT = ["Flour","Bread","spaghetti","Biscuits","Beer"]
const AREATOCOUNTRY = {
    'italian': 'Italy',
    'jamaican': 'Jamaica',
    'french': 'France',
    'british': 'United Kingdom',
    'american': 'United States',
    'thai': 'Thailand',
    'irish': 'Ireland',
    'chinese': 'China',
    'mexican': 'Mexico',
    'canadian': 'Canada',
    'indian': 'India',
};
const COUNTRYCODES = {
    'italian': 'it',
    'jamaican': 'jm',
    'french': 'fr',
    'british': 'gb',
    'american': 'us',
    'thai': 'th',
    'irish': 'ie',
    'chinese': 'cn',
    'mexican': 'mx',
    'canadian': 'ca',
    'indian': 'in',
};

const GIF_API_P1 = "https://api.giphy.com/v1/gifs/search?api_key=2Q1sG7m38jr3UU8BYiJZxdLY7IuXw3cD&q="
const GIF_API_PINPUT = "summer+pudding"
const GIF_API_P2 = "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

module.exports = {
    URL,
    ID_URL,
    GIF_API_P1,
    GIF_API_P2,
    RESULT,
    DAIRY_INGREDIENTS,
    GLUTEN_INGREDIENT,
    AREATOCOUNTRY,
    COUNTRYCODES
}