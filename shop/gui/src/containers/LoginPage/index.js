import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/auth'

let values = {
    username : '',
    password : ''
}

const handleSubmit = (e, props) => {
    e.preventDefault()

    //TODO: validate fields

    props.onAuth(values.username, values.password)

    this.props.history.push('/')
}

const onInputChange = e => {
    values['' + e.target.name +''] = e.target.value
}

const LoginPage = (props) => {
    let errorMessage = null;

    if (props.error) {
        errorMessage = (
            <p className="Error">{ props.error.message }</p>
        )
    }

    return (
        <div>
            { errorMessage }
            {
                !props.loading ?
                    <form onSubmit={ e => handleSubmit(e, props) }>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            onChange={ e => onInputChange(e) }
                            autoComplete="on"
                            required 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            onChange={e => onInputChange(e)}
                            autoComplete="on"
                            required 
                        />
                        <button type='submit'>Login In</button>
                        Or
                        <Link to="/Register">Sign up</Link>
                    </form>
                :
                    <h1>Loading</h1>
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(
            actions.authLogin(username, password)
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);