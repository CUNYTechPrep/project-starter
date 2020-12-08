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

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
    },
    online: {
        "&::before": {
            content: '""',
            display: "inline-block",
            verticalAlign: "baseline",
            backgroundColor: "#009900",
            width: "0.5rem",
            height: "0.5rem",
            marginRight: "0.2rem",
            borderRadius: "50%",
        },
    },
}))

function Chatbox(props) {
    const { currentChat } = props

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

            auth.socket.on("current-message", ({ id, message }) => {
                if (id == currentChat.id) {
                    setMessages(messages => [...messages, { message, isMyMessage: false }])
                }
            })

            return () => {
                if (auth.socket) auth.socket.off("current-message")
            }
        }
    }, [currentChat])

    // FIXME re-render problem?

    return (
        <Grid container item xs={8} md={9} direction="column" justify="flex-start">
            {currentChat && (
                <>
                    <Grid
                        item
                        style={{ height: "48px", borderBottom: "1px solid rgba(0.1, 0.1, 0, 0.1)" }}
                    >
                        <Box ml={3} mt={2}>
                            <Typography component="span" className={classes.online}>
                                {`${currentChat.firstName} ${currentChat.lastName}`}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box
                            component="ul"
                            ref={chatbox}
                            style={{ height: "65vh", overflowY: "auto", visibility: "hidden" }}
                        >
                            <List className={classes.root}>
                                {messages?.map((msg, index) => (
                                    <ListItem
                                        key={index}
                                        alignItems="flex-start"
                                        style={{
                                            flexDirection: msg.isMyMessage ? "row-reverse" : "row",
                                            transform: `translateX(${
                                                msg.isMyMessage ? "0" : "-2rem"
                                            })`,
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
                                                src={
                                                    msg.isMyMessage
                                                        ? auth.profile.pic
                                                        : currentChat.pic
                                                }
                                            />
                                        </ListItemAvatar>

                                        <ListItemText
                                            style={{
                                                maxWidth: "50%",
                                                marginRight: "10px",
                                                display: "flex",
                                                justifyContent: msg.isMyMessage
                                                    ? "flex-end"
                                                    : "flex-start",
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
                </>
            )}
        </Grid>
    )
}

export default Chatbox
