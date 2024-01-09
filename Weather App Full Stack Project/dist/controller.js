const model = new CityApi()
const renderer = new Render()



const showcity = function () {
    let newcity = $("#new-city-input").val()

        model.getCity(newcity).then(function (response) {
            renderer.render(response)
        })
        $("#new-city-input").val("")
 
}

const showSavedCities = function () {
        $("#cities").empty()
        model.getAllCities().then(function (response) {
            response.forEach( city => {
                console.log(city)
                renderer.renderSaved(city) 
            });
        })
     
}

$("#cities").on("click", "i", function () {
    let name = $(this).siblings(".name").text()
    let temperature = $(this).siblings(".temperature").text()
    let condition = $(this).siblings(".condition").text()
    let conditionpic = $(this).siblings(".conditionpic").text()
    
    let savedCity = { 
        "name": name , 
        "temperature": temperature, 
        "condition": condition  ,
        "conditionpic": conditionpic 
     }
    console.log(savedCity)
    if ($(this).hasClass("fa-file-arrow-up")) {
        $(this).removeClass("fa-file-arrow-up").addClass("fa-file-arrow-down")
        model.postCity(savedCity)
    } else {
        $(this).removeClass("fa-file-arrow-down").addClass("fa-file-arrow-up")
        model.deleteCity(savedCity.name)
    }
});