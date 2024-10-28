const setPlaybackFlag = video => {
    const playbackFlagElement = document.createElement('div')
    playbackFlagElement.innerText = video.playbackRate + 'x'
    playbackFlagElement.classList.add('playback-flag')
    video.parentElement.insertBefore(playbackFlagElement, video)
}

const changePlaybackFlags = playbackRate => {
    const playbackFlagElements = document.querySelectorAll('.playback-flag')

    for(let playbackFlag of playbackFlagElements) {
        playbackFlag.innerText = playbackRate + 'x'
    }
}

const videos = document.querySelectorAll('video')
for(let video of videos) {
    setPlaybackFlag(video)
}

document.addEventListener('keydown', e => {
    let playbackRate = 1
    const { key, target } = e

    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

    if (key === 'd') {
        const videos = target.tagName === 'VIDEO'
            ? [target]
            : document.querySelectorAll('video')

        for (let video of videos) {
            video.playbackRate += .1
            video.playbackRate = +(video.playbackRate).toFixed(1)

            playbackRate = video.playbackRate
        }

        changePlaybackFlags(playbackRate)
    } else if (key === 's') {
        const videos = target.tagName === 'VIDEO'
            ? [target]
            : document.querySelectorAll('video')

        for (let video of videos) {
            if (video.playbackRate <= .1) return

            video.playbackRate -= .1
            video.playbackRate = +(video.playbackRate).toFixed(1)

            playbackRate = video.playbackRate
        }

        changePlaybackFlags(playbackRate)
    }
})
