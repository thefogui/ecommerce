import axios from 'axios'

import * as actionTypes from './actionTypes'


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSucces = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL
    }
}

const checkAuthTimeout = expirationDate => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationDate * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:800/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            //TODO: remove this
            const token = res.data.key;

            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)

            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)

            dispatch(authSucces(token))

            dispatch(checkAuthTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationDate')

    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authLogout = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post('http://127.0.0.1:800/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
            .then(res => {
                const token = res.data.key;

                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)

                localStorage.setItem('token', token)
                localStorage.setItem('expirationDate', expirationDate)

                dispatch(authSucces(token))

                dispatch(checkAuthTimeout(3600))
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        
        if (token === undefined) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationate'))
        
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSucces(token))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}