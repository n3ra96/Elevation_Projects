const source = $("#recipes-template").html()
const template = Handlebars.compile(source)

const render = function(recipes){
    $("#recipes").empty()
    let newHtml = template({recipes})
    $("#recipes").append(newHtml)
}

const fetch = function(){
    $.get("/recipes", function(response){
        render(response)
    })
}

const showrecipe = function(){
    let newrecipe = $("#new-recipe-input").val()
    $.get('/recipes/'+newrecipe, function (response) {
    console.log("get complete")
    render(response)
    })
}

$("#recipes").on("click", "img" , function(){
    let alertIngredient = $(this).closest(".recipe").find("li:first").text()
    console.log(alertIngredient)
    alert(alertIngredient);
    
})
    

// const updateVisited = function (recipe) {
//     $.ajax({
//         url: `recipe/${recipe}`,
//         method: "PUT",
//         success: function (response) {
//             console.log("PUT complete")
//             fetch()
//         }
//     })
// }

// $("#recipes").on("click", ".visit", function(){
//     let recipe = $(this).closest(".recipe").find(".name").text()
//     updateVisited(recipe.split("-")[0].trim())
//     //PUT this to the server: update the recipe's `visited` status to `true`
//     fetch()
// })


fetch() //load the data on page load