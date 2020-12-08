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
    const { currentChat, tab, currentInfo } = props

    const classes = useStyles()
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)

    const chatbox = useRef()
    const lastMessage = useRef()

    const sendMessage = () => {
        if (message.trim() !== "") {
            setMessage("")
            setMessages(messages => {
                return [...messages, { message, isMyMessage: true }]
            })
            auth.socket.emit("send-message", { id: currentChat.id, message })
            setTimeout(() => {
                auth.chat[currentChat.id].push({ message, isMyMessage: true })
            }, 66)
        }
    }

    useEffect(() => {
        if (lastMessage.current) {
            if (loading) {
                lastMessage.current.scrollIntoView()
                setTimeout(() => {
                    chatbox.current.style.visibility = "visible"
                }, 0)

                setLoading(false)
            } else {
                lastMessage.current.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [messages])

    useEffect(() => {
        if (currentChat) {
            setMessages(currentChat.messages)
            setLoading(true)
            chatbox.current.style.visibility = "hidden"

            auth.socket.on("current-message", message => {
                setMessages(messages => [...messages, { message, isMyMessage: false }])
            })
        }
    }, [currentChat])

    if (!currentChat || tab === 1) {
        return (
            <Grid container item xs={4} direction="column" justify="flex-end">
                {currentInfo && <MatchBox {...currentInfo} />}
            </Grid>
        )
    }

    return (
        <Grid container item xs={4} direction="column" justify="flex-end">
            <Grid item>
                <Box ml={3}>
                    <Typography>{`${currentChat.firstName} ${currentChat.lastName}`}</Typography>
                </Box>
            </Grid>

            <Grid item>
                <Box
                    component="ul"
                    ref={chatbox}
                    style={{ height: "45vh", overflowY: "auto", visibility: "hidden" }}
                >
                    <List className={classes.root}>
                        {messages?.map((msg, index) => (
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
                        <div ref={lastMessage}></div>
                    </List>
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
