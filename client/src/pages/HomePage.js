import 'fontsource-roboto';
import React from 'react';
import PostsListPage from './PostsListPage';
import PostFormPage from './PostFormPage';
import ShowPostPage from './ShowPostPage';
import AboutUsPage from './AboutUsPage';
import { withStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography, unstable_createMuiStrictModeTheme as createMuiTheme, Button, TextField, Container, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// Custom Components
import ExampleCard from '../components/ExampleCard.js'
import ExampleChips from '../components/ExampleChips.js'
import ExampleProgress from '../components/ExampleProgress.js'
import ExampleBadges from '../components/ExampleBadges.js'
import StopCard from '../components/StopCard.js'

// Material UI CSS
const styles = theme => ({
  root: {
  },
  mt3: {
    marginTop: theme.spacing(3),
  },
  mb3: {
    marginBottom: theme.spacing(3),
  }
});

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

// function Navigation(props) {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
//       <Link className="navbar-brand" to="/">Micro Blog</Link>
//       <ul className="navbar-nav mr-auto">
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/posts/new">
//             Create a Micro Post
//           </NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" exact to="/about-us">
//             About Us
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

const testObj = {
  "A15": {
    "stopName": "125 St",
    "trains": {
      "A": {
        "uptown": "20:46:26",
        "downtown": "20:51:37"
      },
      "C": {
        "uptown": "20:51:07",
        "downtown": "20:51:00"
      },
      "B": {
        "uptown": "20:52:51",
        "downtown": "20:46:41"
      },
      "D": {
        "uptown": "20:44:07",
        "downtown": "20:43:01"
      }
    }
  },
  "A24": {
    "stopName": "59 St-Columbus Circle",
    "trains": {
      "A": {
        "uptown": "20:47:07",
        "downtown": "20:48:31"
      },
      "C": {
        "uptown": "20:47:37",
        "downtown": "20:52:37"
      },
      "B": {
        "uptown": "20:47:37",
        "downtown": "20:43:01"
      },
      "D": {
        "uptown": "20:44:07",
        "downtown": "20:43:01"
      }
    }
  },
  "B12": {
    "stopName": "9 Av",
    "trains": {
      "D": {
        "uptown": "20:48:07",
        "downtown": "20:48:07"
      }
    }
  },
  "B13": {
    "stopName": "Fort Hamilton Pkwy",
    "trains": {
      "D": {
        "uptown": "20:45:37",
        "downtown": "20:50:07"
      }
    }
  },
  "B14": {
    "stopName": "50 St",
    "trains": {
      "D": {
        "uptown": "20:44:07",
        "downtown": "20:51:37"
      }
    }
  },
  "B15": {
    "stopName": "55 St",
    "trains": {
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:43:01"
      }
    }
  },
  "B16": {
    "stopName": "62 St",
    "trains": {
      "D": {
        "uptown": "20:57:02",
        "downtown": "20:43:01"
      }
    }
  },
  "B17": {
    "stopName": "71 St",
    "trains": {
      "D": {
        "uptown": "20:55:02",
        "downtown": "20:45:01"
      }
    }
  },
  "B18": {
    "stopName": "79 St",
    "trains": {
      "D": {
        "uptown": "20:53:32",
        "downtown": "20:47:01"
      }
    }
  },
  "B19": {
    "stopName": "18 Av",
    "trains": {
      "D": {
        "uptown": "20:52:02",
        "downtown": "20:48:31"
      }
    }
  },
  "B20": {
    "stopName": "20 Av",
    "trains": {
      "D": {
        "uptown": "20:50:32",
        "downtown": "20:50:01"
      }
    }
  },
  "B21": {
    "stopName": "Bay Pkwy",
    "trains": {
      "D": {
        "uptown": "20:49:32",
        "downtown": "20:42:56"
      }
    }
  },
  "B22": {
    "stopName": "25 Av",
    "trains": {
      "D": {
        "uptown": "20:48:02",
        "downtown": "20:44:07"
      }
    }
  },
  "B23": {
    "stopName": "Bay 50 St",
    "trains": {
      "D": {
        "uptown": "20:45:32",
        "downtown": "20:48:07"
      }
    }
  },
  "D01": {
    "stopName": "Norwood-205 St",
    "trains": {
      "D": {
        "uptown": "20:52:06",
        "downtown": "20:51:00"
      }
    }
  },
  "D03": {
    "stopName": "Bedford Park Blvd",
    "trains": {
      "D": {
        "uptown": "20:49:36",
        "downtown": "20:43:02"
      }
    }
  },
  "D04": {
    "stopName": "Kingsbridge Rd",
    "trains": {
      "D": {
        "uptown": "20:47:36",
        "downtown": "20:44:07"
      }
    }
  },
  "D05": {
    "stopName": "Fordham Rd",
    "trains": {
      "D": {
        "uptown": "20:46:06",
        "downtown": "20:45:37"
      }
    }
  },
  "D06": {
    "stopName": "182-183 Sts",
    "trains": {
      "D": {
        "uptown": "20:44:36",
        "downtown": "20:47:07"
      }
    }
  },
  "D07": {
    "stopName": "Tremont Av",
    "trains": {
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:43:01"
      }
    }
  },
  "D08": {
    "stopName": "174-175 Sts",
    "trains": {
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:44:07"
      }
    }
  },
  "D09": {
    "stopName": "170 St",
    "trains": {
      "D": {
        "uptown": "20:48:46",
        "downtown": "20:46:37"
      }
    }
  },
  "D10": {
    "stopName": "167 St",
    "trains": {
      "D": {
        "uptown": "20:46:46",
        "downtown": "20:48:37"
      }
    }
  },
  "D11": {
    "stopName": "161 St-Yankee Stadium",
    "trains": {
      "D": {
        "uptown": "20:44:16",
        "downtown": "20:51:07"
      }
    }
  },
  "D12": {
    "stopName": "155 St",
    "trains": {
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:43:01"
      }
    }
  },
  "D13": {
    "stopName": "145 St",
    "trains": {
      "B": {
        "uptown": "20:44:07",
        "downtown": "20:43:01"
      },
      "D": {
        "uptown": "20:47:37",
        "downtown": "20:44:07"
      }
    }
  },
  "D14": {
    "stopName": "7 Av",
    "trains": {
      "E": {
        "uptown": "20:44:07",
        "downtown": "20:44:16"
      },
      "B": {
        "uptown": "20:45:37",
        "downtown": "20:44:07"
      },
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:44:11"
      }
    }
  },
  "D15": {
    "stopName": "47-50 Sts-Rockefeller Ctr",
    "trains": {
      "B": {
        "uptown": "20:44:07",
        "downtown": "20:45:37"
      },
      "D": {
        "uptown": "20:47:42",
        "downtown": "20:45:41"
      },
      "F": {
        "uptown": "20:43:01",
        "downtown": "20:49:07"
      },
      "M": {
        "uptown": "20:46:07",
        "downtown": "20:46:21"
      }
    }
  },
  "D16": {
    "stopName": "42 St-Bryant Pk",
    "trains": {
      "B": {
        "uptown": "20:43:01",
        "downtown": "20:47:07"
      },
      "D": {
        "uptown": "20:46:12",
        "downtown": "20:47:11"
      },
      "F": {
        "uptown": "20:49:51",
        "downtown": "20:43:01"
      },
      "M": {
        "uptown": "20:44:07",
        "downtown": "20:47:51"
      }
    }
  },
  "D17": {
    "stopName": "34 St-Herald Sq",
    "trains": {
      "B": {
        "uptown": "20:52:46",
        "downtown": "20:48:37"
      },
      "D": {
        "uptown": "20:44:42",
        "downtown": "20:43:01"
      },
      "F": {
        "uptown": "20:48:21",
        "downtown": "20:44:07"
      },
      "M": {
        "uptown": "20:43:01",
        "downtown": "20:43:01"
      }
    }
  },
  "D20": {
    "stopName": "W 4 St-Wash Sq",
    "trains": {
      "B": {
        "uptown": "20:49:46",
        "downtown": "20:51:37"
      },
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:42:56"
      },
      "F": {
        "uptown": "20:42:56",
        "downtown": "20:49:37"
      },
      "M": {
        "uptown": "20:44:22",
        "downtown": "20:47:37"
      }
    }
  },
  "D21": {
    "stopName": "Broadway-Lafayette St",
    "trains": {
      "B": {
        "uptown": "20:47:46",
        "downtown": "20:43:01"
      },
      "D": {
        "uptown": "20:55:01",
        "downtown": "20:44:07"
      },
      "F": {
        "uptown": "20:46:01",
        "downtown": "20:52:07"
      },
      "M": {
        "uptown": "20:43:01",
        "downtown": "20:50:07"
      }
    }
  },
  "D22": {
    "stopName": "Grand St",
    "trains": {
      "B": {
        "uptown": "20:45:46",
        "downtown": "20:44:07"
      },
      "D": {
        "uptown": "20:53:01",
        "downtown": "20:46:07"
      }
    }
  },
  "D43": {
    "stopName": "Coney Island-Stillwell Av",
    "trains": {
      "N": {
        "uptown": "20:54:30",
        "downtown": "20:44:07"
      },
      "Q": {
        "uptown": "20:50:30",
        "downtown": "20:44:07"
      },
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:53:37"
      },
      "F": {
        "uptown": "20:43:30",
        "downtown": "20:44:07"
      }
    }
  },
  "R30": {
    "stopName": "DeKalb Av",
    "trains": {
      "N": {
        "uptown": "20:50:13",
        "downtown": null
      },
      "W": {
        "uptown": null,
        "downtown": "21:24:07"
      },
      "Q": {
        "uptown": "20:55:07",
        "downtown": "20:45:31"
      },
      "R": {
        "uptown": "20:43:01",
        "downtown": "20:58:16"
      },
      "B": {
        "uptown": "20:45:11",
        "downtown": "20:42:56"
      },
      "D": {
        "uptown": "20:43:01",
        "downtown": null
      }
    }
  },
  "R31": {
    "stopName": "Atlantic Av-Barclays Ctr",
    "trains": {
      "N": {
        "uptown": "20:44:43",
        "downtown": "20:52:34"
      },
      "W": {
        "uptown": null,
        "downtown": "21:27:37"
      },
      "R": {
        "uptown": "20:48:00",
        "downtown": "20:43:01"
      },
      "D": {
        "uptown": "20:51:07",
        "downtown": "20:47:33"
      }
    }
  },
  "R32": {
    "stopName": "Union St",
    "trains": {
      "N": {
        "uptown": "20:43:01",
        "downtown": null
      },
      "W": {
        "uptown": null,
        "downtown": "21:29:37"
      },
      "R": {
        "uptown": "20:46:00",
        "downtown": "20:44:51"
      },
      "D": {
        "uptown": "20:49:07",
        "downtown": null
      }
    }
  },
  "R33": {
    "stopName": "4 Av-9 St",
    "trains": {
      "N": {
        "uptown": "20:54:33",
        "downtown": null
      },
      "W": {
        "uptown": null,
        "downtown": "21:31:37"
      },
      "R": {
        "uptown": "20:43:30",
        "downtown": "20:42:56"
      },
      "D": {
        "uptown": "20:47:37",
        "downtown": null
      }
    }
  },
  "R34": {
    "stopName": "Prospect Av",
    "trains": {
      "N": {
        "uptown": "20:53:03",
        "downtown": null
      },
      "W": {
        "uptown": null,
        "downtown": "21:33:37"
      },
      "R": {
        "uptown": "20:43:01",
        "downtown": "20:42:56"
      },
      "D": {
        "uptown": "20:45:37",
        "downtown": null
      }
    }
  },
  "R35": {
    "stopName": "25 St",
    "trains": {
      "N": {
        "uptown": "20:51:03",
        "downtown": null
      },
      "W": {
        "uptown": null,
        "downtown": "21:35:07"
      },
      "R": {
        "uptown": "20:59:00",
        "downtown": "20:44:07"
      },
      "D": {
        "uptown": "20:44:07",
        "downtown": null
      }
    }
  },
  "R36": {
    "stopName": "36 St",
    "trains": {
      "N": {
        "uptown": "20:49:03",
        "downtown": "20:58:04"
      },
      "W": {
        "uptown": null,
        "downtown": "21:37:07"
      },
      "R": {
        "uptown": "20:57:00",
        "downtown": "20:46:07"
      },
      "D": {
        "uptown": "20:43:01",
        "downtown": "20:44:07"
      }
    }
  }
}

class App extends React.Component {
  render() {
    // Get MUI CSS
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            {/* Some Examples, find more at https://material-ui.com/components/button/ and https://material-ui.com/api/button/ */}
            <Alert variant="filled" severity="success" onClose={() => { }}>
              Material UI Alert!
          </Alert>
            <Box my={3}>
              <TextField label="Material UI Textfield" variant="filled" size="small" />
              <Button variant="contained" color="primary">
                Material UI Button!
            </Button>
            </Box>
            <ExampleCard />
            <ExampleChips />
            <ExampleProgress />
            <ExampleBadges />
            {
              Object.keys(testObj).map((key, i) => 
                <Box mb={3} >
                  <StopCard stopId = {key} stopInfo={testObj[key]} key={i}/>
                </Box>
              )
            }
          </Container>

          {/* <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={PostsListPage} />
              </Switch>
            </div>
          </div>
        </Router> */}
        </ThemeProvider>
      </div>
    );
  }
}


export default withStyles(styles, { withTheme: true })(App);