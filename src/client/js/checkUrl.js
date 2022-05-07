function checkUrl(str)
{
    //this section is to ensure that that this is a valid link
    var urlvalidation = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    //this section will determine if the link is indeed valid. If it is not valid it will alert the user to change the url and if it is user is alert that it is a valid link and results will be posted
    if (urlvalidation.test(str) = true){
        alert("Your URL is valid. Results will be submitted shortly");
        return true;
    }
    else{
        alert("You URL is invalid. Please input another url")
        return false;
    }
}
export { checkUrl }
