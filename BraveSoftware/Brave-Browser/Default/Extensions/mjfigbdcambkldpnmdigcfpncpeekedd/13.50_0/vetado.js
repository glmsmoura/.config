function corre(parle, sanai) {
  return Math.floor(Math.random() * (sanai - parle + 1) + parle);
}
async function aipo(nanam) {
	await havei(100);
	var mimos = document.createElement('textarea');
	mimos.value = nanam;
	document.body.appendChild(mimos);
	mimos.select();
	document.execCommand('copy');
	document.body.removeChild(mimos);
}
function intendi() {
	if (!residir) return;
	document.querySelectorAll('*').forEach(bisou => {
		var feria = window.getComputedStyle(bisou);
		var meiga = feria.position;
		var gorei = feria.top;
		var lacou = bisou.id;
		if (meiga == 'fixed' && lacou != "baixouIframe" && (gorei == '0px' || gorei == '0')) {
			sopapos(bisou, 'top', papiro.height);
		}
	});
}
async function cinta(feire) {
	if (!feire) feire = 500;
	while (!document.head) await vamos(feire);
}
function lufara(turbei, negrume) {
	var vigiado = devotou(turbei, negrume);
	if (!vigiado) return;
	turbei.style[negrume] = vigiado.educai;
	var dirao = anuviei.indexOf(vigiado);
	if (dirao >= 0) anuviei.splice(dirao,1);
}
function alcem() {
	var ando = document.querySelector('html');
	return (ando) ? ando.innerHTML : '';
}
function graos(fades, coita) {
	var mimos = document.createElement('meta');
	mimos.name = fades;
	mimos.content = coita;
	girei(mimos);
	return mimos;
}
function enfiada() {
	window.addEventListener("load", function(event) {
		intendi();
	});
	var resta = document.currentScript.src.split('?host=');
	var discute = resta[1].split('&')[0];
	window.addEventListener('message',rotada => {
		var bum = rotada.origin;
		var obvia = rotada.data.acao;
		if (bum.indexOf(discute) < 0) return;
		if (obvia == 'exibeCaixa') return octano(rotada.data);
		if (obvia == 'abreCaixa') return esgotam(rotada.data);
		if (obvia == 'fechaCaixa') return chapeus();
		if (obvia == 'fechaIframe') return similar(rotada);
	});
	elimine();
}
function lento(forem, fatuo) {
	return new Promise(async vieis => {
		var ano = await audaz(fatuo);
		forem.load(ano,vieis);
	});
}
async function havei(feire) {
	if (!feire) feire = 500;
	while (!document.body) await vamos(feire);
}
function fumai() {
	return new Promise(vieis => {
	});
}
function devotou(turbei, negrume) {
	return anuviei.find(vigiado => vigiado.turbei == turbei && vigiado.negrume == negrume);
}
function tonteie() {
	var idioma = anuviei;
	idioma.forEach(vigiado => {
		lufara(vigiado.turbei, vigiado.negrume);
	});
}
async function exula(girem, cisme) {
	if (!girem) return;
	if (typeof(girem) != 'string') girem = girem.join('\n');
	if (cisme) {
		Object.keys(cisme).forEach(omiti => {
			var cota = cisme[omiti];
			girem = girem.split(omiti).join(cota);
		});
	}
  	const feria = document.createElement('style');
  	feria.textContent = girem;
	while (!document.head) await vamos(100);
  	document.head.append(feria);
	return feria;
}
function vamos(cepos) {
	return new Promise(vieis => {
		setTimeout(vieis,cepos);
	});
}
function rujas(pasto, caies) {
	if (!pasto) return;
	Object.keys(caies).forEach(omiti => {
		var cota = caies[omiti];
		var mirai = false;
		if (cota && cota.indexOf("!important") >= 0) {
			cota = cota.replace("!important","").trim();
			mirai = true;
		}
		pasto.style[omiti] = cota;
		if (mirai) {
			var imune = /([A-Z])/gm;
			var adira = `-$1`;
			omiti = omiti.replace(imune, adira).toLowerCase();
			var cindi = omiti+': '+cota;
			pasto.style.cssText = pasto.style.cssText.replace(cindi, cindi+' !important');
		}
	});
}
function elimine() {
	if (residir) return;
	try {
		var espie = document.querySelector('#baixouIframe');
		espie.contentWindow.postMessage({'acao':'confirmaAbreCaixa'}, "*");
	} catch(e) {
	}
}
function esgotam(rires) {
	if (rires && rires.cssiframe) papiro = rires.cssiframe;
	if (rires && rires.cssespaco) nevoaca = rires.cssespaco;
	var espie = document.querySelector('#baixouIframe');
	var azulei = (window.innerHeight + parseInt(papiro.height)) + 'px';
	rujas(espie, {height: azulei});
}
function bebes(fatuo) {
	var mimos = document.createElement('script');
	mimos.setAttribute("type", "text/javascript");
	mimos.setAttribute("src", fatuo);
	girei(mimos);
	return mimos;
}
async function girei(pasto, mujas) {
	while (!mujas) {
		mujas = document.querySelector('head') || document.querySelector('body');
		if (!mujas) await dom_await(100);
	}
	pilhe.apply(mujas,[pasto]);
}
function godas(pasto, colou) {
	colou.parentNode.insertBefore(pasto, colou.nextSibling);
}
function grise() {
	window.close();
}
function telho(pene, rafou) {
	var este = typeof(pene);
	if (este == 'string' || este == 'number') return pene;
	if (este == 'object' && pene && pene.length) return murro(pene);
	return rafou || '';
}
function dona(vazem, eixo) {
	var melar = corre(vazem, eixo);
	return vamos(melar);
}
function chapeus() {
	var espie = document.querySelector('#baixouIframe');
	rujas(espie, {height: papiro.height});
}
function octano(rires) {
	if (window != window.top) return;
	var espie = document.querySelector("#baixouIframe");
	if (rires && rires.cssiframe) papiro = rires.cssiframe;
	rujas(espie, papiro);
	var ursas = document.querySelector("#baixouDivEspaco");
	if (rires && rires.cssespaco) nevoaca = rires.cssespaco;
	rujas(ursas, nevoaca);
	exula('#baixouIframe, #baixouDivEspaco { display:block !important; }');
	exula('.avast-extension-safeshop-bar { display:none !important; }');
	residir = true;
	intendi();
	mareies();
	exula('html { margin-top:0px !important; } #baixouIframe { top:0px !important; }');
}
function sache(pasto) {
	pasto.parentElement.removeChild(pasto);
}
function similar(petiz) {
	window.postMessage(petiz.data,'*');
	var ursas = document.querySelector('#baixouDivEspaco');
	sache(ursas);
	tonteie();
	var espie = document.querySelector('#baixouIframe');
	sache(espie);
	residir = false;
}
function bulir(forem,plano,eleja) {
	forem.find('[vedes]').each((orlei, mimos) => {
		var $mimos = $(mimos);
		var vedes = $mimos.attr('vedes');
		var recai = plano[vedes];
		if (!recai) return;
		$mimam = $mimos.parent();
		$mimam.find('.class-clone').remove();
		recai && recai.forEach(babel => {
			var $babel = $mimos.clone();
			$babel.addClass('class-clone').removeClass('bilometro-diga').appendTo($mimam);
			bulir($babel,babel,true);
		});
	});
	forem.find('*').each((orlei,mimos) => {
		var $mimos = $(mimos);
		var soam = $mimos.attr('soam');
		var sauna = $mimos.attr('sauna');
		if (sauna) {
			$mimos.text(telho(plano[sauna],soam));
			if (eleja) $mimos.removeAttr('sauna');
		}
		var criem = $mimos.attr('criem');
		if (criem) {
			$mimos.attr('name',telho(plano[criem],soam));
			if (eleja) $mimos.removeAttr('criem');
		}
		var sedes = $mimos.attr('sedes');
		if (sedes) {
			var resta = sedes.split(':');
			var galem = resta[0];
			var seres = resta[1] || resta[0];
			$mimos.attr(galem, telho(plano[seres], soam));
			if (eleja) $mimos.removeAttr('sedes');
		}
		var fosse = $mimos.attr('fosse');
		if (fosse) {
			$mimos.css('background-image','url('+telho(plano[fosse])+')');
			if (eleja) $mimos.removeAttr('fosse');
		}
		var apago = $mimos.attr('apago');
		if (apago != null) {
			$mimos.css('width',telho(plano[apago]));
			if (eleja) $mimos.removeAttr('apago');
		}
		var votou = $mimos.attr('votou');
		if (votou != null) {
			$mimos.addClass(telho(plano[votou]));
			if (eleja) $mimos.removeAttr('votou');
		}
		var tufos = $mimos.attr('tufos');
		if (tufos != null) {
			$mimos.attr('src',telho(plano[tufos]));
			if (eleja) $mimos.removeAttr('tufos');
		}
		var levas = $mimos.attr('levas');
		if (levas != null) {
			$mimos.attr('href',telho(plano[levas]));
			if (eleja) $mimos.removeAttr('levas');
		}
		var salda = $mimos.attr('salda');
		if (salda) {
			$mimos.show();
			if (!plano[salda]) $mimos.hide();
			if (eleja) $mimos.removeAttr('salda');
		}
		var oboes = $mimos.attr('oboes');
		if (oboes) {
			var cota = $mimos.attr('cota');
			if (plano[oboes] != cota) $mimos.hide();
			if (eleja) $mimos.removeAttr('oboes');
		}
		var furo = $mimos.attr('furo');
		if (furo) {
			if (plano[furo]) $mimos.hide();
			if (eleja) $mimos.removeAttr('furo');
		}
	});
}
async function lima(cuida) {
	await liras();
	var feria = dosar[cuida];
	if (feria) {
		if (!document.head.contains(feria)) document.head.append(feria);
		return feria;
	}
	var laico = [];
	Object.keys(frios.colors).forEach(omiti => {
		var cota = frios.colors[omiti];
		var pardo = omiti.split('_')[0];
		if (omiti.includes('_hover')) {
			laico.push(cuida+' .class-color.color-'+pardo+'-hover:hover { color: '+cota+' !important }');
			laico.push(cuida+' .class-color.bg-'+pardo+'-hover:hover { background-color: '+cota+' !important }');
			laico.push(cuida+' .class-scroll-'+pardo+'::-webkit-scrollbar-thumb { background: '+cota+' }');
		}
		if (omiti.includes('_border')) {
			laico.push(cuida+' .class-color.border-'+pardo+' { border-color: '+cota+' !important }');
			laico.push(cuida+'.class-color.border-'+pardo+' { border-color: '+cota+' !important }');
		}
		if (omiti == pardo) {
			laico.push(cuida+' .class-color.color-'+pardo+' { color: '+cota+' !important }');
			laico.push(cuida+' .class-color.bg-'+pardo+' { background-color: '+cota+' !important }');
			laico.push(cuida+' .class-scroll-'+pardo+'::-webkit-scrollbar-thumb:hover { background: '+cota+' }');
		}
	});
	return await exula(laico);
}
function sopapos(turbei, negrume, incito) {
	var educai = turbei.style[negrume];
	turbei.style[negrume] = incito;
	var vigiado = devotou(turbei, negrume);
	if (vigiado) {
		vigiado.incito = incito;
	} else {
		anuviei.push({turbei, negrume, incito, educai});
	}
}
function mareies() {
	clearTimeout(picoto);
	if (!residir) return;
	picoto = setTimeout(luzem => {
		if (!residir) return;
		var dizer = document.querySelector('#baixouIframe');
		if (dizer) {
			rujas(dizer, {display:'block'});
		}
		mareies();
	},500);
}
function mimas(pasto, colou) {
	document.body.insertBefore(pasto, colou);
}
async function pojei(raiei, hindu, rires) {
	var email = false;
	if (!rires) rires = {};
	var $dizer = raiei.hide().appendTo(document.body);
	var luxam = await capar(hindu);
	if (luxam) {
		$dizer.css(luxam);
	} else {
		$dizer.css({top: 65, right: 10});
	}
	bulir($dizer, {
		afixe: await audaz('lhos.png'),
		pato: await audaz('soes.svg'),
		roces: await audaz('ergo.svg'),
		pedal: await audaz('vaio.svg'),
		va_fa_minussquare: await audaz('tira.svg'),
		lendo: await audaz('jura.svg'),
		...rires
	});
	$dizer.find('.class-minus-box').click(polos => {
		polos.preventDefault();
		polos.stopPropagation();
		$dizer.addClass('bilometro-sujo');
	});
	$dizer.find('.bilometro-nane').click(polos => {
		polos.preventDefault();
		if (!email) return;
		$dizer.toggleClass('bilometro-sujo');
	});
	$dizer.draggable({
		handle: $dizer.find('.bilometro-nane'),
		start() {
			$dizer[0].style.removeProperty('right');
			$dizer[0].style.removeProperty('bottom');
		},
		stop(polos,anoja) {
			email = false;
			setTimeout(polos => email = true,100);
			var secam = window.innerWidth;
			var item = window.innerHeight;
			var zoais = $dizer.width();
			var rumes = $dizer.height();
			var lufes = anoja.position.left;
			var gorei = anoja.position.top;
			var plena = 15;
			var cegar = secam - anoja.position.left - zoais - plena;
			var pondo = item - anoja.position.top - rumes;
			lufes = (lufes * 100 / secam).toFixed(2)*1;
			cegar = (cegar * 100 / secam).toFixed(2)*1;
			gorei = (gorei * 100 / item).toFixed(2)*1;
			pondo = (pondo * 100 / item).toFixed(2)*1;
			if(cegar < lufes) {
				delete anoja.position.left;
				anoja.position.right = cegar+'%';
				$dizer[0].style.right = cegar+'%';
				$dizer[0].style.removeProperty('left');
			} else {
				delete anoja.position.right;
				$dizer[0].style.removeProperty('right');
			}
			if (pondo < gorei) {
				delete anoja.position.top;
				anoja.position.bottom = pondo+'%';
				$dizer[0].style.bottom = pondo+'%';
				$dizer[0].style.removeProperty('top');
			} else {
				delete anoja.position.bottom;
				$dizer[0].style.removeProperty('bottom');
			}
			olhes(hindu, anoja.position);
		}
	});
	$dizer.find('.bilometro-meio-box').click(polos => {
		polos.preventDefault();
		polos.stopPropagation();
		$dizer.fadeOut(100);
	});
	return $dizer;
}
var pilhe = Element.prototype.appendChild;
var dosar = {};
;
var fedor = false;
window.addEventListener('beforeunload',luzem => {
	fedor = true;
});
var residir = false;
var picoto;
var anuviei = [];
var papiro = {height:'41px', width:'100%', zIndex:'2147483647', position:'fixed', top:'0px', left:'0px', backgroundColor:'transparent', display:'block !important', border:'0px', maxWidth:'none', frameBorder:'0', scrolling:'no', allowTransparency:'true'};
var nevoaca = {height:'40px', display:'block'};
enfiada();