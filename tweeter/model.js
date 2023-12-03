function Tweeter() {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 0
    let commentIdCounter = 0
    
        for( post in _posts ){
            postIdCounter++
            for( comment in _posts[post].comments ){
                commentIdCounter++
            }
        }
        postIdCounter++
        commentIdCounter++
    
    function getPosts(){
       return _posts 
    }
    function addPost(text){
        //id , text , comments
        let post = {
            id: `p${postIdCounter}`,
            text: text,
            comments: []
        }
        _posts.push(post)
        postIdCounter++;
    }

    function removePost(postID){
        for( post in _posts ){
            if(_posts[post].id == postID){
                _posts.splice(post, 1);
            }
        }
    }

    function addComment(text, postID){
        for( post in _posts ){
            if(_posts[post].id == postID){
                let comment = {
                    id: `c${commentIdCounter}`,
                    text: text,
                }
                _posts[post].comments.push(comment)
                commentIdCounter++;
            }
        }
    }

    function removeComment(postID , commentID){
        for( post in _posts ){
            if(_posts[post].id == postID){
                for( comment in _posts[post].comments ){
                    if(_posts[post].comments[comment].id == commentID){
                        _posts[post].comments.splice(comment, 1);
                    }
                }
            }
        }
    }

    return{
        getPosts: getPosts ,
        addPost:  addPost,
        addComment:  addComment,
        removeComment: removeComment,
        removePost: removePost
    }
}


// const tweeter = Tweeter()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================
// console.log("/////////////// part II /////////")
// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}

