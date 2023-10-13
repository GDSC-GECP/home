const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (e) => {
    const message = document.getElementById("message-1");
    const name = document.getElementById("name-1");
    const email = document.getElementById("email-1");
    var emailContent = `Hello ${name.value}, 
    ${message.value}

    by ${email.value}
    `;

    window.location.href = `mailto:gdscgecpalakkad@gmail.com?subject=Contact%20Us&body=${emailContent}`;
    name.value = "";
    email.value = "";
    message.value = "";

}
);