import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import PeopleIcon from "@material-ui/icons/People"
import { withRouter } from "react-router-dom"
import auth from "../services/auth"
import logo from "../pages/Images/Logo.png";

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
            <AppBar position="static" style={{ background: "#0c343dff" }}>
                <Toolbar>
                    <img src={logo} style={{width:"6%"}}/>

                    <Typography variant="h6" className={classes.title}>
                    </Typography>

                    {!auth.isAuthenticated ? (
                        <>
                            <Button color="inherit" onClick={() => history.push("/home")}>
                                Home
                            </Button>
                            <Button color="inherit" onClick={() => history.push("/signup")}>
                                Sign Up
                            </Button>
                            <Button color="inherit" onClick={() => history.push("/login")}>
                                Login
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" onClick={() => history.push("/profile")}>
                                Profile
                            </Button>
                            <Button color="inherit" onClick={() => history.push("/match")}>
                                Matches
                            </Button>
                            <Button color="inherit" onClick={() => history.push("/message")}>
                                Messages
                            </Button>
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
