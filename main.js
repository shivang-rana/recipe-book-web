
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('recipeSearch');
    const clearSearchButton = document.getElementById('clearSearch');
    const recipeCards = document.querySelectorAll('.recipe-card');

    function updateDisplay() {
        const searchTerm = searchInput.value.toLowerCase();

        recipeCards.forEach((card, index) => {
            const title = card.querySelector('h2').innerText.toLowerCase();
            const description = card.querySelector('p').innerText.toLowerCase();


            if (!searchTerm || title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }


            if (!searchTerm && index % 3 === 2) {
                card.style.marginRight = '0';
            } else {
                card.style.marginRight = '20px';
            }
        });
    }

    searchInput.addEventListener('input', updateDisplay);

    clearSearchButton.addEventListener('click', function () {

        searchInput.value = '';
        updateDisplay();
    });


    updateDisplay();
});




function openLoginForm() {
    document.getElementById("loginPopup").style.display = "block";
}



function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function handleLogin() {
    if (document.getElementById("username").value == "") {
        document.getElementById("result").innerHTML = "Enter your email*";
        return false;
    }
    else if (document.getElementById("password").value == "") {
        document.getElementById("result").innerHTML = "Enter your password*";
        return false;
    } else if (document.getElementById("username").value == "shivang1@gmail.com" && document.getElementById("password").value == "123") {


        window.open("manage.html")
        // window.location.href='manage.html' 
        // window.open("contact.html","_self");

        return false;
    }
    alert("Login successful!");



}



