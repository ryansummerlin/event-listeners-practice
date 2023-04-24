window.addEventListener("DOMContentLoaded", event => {
    console.log("The DOM has loaded");

    const redInput = document.getElementById("red-input");
    const turnInputRed = function() {
        if (redInput.value.includes("red")) {
            redInput.style.backgroundColor = 'red';
        }
    }
    redInput.addEventListener("input", turnInputRed);

    const addItemButton = document.getElementById("add-item");
    const ul = document.body.getElementsByTagName("ul")[0];
    const addListItem = function() {
        const newListItem = document.createElement("li");
        const listAdd = document.getElementById("list-add");
        newListItem.innerText = listAdd.value;
        ul.appendChild(newListItem);
    }
    addItemButton.addEventListener("click", addListItem);

    const selectColorSection = document.getElementById("section-3");
    const colorSelect = document.getElementById("color-select");
    const colorChange = function () {
        const newColor = colorSelect.value;
        selectColorSection.style.backgroundColor = newColor;
    }
    colorSelect.addEventListener("change", colorChange);

    const removeListenersButton = document.getElementById("remove-listeners");
    removeListenersButton.addEventListener("click", event => {
        redInput.removeEventListener("input", turnInputRed);
        addItemButton.removeEventListener("click", addListItem);
        colorSelect.removeEventListener("change", colorChange);
    });

    const addBackListenersButton = document.getElementById("add-back-listeners");
    addBackListenersButton.addEventListener("click", event => {
        redInput.addEventListener("input", turnInputRed);
        addItemButton.addEventListener("click", addListItem);
        colorSelect.addEventListener("change", colorChange);
    });

});
