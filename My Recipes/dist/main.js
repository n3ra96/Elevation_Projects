const model = new RecipeApi()
const renderer = new Render()


$("#recipes").on("click", "#toggle-btn", function () {
    let description = $(this).closest(".recipe").find("#toggle-example").children()

    if (description.hasClass("content")) {
        description.animate({ height: 'toggle' });
        description.removeClass("content")
    } else {
        description.animate({ height: 'toggle' });
        description.addClass("content")
    }
});



$("#recipes").on("click", "i", function () {
    let idmeal = $(this).closest(".recipe").attr("id")
    // console.log(idmeal)
    let data = { idNumber: idmeal }
    // console.log(data)
    if ($(this).hasClass("fa fa-toggle-off")) {
        $(this).removeClass("fa fa-toggle-off").addClass("fa fa-toggle-on")
        model.postFavRecipe(data)
    } else {
        $(this).removeClass("fa fa-toggle-on").addClass("fa fa-toggle-off")
        model.deleteFavRecipe(idmeal)
    }
});

const showFavourite = function () {
    
    model.getFavRecipe().then(function(response){
        console.log(response)
        renderer.renderFav(response)
    })
}

const showrecipe = function () {
    let newrecipe = $(NEW_INPUT).val()
    let checkboxes = $(CHECKBOX_INPUT);
    let values = [];

    values.push(newrecipe)
    checkboxes.each((checkbox) => {
        values.push($(checkboxes[checkbox]).val());
    });

    if (values.length == 1) {
        model.getRecipe(newrecipe).then(function (response) {
            renderer.render(response)
        })
    } else if (values.length > 1) {
        model.getRecipeQuery(values).then(function (response) {
            renderer.render(response)
        })
    }
}

$("#recipes").on("click", "img", function () {
    let alertIngredient = $(this).closest(".recipe").find("li:first").text()
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


