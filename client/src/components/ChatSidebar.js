import React, { useState } from "react"
import { Box, Typography, Tabs, Tab, Grid, Badge } from "@material-ui/core"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import { Redirect } from "react-router-dom"

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box p={1} overflow={"auto"} height="70vh">
                    <Typography component={"span"}>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function ChatSidebar(props) {
    const { pendingFriends, mutualFriends, handleCurrentChat } = props

    const [value, setValue] = useState(0)
    const [redirect, setRedirect] = useState()

    if (redirect) return <Redirect to={`/profile/${redirect}`} />

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid
            container
            item
            direction="column"
            xs={4}
            md={3}
            style={{ borderRight: "1px solid rgba(0.1, 0.1, 0, 0.1)" }}
        >
            <Grid item style={{ width: "inherit" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                >
                    <Tab style={{ minWidth: "5rem" }} label="Contacts" />
                    <Tab style={{ minWidth: "5rem" }} label="Requests" />
                </Tabs>
            </Grid>

            <Grid item>
                <TabPanel value={value} index={0}>
                    <List dense>
                        {mutualFriends.map((friend, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    button
                                    onClick={() => handleCurrentChat(friend)}
                                >
                                    <ListItemAvatar>
                                        <Avatar alt="H" src={friend.pic} />
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

                {/* -------------------------------------------------------------------------------------------- */}
                <TabPanel value={value} index={1}>
                    <List dense>
                        {pendingFriends.map((friend, index) => {
                            return (
                                <ListItem key={index} button onClick={() => setRedirect(friend.id)}>
                                    <ListItemAvatar>
                                        <Badge color="secondary" variant="dot">
                                            <Avatar alt="H" src={friend.pic} />
                                        </Badge>
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
            </Grid>
        </Grid>
    )
}

export default ChatSidebar
