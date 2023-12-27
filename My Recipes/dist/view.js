        
 const source = $("#recipes-template").html()
 const template = Handlebars.compile(source)
 const sourcefav = $("#recipes-template-fav").html()
 const templatefav = Handlebars.compile(sourcefav)
 Handlebars.registerHelper('stars', function(n, block) {
            let blk = "";

            for(let i = 1; i <= 5; ++i) {
                let starClass = ""
                if(i <= n)
                    starClass="checked"
                blk += `<span class="fa fa-star ${starClass}"></span>`;
            }
            return blk;
        })
        
class Render{

        render = function(recipes){
            $("#recipes").empty()
            let newHtml = template({recipes})
            $("#recipes").append(newHtml)
        }

        renderFav = function(recipes){
            $("#recipes").empty()
            let newHtml = templatefav({recipes})
            $("#recipes").append(newHtml)
        }
}


