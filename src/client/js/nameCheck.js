function nameCheck(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Mark",
        "Jack",
        "Kirk",
        "Dirk",
        "George"
    ]
    if(names.includes(inputText)) {
        alert("Welcome back " + inputText + "!")
    }
    else{
        alert(inputText + " you are an Imposter! Welcome Newbie")
    }
}
export { nameCheck };