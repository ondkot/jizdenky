function tryPlay(video) {
	video.play().then(() => {
		document.body.querySelectorAll(":not(video)").forEach((elem) => { elem.style.display = "none"; })
                video.style.display = 'block'
	}).catch(() => { setTimeout(() => { tryPlay(video) }) })
}
window.addEventListener('load', () => {    
	let video = document.getElementById('video');
	video.style.display = 'none';
	tryPlay(video)
})
