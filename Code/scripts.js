function Function1(x) {    // Test function
    if (x == 1) {
        document.getElementById("demo").innerHTML = "Paragraph changed to paragraph one.";
    }
    else if (x == 2) {
        document.getElementById("demo").innerHTML = "Paragraph changed to paragraph two.";
    }
}
function toggleDropdown() {
    // Toggle the dropdown menu visibility and the button image    
    var dropdownMenu = document.getElementById("button");
    dropdownMenu.toggleAttribute("active");    
}