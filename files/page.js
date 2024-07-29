



document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            body.classList.add('light-mode')
        } else {
            body.classList.remove('light-mode')
        }
    })
})