const source = $("#cities-template").html()
const template = Handlebars.compile(source)

const sourceSaved = $("#saved-cities-template").html()
const templateSaved = Handlebars.compile(sourceSaved)
 
        
class Render{

        render = function(city){
            let newHtml = template(city)
            $("#cities").append(newHtml)
        }

        renderSaved = function(city){
            let newHtml = templateSaved(city)
            $("#cities").append(newHtml)
        }
      
}


