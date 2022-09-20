const background = () => {
    const body = document.querySelector('body')
    const gameSection = document.querySelector('.game')
    const playerBlock = document.createElement('div')

    body.style.background = "url(..img/background.jpg) no-repeat center / cover"
    gameSection.style.position = "relative"
    playerBlock.style.position = "absolute"
    playerBlock.style.Bottom = "100px"
    playerBlock.style.left = "50%"
    playerBlock.style.marginLeft = "-125px"
    playerBlock.style.width = "250px"
    playerBlock.style.height = "300px"
    playerBlock.style.background = "url(../img/fly.png) no-repeat center / cover"

    gameSection.append(playerBlock)

}

export default background 