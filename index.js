function addingEventListener() {
    // Select the button element with the id "button"
    const button = document.getElementById('button');

    // Define the event listener function
    function handleClick() {
        console.log('Button clicked!');
    }

    // Bind the event listener to the button
    button.addEventListener('click', handleClick);
}
