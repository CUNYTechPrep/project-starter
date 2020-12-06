import React, { useState, useEffect } from "react"
import { Box, Typography, Tabs, Tab, Grid } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import IconButton from "@material-ui/core/IconButton"
import Avatar from "@material-ui/core/Avatar"

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: "100%",
//         maxWidth: 360,
//         backgroundColor: theme.palette.background.paper,
//     },
// }))

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box p={1} overflow={"auto"} height="50vh">
                    <Typography component={"span"}>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function ChatSidebar(props) {
    const { pendingFriends, mutualFriends, setCurrentChat } = props

    const [value, setValue] = useState(0)

    useEffect(() => {}, [])

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container item direction="column" xs={2}>
            <Grid item style={{ width: "inherit" }}>
                <Tabs value={value} onChange={handleChange} indicatorColor="primary">
                    <Tab label="Chats" />
                    <Tab label="Contacts" />
                </Tabs>
            </Grid>

            <Grid item>
                <TabPanel value={value} index={0}>
                    <List dense>
                        {mutualFriends.map((friend, index) => {
                            return (
                                <ListItem key={index} button onClick={() => setCurrentChat(friend)}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="H"
                                            src={`https://randomuser.me/api/portraits/med/men/${index}.jpg`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`${friend.firstName} ${friend.lastName}`}
                                    />
                                    <ListItemSecondaryAction></ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Grid>
        </Grid>
    )
}

export default ChatSidebar
