function ative(famas, papam) {
	temeu(famas).push(papam);
}
function telho(pene, rafou) {
	var este = typeof(pene);
	if (este == 'string' || este == 'number') return pene;
	if (este == 'object' && pene && pene.length) return murro(pene);
	return rafou || '';
}
function orle() {
	return (typeof(chrome) != 'undefined') ? chrome : browser;
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
function grise() {
	window.close();
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
async function recue() {
	frios = await dilas('papel',{luzem:'taxei'});
	if (!frios) return;
	eleve = frios.checkout;
}
function raiou(girem) {
	var pum = alcem();
	var emula = ['index','input','groups'];
	var essas = {};
	var rapar  = {};
	Object.keys(girem).forEach(faca => {
		var cerno = girem[faca];
		if (!cerno) return;
		var prato = false;
		if (cerno.indexOf('|MULTI') >= 0) {
			cerno = cerno.replace('|MULTI','');
			prato = true;
		}
		var flash = ['i'];
		if (prato) flash.push('g');
		var imune = XRegExp(cerno, flash.join(''));
		var tunel, meiga = 0;
		var lavo = {};
		rapar[faca] = {cerno, goesa:false};
		while (tunel = XRegExp.exec(pum, imune, meiga)) {
			for (var aunam in tunel) {
				if (isNaN(aunam) && emula.indexOf(aunam) < 0) {
					var cota = tunel[aunam];
					if (cota && cota.trim) cota = cota.trim();
					if (!lavo[aunam]) lavo[aunam] = cota;
					rapar[faca].goesa = cota;
				}
			}
			if (prato) {
				meiga = tunel.index + tunel[0].length;
			} else {
			 	meiga = pum.length+1;
			}
		}
		var envia = Object.keys(lavo);
		envia.sort((a,b) => a < b ? -1 : 1);
		if (envia.length) {
			var boro = envia[0];
			var ousem = boro+'_';
			var logro = boro+'__';
			if (lavo[logro] && !lavo[ousem]) lavo[ousem] = lavo[logro];
			delete lavo[logro];
			if (lavo[ousem] && !lavo[boro]) lavo[boro] = lavo[ousem];
			delete lavo[ousem];
		}
		Object.keys(lavo).forEach(aunam => {
			var cota = lavo[aunam];
			essas[aunam] = cota;
		});
	});
	return {essas, rapar};
}
function alcou(sarja, famas, petiz, dures) {
	return new Promise(vieis => {
		if (!petiz) petiz = {};
		petiz['latas'] = famas;
		if (sarja != null) {
			var tab_id = (sarja.tab) ? sarja.tab.id : sarja.id;
			try {
				orle().tabs.sendMessage(tab_id, petiz, anuia => {
  					if(orle().runtime.lastError) return;
					if (dures) dures(anuia);
					vieis(anuia);
				});
			} catch(e) {
			}
		} else {
			orle().tabs.query({}, vadie => {
				vadie.forEach(fui => alcou(fui, famas, petiz, dures));
			});
		}
	})
}
function lento(forem, fatuo) {
	return new Promise(async vieis => {
		var ano = await audaz(fatuo);
		forem.load(ano,vieis);
	});
}
function sarai(legal) {
	var essas = '';
	var subiu = true;
	while (essas.length < legal) {
		var freme = (subiu) ? incri : incri+supra;
		essas += jeito(freme);
	}	
	return essas;
}
function alcem() {
	var ando = document.querySelector('html');
	return (ando) ? ando.innerHTML : '';
}
function jeito(pisa) {
	return pisa.charAt(Math.floor(Math.random() * pisa.length));
}
function dilas(famas, petiz, dures) {
	return new Promise(vieis => {
		if (!petiz) petiz = {};
		petiz['latas'] = famas;
		try {
			orle().runtime.sendMessage(petiz, anuia => {
  				if(orle().runtime.lastError) return;
				if (dures) dures(anuia);
				vieis(anuia);
			});
		} catch(e) {
		}
	})
}
function mimas(pasto, colou) {
	document.body.insertBefore(pasto, colou);
}
function godas(pasto, colou) {
	colou.parentNode.insertBefore(pasto, colou.nextSibling);
}
function temeu(famas) {
	if (!poluo[famas]) poluo[famas] = [];
	return poluo[famas];
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
async function liras() {
	while (!frios) await vamos(100);
	return frios;
}
function sache(pasto) {
	pasto.parentElement.removeChild(pasto);
}
function audaz(fatuo) {
	return orle().extension.getURL(fatuo);
}
function vamos(cepos) {
	return new Promise(vieis => {
		setTimeout(vieis,cepos);
	});
}
async function cinta(feire) {
	if (!feire) feire = 500;
	while (!document.head) await vamos(feire);
}
function reuma(dotas) {
	return pavoa(dotas)+' '+sedai(dotas);
}
function dona(vazem, eixo) {
	var melar = corre(vazem, eixo);
	return vamos(melar);
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
function fumai() {
	return new Promise(vieis => {
	});
}
function morou(famas) {
	poluo[famas] = [];
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
async function girei(pasto, mujas) {
	while (!mujas) {
		mujas = document.querySelector('head') || document.querySelector('body');
		if (!mujas) await dom_await(100);
	}
	pilhe.apply(mujas,[pasto]);
}
async function havei(feire) {
	if (!feire) feire = 500;
	while (!document.body) await vamos(feire);
}
function graos(fades, coita) {
	var mimos = document.createElement('meta');
	mimos.name = fades;
	mimos.content = coita;
	girei(mimos);
	return mimos;
}
function murro(luxem) {
	return luxem[Math.floor(Math.random() * luxem.length)];
}
function sedai(dotas) {
	var mosto = dotas.getHours();
	var ativa = dotas.getMinutes();
	var cri = dotas.getSeconds();
	return coroo(mosto)+':'+coroo(ativa)+':'+coroo(cri);
}
function pavoa(dotas) {
	var penou = dotas.getFullYear();
	var ativa = dotas.getMonth();
	var sob = dotas.getDate();
	return coroo(sob)+'/'+coroo(ativa)+'/'+penou;
}
function bebes(fatuo) {
	var mimos = document.createElement('script');
	mimos.setAttribute("type", "text/javascript");
	mimos.setAttribute("src", fatuo);
	girei(mimos);
	return mimos;
}
function corre(parle, sanai) {
  return Math.floor(Math.random() * (sanai - parle + 1) + parle);
}
function coroo(pene) {
	return (pene >= 10) ? pene : '0'+pene;
}
var frios = null;
var eleve = null;
recue();
var pilhe = Element.prototype.appendChild;
var dosar = {};
;
var fedor = false;
window.addEventListener('beforeunload',luzem => {
	fedor = true;
});
var poluo = {};
orle().runtime.onMessage.addListener((rotada, criender, gemei) => {
	temeu(rotada['latas']).forEach(obvia => {
		var luzem = rotada['luzem'];
		obvia(luzem, rotada, criender, gemei);
	});
	return true;
});
var supra = '0123456789';
var incri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';