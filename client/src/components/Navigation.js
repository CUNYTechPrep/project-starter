import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import PeopleIcon from "@material-ui/icons/People"
import { withRouter } from "react-router-dom"
import auth from "../services/auth"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Navigation = withRouter(({ history }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <PeopleIcon />
                    <Typography variant="h6" className={classes.title}>
                        PeerFinder
                    </Typography>

                    {!auth.isAuthenticated ? (
                        <>
                            <Button color="inherit" onClick={() => history.push("/home")} >Home</Button>
                            <Button color="inherit" onClick={() => history.push("/about-us")}>About</Button>
                            <Button color="inherit" onClick={() => history.push("/signup")}>Sign Up</Button>
                            <Button color="inherit" onClick={() => history.push("/login")}>
                                Login
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit">Profile</Button>
                            <Button color="inherit">Matches</Button>
                            <Button color="inherit">Messages</Button>
                            <Button color="inherit">Settings</Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    auth.signout().then(() => history.push("/"))
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    )
})

export { Navigation }
