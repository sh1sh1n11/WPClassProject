

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

function inputBoxButtonDiv(){
    var inputBox = document.getElementById(this);
    var newButtonDiv = document.createElement("div");
    var submitButton = document.createElement("input");
    var postDiv = document.getElementById("post");
    submitButton.setAttribute("type","submit");
    submitButton.setAttribute("value","Post");
    submitButton.onclick=createNewPost();
    newButtonDiv.id="inputButtonDiv";
    newButtonDiv.appendChild(submitButton);
    newButtonDiv.insertAfter(postDiv);

}