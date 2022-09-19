const one = () => {
    const btn = document.querySelector('.botton')
    const input = document.querySelector('.input')
    const hero = document.querySelector('hero')
    const a = document.querySelector('link')

    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log(e);
    })
    input.addEventListener('blur', (e) => {
        console.log(e);
    })
    input.addEventListener('change', (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log(e);
    })

}

export default one
