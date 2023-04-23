function handleSubmit(event) {
    event.preventDefault()
    console.log("Hello W");
}

const $form = document.querySelector("form")

$form.addEventListener("submit",handleSubmit)