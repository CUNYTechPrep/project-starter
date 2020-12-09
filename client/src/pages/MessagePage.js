import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ChatSidebar from "../components/ChatSidebar"
import ChatBox from "../components/ChatBox"
import { Grid } from "@material-ui/core"
import Loading from "../components/Loading"
import axios from "axios"
import auth from "../services/auth"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        width: "80%",
        marginTop: "30px",
        backgroundColor: "white",
        borderRadius: "5px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "rgba(0.1, 0.1, 0, 0.1)",
        margin: "auto",
    },
}))

export default function MessagePage() {
    const classes = useStyles()
    const [currentChat, setCurrentChat] = useState()
    const [friends, setFriends] = useState()

    const handleCurrentChat = friend => {
        if (currentChat?.id === friend.id) return
        setCurrentChat({
            ...friend,
            messages: auth.chat[friend.id],
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const [friendResponse] = await Promise.all([axios.get("/api/friend")])
            const friends = friendResponse.data
            setFriends(friends)

            if (friends.mutualFriends.length > 0) {
                handleCurrentChat(friends.mutualFriends[0])
            }
        }

        fetchData()
    }, [])

    if (!friends || !currentChat) return <Loading />

    return (
        <div className={classes.root}>
            <Grid container justify="center" className={classes.grid}>
                <ChatSidebar handleCurrentChat={handleCurrentChat} {...friends} />
                <ChatBox currentChat={currentChat} />
            </Grid>
        </div>
    )
}
