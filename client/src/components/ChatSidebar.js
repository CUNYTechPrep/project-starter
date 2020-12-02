import React from "react"
import { Box, Typography, Tabs, Tab, Grid } from "@material-ui/core"

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
                    {[...Array(10).keys()].map(i => (
                        <div key={i}>{i}</div>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </Grid>
        </Grid>
    )
}

export default ChatSidebar
