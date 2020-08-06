// Find the button
document.querySelector("#add-time")

// When click in the button
.addEventListener('click', cloneField)


// Run an action
function cloneField() {
    // duplicate the fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // take the fields
    const fields = newFieldContainer.querySelectorAll('input')

    // for each field, clears it
    fields.forEach(function(field) {
        field.value = ""
    })
    //Put on page
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

    