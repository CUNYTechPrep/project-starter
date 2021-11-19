import React, { useState, useEffect, createContext } from 'react'

const AuthContext = createContext();
const { Provider } = AuthContext;


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/auth/login')
      .then(response => {
        if(!response.ok) {
          throw new Error('Unauthenticated')
        }

        return response.json();
      })
      .then(body => setUser(body))
      .catch(err => setUser(false))
  }, [])

  const authenticate = (email, password) => {
    return fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error('Login Failed');
        }

        return response.json();
      })
      .then((body) => {
        setUser(body);
        return body;
      });
  }

  const signup = (email, password) => {
    return fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
      if(!response.ok) {
        throw new Error('Signup Failed');
      }
      return response.JSON()
    }).then((user) => {
      setUser(user)
      return user;
    })
  }

  const signout = () => {
    return fetch('http://localhost:5000/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error('Logout Failed');
        }

        return response.json();
      })
      .then((body) => {
        setUser(false)
        return body;
      });
  }

  return (
    <Provider
      value={{
        authenticate,
        signout,
        isAuthenticated: user ? true : false,
        user
      }}
    >
      { children }
    </Provider>
  )
}

export { AuthContext, AuthProvider };