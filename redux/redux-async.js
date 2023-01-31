const fetch = require('node-fetch')
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

// State
const initialState = {
  loading: false,
  users: [],
  error: ''
}

// Action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

// Async Call (using fetch)
const fetchUsersFetch = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())

    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
       })
      .then(users => {
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

// Async Call (using async/await)
const fetchUsersAsyncAwait = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest())

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/')
      const users = await response.json()
      dispatch(fetchUsersSuccess(users))
    } catch {
      dispatch(fetchUsersFailure(error.message))
    }
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsersAsyncAwait())