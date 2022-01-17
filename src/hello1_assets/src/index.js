import { HotModuleReplacementPlugin } from "webpack";
import { hello1 } from "../../declarations/hello1";

async function post(){
   let post_button = document.getElementById("post");
   let post_button = document.getElementById("post");
   error.innerText = "";
   post_button.disabled = true;
   let textarea = document.getElementById("message");
   let otp = document.getElementById("otp").value;
   let text = textarea.value;
   try{
     await hello1.post(otp, text);
     textarea.value = "";
   } catch (err) {
     console.log(err)
     error.innerText = "Post Failed!";
   }
   await hello1.post(otp, text);
   post_button.disabled = false;
}

var num_posts=0;
async function load_posts(){
    let posts_section = document.getElementById("posts");
    posts_section.replaceChildren([]);
    let posts = await hello1.posts();
    if(num_posts == posts.length) return;
    posts_section.replaceChildren([]);
    num_posts = posts.length;
    for (var i=0; i < posts.length; i++){
        let post = document.createElement("p");
        post.innerText = posts[i]
        posts_section.appendChild(post)
    }

}

function load(){
    let post_button = document.getElementById("post")
    post_button.onclick = post;
    load_posts()
    setInterval(load_posts, 3000)
}
