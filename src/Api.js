import axios from 'axios';

export default class Api {

	constructor(history, store) {

		this.history = history;
		this.store = store;

		this.basePath = `${ process.env.REACT_APP_API_DOMAIN }/api`;

		// Set api key header
		axios.interceptors.request.use(config => {
			const state = this.store.getState();
			if (state.session.user) {
				config.headers.authorization = state.session.user.apiKey;
			}
			return config;
		});

	}

	get(url, params) {
		return new Promise((resolve, reject) => {
			this.send(url, 'GET', null, {params: params})
			.then((res, apiKey) => {
				resolve(res);
			}, (err) => {
				reject(err);
			});
		});
	}

	post(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'POST', data, options)
			.then((res, apiKey) => {
				resolve(res, apiKey);
			}, (err) => {
				reject(err);
			});
		});
	}

	put(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'PUT', data, options)
			.then((res, apiKey) => {
				resolve(res, apiKey);
			}, (err) => {
				reject(err);
			});
		});
	}

	delete(url, data, options) {
		return new Promise((resolve, reject) => {
			this.send(url, 'DELETE', data, options)
			.then((res, apiKey) => {
				resolve(res, apiKey);
			}, (err) => {
				reject(err);
			});
		});
	}

	send(url, method, data, options = {}) {

		return new Promise((resolve, reject) => {

			const ajaxObj = {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				url: this.basePath + url,
				method: method,
				responseType: options.isMultipart ? false : 'application/json',
 				cache: false,
 				processData: false,
				params: options.params,
				data: options.isMultipart ? options.data : data
			};

			axios(ajaxObj)
			.then((res, status, xhr) => resolve(res.data))
			.catch(({ response }) => reject(response.data));

		});

	}

};
