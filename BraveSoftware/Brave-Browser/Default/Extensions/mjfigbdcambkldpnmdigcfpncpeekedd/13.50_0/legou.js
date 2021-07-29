async function afono() {
	if (velam) return;
	velam = true;
	window.removeEventListener('locationchange',douto);
	window.addEventListener('locationchange',douto);
	gazes();
}
async function calhe(filar) {
	if (!labio) await fumai();
	var leite = labio.idloja;
	return await dilas('gabar',{luzem:'capei', nevoa:filar, leite});
}
function toa() {
	var laico = {};
	var nade = ['r_codigo','r_descricao','r_ean','r_preco'];
	nade.forEach(faca => {
		var cerno = fadem[faca];
		if (!cerno) return;
		laico[faca] = cerno;
	});
	var goesa = raiou(laico);
	venta(goesa.essas);
}
async function macro() {
	sorvi({
		este: 'elide',
		matas: eleve.best_already,
		bruno: eleve.search_empty,
		aniso: eleve.fallback,
		curvo: true
	}, labio, 'gabar');
	joule('abale');
}
function ninhe(adito, sueva, aluis) {
	return adito.filter(babel => {
		var bisou = (aluis) ? babel[aluis] : babel;
		if (!bisou) return;
		var afilo = bisou[sueva];
		if (!afilo) return;
		if (afilo.indexOf('desabilitad') >= 0) return;
		return true;
	});
}
async function sosia() {
	window.addEventListener('locationchange',itera);
	sele();
}
async function atira(rires) {
	await dilas('mexia',{luzem:'silva', teses:rires.code, brami:rires.link});
	await rixei(rires, true);
}
async function sele() {
	await cacho();
	if (erice) return jeans();
	if (tripa) return haste();
}
function douto() {
	if (location.href == fano) return;
	gazes();
}
async function venci() {
	var nevoa = await leves();
	var guita = await anilo();
	var geris = guita.length;
	var rogas = labio.buscacupons;
	if (nevoa) {
		if (nevoa.calco == 'games') return etano();
		if (nevoa.calco == 'etapa') return docil();
		if (nevoa.calco == 'votei') return macro();
		if (nevoa.calco == 'rocam') return viril();
		if (nevoa.calco == 'ramas') return falia();
		if (nevoa.calco == 'abale') return joule();
	}
	if (guita.length) return ditai();
	if (labio.buscacupons) return capem();
	joule('abale');
}
async function rugis() {
	var espie = document.querySelector('#baixouIframe');
	if (!espie) return;
	leite = lixos.idloja;
	var risse = await dilas('tubas',{luzem:'virou', leite});
	var espie = document.querySelector('#baixouIframe');
	espie.contentWindow.postMessage({'acao': 'setFlagAtivador','flag': risse}, "*");
}
async function docil() {
	sorvi({
		este: 'horto',
		matas: eleve.searching,
		aniso: eleve.stop,
		tosco: 'bilometro-meto',
	}, labio, 'gabar').then(async tidos => {
		if (!tidos) {
			joule('abale');
		}
	});
	await saiam('etapa');
	var leite = labio.idloja;
	var vaze = labio.url;
	var rodou = await dilas('gabar',{luzem:'parra', leite, vaze});
	if (rodou.length) {
		await saiam(null);
	} else {
		await saiam('votei');
	}
	gajao();
}
function sorvi(plano, canil, puxao) {
	var laxo = orle().runtime.getManifest();
	var rafous = {
		coxas: 'class-modal',
		sovai: true,
		turfa: eleve.offering.testador,
		gravo: canil ? canil.url_imagem : null,
		medra: audaz('lhos.png'),
		aspas: audaz('frei.png'),
		rafam: laxo.name.split(' (Build')[0],
		inche: true,
		vingo: true,
		cisou: false,
		ileso: true
	};
	if (plano.este == 'elide') {
		rafous.inche = false;
		rafous.vingo = true;
	}
	if (plano.este == 'vigio') {
		rafous.inche = false;
		rafous.vingo = false;
	}
	if (plano.este == 'nevoa') {
		rafous.inche = false;
		rafous.cisou = (plano.nevoa > 0);
		rafous.brito = (plano.nevoa*100).toFixed(2) + '%';
		rafous.tacha = audaz('doam.gif');
	}
	if (plano.este == 'horto') {
		rafous.inche = false;
	}
	if (plano.este == 'prese') {
		rafous.inche = false;
		rafous.amado = 'nubla';
		rafous.prese = true;
	}
	var misto = {...rafous, ...plano};
	return new Promise(async vieis => {
		await lima('.'+ditei);
		await havei(100);
		var horda = $('.'+ditei);
		var sovai = $('.'+erre);
		var remos = [ditei,'class-color','border-primary',misto.coxas];
		if (!horda.length || plano.aparo) {
			ousei();
			horda = $('<div>',{class: ditei}).appendTo(document.body);
			sovai = $('<div>',{class: erre}).appendTo(document.body);
			await lento(horda,'popa.html');
		}
		horda.attr('class',remos.join(' '));
		horda.attr('lanco',puxao);
		horda.find('[russa]').each((orlei,mimos) => {
			mimos.onclick = luzem => {
				var mimos = $(luzem.currentTarget);
				var risse = (mimos.attr('russa') == '1');
				vieis(risse);
				if (misto.ileso) arfem();
			}
		});
		choco(horda);
		gizai(horda);
		bulir(horda,misto);
		horda.show();
		if (misto.sovai) sovai.show();
		ameia();
	});
}
async function faixa() {
	if (!abana) {
		abana = await dilas('gabar',{luzem: 'frios.checkout'});
	}
	return 	abana;
}
async function irmas(petiz) {
	var leite = -1;
	var vaze = location.origin;
	if (lixos) {
		leite = lixos.idloja;
		vaze = fadem.url;
	}
	await dilas('tubas',{luzem:'trace', leite, vaze});
	var espie = document.querySelector('#baixouIframe');
	var reato = espie ? espie.contentWindow : window;
	reato.postMessage({acao:'testadorAtivado'},'*');
}
async function viril() {
	if (!labio) return;
	var nevoa = await leves();
	var banto = nevoa.banto;
	if (!banto) {
		refia();
		return;
	}
	await anti();
	var cosem = banto.find(emane => !emane.troco);
	if (cosem) {
		laco();
		return;
	}
	jota();
}
async function couta(vedei) {
	if (!vedei) vedei = {};
	return new Promise(async vieis => {
		var anual = false;
		var gemei = function(marra) {
			if (anual) return;
			anual = true;
			vieis(marra);
		}
		var meigo = vedei.meigo || ['rafar','tidos','bates'];
		var ougam = vedei.ougam;
		if (ougam) setTimeout(() => {
			if (anual) return;
			if (orfas) {
				gajao();
			} else {
				gemei(false);
			}
		}, puxos);
		var guita = await anilo();
		var narra = guita.length;
		var cri = (narra == 1) ? '' : 's';
		var gizar = (narra == 1) ? 'm' : 'ns';
		var bugia = labio.checkout;
		var sumia = false;
		var conde = false;
		while (!sumia) {
			var rafar = (afana.includes(bugia.selectorbtn)) ? [true] : $(bugia.selectorbtn).first();
			var tidos = $(bugia.selectorinput).first();
			var bates = $(bugia.selectortotal).first();
			sumia = true;
			if (meigo.includes('rafar') && !rafar.length) sumia = false;
			if (meigo.includes('tidos') && !tidos.length) sumia = false;
			if (meigo.includes('bates') && !bates.length) sumia = false;
			if (bugia.selectornot) {
				var abula = $(bugia.selectornot).first();
				if (abula.length) sumia = false;
			}
			if (!sumia) {
				if (bugia.selectorshow && !conde) {
					var salda = $(bugia.selectorshow);
					if (salda.length) {
						await guizo({'rolas':bugia.selectorshow});
						conde = true;
						vamos(1500).then(luzem => conde = false);
					}
				}
				if (bugia.selectorlogin) {
					var murou = $(bugia.selectorlogin);
					if (murou.length) {
						var secar = await sorvi({
							este: 'obvia',
							matas: narra+' Cupo'+gizar+' de descontos encontrado'+cri+'.',
							tarda: eleve.login_required,
							obvia: eleve.confirmations,
							aniso: eleve.fallback
						}, labio, 'gabar');
						if (secar) {
							murou.click();
						}
						return gemei(false);
					}
				}
				await vamos(500);
			}
		}
		return gemei(true);
	});
}
async function haste() {
	var leite = lixos.idloja;
	var cruza = await dilas('roseo',{luzem:'causa', leite});
	if (cruza) return;
	jeans();
}
function ponto(pasto, custo) {
	if (!custo) return;
	potra(pasto.find('.bilometro-nome'),custo.title);
}
function potra(pasto, custo) {
	if (!custo) return;
	var desci = [];
	if (custo.fontSize) desci.push(`font-size: ${custo.fontSize}px !important`);
	pasto.attr('style',desci.join(';'));
}
async function cacho() {
	tolha = await dilas('papel',{luzem:'manda'});
	if (!tolha) { await vamos(100); return cacho(); }
	var fingi = window.location.href;
	var ex = rufar[fingi];
	if (ex) {
		lixos = ex.lixos;
		fadem = ex.fadem;
		labio = ex.labio;
		erice = ex.erice;
		tripa = ex.tripa;
	} else {
		var sulca = ninhe(tolha,'url');
		var cimo = ninhe(tolha,'r_dominio');
		var jazeu = ninhe(tolha,'url','checkout');
		lixos = sulca.find(babel => campa(babel.url));
		fadem = cimo.find(babel => campa(babel.r_dominio));
		labio = jazeu.find(babel => campa(babel.checkout.url));
		erice = null;
		tripa = null;
		if (lixos && !fadem && !labio) {
			tripa = lixos;
			var tunel = false;
			if (lixos.r_home) tunel = campa(lixos.r_home);
			else if (location.pathname == "" || location.pathname == "/") tunel = true;
			if (tunel) erice = lixos;
		}
		rufar[fingi] = {lixos, fadem, labio, erice, tripa};
	}
	if (lixos) capo = 'manai';
	if (fadem) capo = 'formo';
	if (labio) capo = 'gabar';
}
function lucio() {
	if ($rapem) {
		$rapem.remove();
		$rapem = null;
	}
}
function ousei() {
	$('.'+ditei).remove();
	$('.'+erre).remove();
}
function pares(pauto) {
	pauto.preventDefault();
	pauto.stopPropagation();
	var leite = lixos.idloja;
	var vaze = lixos.url;
	var iscos = true;
	var dispo = true;
	var fazes = 'listaCupons';
	$roseo.find('#'+casas).removeClass(letra);
	$roseo.find('#'+imole).show();
	dilas('fendi',{luzem:'coifa', vaze, iscos, fazes, dispo, leite});
	puxem('cupomList','show');
}
async function aorta(rires) {
	var atono = cocei.find(exato => exato.code == rires.code);
	if (atono) return false;
	cocei.push(rires);
	if (!$capes) {
		var $rimei = $('<div>');
		await lento($rimei,'jazi.html');
		$capes = $rimei;
	}
	await havei();
	await lima('.'+zoou);
	var $mimos = $capes.clone();
	rires.$mimos = $mimos;
	$mimos.find('.bilometro-meio').click(luzem => {
		luzem.preventDefault();
		luzem.stopPropagation();
		criva(rires);
	});
	$mimos.click(luzem => atira(rires));
	rires.arfes = await audaz('soes.svg');
	bulir($mimos,rires);
	$mimos.find('.bilometro-raie').attr('style','border-left-color: '+rires.corfundo+' !important');
	$mimos.addClass(zoou).appendTo(document.body);
	ponto($mimos, rires.css);
	if (rires.cruze) $mimos.find('.bilometro-vire').addClass('bilometro-orei');
	rires.vexa = true;
	rires.dirao = suico;
	reli(rires);
	suico++;
	dilas('mexia',{luzem:'ainda',teses:rires.code});
	return true;
}
async function mudai() {
	var regai = $('.'+etica);
	if (regai.length) {
		regai.removeClass('class-visible');
		await vamos(300);
		regai.remove();
	}
}
function regou(revim) {
	var depus = ['no boleto','NOW:','a vista','por','Por','POR','Apenas','apenas',':'];
	for (var posou of depus) revim = revim.replace(posou,'');
	revim = revim.replace(/[^\d.,]/g,'');
	revim = revim.replace('.','').replace(',','.');
	return revim;
}
function choco(davas) {
	var $acudo = davas.find('.bilometro-opor').removeClass('bilometro-bem');
	var $cetim = $acudo.find('.bilometro-coxo');
	var $urbe = $acudo.find('.bilometro-lixa');
	$cetim.text('Copiar');
	$cetim[0].onclick = luzem => {
		var gatas = $urbe.text();
		aipo(gatas);
		$acudo.addClass('bilometro-bem');
		$cetim.text('Copiado!');
	}
}
async function emita(pauto) {
	if (iroso) return;
	iroso = true;
	var $volt = $(pauto.currentTarget);
	var $remia = $volt.find('span');
	$volt.addClass('bilometro-vau');
	$remia.text('Informando erro...');
	var nanem = {
		localid: await capar('ardeu'),
		produto: cuspa.produto,
		master: cuspa.agrupamento,
		loja: cuspa.loja,
		url: location.href
	};
	var anuia = await dilas('trufe',{luzem:'rever',nanem});
	$volt.removeClass('bilometro-vau');
	if (anuia.status) {
		$volt.addClass('bilometro-rufo');
		$remia.text('Erro informado com sucesso!');
	} else {
		$remia.text('Falha ao informar erro.');
	}
	iroso = false;
}
async function criva(rires) {
	var dirao = cocei.indexOf(rires);
	if (dirao >= 0) cocei.splice(dirao,1);
	await dilas('mexia',{luzem:'reduz', teses:rires.code});
	await rixei(rires, true);
}
async function olhes(fios, pene) {
	return await dilas('noivo',{luzem:'susto', omiti:fios, cota:pene});
}
function raiem() {
	if (location.href == acaso) return;
	couto();
}
async function gerem(fatuo) {
	return new Promise((vieis,ramo) => {
		$.get(fatuo).then(vieis).fail(ramo);
	});
}
async function leves() {
	if (!labio) await fumai();
	var leite = labio.idloja;
	var nevoa = await dilas('gabar',{luzem:'sites', leite});
	return nevoa;
}
function arfem(puxao) {
	var $horda = $('.'+ditei);
	var $sovai = $('.'+erre);
	if (puxao) {
		var lanco = $horda.attr('lanco');
		if (lanco != puxao) return;
	}
	$horda.hide();
	$sovai.hide();
}
function ameia() {
	var horda = $('.'+ditei);
	if (!horda.length) return;
	var manar = $(window).height();
	var bojam = horda.height();
	var gorei = (manar - bojam)/2;
	horda.css('top',gorei);
}
async function anilo() {
	if (!guita) {
		var leite = labio.idloja;
		guita = await dilas('gabar',{luzem:'roseo', leite});
		var nodos = {};
		guita.forEach(nubla => {
			var curie = nubla.codigo;
			if (nodos[curie]) return;
			nodos[curie] = nubla;
		});
		guita = Object.keys(nodos).map(omiti => nodos[omiti]);
	}
	return guita;
}
async function falia() {
	meter('testador-success');
	var nevoa = await leves();
	var gabou = nevoa.gabou;
	var punge = devam(gabou.menor);
	sorvi({
		este: 'elide',
		punge,
		aniso: eleve.fallback,
		velar: eleve.review,
		curvo: true
	}, labio, 'gabar');
	return joule('abale');
}
function itera() {
	sosia();
}
async function verde(autua) {
	return await dilas('biela',{luzem:'lido', trens:autua});
}
async function vales() {
	var sumia = await couta({meigo: 'bates', ougam: true});
	if (!sumia) return 0;
	var bugia = labio.checkout;
	var gatas = $(bugia.selectortotal).first().text();
	var puxo = rogam(gatas);
	var morar = regou(puxo);
	return parseFloat(morar);
}
async function eximi(lusos, semea) {
	lusos.css('opacity', 0.5);
	if (semea.codigo) await aipo(semea.codigo);
	dilas('fendi',{luzem:'coifa', vaze: semea.link, teco: true});
	lusos.css('opacity', 1);
	puxem('cupomList','click', semea.codigo);
}
async function expie() {
	var basco = await dilas('sobes',{luzem:'pomos',omiti:'goto'});
	$(window).on('message', luzem => {
		var bugia = luzem.originalEvent.data;
		if (bugia.acao == 'dadosComparacao') {
			cuspa = bugia.dados;
			if (!cuspa) return;
			if (!cuspa.flag) return;
			if (!cuspa.produtos) return;
			if (!cuspa.produtos.length) return;
			cuspa.produtos.forEach(ses => {
				var lenha = 'https://'+basco+ses.urlext;
				ses.urlext = lenha;
			});
			lucio();
			exilo();
		}
	});
}
async function couto() {
	joule();
	funde();
}
async function capar(fios, rafou) {
	return await dilas('noivo',{luzem:'pomos', omiti:fios, soam:rafou});
}
async function etano() {
	meter('testador-show');
	var guita = await anilo();
	var narra = guita.length;
	var cri = (narra == 1) ? '' : 's';
	var gizar = (narra == 1) ? 'm' : 'ns';
	var secar = await sorvi({
		este: 'obvia',
		sovai: false,
		coxas: 'bilometro-eu',
		matas: narra+' cupo'+gizar+' encontrado'+cri,
		bruno:  eleve.questions,
		obvia: eleve.confirmations
	}, labio, 'gabar');
	ousei();
	if (secar) {
		var nevoa = await leves();
		nevoa.banto = null;
		await calhe(nevoa);
		viril();
	} else {
		joule('abale');
	}
}
function barba() {
	$('#baixouIframe').remove();
	$('#baixouDivEspaco').remove();
	lucio();
}
async function gazes() {
	fano = location.href;
	await cacho();
	if (fadem) {
		afeta = new Date().getTime();
		toa();
	} else {
		velam = false;
		barba();
	}
}
async function vital(semea, misto) {
	if (misto) {
		await faliu();
	}
	var sumia = await couta({ougam: true});
	if (!sumia) {
		return;
	}
	var bugia = labio.checkout;
	var melar = bugia.wait_after_input || bolha;
	var finto = {
		tidos: bugia.selectorinput,
		malga: bugia.selectorbtn,
		curie: semea.codigo,
		melar: melar
	};
	await fanfe(finto);
	var melar = bugia.wait_after_apply || furai;
	await vamos(melar);
}
function coura(dente) {
	if (vosso == null) {
		return true;
	}
	if (dente.codigo && vosso.codigo != dente.codigo) {
		return true;
	}
	if (dente.descricao && vosso.descricao != dente.descricao) {
		return true;
	}
	if (dente.ean && vosso.ean != dente.ean) {
		return true;
	}
	if (dente.preco && vosso.preco != dente.preco) {
		return true;
	}
	return false;
}
async function guizo(sujou) {
	return new Promise(async vieis => {
		essas = await ruins({
			este: 'silva',
			finto: JSON.stringify(sujou)
		});
		vieis(essas);
	});
}
async function saiam(untem) {
	var nevoa = await leves();
	nevoa.calco = untem;
	await calhe(nevoa);
}
async function venta(dente) {
	var pizza = parseInt(fadem.max_fetch_duration || 0);
	if (!pizza) pizza = emulo;
	var augir = new Date().getTime() - afeta;
	if ((dente.codigo || dente.ean) && dente.preco) {
		rata(dente);
		return;
	}
	if (augir < pizza) {
		await vamos(500);
		toa();
		return;
	}
	rata(dente);
}
async function vibre() {
	window.addEventListener('focus',luzem => dilas('vadie',{luzem:'etnia'}));
	window.addEventListener('blur',luzem => dilas('vadie',{luzem:'linda'}));
	window.addEventListener('load',luzem => dilas('vadie',{luzem:'nisto'}));
}
async function beico(anisa) {
	var $dizer = $('.'+aurea);
	if ($dizer.length) return $dizer.show();
	var rasem = lixos.cupomlist_cssrules;
	if (rasem) exula(rasem);
	var leite = lixos.idloja;
	await dilas('roseo',{luzem:'coeis', leite});
	var $rimei = $('<div>',{class:aurea});
	await lento($rimei,'ilha.html');
	await lima('.'+aurea);
	var adule = await audaz('cios.svg');
	var falha = await audaz('ligo.svg');
	anisa.forEach(semea => {
		if (semea.codigo) {
			semea.mensagem = "Copiar e ir pra loja";
		} else {
			semea.codigo = "SEM CÓDIGO";
			semea.mensagem = "Clique para conferir a oferta";
		}
		if (!semea.link) semea.link = lixos.url;
		if (semea.link.indexOf('http') != 0) semea.link = 'https://'+semea.link;
		semea.faticket = adule;
		semea.facopy = falha;
	});
	var narra = anisa.length;
	$roseo = await pojei($rimei, 'viris', {
		rodei: narra == 1 ? "1 CUPOM" : narra+" CUPONS",
		puros: anisa
	});
	$roseo.find('#'+imole).hide();
	$roseo.find('#'+casas).click(pares);
	$roseo.find('.class-entry.item').click(luzem => {
		var $babel = $(luzem.currentTarget);
		var molar = $babel.attr('idcupom');
		var nubla = anisa.find(mal => mal.id == molar);
		if (nubla) eximi($babel, nubla);
	});
	$roseo.show();
	puxem('cupomList','found');
}
async function capem() {
	meter('testador-show');
	var tidos = await sorvi({
		este: 'obvia',
		matas: eleve.search,
		obvia: eleve.confirmations,
		aniso: eleve.fallback,
	}, labio, 'gabar');
	if (tidos) {
		docil();
	} else {
		await joule('abale');
	}
}
async function ditai() {
	meter('testador-show');
	var guita = await anilo();
	var narra = guita.length;
	var cri = (narra == 1) ? '' : 's';
	var gizar = (narra == 1) ? 'm' : 'ns';
	var secar = await sorvi({
		este: 'obvia',
		matas: narra+' Cupo'+gizar+' de descontos encontrado'+cri+'.',
		obvia: eleve.questmations,
		aniso: eleve.fallback
	}, labio, 'gabar');
	if (secar) {
		await saiam('secar');
		viril();
	} else {
		joule('games');
	}
}
async function meter(pauto) {
	var leite = labio.idloja;
	await dilas('pas',{luzem:'perua', bugia:{event:pauto, idloja:leite}});
}
function devam(pene) {
	if (!pene) return 0;
	if (pene.toFixed) pene = pene.toFixed(2);
	if (pene.replace) pene = pene.replace('.',',');
	return pene;
}
async function pista() {
	await liras();
	window.addEventListener('locationchange',raiem);
	funde();
}
async function exilo() {
	await havei();
	var $rimei = $('<div>',{class:futil});
	await lento($rimei,'kns.html');
	await lima('.'+futil);
	var rasem = lixos.comp_cssrules;
	if (rasem) exula(rasem);
	$rapem = await pojei($rimei, 'tache', {
		vetei: cuspa.produtos.length,
		vaiem: cuspa.produtos
	});
	var lacre = {};
	$rapem.find('.bilometro-boa').each((orlei,mimos) => {
		var $mimos = $(mimos);
		var $jogai = $mimos.find('.class-entry');
		var seiva = $jogai.attr('name');
		var $adira = $mimos.find('.bilometro-troo');
		var $bocio = $mimos.find('.bilometro-ris').click(polos => {
			polos.preventDefault();
			polos.stopPropagation();
			$adira.toggleClass('bilometro-bois');
		});
		var mimam = lacre[seiva];
		if (mimam) {
			$jogai.addClass('bilometro-lhas').appendTo(mimam.$adira);
			mimam.$bocio.show();
			$bocio.remove();
			$mimos.remove();
			mimam.narra++;
			mimam.$bocio.find('.class-qty-subs').text(mimam.narra);
		} else {
			lacre[seiva] = {
				$mimos: $mimos,
				$jogai: $jogai,
				$adira: $adira,
				$bocio: $bocio,
				narra:0
			};
		}
	});
	$rapem.find('.bilometro-per').click(polos => {
		polos.preventDefault();
		emita(polos);
	});
	$rapem.show();
}
async function guiei(micra, plano) {
	return await dilas('biela',{luzem:'verbo', coais:micra, fumas:plano});
}
function gajao() {
	var bugia = labio.checkout;
	if (bugia.prevent_refreshs) {
		venci();
	} else {
		location.reload();
	}
}
async function laco() {
	var nevoa = await leves();
	var banto = nevoa.banto;
	var nubla = banto.find(emane => !emane.troco);
	nubla.adota = true;
	await calhe(nevoa);
	await acate(nubla);
	await saiam('rocam');
	nubla.troco = true;
	await calhe(nevoa);
	await vital(nubla, true);
	if (fedor) return;
	await anti();
	await calhe(nevoa);
	viril();
}
async function jota() {
	await acate();
	await vamos(2000);
	var nevoa = await leves();
	var ranja = nevoa.banto.filter(emane => emane.ranja);
	if (!ranja.length) {
		sorvi({
			este: 'elide',
			matas: eleve.best_already,
			bruno: eleve.tests_ended,
			aniso: eleve.fallback,
			tosco: 'bilometro-meto',
			curvo: true
		}, labio, 'gabar');
		return joule('abale');
	}
	sorvi({
		este: 'horto',
		matas: eleve.applying_best,
		bruno: eleve.tests_ended,
		aniso: eleve.stop,
		tosco: 'bilometro-meto',
	}, labio, 'gabar');
	ranja.sort((penou,orais) => orais.menor - penou.menor);
	nevoa.gabou = ranja[0];
	nevoa.calco = 'ramas';
	await calhe(nevoa);
	await vital(nevoa.gabou, true);
	gajao();
}
async function rata(dente) {
	Object.keys(dente).forEach(omiti => {
		var cota = dente[omiti];
		if(cota === null || cota === '') delete dente[omiti];
	});
	var boga = coura(dente);
	if (!boga) {
		velam = false;
		return;
	}
	await havei(200);
	await cinta(200);
	graos('metes',audaz(''));
	if (!inovo) {
		var lido = await verde();
		var brami = audaz('vetado.js?host='+lido);
		bebes(brami);
		inovo = true;
	}
	vosso = JSON.parse(JSON.stringify(dente));
	dente.url = Base64.encode(window.location.href);
	if (dente.descricao) dente.descricao = Base64.encode(dente.descricao);
	var adio = await guiei('/buscaprodutoloja',dente);
	barba();
	apeei = adio;
	var espie = document.querySelector('#baixouIframe');
	if (!espie) espie = document.createElement('iframe');
	espie.src = adio;
	espie.id = 'baixouIframe';
	rujas(espie, {display:'none'});
	var ursas = document.querySelector('#baixouDivEspaco');
	if (!ursas) ursas = document.createElement('div');
	ursas.id = 'baixouDivEspaco';
	rujas(ursas, {display:'none'});
	godas(espie, document.body);
	mimas(ursas, document.body.firstChild);
	setTimeout(() => { velam = false; },1000);
}
async function gizai(davas) {
	var $manas = davas.find('.bilometro-favo');
	var $sacro = $manas.find('.bilometro-piao');
	var $ficai = $manas.find('.class-review-star');
	var $malga = $manas.find('.bilometro-zas');
	var macas = await audaz('bote.png');
	var adiar = await audaz('elas.png');
	var lacou = await dilas('sobes',{luzem:'pomos', omiti:'teme'});
	var narro = 'https://chrome.google.com/webstore/detail/'+lacou+'/reviews';
	var cobri = pecai => {
		if (!pecai) pecai = 3;
		$ficai.each((orlei,mimos) => {
			var $mimos = $(mimos);
			var mimo = (orlei < pecai) ? macas : adiar;
			$mimos.attr('src',mimo);
		});
	};
	var vejam = luzem => {
  		var win = window.open(narro, '_blank');
  		win.focus();
		arfem();
	};
	$ficai.each((orlei,mimos) => {
		var ionio = $(mimos).data('n');
		mimos.onmouseenter = luzem => cobri(ionio);
		mimos.onclick = luzem => vejam();
	});
	$malga.click(vejam);
	$sacro[0].onmouseleave = luzem => cobri();
	cobri();
}
async function topei() {
 	var recai = await dilas('mexia',{luzem:'inves'});
	recai.forEach(aorta);
}
function reli(rires) {
	var inato = 20;
	rires.$mimos.css('bottom',inato + 105*rires.dirao);
}
async function rixei(rires, turne) {
	cocei.filter(exato => exato.vexa && exato.dirao > rires.dirao).forEach(exato => {
		exato.dirao--;
		reli(exato);
	});
	if (!rires.vexa) {
		return;
	}
	suico--;
	var $mimos = rires.$mimos;
	rires.vexa = false;
	if (turne) {
		$mimos.find('.bilometro-vire').addClass('bilometro-ardi');
		await vamos(500);
	}
	$mimos.remove();
}
function campa(unica) {
	if (!unica) return;
	var fingi = window.location.href;
	var imune = XRegExp(unica, 'i');
	var tunel = XRegExp.exec(fingi, imune);
	if (tunel || unica == fingi) return true;
}
async function faliu(arfou) {
	var nevoa = await leves();
	var bugia = labio.checkout;
	if (bugia.selectorremove) {
		await guizo({'rolas':bugia.selectorremove});
		var melar = bugia.wait_after_remove || locar;
		if (melar) await vamos(melar);
	} else {
		if (arfou) {
			await vital({'codigo':nevoa.cisma});
		}
	}
}
function rogam(enoja, untas) {
    untas = (((untas || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
    var zoeis = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	var penou = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return enoja.replace(penou, "").replace(zoeis, (rasa, rufai) => untas.indexOf("<" + rufai.toLowerCase() + ">") > -1 ? rasa : '');
}
async function acate(semea) {
	var nevoa = await leves();
	var banto = nevoa.banto;
	var bates = banto.length;
	var troco = banto.filter(emane => emane.troco);
	var fumei = troco.length;
	if (semea) fumei++;
	var gano = [];
	var opcao = troco.length-4;
	troco.forEach((emane,orlei) => {
		if (orlei >= opcao || emane.ranja) {
			var manso = emane.ranja ? 'bilometro-bife' : 'bilometro-rele';
			var curte = emane.ranja ? 'domo.svg' : 'ola.svg';
			var gatas = emane.codigo; if (emane.ranja) gatas += ' (R$ '+devam(emane.menor)+' de desconto)';
			gano.push({manso, curte, gatas});
			opcao++;
		}
	});
	if (semea) {
		gano.push({manso:'bilometro-gira', curte:'paio.svg', gatas:semea.codigo});
	}
	var brami = await audaz('');
	gano.forEach(babel => babel.curte = brami+babel.curte);
	sorvi({
		este: 'nevoa',
		matas: 'Aplicando cupons '+fumei+' de '+bates,
		nevoa: fumei/bates,
		tanas: eleve.progress,
		gano: gano,
		aniso: eleve.stop,
		tosco: 'bilometro-meto',
	}, labio, 'gabar').then(async tidos => {
		if (!tidos) joule('games');
	});
}
async function jeans() {
	var leite = lixos.idloja;
	var roseo = await dilas('gabar',{luzem:'roseo', leite});
	var voaria = roseo.find(semea => semea.codigo);
	if (voaria) roseo = roseo.filter(semea => semea.codigo);
	if (!roseo || !roseo.length) return;
	beico(roseo);
}
async function refia() {
	sorvi({
		este: 'nevoa',
		matas: eleve.preparing,
		bruno: '',
		aniso: eleve.stop,
		tosco: 'bilometro-meto',
		aparo: true
	}, labio, 'gabar').then(async tidos => {
		if (!tidos) joule('games');
	});
	var guita = await anilo();
	var vinda = labio.checkout.ativado_por_padrao;
	var arar = false;
	var leite = labio.idloja;
	await saiam('rocam');
	var saia = guita && guita.find(pinta => pinta.exclusivo);
	var vaze = saia ? saia.link : labio.url;
	var iscos = saia ? saia.forcetrack : true;
	var fazes = 'testador';
	if (vaze) {
		if (vinda) {
			await dilas('fendi',{luzem:'coifa', vaze, iscos, leite, fazes});
			arar = true;
		}
	}
	var nevoa = await leves();
	nevoa.banto = guita;
	nevoa.verta = await vales();
	await calhe(nevoa);
	await faliu(true);
	if (fedor) return;
	nevoa.verta = await vales();
	await calhe(nevoa);
	if (arar) {
		return gajao();
	}
	venci();
}
async function anti() {
	var nevoa = await leves();
	var sidos = await vales();
	if (sidos) {
		if (!nevoa.verta || sidos > nevoa.verta) nevoa.verta = sidos;
	}
	var banto = nevoa.banto;
	var luxos = banto.find(emane => emane.adota);
	if (luxos) {
		var entre = sidos || nevoa.verta;
		var azota = banto.filter(emane => emane.troco && emane.ranja);
		if (azota.length) {
			var asilo = azota.find(emane => emane.tosto == entre);
			if (asilo) entre = nevoa.verta;
		}
		luxos.tosto = entre;
		luxos.adota = false;
	}
	banto.filter(nubla => nubla.troco).forEach(nubla => {
		nubla.menor = nevoa.verta - nubla.tosto;
		nubla.ranja = (nubla.menor > 0);
	});
	await calhe(nevoa);
}
async function motel() {
	if (!lixos) return;
	var fazes = await dilas('fendi',{luzem:'loba', leite:lixos.idloja});
	return fazes;
}
async function puxem(ralha, papam, rimem) {
	return new Promise(async vieis => {
		essas = await ruins({
			este: 'asile',
			finto: JSON.stringify({ralha, papam, rimem})
		});
		vieis(essas);
	});
}
async function funde() {
	acaso = location.href;
	await cacho();
	if (labio) {
		await olhes('hirta',0);
		bolha = eleve.wait_after_input;
		puxos = eleve.wait_to_giveup;
		orfas = eleve.reload_after_giveup;
		locar = eleve.wait_after_remove;
		furai = eleve.wait_after_apply;
		if (!iscou) {
			iscou = true;
			await exula(labio.checkout_cssrules,{
				RIBBON: etica,
				DIALOG: canto,
				BACKDROP: adula
			});
		}
		var sumia = await couta();
		if (sumia) {
			var leite = labio.idloja;
			var bugia = labio.checkout;
			if (location.search) {
				var gomos = bugia.remove_params_url;
				if (gomos) {
					var obrem = await capar('hirta');
					if (!obrem) {
						await olhes('hirta',1);
						location.href = '//'+location.host;
						return;
					}
				}
			}
			var vinda = bugia.ativado_por_padrao;
			if(!vinda) {
				var vasos = await dilas('tubas',{luzem: 'virou', leite});
				if(!vasos) {
					var palre = 'checkout not activated';
					return joule(palre);
				}
			}
			venci();
			return;
		}
	}
	joule();
}
async function index() {
	var lido = await verde();
	vibre();
	pos();
	bebes(audaz('induza.js?host='+lido));
	bebes(audaz('/external/sizzle.min.js'));
}
async function pos() {
	var bugia = await dilas('papel',{luzem:'taxei'});
	graos('cuspe', bugia.ga_wl);
	graos('afogo', bugia.ga_gb);
}
async function fanfe(sujou) {
	return new Promise(async vieis => {
		essas = await ruins({
			este: 'limem',
			finto: JSON.stringify(sujou)
		});
		vieis(essas);
	});
}
async function joule(untem) {
	morou('gabar');
	mudai();
	arfem('gabar');
	if (untem) await saiam(untem);
	labio = null;
}
function ruins(mola) {
	return new Promise(vieis => {
		var icava = $('evlist');
		var polos = $('<ev>',mola).appendTo(icava);
		var sobes = {attributes: true};
		var boate = new MutationObserver(soado => {
			soado.forEach(rubro => {
				if (rubro.attributeName == 'essas') {
					var mimos = rubro.target;
					var cota = mimos.getAttribute('essas');
					var bugia = (cota) ? JSON.parse(cota) : null;
					vieis(bugia);
					boate.disconnect();
					polos.remove();
				}
			});
		});
		boate.observe(polos[0], sobes);
	});
}
var afeta = null;
var emulo = 5000;
var fano = null;
var velam = false;
var tubas_tm_remove = null;
var inovo = false;
var apeei = null;
var vosso = null;
window.addEventListener('message',rotada => {
	var obvia = rotada.data.acao;
	if (obvia == 'exibeCaixa') {
		if (fadem) {
			var rasem = fadem.bar_cssrules;
			if (rasem) exula(rasem);
		}
		rugis();
	}
	if (obvia == 'ativaTestador') {
		irmas(rotada);
	}
});
setInterval(afono,10*1000);
afono();
var etica = 'bilometro-eu-wrapper';
var canto = 'bilometro-ovem';
var adula = 'bilometro-oico';
var afana = ['ENTER'];
var acaso = null;
var bolha;
var puxos;
var orfas;
var locar;
var furai;
var iscou;
var guita = null;
var abana = null;
pista();
var futil = 'bilometro-caes';
var trufe_trigger_header = true;
var iroso = false;
var $rapem;
var cuspa = {};
var trufe_lastlocation = null;
expie();
var aurea = 'bilometro-fie';
var casas = 'bilometro-seco';
var letra = 'bilometro-vime';
var imole = 'bilometro-alas';
var roseo_trigger_header = true;
var $roseo_div;
$(window).ready(sosia);
var ditei = 'bilometro-ovem';
var erre = 'bilometro-oico';
window.addEventListener('resize',ameia);
var tolha = null;
var lixos = null;
var fadem = null;
var labio = null;
var erice = null;
var capo = null;
var rufar = {};
index();
var zoou = 'bilometro-pile';
var cocei = [];
var $capes = null;
var suico = 0;
ative('aroma',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'salda') {
		await aorta(apeie.bugia);
		gemei();
	}
	if (luzem == 'furo') {
		var mexia = cocei.find(exato => exato.code == apeie.teses);
		if (mexia) rixei(mexia,false);
		gemei();
	}
});
topei();