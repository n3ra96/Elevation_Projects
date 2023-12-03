function Renderer(){


    // This parameter is the array of post objects that comes from
    // your Tweetermodule (the one you created in tweeter logic)

    function renderPosts(posts){
// The function should first empty the #posts element
        $("#posts").empty()
// It should loop through each post in the posts array and append some HTML to #posts

// add each post
        for(let post of posts){
            let startPostbox = $("<div id='"+ post.id +"' class='post'><br></div>")
            $("#posts").append(startPostbox)
            let addNewPost= $("<div  class='post-text'>" + post.text + "</div><br>")
            $('#'+post.id).append(addNewPost)
    //add each comment
            for(let comment of post.comments){
                let addNewComment= $("<div id="+comment.id+" class='comments' ><span id='delete-comment-"+comment.id+"' class='delete-comment' >X</span>"+" "+ comment.text +"</div>")
                $('#'+post.id).append(addNewComment)
            
            }
//add input commentBar , add button(addBtn) , add delete button(deleteBtn)
            let addCommentBar = $("<input type='text' id='CommentBar-"+post.id+"'  placeholder='Got something to say?' style= 'margin-left: 10px'>")
            let addBtn = $("<button class='commentBtn' style='margin-left: 2px'>Comment</button><br><br>")
            $('#'+post.id).append(addCommentBar)
            $('#'+post.id).append(addBtn)
            let deleteBtn = $("<div id='del-"+post.id+"' class='delete' onclick='post()'>Delete Post</div><br><br>")
            $('#'+post.id).append(deleteBtn)
        }
    }

    return{
        renderPosts: renderPosts
    }

}