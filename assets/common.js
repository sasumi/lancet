const yesOrNot = (flag, trueText, falseText) => {
	let cls = flag ? 'yes' : 'no';
	return `<span class="${cls}">` + (flag ? trueText : falseText) + '</span>';
};

const supportText = (flag) => {
	return yesOrNot(flag, '支持', '不支持');
}

const delegateEvent = (container, selector, event, handle)=>{
	container.addEventListener(event, e=>{
		let n = e.target;
		if(n.matches(selector)){
			handle();
			return;
		}
		while(n){
			if(n === container){
				return;
			}
			if(n.matches(selector)){
				handle();
				return;
			}
			n = n.parentNode;
		}
	});
}

const timeCostText = (start)=>{
	let cost = (new Date()).getTime() - start;
	if(cost < 1000){
		return cost + '毫秒';
	}else{
		return cost / 1000 + '秒';
	}
}

const speedCostText = (startTime, size)=>{
	let costTime = ((new Date()).getTime() - startTime)/1000;
	return ((size/costTime)/1024/1024).toPrecision(2)+'MB/s';
}

const timeCostHtml = (start) => {
	return `<span class="time-cost">${timeCostText(start)}</span>`;
}

const loadScript = (src, sucCb, errCb, timeoutCb, timeout) => {
	let s = document.createElement('script');
	s.type = 'template/text';
	s.onload = sucCb;
	s.onerror = errCb;
	s.src = src;
	document.head.appendChild(s);
}

const imageDownloadTestWrite = (url) => {
	let id = 'id_' + (new Date()).getTime() + '_' + Math.random();
	setTimeout(() => {
		let n = document.getElementById(id);
		let xhr;
		let cancelCheck = ()=>{
			if(xhr && xhr.abort){
				xhr.abort();
			}
			n.innerHTML = `<span class="link start-check">开始测试</span>`;
		};

		let startCheck = ()=>{
			n.innerHTML = '<progress max="100" value="0"></progress> <span class="percent"></span> <span class="link cancel-link">取消</span>';
			let progress = n.querySelector('progress');
			let percent = n.querySelector('.percent');
			let cancel_link = n.querySelector('.cancel-link');
			let start = (new Date()).getTime();
			xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
			xhr.responseType = 'arraybuffer';
			xhr.onload = function(e){
				n.innerHTML = yesOrNot(true, '测试完成')
					+ '，耗时：'+timeCostText(start)
					+'，平均速度：'+speedCostText(start, e.total)
					+'<img class="tiny-thumb"> <span class="link start-check">重新测试</span>';
				let blob = new Blob([this.response]);
				n.querySelector('img').src = window.URL.createObjectURL(blob);
			};
			xhr.onprogress = function(e){
				let pec = (100*e.loaded / e.total).toPrecision(2);
				console.log(e.loaded, e.total, e.lengthComputable);
				progress.value = parseInt(100*e.loaded / e.total);
				percent.innerText = pec+'%';
			};
			xhr.onloadstart = function(){
				progress.value = 0;
				percent.innerText = '0%'
			};
			cancel_link.addEventListener('click', e => {
				xhr.abort();
				n.innerHTML = `<span class="link start-check">开始测试</span>`;
			});
			xhr.send();
		};
		delegateEvent(n, '.start-check', 'click', startCheck);
		delegateEvent(n, '.cancel-check', 'click', cancelCheck);
	}, 0);
	return `<span id="${id}"><span class="link start-check">开始测试</span></span>`;
};

/**
 * 加载图片
 * @param {String} src
 * @param {Function} sucCb
 * @param {Function} errCb
 * @param {Function} timeoutCb
 * @param {Number} TIMEOUT
 */
const loadImage = (src, sucCb, errCb, timeoutCb, TIMEOUT) => {
	let timeout_flag = false;
	let img = new Image();
	let timeout_timer = setTimeout(() => {
		timeout_flag = true;
		timeoutCb();
	}, TIMEOUT);
	img.onload = () => {
		if(!timeout_flag){
			clearTimeout(timeout_timer);
			sucCb();
		}
	};
	img.onerror = () => {
		if(!timeout_flag){
			clearTimeout(timeout_timer);
			errCb();
		}
	}
	img.src = src;
}

/**
 * 检测域名
 * @param url
 * @return {String}
 */
const checkDomainWrite = (url) => {
	let id = 'id_' + (new Date()).getTime() + '_' + Math.random();
	setTimeout(() => {
		let n = document.getElementById(id);
		let start = (new Date()).getTime();
		let pass = () => {
			n.innerHTML = yesOrNot(true, '通过') + timeCostHtml(start);
		};
		loadImage(url, pass, pass, () => {
			n.innerHTML = yesOrNot(false, '', '检测失败') + timeCostHtml(start);
		}, 10000);
	}, 0);
	let a = document.createElement('a');
	a.href = url;
	let hostText = a.protocol + '//' + a.hostname;
	return `<label title="${hostText}">${hostText}</label><var id="${id}" class="nowrap"><span class="loading">检测中</span></var>`;
}

/**
 * 检测资源是否正确（支持图片、js）
 * @param url
 * @return {`<label>${string}</label><var id="${string}"><span class="loading">检测中</span></var>`}
 */
const checkResWrite = (url) => {
	let id = 'id_' + (new Date()).getTime() + '_' + Math.random();
	setTimeout(() => {
		let container = document.getElementById(id);
		container.innerHTML = '<span class="loading">加载中</span>';
		let start = (new Date()).getTime();
		if(url.indexOf('.js') > 0){
			loadScript(url, () => {
				container.innerHTML = yesOrNot(true, '通过') + timeCostHtml(start);
			}, err => {
				container.innerHTML = `<span class="error">${err}</span>${timeCostHtml(start)}`;
			});
		}else{
			let img = new Image();
			img.src = url;
			img.onerror = err => {
				console.log('err', err);
				container.innerHTML = `<span class="error">${err}</span>${timeCostHtml(start)}`;
			}
			img.onload = e => {
				container.innerHTML = yesOrNot(true, '通过') + timeCostHtml(start);
			}
		}
	}, 0);
	return `<label title="${url}">${url}</label><var id="${id}" class="nowrap"><span class="loading">检测中</span></var>`;
}
