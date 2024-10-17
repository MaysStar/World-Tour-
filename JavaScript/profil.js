console.log('Hello World');
const LS = localStorage;

const registerbutton = document.getElementById('registerbutton');

const verificatebutton = document.getElementById('verificatebutton');

const registerdiv = document.getElementById('registerdiv');

const verificatediv = document.getElementById('verificatediv');

const mainbutton = document.getElementById('mainbutton');

function MyRegister() {
	mainbutton.style.display = 'none';
	registerbutton.style.display = 'none';
	verificatebutton.style.display = 'none';
	verificatediv.style.display = 'none';
	registerdiv.style.display = 'flex';
}

function MyVerificate() {
	mainbutton.style.display = 'none';
	registerbutton.style.display = 'none';
	verificatebutton.style.display = 'none';
	verificatediv.style.display = 'flex';
	registerdiv.style.display = 'none';
}

const loginregister = document.getElementById('loginregister');

const passwordregister1 = document.getElementById('profilinputregister1');

const passwordregister2 = document.getElementById('profilinputregister2');

const vloginverificate = document.getElementById('loginverificate');

const passwordverificate = document.getElementById('passwordverificate');

baseacount2 = [];

function MySubmitRegister() {
	if(loginregister.value.length < 8){
		loginregister.style.border = '2px solid red';
		loginregister.placeholder = 'Логін має містити 8 і більше символів';

	} else{
		loginregister.style.border = '';
		loginregister.placeholder= '';
		for (var i = 0; i < LS.length + 1; i++) {
			let zucl = 'acount' + i;
			
			let baseacount = LS.getItem(zucl);
			baseacount2 = JSON.parse(baseacount);
			//let baseacount0 = baseacount2[0];
			if (Array.isArray(baseacount2)) {
	      		if (loginregister.value == baseacount2[0]) {
					loginregister.placeholder = 'Логін вже використовується';
					loginregister.style.border = '2px solid red';
					console.log(baseacount2[0]);
						
					if (loginregister.value == baseacount2[0]) {
						console.log(true);
					}
					return;
				} 
			}

      	}
			//let baseacount0 = baseacount[0];
			
		
		if(true){
					loginregister.style.border = '';
					loginregister.placeholder= '';
					if (passwordregister1.value.length < 8) {
						passwordregister1.style.border = '2px solid red';
						passwordregister1.placeholder = 'Пароль має містити 8 і більше символів';
					}else{
						passwordregister1.style.border = '';
						passwordregister1.placeholder= '';
						if (passwordregister1.value == passwordregister2.value) {
							let number = LS.length + 1;
							let acountvalue = 'acount' + number;
							let user = [loginregister.value, passwordregister1.value, '0'];
							console.log(user); 
							console.log(acountvalue);
							LS.setItem(acountvalue, JSON.stringify(user));
							window.location.assign('C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/HTMLcode/profil.html')
						}else{
							passwordregister1.style.border = '2px solid red';
							passwordregister1.placeholder = 'Паролі мають бути однаковими';
							passwordregister2.style.border = '2px solid red';
							passwordregister2.placeholder = 'Паролі мають бути однаковими';
						}
					}
				}

	
	}

}


function MySubmitVerification(){
	for (var i = 0; i < LS.length + 1; i++) {
		let baseacount = JSON.parse(LS.getItem('acount' + i));
		if (Array.isArray(baseacount)){
			if (loginverificate.value == baseacount[0]) {
				loginverificate.style.border = '';
				loginverificate.placeholder = '';
				console.log('логін правильний');
				if (passwordverificate.value == baseacount[1]) {
					console.log('пароль правильний');
					passwordverificate.style.border = '';
					passwordverificate.placeholder = '';
					LS.setItem('liveacount', JSON.stringify(baseacount));
					window.location.assign('C:/Users/bogda/OneDrive/Робочий стіл/Progect 2/HTMLcode/index.html');
					return;
				}else{
					passwordverificate.style.border = '2px solid red';
					passwordverificate.placeholder = 'Пароль не правильний';
					return;

				}
			}if (loginverificate.value != baseacount[0]) {
				loginverificate.style.border = '2px solid red';
				loginverificate.placeholder = 'Логін не зарейстрований';
				
			}
		}
		
	}
}

				// LOGIN        PASSWORD     BU]
let usercount1 = ['Mays1234', 'Ros_1304', 'Copengagen']; 

//LS.getItem('usercount');

let usercount2 = ['Mays2345', 'Ros_1306', 'Barcelona'];

LS.setItem('acount1',JSON.stringify(usercount1));

LS.setItem('acount2', JSON.stringify(usercount2));



//localStorage.clear();

/*if (usercount == null) {
	usercount = 0;
}else{
	console.log('нічого');
}*/

//LS.setItem('usercount', usercount);

//JSON.parse(LS.getItem('registration'));