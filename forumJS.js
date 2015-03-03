

function createNewPost(){
    var insertedText = document.getElementById("postBox");
    var newText = insertedText.value;
    var newDiv = document.createElement("div");
    var newPara = document.createElement("p");
    var boxPost = document.getElementById("post");
    newPara.innerHTML = newText;
    newDiv.appendChild(newPara);
    newDiv.className = "posts";
    $(newDiv).insertAfter(boxPost);
}