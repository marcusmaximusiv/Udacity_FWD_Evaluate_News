function nameCheck(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let Owners = [
        "Mark",
        "Jack",
        "Kirk",
        "Dirk",
        "George"
    ]
    if(Owners.includes(inputText)) {
        alert("Welcome back " + inputText + "!")
    }
    else{
        alert(inputText + " you are an Imposter! Welcome Newbie")
    }
}
export { nameCheck };