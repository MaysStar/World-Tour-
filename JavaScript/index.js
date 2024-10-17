console.log('Hello World');

const headerall = document.querySelector('#headerall');

const LS = localStorage;

let count1 = 1;

const button = document.getElementById('pausebutton');

let countclick = 1;

let countclick2 = 0;

button.addEventListener('click', ()=>{
	countclick++;
});

setInterval('MyBackground()', 3000);

let countbackground = 1;

function MyBackground() {
	if (count1 == 1) {
		if (countbackground >= 6) {
			countbackground = 0;
		}
		countbackground++;
		headerall.style.transition = 'background-image 1s ease-in-out';
		headerall.style.background = 'url("C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/Img/background photo ' + countbackground + '.jpg")';
		headerall.style.backgroundSize = 'cover';
		console.log(countbackground);
		console.log(headerall.style.background);
		
	}else{
		if (countbackground == 0) {
			countbackground = 6
			headerall.style.background = 'url("C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/Img/background photo ' + countbackground + '.jpg"';
		}else{
			console.log(countbackground + '    Yes');
			headerall.style.background = 'url("C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/Img/background photo ' + countbackground + '.jpg"';
		}
	}
		

}

let lastScrollTop = 0;

const navbar = document.querySelector('.headerlist');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Прокрутка вниз
        navbar.classList.remove('visible');
    } else {
        // Прокрутка вверх
        navbar.classList.add('visible');
        navbar.style.background = '#a4a4a4';
    }
    if (window.pageYOffset <= 0) {
		navbar.style.background = 'none';
	}

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Запобігаємо негативному значенню
});

/*window.addEventListener('scroll', function() {
    var hiddenMessage = document.getElementById('flyerstext');
    if (window.scrollY > 300) {
        hiddenMessage.classList.add('visible');
    }if (window.scrollY <= 0) {
        hiddenMessage.classList.remove('visible');
    }
});*/

const stop = document.querySelector('#pausebutton');

function MyStop() {
	if (countclick % 2 == 0) {
		count1 = 1;
		console.log(count1);
		stop.style.background = 'url("C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/Img/play1.png")';
	}else{
		count1 = 0;
		stop.style.background = 'url("C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/Img/pause1.png")';
		console.log(count1);
	}

}

const information = document.querySelector('#information');

let name = [];

let name2 = document.querySelectorAll('.textpostcard');

for (var i = 0; i < name2.length; i++) {
	name[i] = name2[i].textContent.trim();
}

for (let i = 0; name.length > i; i++) {

		let option = document.createElement('option');
		option.value = name[i];
		information.appendChild(option);
	

}

const searchInput = document.getElementById('search');

let searchText;

// Додаємо обробник події для натискання клавіш
searchInput.addEventListener('keydown', function(event) {
    	// Перевіряємо чи натиснута клавіша Enter
    if (event.key === 'Enter' || event.keyCode === 13) {
      	console.log('Key pressed:', event.key);
    	searchText = searchInput.value;
      
        console.log('Пошук за запитом:', searchText);

        if (searchText === '') {
	        console.log('Пошуковий запит порожній');
	        return;
      	}
      	const targetElement = document.getElementById(searchText);
	      
	    let found = false;

	    for (var i = 0; i < name2.length; i++) {
	    	if(name2[i].textContent.trim() == searchText){
	    		const elementPosition = name2[i].getBoundingClientRect().top + window.pageYOffset;
	          	const offsetPosition = elementPosition - 500;
	    		found = true;
	    		window.scrollTo({
		        	top: offsetPosition,
		       		behavior: 'smooth'
	    		});
	    	}
	    }


	    if (!found) {
	    	console.log('Елемент не знайдено:', searchText);
	    }

	}
	
});

const menulist = document.getElementById('menulist');

function MyMenu(){
	countclick2++;
	if (countclick2 % 2 == 0) {
		menulist.style.display = 'none';

	}else{
		menulist.style.display = 'block';
	}
}

let profiloption = document.getElementById('profiloption');

//"C:\Users\bogda\OneDrive\Робочий стіл\Progect 2\HTMLcode\profil.html"

const menuoptionexit = document.getElementById('menuoptionexit');

const acount = JSON.parse(LS.getItem('liveacount'));
if (Array.isArray(acount)){
	profiloption.textContent = acount[0];
	console.log(acount[0]);
	menuoptionexit.style.display = 'flex';
}


function MyProfil(){
	const acount = JSON.parse(LS.getItem('liveacount'));
	if (acount){
		console.log('акаунт є');
	}else{
		window.location.assign('C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/HTMLcode/profil.html');
		console.log('акаунта не має');
	}
	
}

function MyExit(){
	LS.setItem('liveacount', null);
	window.location.assign('C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/HTMLcode/index.html');
}

