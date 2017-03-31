function PostCoder(){
  this.posts = [];
  this.postCount = 0;
  this.addPost = function(txtPost){
    this.posts.push({id: this.postCount,
                     textPost: txtPost});
    this.postCount++;
  }

}

var btn_post = document.getElementById("btn_post");
var posts = [];

function Post(post){
  this.post = post;
}

btn_post.addEventListener("click", function(e){
  e.preventDefault();
  var txt_post = document.getElementById('txt_post');
  var dcf = document.createDocumentFragment();

  var
});
