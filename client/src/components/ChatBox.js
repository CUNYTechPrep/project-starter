import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
    Grid,
    TextField,
    Button,
    Box,
    Typography,
    Avatar,
    ListItemAvatar,
    ListItem,
    List,
    ListItemText,
} from "@material-ui/core"

const id = () => {
    return Math.random().toString(36).substr(2, 9)
}

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        // backgroundColor: theme.palette.background.paper,
    },
}))

function Chatbox() {
    const classes = useStyles()
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([
        {
            isMyMessage: false,
            message: "Hey I'm Sett, nice to meet you!",
        },
    ])

    const lastMessage = useRef()

    const sendMessage = () => {
        if (message.trim() !== "") {
            setMessages([...messages, { message, isMyMessage: true }])
            setMessage("")
        }
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

            <Grid item style={{}}>
                <Box component="ul" style={{ height: "45vh", overflowY: "auto" }}>
                    <List className={classes.root}>
                        {messages.map((msg, index) => (
                            <ListItem
                                key={index}
                                alignItems="flex-start"
                                style={{
                                    flexDirection: msg.isMyMessage ? "row-reverse" : "row",
                                    transform: `translateX(${msg.isMyMessage ? "0" : "-2rem"})`,
                                }}
                            >
                                <ListItemAvatar
                                    style={{
                                        marginLeft: msg.isMyMessage ? "5px" : "0px",
                                        transform: "translateY(-1rem)",
                                    }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://randomuser.me/api/portraits/med/men/3.jpg"
                                    />
                                </ListItemAvatar>

                                <ListItemText
                                    style={{
                                        maxWidth: "50%",
                                        marginRight: "10px",
                                        display: "flex",
                                        justifyContent: msg.isMyMessage ? "flex-end" : "flex-start",
                                    }}
                                    secondary={
                                        <Typography
                                            style={{
                                                overflowWrap: "anywhere",
                                            }}
                                            component="span"
                                            variant="body1"
                                            color="textPrimary"
                                        >
                                            {msg.message}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
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
