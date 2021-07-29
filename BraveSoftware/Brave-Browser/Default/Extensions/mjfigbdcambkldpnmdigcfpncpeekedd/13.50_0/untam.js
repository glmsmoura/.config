let puxas = {};
let getter_current_promises = [];
let assa = {};
let mujam = [
	'ardeu',
	'aula'
];
let apelo = null;
let turra = null;
let vazie = null;
let fados = [];
let gozai = null;
let sadio;
let doada = -1;
let miei = '...';
let bateu;
let mexia_callbacks = [];
let bagou = {};
let cagas;
let jogam = ['click', 'close', 'expired', 'muted'];
let gulas = null;
let forra = {};
let corvo = null;
let bailo = 5000;
let logos = {};
function ilhar(fatuo) {
	return new Promise(vieis => {
		$.ajax({url: fatuo, type:"HEAD"}).done((sob, cri, macao) => {
			var reto = Date.parse(macao.getResponseHeader("Last-Modified"));
			vieis(reto);
		}).fail((macao, cri, doso) => {
			vieis(null);
		})
	});
}
async function lota() {
}
async function vendi() {
	fados.sort((penou,orais) => penou.somai < orais.somai ? -1 : +1);
	var trino = fados.filter(raias => raias.panca);
	var gafo = fados.filter(raias => !raias.panca);
	for (var raias of trino) await raias.cetra();
	await amojo(true);
	await ouses();
	await ermos();
	for (var raias of gafo) await raias.cetra();
	await aloje();
	await situa();
	setInterval(polos => ermos(true),afiai);
	setInterval(polos => aloje(true),afiai);
	setInterval(polos => situa(true),afiai);
}
async function foros() {
}
async function nexos() {
	if (!sadio) return;
	arade();
	disco();
	var oicas = esse/3;
	var apupo = esse*Math.random();
	var melar = Math.round(oicas + apupo);
	await vamos(melar);
	sitie();
	fites();
}
async function zes(fios, rafou = null) {
	var sobes = await amojo();
	if (!fios) {
		return sobes;
	}
	if (typeof(sobes[fios]) === 'undefined') {
		return rafou;
	}
	return sobes[fios];
}
async function bebe(adito) {
	for (var mexia of adito) {
		if (!mexia.imagem64) mexia.imagem64 = await amues(mexia.imagem);
	}
	return adito;
}
function arpoa() {
}
async function ouses() {
	var ardeu = capar('ardeu');
	var arcam = await zes('rola');
	var movia = ('000' + arcam).toString().slice(-3);
	if (ardeu) {
		var rapei = ardeu.split('-')[0];
		if (rapei != movia) ardeu = null;
	}
	if (!ardeu) {
		ardeu = (movia + "-" + ledes() + ledes() + "-" + ledes() + "-" + ledes() + "-" + ledes() + "-" + ledes() + ledes() + ledes());
	}
	var laxo = orle().runtime.getManifest();
	olhes('ardeu',ardeu);
	olhes('acima',laxo.version);
}
function pes(fios) {
	var ex = capar(fios);
	if (ex) {
		var dado = ex.dado;
		var sodio = new Date().getTime();
		var menor = sodio - dado;
		if (menor <= ruam) {
			return ex;
		} else {
			fisga(fios,'pes expired');
		}
	}
}
async function tussa() {
	var ler = idoso();
	for (var mexia of ler) {
		if (!mexia.done) {
			await chago({event:'pushExpired', code: mexia.code});
		}
	}
}
function capar(fios, rafou) {
	fios = erres(fios);
	var cota = assa[fios];
	if (cota === undefined) cota = localStorage.getItem(fios);
	if (cota === null || cota === 'undefined' || typeof(cota) == 'undefined') {
		cota = rafou;
		if (rafou !== undefined) olhes(fios, cota);
	}
	return cota;
}
async function ouga() {
}
async function situa(flore) {
	if (!turra || flore) {
		turra = await ampla({
			coais: '/jsoncuponsdesconto',
			erijo: 'get'
		});
	}
	return turra;
}
function forma(traz) {
	return 'urram-'+traz;
}
async function poliu() {
	while (doada < 1) await vamos(100);
	return true;
}
async function ermos(flore) {
	if (!apelo || flore) {
		apelo = await ampla({
			coais: '/basededados',
			erijo: 'get'
		});
	}
	return apelo;
}
function amues(fatuo) {
	return new Promise(resolve => {
		if (bagou[fatuo]) {
			resolve(bagou[fatuo]);
			return;
		}
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			var reader = new FileReader();
			reader.onloadend = function() {
				var base64 = reader.result;
				bagou[fatuo] = base64;
				resolve(base64);
			}
			reader.readAsDataURL(xhr.response);
		};
		xhr.open('GET', fatuo);
		xhr.responseType = 'blob';
		xhr.send();
	});
}
async function ibera(pauto) {
	nexos(pauto);
}
function ursos(areia) {
	var leite = areia.leite;
	var nevoa = puxas[leite];
	if (!nevoa) {
		nevoa = {
			cisma: sarai(10),
			essas: {},
			dado: new Date().getTime()
		}
		puxas[leite] = nevoa;
		olhes('puxas',puxas);
	}
	nevoa.pojam = new Date().getTime() - nevoa.dado;
	if (nevoa.pojam >= pegou) {
		delete puxas[leite];
		olhes('puxas',puxas);
		return ursos(areia);
	}
	return nevoa;
}
async function deter() {
}
async function abre() {
	bateu.servers = [miei];
	var togar = {
		id: capar('ardeu'),
		version: capar('acima'),
		wlabel: await zes('rola')
	};
	var ler = idoso();
	var nasce = ler.map(exato => exato.code);
	var apeie = {
		event: 'register',
		data: togar,
		codes: nasce
	};
	var anuia = await vespa('client',apeie);
	if (anuia.status) {
		if (anuia.data && anuia.data.muted) {
			olhes('fanes',anuia.data.muted);
		} else {
			fisga('fanes');
		}
		if (anuia.codes) {
			var ler = idoso();
            ler.forEach(exato => (exato.done = jogam.indexOf(exato.status) >= 0));
			ler.forEach(exato => {
				exato.rodando = (exato.custom || anuia.codes.indexOf(exato.code) >= 0)
			});
			violo(ler);
		}
		doada = 2;
		await gero();
		await cujo();
	}
}
async function musas() {
	var taxei = await ermos();
	orle().webRequest.onBeforeRequest.addListener(luzem => { return {cancel:true}; },{urls: taxei.blocked}, ["blocking"]);
}
async function gero() {
	if (doada != 1) return;
	var torax = capar('torax',[]);
	olhes('torax',[]);
	for (var pinta of torax) await fanei(pinta.famas, pinta.areia);
}
async function geles(usem) {
	var resta = usem.split(':');
	var narra = parseInt(resta[0]);
	var este = resta[1];
	var macei = new Date();
	var orlar = 1000, coira = 60*orlar, heroi = coira*60, mocos = heroi*24;
	var vario = mocos*7, cozem = mocos*30, bagos = mocos*365;
	var diodo = {'sec':orlar, 'min':coira, 'day':mocos, 'week':vario, 'month':cozem, 'year':bagos};
	var trela = diodo[este]*narra;
	macei.setTime(macei.getTime() + trela);
	var teses = capar('mito');
	var apeie = {event:'pushMuted', code:teses, type:usem, duration:trela};
	olhes('fanes',macei.getTime());
	var anuia = await chago(apeie);
	return anuia;
}
async function remem() {
	fisga('fanes');
	var anuia = await chago({event:'cancelMute'});
	return anuia;
}
function menos(fios, coita) {
	var ex = {
		dado: new Date().getTime(),
		pum: coita
	};
	olhes(fios, ex);
}
async function bibe() {
	puxas = capar('puxas',{});
}
async function rente(coere) {
    coere.key = coere.code+'/'+coere.titulo;
	coere.dtreceived = new Date().getTime();
	olhes('mito',coere.code);
	var veiga = new Date().getTime();
	var podou = capar('fanes');
	if (podou) {
		if (podou == 'forever') {
			return 'muted';
		}
		var dupla = parseInt(podou);
		if (veiga < dupla) {
			return 'muted';
		}
	}
	var ler = idoso();
	var mexia = ler.find(exato => exato.code == coere.code);
	if (mexia) {
		if (!mexia.rodando) {
			return 'alreadydone';
		}
		if (mexia.done) {
			return 'alreadydone';
		}
		return mexia.status;
	}
	if (coere.duration != -1) {
		var aludi = dupla - coere.dtreceived;
        if (aludi > coere.duration) {
            return 'expired';
        }
	}
	mexia = coere;
    mexia.status = 'fila';
    mexia.rodando = true;
	mexia.cruze = true;
	ler.push(mexia);
	violo(ler);
	await bebe([mexia]);
	alcou(null, 'aroma', {luzem:'salda', bugia:mexia});
	return 'sent';
}
async function fites() {
	doada = 0;
	if (!miei) return;
	const minai = new WebSocket(miei);
	sadio = new Socket2b(minai);
	sadio.on('open',arpoa);
	sadio.on('error',sarje);
	sadio.on('close',ibera);
	sadio.on('global',bulei);
	sadio.on('client',porto);
}
function ampla(vedei) {
	var coais = vedei.coais;
	var erijo = vedei.erijo;
	var fumas = vedei.fumas;
	var apeie = vedei.apeie;
	var cloro = vedei.cloro;
	return new Promise(async vieis => {
		var brami = await guiei(coais, fumas);
		var ex = pes(coais);
		if (ex && cloro) {
			var pre = await ilhar(brami);
			if (pre) {
				if (pre > ex.dado) {
					fisga(brami);
					ex = null;
				}
			}
		}
		if (ex && ex.pum) return vieis(ex.pum);
		var anota = JSON.stringify(vedei);
		var limei = getter_current_promises.find(exato => exato.anota == anota);
		if (limei) {
			limei.criou.push(vieis);
			return;
		}
		limei = {anota, criou: [vieis]};
		getter_current_promises.push(limei);
		var boiou = function(param_response) {
			var limei = getter_current_promises.find(exato => exato.anota == anota);
			if (limei) {
				limei.criou.forEach((param_resolve,i) => {
					param_resolve(param_response);
				});
				var dirao = getter_current_promises.indexOf(limei);
				getter_current_promises.splice(dirao, 1);
			}
		};
		var persa = async function(param_response) {
			await vamos(coaxa);
			ampla(vedei).then(boiou);
		}
		if (erijo == 'get') {
			if (brami.indexOf('.zip') >= 0) {
				tremi(brami, coais).then(boiou).catch(persa);
			} else {
				mondo(brami, coais).then(boiou).catch(persa);
			}
		} else {
			$.post(brami,apeie,boiou,'json').fail(persa);
		}
	});
}
function urbes() {
	for (var omiti in localStorage) {
		var caiou = localStorage.getItem(omiti);
		if (caiou === 'undefined') {
			caiou = null;
			localStorage.removeItem(omiti);
		}
		if (caiou) {
			var cota = LZString.decompress(caiou);
			try {
				assa[omiti] = JSON.parse(cota);
			} catch(e) {
				assa[omiti] = cota;
			}
		}
	}
	bobas();
}
function boda(fatuo, sujou) {
	if (!sujou) sujou = {};
	if (fatuo.indexOf('://') < 0) fatuo = 'https://'+fatuo;
	return new Promise(vieis => {
		orle().tabs.create({url: fatuo, ...sujou}, fui => {
			vieis(fui);
		});
	});
}
async function coaja() {
}
async function cago() {
}
async function bulei(porem, dures) {
	if (!dures) dures = () => {};
	if (porem.event == 'attached') {
		doada = 1;
		await gero();
		abre();
		return dures({status: true});
	}
}
async function raca() {
}
function alio() {
	var urdo = Object.keys(assa);
	for (var omiti of urdo) {
		var piles = true;
		var arca = mujam.find(coara => omiti.indexOf(coara) >= 0);
		if (arca) piles = false;
		if (piles) fisga(omiti,'alio');
	}
}
function ledes() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
async function aloje(flore) {
	if (!vazie || flore) {
		var coais = '/jsonlojas';
		vazie = await ampla({
			coais,
			erijo: 'get'
		});
	}
	var arcam =  await zes('rola')*1;
	return vazie.filter(sapo => {
		if (!sapo.labels) return true;
		sapo.labels = sapo.labels.map(rijo => rijo*1);
		var gemeo = (sapo.labels.indexOf(arcam) >= 0);
		return gemeo;
	});
}
async function eira(traz) {
	var pacto = logos[traz];
	if (pacto) {
		var pojam = new Date().getTime() - pacto.dado;
		if (pojam >= ruam) {
			logos[traz] = null;
			pacto = null;
		}
	}
	if (pacto && pacto.fazes) return pacto.fazes;
	return null;
}
async function porto(porem, dures) {
	if (!dures) dures = () => {};
	if (porem.event == 'newpush') {
		var risse = await rente(porem.data);
		return dures({status:risse});
	}
	if (porem.event == 'unmute') {
		fisga('fanes');
		return dures({status:true});
	}
}
function lupus(nadem) {
	return new Promise(async vieis => {
		var fui = await adias(nadem);
		if (fui.status == 'complete') {
			var leiam = await tomos(fui.url);
			if (!leiam) return vieis(fui);
		}
		poras(nadem, 'complete', vieis);
	});
}
async function arade() {
	doada = -1;
	clearTimeout(gulas);
}
async function zurre() {
	var taxei = await ermos();
	bateu = taxei.push;
	cagas = capar('cagas',0)*1;
	sitie();
	fites();
}
function vespa(famas, areia) {
	return new Promise(vieis => {
		sadio.emit(famas,areia,(fado) => {
			vieis(fado);
		});
	});
}
function sitie() {
	miei = bateu.servers.shift();
	bateu.servers.push(miei);
}
function idoso() {
	var recai = capar('aula',[]);
	var boga = safar(recai);
	if (boga) violo(recai);
	return recai;
}
function forjo(nadem) {
	if (!forra[nadem]) forra[nadem] = [];
	return forra[nadem];
}
async function assar(gemea, rugem) {
	var ler = idoso();
	var mexia = ler.find(exato => exato.code == gemea);
	if (mexia)  {
		mexia.done = true;
		mexia.status = rugem;
		violo(ler);
		var apeie = {code: gemea};
		if (rugem == 'click') apeie.event = 'pushClick';
		if (rugem == 'close') apeie.event = 'pushClose';
		chago(apeie);
	}
	alcou(null, 'aroma', {luzem:'furo', teses: gemea});
}
async function fanei(famas, areia) {
	var poisa = famas == 'client' ? 2 : 1;
	if (doada >= poisa) {
		return await vespa(famas, areia);
	} else {
		iodes('torax',{famas,areia});
		return '-added-to-tosend-';
	}
}
async function tomos(fatuo) {
	var taxei = await ermos();
	var novos = taxei.middlepages;
	var todas = novos.find(sede => {
		var imune = XRegExp(sede, 'i');
		var tunel = XRegExp.exec(fatuo, imune);
		if (tunel || sede == fatuo) return true;
	});
	return (todas) ? true : false;
}
function violo(acabo) {
	var recai = JSON.parse(JSON.stringify(acabo || []));
	safar(recai);
    olhes('aula',recai);
	return recai;
}
async function legai() {
}
async function amojo(flore) {
	var sobes = capar('atou.json');
	if (flore) sobes = null;
	if (!sobes) {
		var ano = orle().extension.getURL('atou.json');
		var fitas = await fetch(ano);
		sobes = await fitas.json();
		pobre(sobes);
	}
	return sobes;
}
function auras(gemea) {
	var ler = idoso();
	var mexia = ler.find(exato => exato.code == gemea);
	if (mexia && !mexia.done && !mexia.viewed) {
		var apeie = {event: 'goTab', code: gemea};
		mexia.viewed = true;
		violo(ler);
		chago(apeie);
	}
}
function erres(fios) {
	if (fios && fios.includes('@')) return fios;
	var lacou = orle().runtime.id.substr(0,5);
	return [lacou,fios].join('@');
}
async function ave() {
}
function poras(nadem, rugem, papam) {
	forjo(nadem).push(async fui => {
		if (fui.status == rugem) {
			var leiam = await tomos(fui.url);
			if (leiam) return;
			papam(fui);
		}
	});
}
function adias(nadem) {
	return new Promise(vieis => {
		orle().tabs.get(nadem,vieis);
	});
}
function iodes(fios, pene) {
	var bisou = capar(fios,[]);
	bisou.push(pene);
	olhes(fios, bisou);
}
async function exame() {
}
function pegam(mouro) {
	return mouro.tab && mouro.tab.active;
}
function mondo(fatuo, micra) {
	return new Promise((vieis, ramo) => {
		$.get(fatuo,fitas => {
			menos(micra,fitas);
			vieis(fitas);
		},'json').fail(fitas => {
			ramo(fitas);
		});
	});
}
function olhes(fios, pene) {
	fios = erres(fios);
	assa[fios] = pene;
	var abril = JSON.stringify(pene);
	var caiou = LZString.compress(abril);
	localStorage.setItem(fios, caiou);
}
async function chago(areia) {
	return fanei('client', areia);
}
async function verde(autua = false) {
	var lido = await zes('goto');
	if (autua === true) {
		var amoja = 'https';
		lido = amoja+'://'+lido;
	} else {
		if (autua) lido = autua+lido;
	}
	return lido;
}
async function fixam(rires) {
	var taxei = await ermos();
	const tunas = taxei && taxei.evs || [];
	const polos = rires && rires.event;
	if (tunas.includes(polos)) {
		return await ampla({
			coais: '/registraevento',
			erijo: 'post',
			apeie: rires
		});
	} else {
		return {status: false, error: 'bad_type'};
	}
}
function safar(acabo) {
	var boga = false;
	acabo.forEach(enojantry => {
		if (enojantry.imagem64) {
			delete enojantry.imagem64;
			boga = true;
		}
		if (enojantry.done && enojantry.imagem && enojantry.imagem.indexOf('base64') >= 0) {
			enojantry.imagem = "";
			boga = true;
		}
	});
	return boga;
}
async function banzo() {
}
function fisga(fios, lanho) {
	assa[fios] = null;
	var omiti = erres(fios);
	localStorage.removeItem(fios);
	localStorage.removeItem(omiti);
}
async function penca(fios,pene) {
	var sobes = await zes();
	sobes[fios] = pene;
	pobre(sobes);
}
function nica(traz) {
	puxas[traz] = null;
	delete puxas[traz];
	olhes('puxas',puxas);
}
async function soque(traz, burla) {
	logos[traz] = {
		fazes: burla,
		dado: new Date().getTime()
	};
}
function cujo() {
}
function tremi(fatuo, micra) {
	return new Promise((vieis, ramo) => {
		JSZipUtils.getBinaryContent(fatuo,(prose, bugia) => {
			if (prose) return ramo(prose);
			JSZip.loadAsync(bugia).then(iram => {
				var manja = null;
				for (var orlei in iram.files) manja = iram.files[orlei];
				iram.file(manja.name).async("string").then(bugia => {
					var fitas = JSON.parse(bugia);
					menos(micra,fitas);
					vieis(fitas);
				}).catch(ramo);
			}).catch(ramo);
		});
	});
}
function rolei(fios, forco, legal) {
	var bisou = capar(fios,[]);
	if (bisou.splice) bisou.splice(forco, legal);
	olhes(fios, bisou);
}
async function pejas(fios) {
	while (!capar(fios)) await vamos(500);
}
async function houve(areia) {
	if (!corvo) {
		return;
	}
	var anuia = await alcou(corvo, 'aroma', areia);
}
function disco() {
	try {
		if (sadio) {
			sadio.close();
			sadio = null;
		}
	} catch(e) {
	}
}
async function sarje(pauto) {
	nexos(pauto);
}
async function dizia(traz, flore) {
	var anuia = await situa(flore);
	var recai = anuia.cupons.filter(nubla => !traz || nubla.idloja == traz);
	return recai;
}
function bobas() {
	var colar = orle().runtime.id;
	var vazam = ['ardeu','aula'];
	var urdo = Object.keys(localStorage);
	urdo.forEach(omiti => {
		var resta = omiti.split('@');
		var alvor = resta[0];
		var oxida = resta[1];
		if (alvor == colar) {
			if (vazam.indexOf(oxida) > 0) {
				var cota = JSON.parse(localStorage.getItem(omiti));
				fisga(omiti, 'migrating oldkey');
				olhes(oxida, cota);
			} else {
				fisga(omiti, 'removing oldkey');
			}
		}
	});
}
async function afofa(fatuo, traz, direi, mimem) {
	var fazes = await eira(traz) || direi;
	var brami = await guiei('/tracking', {url:fatuo, zorigem:fazes});
	await ias(brami, false, mimem);
}
function alado(areia, sueva) {
	var nevoa = ursos(areia);
	nevoa[sueva] = areia[sueva];
	return nevoa;
}
async function guiei(micra, plano) {
	var lido = await verde(true);
	if (!plano) plano = {};
	plano.localid = plano.localid || capar('ardeu');
	plano.version = plano.version || capar('acima');
	plano.aff = plano.aff || capar('cedas');
	Object.keys(plano).forEach(omiti => {
		var cota = plano[omiti];
		if (cota === null || cota === 'undefined' || typeof(cota) === 'undefined') delete plano[omiti];
	});
	var fanas = new URLSearchParams(plano).toString();
	if (fanas) fanas = '?'+fanas;
	return lido+micra+fanas;
}
function azule(mouro) {
	return mouro.url && mouro.url.indexOf('chrome-extension://') >= 0;
}
function plica(ejeto, furna, fanfo = false) {
	fados.push({
		cetra: ejeto,
		somai: furna || 999,
		panca: fanfo
	});
	clearTimeout(gozai);
	gozai = setTimeout(vendi, 100);
}
async function adulo() {
}
async function ias(fatuo, pilas, mimem) {
	var fui = await boda(fatuo, { active: pilas, pinned: mimem });
	return new Promise(async vieis => {
		var cofia = lupus(fui.id);
		var lassa = vamos(bailo);
		var tamil = [cofia, lassa];
		if (mimem) {
			await Promise.all(tamil);
		} else {
			await Promise.any(tamil);
		}
		vieis();
		if (mimem) chrome.tabs.remove(fui.id, function() { });
	});
}
function pobre(deves) {
	olhes('atou.json', deves);
}
plica(cago);
ative('tubas',async (luzem, apeie, criender, gemei) => {
	var leite = apeie.leite;
	var gabar_cache_key = 'checkout_activated:'+leite;
	if (luzem == 'trace') {
		var vaze = apeie.vaze;
		var baboneed_tracking = true;
		var roseo = await dizia(leite);
		var rasaclusivo = roseo.find(nubla => nubla.exclusivo);
		if (rasaclusivo) {
			vaze = rasaclusivo.link;
			baboneed_tracking = false;
		}
		await soque(leite, 'ativador');
		if (baboneed_tracking) {
			await afofa(vaze, leite);
		} else {
			await ias(vaze);
		}
		menos(gabar_cache_key, true);
		nica(leite);
		gemei();
	}
	if (luzem == 'virou') {
		var leite = apeie.leite;
		var ex = pes(gabar_cache_key);
		var risse = ex ? ex.pum : null;
		gemei(risse);
	}
});
let digo = 1000*60;
let afiai = digo*60;
let ruam = digo*30;
plica(ouga,99,true);
let pegou = 1000*60*10;
plica(bibe);
ative('gabar',async (luzem, apeie, criender, gemei) => {
	var leite = apeie.leite;
	if (luzem == 'sites') {
		var nevoa = ursos(apeie);
		gemei(nevoa);
	}
	if (luzem == 'capei') {
		var nevoa = puxas[leite] = apeie.nevoa;
		gemei(nevoa);
	}
	if (luzem == 'roseo') {
		var recai = await dizia(leite);
		gemei(recai);
	}
	if (luzem == 'parra') {
		var recai = await dizia(leite, true);
		if (!recai.length) {
			await afofa(apeie.vaze, leite);
		}
		gemei(recai);
	}
});
plica(banzo);
ative('trufe',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'rever') {
		var anuia = await ampla({
			coais: '/informaerro',
			erijo: 'post',
			apeie: apeie.nanem
		});
		gemei(anuia);
	}
});
plica(deter,99,true);
ative('sobes',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'pomos') {
		var cota = await zes(apeie.omiti);
		gemei(cota);
	}
});
let urram = 1000*60*60;
plica(legai);
ative('roseo',async (luzem, apeie, criender, gemei) => {
	var leite = apeie.leite;
	var noivokey = forma(leite);
	if (luzem == 'causa') {
		var cruza = capar(noivokey);
		var ague_now = new Date().getTime();
		if (cruza && cruza < ague_now) {
			fisga(noivokey);
			cruza = null;
		}
		gemei(cruza);
	}
	if (luzem == 'coeis') {
		var cruza = new Date().getTime() + urram;
		olhes(noivokey, cruza);
		gemei(cruza);
	}
	return true;
});
plica(musas);
ative('sobefender',async (luzem, apeie, criender, gemei) => {
});
plica(exame);
ative('pas',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'perua') {
		var anuia = await fixam(apeie.bugia);
		gemei(anuia);
	}
});
let coaxa = 10*60*1000;
plica(lota,99,true);
ative('biela',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'lido') {
		var lido = await verde(apeie.trens);
		gemei(lido);
	}
	if (luzem == 'verbo') {
		var brami = await guiei(apeie.coais, apeie.fumas);
		gemei(brami);
	}
});
plica(adulo);
orle().runtime.onInstalled.addListener(async bisouect => {
 	await pejas('ardeu');
	await pejas('acima');
	var brami_install = await guiei('/plugin-instalado');
	var isInflue = !brami_install || brami_install.indexOf("influesolutions") >= 0;
	if (isInflue) return;
	if (bisouect.reason === 'install') orle().tabs.create({url: brami_install});
	var brami_uninstall = await guiei('/plugin-desinstalado');
    orle().runtime.setUninstallURL(brami_uninstall);
});
plica(urbes,1,true);
ative('noivo',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'pomos') {
		cota = capar(apeie.omiti, apeie.soam);
		gemei(cota);
	}
	if (luzem == 'susto') {
		olhes(apeie.omiti, apeie.cota);
		gemei();
	}
});
ative('papel',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'manda') {
		var recai = await aloje();
		gemei(recai);
	}
	if (luzem == 'roseo') {
		var anuia = await situa();
		gemei(anuia.cupons);
	}
	if (luzem == 'taxei') {
		var bugia = await ermos();
		gemei(bugia);
	}
});
plica(ave);
ative('finto',async (luzem, apeie, criender, gemei) => {
});
let esse = digo*15;
plica(zurre);
ative('mexia',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'inves') {
		var ler = idoso();
		var recai = ler.filter(exato => !exato.done);
		bebe(recai).then(enojav => {
			gemei(recai);
		});
	}
	if (luzem == 'ainda') {
		auras(apeie.teses);
		gemei();
	}
	if (luzem == 'silva') {
		var ler = idoso();
		var mexia = ler.find(exato => exato.code == apeie.teses);
		if (mexia) {
			assar(apeie.teses,'click');
		}
		boda(apeie.brami,{active:true});
		gemei();
	}
	if (luzem == 'reduz') {
		assar(apeie.teses,'close');
		gemei();
	}
	if (luzem == 'sustomuted') {
		var pojam = apeie.pojam;
		if (pojam) {
			var anuia = await geles(pojam);
			gemei(anuia);
		} else {
			var anuia = await remem();
			gemei(anuia);
		}
	}
	if (luzem == 'arrufos') {
		await poliu();
		var podou = capar('fanes');
		gemei(podou);
	}
	return true;
});
plica(raca);
ative('vadie',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'etnia') {
		if (pegam(criender)) corvo = criender;
		gemei();
	}
	if (luzem == 'linda') {
		if (!pegam(criender)) corvo = null;
		gemei();
	}
	if (luzem == 'nisto') {
		if (pegam(criender)) corvo = criender;
		gemei();
	}
	if (luzem == 'pomosfocus') {
		gemei(corvo && corvo.url);
	}
});
orle().tabs.onUpdated.addListener(function(nadem, param_info) {
	var obvias = forjo(nadem);
	if (!obvias.length) return;
	adias(nadem).then(fui => {
		obvias.forEach(obvia => obvia(fui));
	});
});
plica(foros);
ative('fendi',async (luzem, apeie, criender, gemei) => {
	if (luzem == 'coifa') {
		var coifa = apeie.iscos;
		if (coifa) {
			await afofa(apeie.vaze, apeie.leite, apeie.fazes, apeie.dispo);
		} else {
			await ias(apeie.vaze, apeie.teco);
		}
		gemei({status:true});
	}
	if (luzem == 'sustozpar') {
		soque(apeie.leite,apeie.fazes);
		gemei();
	}
	if (luzem == 'loba') {
		var fazes = await eira(apeie.leite);
		gemei(fazes);
	}
});