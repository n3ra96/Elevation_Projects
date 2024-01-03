const source = $("#expense-template").html()
 const template = Handlebars.compile(source)

class Renderer{
    renderExpenses(){
        $("#result").empty()
        let newHtml = template({recipes})
        $("#result").append(newHtml)
    }

    renderAdd(){

    }
}