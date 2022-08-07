var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
// var linkList = [];
if (localStorage.getItem("allLinks") == null) {
    var linkList = [];
} else {
    var linkList = JSON.parse(localStorage.getItem("allLinks"));
}
displayLink()

function submit() {
    if (siteName.value != "" && siteUrl.value != "") {
        var Links = {
            siteN: siteName.value,
            siteU: siteUrl.value
        };
        linkList.push(Links);
        localStorage.setItem("allLinks", JSON.stringify(linkList))
        displayLink();
        cleanForm();
        // console.log(linkList)
    }
    else{
        alert("Error");
    }
}
function displayLink() {
    var trs = "";
    for (var i = 0; i < linkList.length; i++) {
        trs += `
        <div class="webwell mb-3 row" id="${linkList[i].siteN}">
        <h2 class="pr-5">${linkList[i].siteN}</h2>
        <a class="btn btn-primary mr-3" target="_blank" href="http://${linkList[i].siteU}">Visit</a>
        <button class="btn btn-danger mr-3 btndelete" onclick="deleteLink(${i})">Delete</button>
        </div>`
    }
    document.getElementById("bookmarkList").innerHTML = trs;
}
function cleanForm() {
    siteName.value = "";
    siteUrl.value = "";
}

function deleteLink(ind) {
    console.log(linkList.splice(ind, 1))
    linkList.splice(ind, 1);
    localStorage.setItem("allLinks", JSON.stringify(linkList));
    displayLink()
}
