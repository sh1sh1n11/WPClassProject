

function createNewPost(){
    var insertedText = document.getElementById("postBox");
    var newText = insertedText.value;
    //window.alert(newText);
    var newDiv = document.createElement("div");
    var newPara = document.createElement("p");
    //var fixedAnchor = document.getElementById("anchor");
    var boxPost = document.getElementById("post");
    newPara.innerHTML = newText;
    newDiv.appendChild(newPara);
    //boxPost.appendChild(newDiv);
    $(newDiv).insertAfter(boxPost);
}