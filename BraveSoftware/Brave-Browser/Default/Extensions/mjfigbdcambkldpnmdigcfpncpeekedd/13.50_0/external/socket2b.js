class Socket2b {
	constructor(ws) {
		this.cbid = 0;
		this.open = false;

		this.queue = [];

		this.listeners = [];
		this.callbacks = {};
		this.internals = ['open','close','error'];

		this.ws = ws;

		this.internals.forEach(method => {
			this.ws.addEventListener(method, ev => {
				this.trigger(method, ev.data);
				if (method == 'open') this.setOpen();
				if (method == 'close') this.setClosed();
			});
		});

		this.ws.addEventListener('message',ev => {
			const { channel, cbid, data } = this.parseEvent(ev);
			if (channel == 'callback') return this.parseCallback(cbid, data);
			this.trigger(channel, data, cbid);
		});
	}

	setOpen() {
		this.open = true;
	}

	setClosed() {
		this.open = false;
		this.callbacks = [];
		this.listeners = [];
	}

	parseEvent(ev) {
		let feed = {};
		try {
			feed = JSON.parse(ev.data);
		} catch(e) {
			feed = {channel: 'global', data: {event:'message', message:ev.data}};
		}
		return feed;
	}

	parseCallback(cbid, data) {
		const callback = this.callbacks[cbid];
		delete this.callbacks[cbid];
		if (callback) callback(data);
	}

	trigger(channel, data, cbid) {
		this.listeners.forEach(entry => {
			if (entry.channel === channel) {
				entry.callback(data,payback => {
					if (cbid !== undefined) this.emitback(cbid, payback);
				});
			}
		});
		if (channel == 'internal') {
			if (data.event == 'ping') this.emitback(cbid, {status: true});
		}
	}

	emit(channel, data, callback) {
		if (!this.open) return this.queue.push({channel, data, callback});
		this.runQueue();

		const message = {channel, data};
		if (callback) {
			message.cbid = this.cbid++;
			 this.callbacks[message.cbid] = callback;
		}
		this.ws.send(JSON.stringify(message));
	}

	runQueue() {
		const q = this.queue;
		this.queue = [];

		while (q.length) {
			const {channel, data, callback} = q.shift();
			this.emit(channel, data, callback);
		}
	}

	emitback(cbid, data) {
		const message = {channel: 'callback', cbid, data};
		this.ws.send(JSON.stringify(message));
	}

	on(channel, callback) {
		this.listeners.push({channel, callback});
	}

	close() {
		this.ws.close();
	}
}