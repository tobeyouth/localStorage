/*
	一个兼容ie的localStorage方法
	在ie下拓展一个localStorage对象，作为全局对象

	by jn
	2013 04 27
*/
;(function (exports) {
	var isCanLocalStorage = !!('localStorage' in window);

	if (!isCanLocalStorage) {
		// 创建一个userData对象
		var userData = document.getElementById('localStorage'),
			box = document.body || document.getElementsByTagName("head")[0] || document.documentElement;
		// 创建userData
		if (!userData || userData.length < 1) {
			userData = document.createElement('input');
			userData.setAttribute('type','hidden');
			userData.setAttribute('id','localStorage');
			userData.style.behavior = "url('#default#userData')";
			userData.style.display = 'none';
			box.appendChild(userData);
		};

		var ieLocalStorage = {};
		ieLocalStorage.setItem = function (key,value) {
			userData.setAttribute(key,value);
			userData.save('djUserData');
		};
		ieLocalStorage.getItem = function (key) {
			userData.load('djUserData');
			return userData.getAttribute(key);
		};
		ieLocalStorage.removeItem = function (key) {
			userData.load('djUserData');
			userData.removeAttribute(key);
		};
		ieLocalStorage.clear = function () {
			
		};

		exports.localStorage = ieLocalStorage;
	};
	
})(window);