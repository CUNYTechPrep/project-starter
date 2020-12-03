import React from "react"
import { Box, Typography, Tabs, Tab, Grid, Button } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Checkbox from "@material-ui/core/Checkbox"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}))

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div role="tabpanel" hidden={value !== index} {...other}>
            {value === index && (
                <Box p={1} overflow={"auto"} height="50vh">
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

function ChatSidebar() {
    const [value, setValue] = React.useState(0)

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
                        {[0, 1, 2, 3].map(value => {
                            const labelId = `checkbox-list-secondary-label-${value}`
                            return (
                                <ListItem key={value} button>
                                    <ListItemAvatar>
                                        <Avatar alt="H" src={""} />
                                    </ListItemAvatar>
                                    <ListItemText id={labelId} primary={`User ${value + 1}`} />
                                    <ListItemSecondaryAction>
                                        <Button variant="outlined" color="primary" dark>
                                            Chat
                                        </Button>
                                    </ListItemSecondaryAction>
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
