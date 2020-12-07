import React, { useState, useEffect, useRef, useCallback } from "react"
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
import auth from "../services/auth"
import { v4 as uuid } from "uuid"
import MatchBox from "./MatchBox"
import Loading from "./Loading"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        // backgroundColor: theme.palette.background.paper,
    },
}))

function Chatbox(props) {
    const { currentChat, mutualFriends, tab, currentInfo } = props

    const classes = useStyles()
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    const lastMessage = useRef()

    const sendMessage = () => {
        if (message.trim() !== "") {
            setMessages(messages => [...messages, { key: uuid(), message, isMyMessage: true }])
            auth.socket.emit("send-message", { id: currentChat.id, message })
            setMessage("")
        }
    }

    useEffect(() => {
        if (lastMessage.current) lastMessage.current.scrollIntoView()
    }, [messages])

    useEffect(() => {
        auth.socket.on("receive-message", message => {
            setMessages(messages => [...messages, { key: uuid(), message, isMyMessage: false }])
        })
    }, [])

    // fetch chat history
    // if () return <Loading />

    if (tab === 1) {
        return (
            <Grid container item xs={4} direction="column" justify="flex-end">
                {currentInfo && <MatchBox {...currentInfo} />}
            </Grid>
        )
    }

    if (!currentChat) return <h1>Go make some friends!</h1>

    return (
        <Grid container item xs={4} direction="column" justify="flex-end">
            <Grid item>
                <Box ml={3}>
                    <Typography>{`${currentChat.firstName} ${currentChat.lastName}`}</Typography>
                </Box>
            </Grid>

            <Grid item style={{}}>
                <Box component="ul" style={{ height: "45vh", overflowY: "auto" }}>
                    <List className={classes.root}>
                        {messages.map(msg => (
                            <ListItem
                                key={msg.key}
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
