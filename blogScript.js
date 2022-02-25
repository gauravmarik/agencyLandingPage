
	const mainMenu = document.querySelector('.mainMenu')
	const closeMenu = document.querySelector('.closeMenu')
	const openMenu = document.querySelector('.openMenu')
	const homeLinks = document.querySelector('#homeLinks')
	const blogIndexLinks = document.querySelector('#blogIndexLinks')
	const portfolioLinks = document.querySelector('#portfolioLinks')
	const shopLinks = document.querySelector('#shopLinks')
	const contactIndexLinks = document.querySelector('#contactIndexLinks')

	function show(){
		mainMenu.style.display = 'flex'
		mainMenu.style.top = '0'

	}

	function close(){
		mainMenu.style.top = '-100%'
	}

	function toSection(){
		mainMenu.style.top = '-100%'
	}

	openMenu.addEventListener('click', show)
	closeMenu.addEventListener('click', close)
	homeLinks.addEventListener('click', close)
	blogIndexLinks.addEventListener('click', toSection)
	contactIndexLinks.addEventListener('click', toSection)