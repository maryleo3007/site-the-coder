function PostCoder(){
  this.posts = [];
  this.postCount = 0;
  this.addPost = function(txtCoder,txtPost){
      this.posts.push({id: this.postCount,
                       txtCoder: txtCoder,
                       textPost: txtPost
                     });
      this.postCount++;
  }
  this.printPost = function (parent) {
    parent.innerHTML = "";
    this.posts.forEach(function(post){
      var firstPost = parent.firstElementChild;
      //console.log(parent);
      //console.log(this.createPost(post.txtCoder,post.textPost,post.id));
      parent.insertBefore(this.createPost(post.txtCoder,post.textPost,post.id),firstPost);
    },this);
  }

  this.createPost = function (textCoder, txtPost,id) {
    var df = document.createDocumentFragment();
    var post = document.createElement('div');
    post.setAttribute("class","post");
    var a = document.createElement('a');
    var textoCoder = document.createTextNode(textCoder);
    a.appendChild(textoCoder);
    a.classList.add("textCoder");
    var p = document.createElement('p');
    var textoPost = document.createTextNode(txtPost);
    p.appendChild(textoPost);
    p.classList.add("textPost");

    post.appendChild(a);
    post.appendChild(p);

    df.appendChild(post);
    return df;

  }

}
window.addEventListener('load', function () {
    var postCoder = new PostCoder();
    var btn_post = document.getElementById("btn_post");

    btn_post.addEventListener("click", function(e){
      e.preventDefault();
      var txt_coderName = document.getElementById('txt_coderName');
      var txt_post = document.getElementById('txt_post');
      var resultado= document.getElementById('resultado');

      postCoder.addPost(txt_coderName.value,txt_post.value);
      postCoder.printPost(resultado);
      txt_coderName.value = "";
      txt_post.value = "";
    });
});
