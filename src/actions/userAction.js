import axios from 'axios';
import _ from 'lodash'
import querystring from 'query-string';
import { all } from 'bluebird';

export function getMe() {
	return {
		type: 'GET_ME',
		payload: axios.get('/user'),
	}
}

export function setMe(user) {
	return {
		type: 'SET_ME',
		payload: user
	}
}

export function setBalance(balance) {
	return {
		type: 'SET_BALANCE',
		payload: balance
	}
}

export function processWithdraw(data) {
	return ((dispatch) => {
		dispatch({
		    type: 'PROCESS_WITHDRAW_PENDING'
		});
		axios.post('/withdraw',data)
		.then(res => {
			dispatch({
			    type: 'PROCESS_WITHDRAW_FULFILLED',
			    payload:res
			});
		})
		.catch(err => {
			dispatch({
			    type: 'PROCESS_WITHDRAW_REJECTED',
			    payload:err.response
			});
		})
	})
}

export const updateUser = (values) => {
	const userValues = values;

	userValues.first_name = values.first_name;
	userValues.last_name = values.last_name;
	userValues.nationality = values.nationality;
	userValues.phone_number = `${values.phone_country} ${values.phone_number}`;

	if (values.dob) {
		userValues.dob = new Date(values.dob);
	}

	// if (values.gender) {
	// 	if (values.gender === 'man') {
	// 		userValues.gender = false;
	// 	} else {
	// 		userValues.gender = true;
	// 	}
	// }

	userValues.address = `${values.address} ${values.postal_code} ${values.city} ${values.country}`;

	return axios.put('/user', userValues);
};

export const updateDocuments = (values) => {
	const formData = new FormData();

	Object.entries(values).forEach(([key, value]) => {
		formData.append(key, value);
	});
	
	return axios({
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		data: formData,
		url: '/user/verification',
		method: 'POST'
	})
}

export const otpActivate = (values) => axios.post('/user/activateOTP', values);
export const otpRevoke = (values) => axios.post('/user/deactivateOTP', values);
export const resetPassword = (values) => axios.post('/user/change-password', values);
export const otpSetActivated = (active = true) => active ? ({
		type: 'ACTIVATE_OTP',
	}) : ({
		type: 'REVOKE_OTP',
	});

export function userIdentity(data) {
	return ((dispatch) => {
		dispatch({
		    type: 'USER_IDENTITY_PENDING'
		});
		axios.put('/user',data)
		.then(res => {
			dispatch({
			    type: 'USER_IDENTITY_FULFILLED',
			    payload:res
			});
		})
		.catch(err => {
			dispatch({
			    type: 'USER_IDENTITY_REJECTED',
			    payload:err.response
			});
		})
	})
}
export function uploadFile(data) {
	const formData = new FormData();
	Object.keys(data).forEach((key) => {
		console.log(key, data)
		formData.append(key, data[key]);
	});

	return ((dispatch) => {
		dispatch({
		    type: 'UPLOAD_FILE_PENDING'
		});
		axios({
			headers: {'Content-Type': 'multipart/form-data'},
			data: formData,
			url: '/user/verification',
			method: 'POST'
		})
		.then(res => {
			dispatch({
			    type: 'UPLOAD_FILE_FULFILLED',
			    payload: res
			});
		})
		.catch(err => {
			dispatch({
			    type: 'UPLOAD_FILE_REJECTED',
			    payload: err.response
			});
		})
	})
}

export function addTrades(trades) {
	return {
		type: 'ADD_TRADES',
		payload: trades,
	}
};

export function userTrades(limit = 100, page = 1) {
	const query = querystring.stringify({
		symbol: 'btc',
		page,
		limit,
	});

	return ((dispatch) => {
		dispatch({ type: 'USER_TRADES_PENDING' });
		axios.get(`/user/trades?${query}`)
			.then((body) => {
				dispatch({
				    type: 'USER_TRADES_FULFILLED',
				    payload: body.data,
				});
				if (body.data.count > page * limit) {
					dispatch(userTrades(limit, page + 1));
				}
			})
			.catch((err) => {
				dispatch({
				    type: 'USER_TRADES_REJECTED',
				    payload: err.response
				});
			})
	});
	return {
		type: 'USER_TRADES',
		payload: axios.get('/user/trades'),
	}
}
export function userDeposits() {
	return {
		type: 'USER_DEPOSITS',
		payload: axios.get('/user/deposits'),
	}
}
export function userWithdrawals() {
	return {
		type: 'USER_WITHDRAWALS',
		payload: axios.get('/user/withdrawals'),
	}
}

export function otpRequest() {
	return ((dispatch) => {
		dispatch({ type: 'REQUEST_OTP_PENDING' });
		axios.get('/user/requestOTP')
			.then((body) => {
				dispatch({
				    type: 'REQUEST_OTP_FULFILLED',
				    payload: body.data,
				});
			})
			.catch((err) => {
				dispatch({
				    type: 'REQUEST_OTP_REJECTED',
				    payload: err.response.data
				});
			})
	});
}
export function deactivateOTP() {
	return {
		type: 'DEACTIVATE_OTP',
		payload: axios.get('/deactivateOTP'),
	}
}
