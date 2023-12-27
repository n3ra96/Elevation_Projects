class RecipeApi{

    getRecipe(ingredient){
        return $.get('/recipes/'+ingredient)
    }

    getRecipeQuery(ingredientArray){
        return $.get(`/recipes/?filter=${JSON.stringify(ingredientArray)}`)
    }

    getRecipeById(idmeal){
        return $.get('/recipes/favourites/'+idmeal)   
    }
 

    postFavRecipe(data){

        return $.post('/recipes/favourites', data ,function (response) {
            console.log("POST complete")
        })
    }

    deleteFavRecipe(dataId){
        console.log("im in delete client side")
        $.ajax({
            url: '/recipes/favourites/'+dataId,
            method: "DELETE",
            success: function () { }
        })
    }

    getFavRecipe(){
        console.log("im in fav")
        const favRecipes =  $.get('/favourites') 
        console.log(favRecipes)
        return favRecipes  
    }
}    