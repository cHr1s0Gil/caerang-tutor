const form = document.querySelector(".code-form");

const submitForm = async (e) => {
    e.preventDefault();
    try {
        const formData = new FormData(document.querySelector(".code-form"));
        console.log(formData);
    } catch(error) {
        console.error(error);
    }
    
}

form.addEventListener("submit", submitForm);
