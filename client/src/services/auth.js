// This service object was adapted from here:
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.
import axios from "axios"

const auth = {
    isAuthenticated: false,
    user: "",
    id: null,
    socket: null,
    messageLimit: 50,
    authenticate(email, password) {
        return fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Login Failed")
                }

                return response.json()
            })
            .then(body => {
                this.isAuthenticated = true
                this.user = email
                this.id = body.id
                this.socket = window.io("/", { query: `id=${this.id}` })
                this.chat = {}

                axios.get(`/api/message/${this.messageLimit}`).then(({ data }) => {
                    for (const [friendId, messages] of Object.entries(data)) {
                        this.chat[friendId] = messages
                            .map(({ content, senderId }) => ({
                                message: content,
                                isMyMessage: senderId === this.id,
                            }))
                            .reverse()
                    }

                    this.socket.on("receive-message", data => {
                        const message = { message: data.message, isMyMessage: false }

                        if (this.chat[data.id]) {
                            if (this.chat[data.id].length === this.messageLimit) {
                                this.chat[data.id].shift()
                            }
                            this.chat[data.id].push(message)
                        } else {
                            this.chat[data.id] = [message]
                        }
                    })
                })

                return body
            })
    },
    signout(cb) {
        return fetch("/api/auth/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Logout Failed")
                }

                return response.json()
            })
            .then(body => {
                this.isAuthenticated = false
                this.email = ""
                this.id = null
                if (this.socket) {
                    this.socket.close()
                    this.socket = null
                }
                this.chat = null
                return body
            })
    },
}

export default auth
