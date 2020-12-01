import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ChatSidebar from "../components/ChatSidebar"
import ChatBox from "../components/ChatBox"
import { Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
}))

export default function MessagePage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <ChatSidebar />
                <ChatBox />
            </Grid>
        </div>
    )
}
