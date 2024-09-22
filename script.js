 // JavaScript to handle click event
 const button = document.getElementById('mail-btn');
 const image = document.getElementById('image');
 const hiddenDiv = document.getElementById('hiddenLetter');

 // Function to toggle visibility
 function toggleDiv() {
     hiddenLetter.classList.toggle('show');
 }

 // Add event listeners to the image and button
 button.addEventListener('click', toggleDiv);
 image.addEventListener('click', toggleDiv);