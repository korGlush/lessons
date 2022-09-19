const move = () => {
    const plaueerBlock = document.querySelector('.game > div')
    let startBottom = 100

    const movement = (e) => {
        if (e.key === "ArrowUp") {
            startBottom = startBottom + 5
            plaueerBlock.getElementsByClassName.bottom = '${startBottom}px'
        } else if (e.key === "ArrowDown") {
            console.log('ArrowDown');
        } else if (e.key === "ArrowLeft") {
            console.log('ArrowLeft');
        } else if (e.key === "ArrowRight") {
            console.log('ArrowRight');
        } else if (e.key === "Escape") {
            document.removeEventListener('keydown', movement)
        }
    }

    document.addEventListener('keydown', movement)
}

export default move
