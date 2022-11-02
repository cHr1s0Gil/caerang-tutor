const searchForm = document.querySelector(".search-form");
const funcManageBtn = document.querySelector(".func-manage-btn");

const searchFunction = async (e) => {
    e.preventDefault();

    const funcName = document.querySelector(".search-input").value;
    const language = document.querySelector(".language").value;

    const funcInfo = {
        funcName: funcName,
        language: language
    };

    const response = await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(funcInfo)
    });
    const d = await response.json();
    console.log(d);
}

const manageLink = () => {
    location.href="./post";
}

searchForm.addEventListener("submit", searchFunction);
funcManageBtn.addEventListener("click", manageLink);