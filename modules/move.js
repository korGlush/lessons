import {animate} from "./helpers"


const move = () => {
    const plaueerBlock = document.querySelector('.game > div')
    playerBlock.style.transform = 'translateY(0%)'
    playerBlock.style.transform = 'translateX(0%)'
    let startBottom = 100
    let startLeft = 50

    const start = (e) => {
        if (e.key === "Escape") {
            document.removeEventListener('keydown', start)
            document.removeEventListener('keydown', movement)
        }
    }

    const movement = (e) => {
        if (e.key === "ArrowUp") {
            animate({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    playerBlock.style.bottom = '${startBottom + progress*10}px';
                }
            });
            startBottom = startBottom = 10
        } else if (e.key === "ArrowDown") {
            
        } else if (e.key === "ArrowLeft") {
            startLeft = startLeft - 0.5
            playerBlock.style.left = '${startLeft}%'
        } else if (e.key === "ArrowRight") {
            startLeftBlock = startLeft + 0.5
            playerBlock.style.left = '${startLeft}%'
        } else if (e.key === "Escape") {
            document.removeEventListener('keydown', movement)
            document.removeEventListener('keydown', start)
        }
    }

    document.addEventListener('keydown', movement)
}

export default move
