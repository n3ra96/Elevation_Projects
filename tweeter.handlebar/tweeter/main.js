const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())


//add post
$("#post").on("click", function () {
    let userInput = $('#input').val()
    tweeter.addPost(userInput)
    $('#input').val("")
    renderer.renderPosts(tweeter.getPosts())

})
//add comment
$("#posts").on("click", '.commentBtn' , function () {
    let post_id = $(this).closest(".post").attr("id")
    let commentInput = $('#'+'CommentBar-'+post_id).val()
    tweeter.addComment(commentInput, post_id)
    $('#'+'CommentBar-'+post_id).val("")
    renderer.renderPosts(tweeter.getPosts())

})

//remove post

$("#posts").on("click", '.delete' ,  function () {
    let post_id = $(this).closest(".post").attr("id")
    tweeter.removePost(post_id)
    renderer.renderPosts(tweeter.getPosts())

})

//remove comment

$("#posts").on("click", '.delete-comment' , function () {
    let post_id = $(this).closest(".post").attr("id")
    console.log(post_id)
    let comment_id = $(this).parent().attr("id")
    console.log(comment_id)
    tweeter.removeComment(post_id , comment_id)
    renderer.renderPosts(tweeter.getPosts())

})


// *    When the user clicks on the Twit button, you should grab the value from the big input
//      and create a new post v
// *    Notice that you already have an addPost function in your Tweetermodule - invoke it!
//      When the Delete Post button is clicked, grab the ID of the post using
// *    what you learned about DOM Traversal and invoke the removePost function in your logic module