const d = document;

const deleteIcon = () => {
    const i = d.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deletTask)

    return i
}

const deletTask = (e) => {
    const parent = e.target.parentElement;
    parent.remove()
}

export default deleteIcon;