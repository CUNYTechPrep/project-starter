import React, { useState, useEffect, useRef } from "react"
import { Grid, Paper, TextField, Button, Box, Typography } from "@material-ui/core"

const id = () => {
    return Math.random().toString(36).substr(2, 9)
}

function Chatbox() {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const lastMessage = useRef()

    const sendMessage = () => {
        setMessages([...messages, message])
        setMessage("")
    }

    useEffect(() => {
        lastMessage.current.scrollIntoView()
    }, [messages])

    return (
        <Grid container item xs={4} direction="column" justify="flex-end">
            <Grid item>
                <Box ml={3}>
                    <Typography>Sett</Typography>
                </Box>
            </Grid>

            <Grid item>
                <Box component="ul" style={{ height: "45vh", overflowY: "auto" }}>
                    {messages.map(i => (
                        <li key={id()}>{i}</li>
                    ))}
                    <div ref={lastMessage}></div>
                </Box>
            </Grid>

            <Grid container item alignItems="center">
                <Grid item xs={11}>
                    <TextField
                        size="small"
                        fullWidth
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && sendMessage()}
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={1}>
                    <Button onClick={sendMessage}>Send</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Chatbox
