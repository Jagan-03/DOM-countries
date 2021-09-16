let addCountry = () => {
    // Getting the input value from user
    let value = document.getElementsByTagName("input")[0].value;
    
    // Creating the a tag
    let newlink = document.createElement("a");
    let linktext = document.createTextNode(value);
    newlink.appendChild(linktext);
    newlink.classList.add("dropdown-item");
    
    // Creating the li tag
    let newlist = document.createElement("li");
    newlist.appendChild(newlink);

    // Appending the new list item to the list
    let list = document.getElementsByTagName("ul");
    list[0].appendChild(newlist);

    document.getElementsByTagName("input")[0].value = "";
}