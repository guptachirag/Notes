
/**
 * Save content of the textarea to local storage as user fininshed typing
 */
document.addEventListener('keyup', function () {

    localStorage["notes"] = document.getElementById("notes").value;
});


/**
 * Run our javascript as soon as the document's DOM is ready.
 */
document.addEventListener('DOMContentLoaded', function () {

    if(localStorage["notes"]!== null) {
        document.getElementById("notes").value = localStorage["notes"];
    }
    else {
        document.getElementById("notes").value = "DELETE ME. ADD YOUR GOOGLE NOTES.";
    }
});
