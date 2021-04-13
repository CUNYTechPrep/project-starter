import 'fontsource-roboto';
import { useParams } from 'react-router';
import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography, unstable_createMuiStrictModeTheme as createMuiTheme, Container, Box, Grid, Divider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ReorderIcon from '@material-ui/icons/Reorder';
// Custom Components
import StopCard from '../components/StopCard.js'
import TrainIcon from '../components/TrainIcon.js'

// Material UI CSS
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  divider: {
    marginTop: theme.spacing(4),
  },
}));

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

// const paths = {
//   '1': train1,
//   '2': train2,
//   '3': train3,
//   '4': train4,
//   '5': train5,
//   '5x': train5,
//   '6': train6,
//   '6x': train6x,
//   '7': train7,
//   '7x': train7x,
//   'a': traina,
//   'b': trainb,
//   'c': trainc,
//   'd': traind,
//   'e': traine,
//   'f': trainf,
//   'g': traing,
//   'h': trainh,
//   'j': trainj,
//   'l': trainl,
//   'm': trainm,
//   'n': trainn,
//   'q': trainq,
//   'r': trainr,
//   'si': trainsir,
//   'w': trainw,
//   'z': trainz
// }
// Train Descrpitions
const descriptions = {
  '1': 'Trains operate between 242 St in the Bronx and South Ferry in Manhattan, at all times',
  '2': 'Trains operate between Wakefield-241 St, Bronx, and Flatbush Av-Brooklyn College, Brooklyn, at all times. Trains operate local in Bronx and Brooklyn. Trains operate express in Manhattan except late night when it operates local.',
  '3': 'Trains operate between 148 St, 7 Av, Manhattan, and New Lots Av, Brooklyn, at all times except late nights. During late nights, trains operate only in Manhattan between 148 St, 7 Av and Times Square-42 St.',
  '4': 'Trains operate daily between Woodlawn/Jerome Av, Bronx, and Utica Av/Eastern Pkwy, Brooklyn, running express in Manhattan and Brooklyn. During late night and early morning hours, trains run local in Manhattan and Brooklyn, and extend beyond Utica Av to New Lots/Livonia Avs, Brooklyn.',
  '5': 'Weekdays daytime, most trains operate between either Dyre Av or 238 St-Nereid Av, Bronx, and Flatbush Av-Brooklyn College, Brooklyn.',
  '5x': 'Weekdays daytime, most trains operate between either Dyre Av or 238 St-Nereid Av, Bronx, and Flatbush Av-Brooklyn College, Brooklyn.',
  '6': 'Local trains operate between Pelham Bay Park/Bruckner Expwy, Bronx, and Brooklyn Bridge/City Hall, Manhattan, at all times.',
  '6x': 'Express trains operate between Pelham Bay Park/Bruckner Expwy, Bronx, and Brooklyn Bridge/City Hall, Manhattan, weekday mornings express in the Bronx toward Manhattan. Weekday afternoons and evenings, these trains operate express in the Bronx toward Pelham Bay Park.',
  '7': 'Trains operate between Main St-Flushing, Queens, and 34th-Hudson Yards, Manhattan, at all times. ',
  '7x': 'Trains operate between Main St-Flushing, Queens, and 34th St-Hudson Yards, Manhattan, weekday mornings toward Manhattan. Weekday afternoons and evenings, these trains operate express to Queens.',
  'a': 'Trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times.',
  'b': 'Trains operate, weekdays only, between 145 St, Manhattan, and Brighton Beach, Brooklyn at all times except late nights. The route extends to Bedford Park Blvd, Bronx, during rush hours.',
  'c': 'Trains operate between 168 St, Manhattan, and Euclid Av, Brooklyn, daily from about 6 AM to 11 PM.',
  'd': 'Trains operate, at all times, from 205 Street, Bronx, to Stillwell Avenue, Brooklyn via Central Park West and 6th Avenue in Manhattan, and via the Manhattan Bridge to and from Brooklyn.',
  'e': 'Trains operate between Jamaica Center (Parsons/Archer), Queens, and World Trade Center, Manhattan, at all times. E trains operate express in Queens at all times except late nights when they operate local.',
  'f': 'Trains operate at all times between Jamaica-179 St, Queens, and Stillwell Av, Brooklyn via the 63 St Connector (serving 21 St-Queensbridge, Roosevelt Island, Lexington Av-63 St, and 57 St-6 Av). F trains operate local in Manhattan and express in Queens at all times.',
  'g': 'Trains operate between Court Square, Queens and Church Av, Brooklyn on weekdays, late nights, and weekends.',
  'h': 'Service operates at all times between Broad Channel, and Rockaway Park, Queens.',
  'j': 'Trains operate weekdays between Jamaica Center (Parsons/Archer), Queens, and Broad St, Manhattan at all times.',
  'l': 'Trains operate between 8 Av/14 St, Manhattan, and Rockaway Pkwy/Canarsie, Brooklyn, at all times.',
  'm': 'Trains operate between Middle Village-Metropolitan Avenue, Queens and Myrtle Avenue, Brooklyn at all times. Service is extended weekdays (except late nights) Continental Ave, Queens, All trains provide local service.',
  'n': 'Trains operate from Astoria-Ditmars Boulevard, Queens, to Stillwell Avenue, Brooklyn, at all times.',
  'q': 'Trains operate between 96 St-2 Av, Manhattan, and Stillwell Av, Brooklyn at all times. Trains operate local in Brooklyn at all times. Train operate express in Manhattan at all times, except late nights when trains operate local in Manhattan.',
  'r': 'Trains operate local between Forest Hills-71 Av, Queens, and 95 St/4 Av, Brooklyn, at all times except late nights. During late nights, trains operate only in Brooklyn between 36 St and 95 St/4 Av.',
  'si': 'Service runs 24 hours a day between the St George and Tottenville terminals. At the St George terminal, customers can make connections with Staten Island Ferry service to Manhattan.',
  'w': 'Trains operate from Astoria-Ditmars Boulevard, Queens, to Whitehall St, Manhattan, on weekdays only.',
  'z': 'Trains operate weekday rush hours only. During weekday rush hours, J and Z trains provide skip-stop service.'

}
const testObj = {
  "A15": {
    "stopName": "125 St",
    "trains": {
      "A": {
        "uptown": 1618345729,
        "downtown": 1618345375
      },
      "C": {
        "uptown": 1618345795,
        "downtown": 1618345675
      },
      "B": {
        "uptown": 1618345375,
        "downtown": 1618345525
      },
      "D": {
        "uptown": 1618345375,
        "downtown": 1618345585
      }
    }
  },
  "A24": {
    "stopName": "59 St-Columbus Circle",
    "trains": {
      "A": {
        "uptown": 1618345305,
        "downtown": 1618345375
      },
      "C": {
        "uptown": 1618345985,
        "downtown": 1618345645
      },
      "B": {
        "uptown": 1618345395,
        "downtown": 1618345465
      },
      "D": {
        "uptown": 1618345527,
        "downtown": 1618345305
      }
    }
  },
  "B12": {
    "stopName": "9 Av",
    "trains": {
      "D": {
        "uptown": 1618345525,
        "downtown": 1618345537
      }
    }
  },
  "B13": {
    "stopName": "Fort Hamilton Pkwy",
    "trains": {
      "D": {
        "uptown": 1618345375,
        "downtown": 1618345657
      }
    }
  },
  "B14": {
    "stopName": "50 St",
    "trains": {
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345747
      }
    }
  },
  "B15": {
    "stopName": "55 St",
    "trains": {
      "D": {
        "uptown": 1618345725,
        "downtown": 1618345305
      }
    }
  },
  "B16": {
    "stopName": "62 St",
    "trains": {
      "D": {
        "uptown": 1618345605,
        "downtown": 1618345375
      }
    }
  },
  "B17": {
    "stopName": "71 St",
    "trains": {
      "D": {
        "uptown": 1618345485,
        "downtown": 1618345495
      }
    }
  },
  "B18": {
    "stopName": "79 St",
    "trains": {
      "D": {
        "uptown": 1618345395,
        "downtown": 1618345615
      }
    }
  },
  "B19": {
    "stopName": "18 Av",
    "trains": {
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345705
      }
    }
  },
  "B20": {
    "stopName": "20 Av",
    "trains": {
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345795
      }
    }
  },
  "B21": {
    "stopName": "Bay Pkwy",
    "trains": {
      "D": {
        "uptown": 1618345537,
        "downtown": 1618345855
      }
    }
  },
  "B22": {
    "stopName": "25 Av",
    "trains": {
      "D": {
        "uptown": 1618345447,
        "downtown": 1618345295
      }
    }
  },
  "B23": {
    "stopName": "Bay 50 St",
    "trains": {
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345375
      }
    }
  },
  "D01": {
    "stopName": "Norwood-205 St",
    "trains": {
      "D": {
        "uptown": 1618345830,
        "downtown": 1618345590
      }
    }
  },
  "D03": {
    "stopName": "Bedford Park Blvd",
    "trains": {
      "B": {
        "uptown": 1618345585,
        "downtown": 1618345650
      },
      "D": {
        "uptown": 1618345680,
        "downtown": 1618345305
      }
    }
  },
  "D04": {
    "stopName": "Kingsbridge Rd",
    "trains": {
      "B": {
        "uptown": 1618345465,
        "downtown": 1618345380
      },
      "D": {
        "uptown": 1618345560,
        "downtown": 1618345375
      }
    }
  },
  "D05": {
    "stopName": "Fordham Rd",
    "trains": {
      "B": {
        "uptown": 1618345375,
        "downtown": 1618345500
      },
      "D": {
        "uptown": 1618345470,
        "downtown": 1618345465
      }
    }
  },
  "D06": {
    "stopName": "182-183 Sts",
    "trains": {
      "B": {
        "uptown": 1618345305,
        "downtown": 1618345305
      },
      "D": {
        "uptown": null,
        "downtown": 1618345555
      }
    }
  },
  "D07": {
    "stopName": "Tremont Av",
    "trains": {
      "B": {
        "uptown": 1618345945,
        "downtown": 1618345305
      },
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345645
      }
    }
  },
  "D08": {
    "stopName": "174-175 Sts",
    "trains": {
      "B": {
        "uptown": 1618345855,
        "downtown": 1618345395
      },
      "D": {
        "uptown": null,
        "downtown": 1618345306
      }
    }
  },
  "D09": {
    "stopName": "170 St",
    "trains": {
      "B": {
        "uptown": 1618345735,
        "downtown": 1618345545
      },
      "D": {
        "uptown": null,
        "downtown": 1618345395
      }
    }
  },
  "D10": {
    "stopName": "167 St",
    "trains": {
      "B": {
        "uptown": 1618345615,
        "downtown": 1618345665
      },
      "D": {
        "uptown": null,
        "downtown": 1618345515
      }
    }
  },
  "D11": {
    "stopName": "161 St-Yankee Stadium",
    "trains": {
      "B": {
        "uptown": 1618345465,
        "downtown": 1618345815
      },
      "D": {
        "uptown": null,
        "downtown": 1618345665
      }
    }
  },
  "D12": {
    "stopName": "155 St",
    "trains": {
      "B": {
        "uptown": 1618345375,
        "downtown": 1618345905
      },
      "D": {
        "uptown": null,
        "downtown": 1618345305
      }
    }
  },
  "D13": {
    "stopName": "145 St",
    "trains": {
      "B": {
        "uptown": 1618345305,
        "downtown": 1618345305
      },
      "D": {
        "uptown": 1618345585,
        "downtown": 1618345375
      }
    }
  },
  "D14": {
    "stopName": "7 Av",
    "trains": {
      "E": {
        "uptown": 1618345465,
        "downtown": 1618345615
      },
      "B": {
        "uptown": 1618345305,
        "downtown": 1618345305
      },
      "D": {
        "uptown": 1618345377,
        "downtown": 1618345406
      }
    }
  },
  "D15": {
    "stopName": "47-50 Sts-Rockefeller Ctr",
    "trains": {
      "B": {
        "uptown": 1618345585,
        "downtown": 1618345375
      },
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345526
      },
      "F": {
        "uptown": 1618345495,
        "downtown": 1618345305
      },
      "M": {
        "uptown": 1618345395,
        "downtown": 1618345466
      }
    }
  },
  "D16": {
    "stopName": "42 St-Bryant Pk",
    "trains": {
      "B": {
        "uptown": 1618345495,
        "downtown": 1618345465
      },
      "D": {
        "uptown": 1618345290,
        "downtown": 1618345616
      },
      "F": {
        "uptown": 1618345375,
        "downtown": 1618345378
      },
      "M": {
        "uptown": 1618345305,
        "downtown": 1618345616
      }
    }
  },
  "D17": {
    "stopName": "34 St-Herald Sq",
    "trains": {
      "B": {
        "uptown": 1618345375,
        "downtown": 1618345585
      },
      "D": {
        "uptown": 1618345457,
        "downtown": 1618345736
      },
      "F": {
        "uptown": 1618345305,
        "downtown": 1618345468
      },
      "M": {
        "uptown": 1618346130,
        "downtown": 1618345706
      }
    }
  },
  "D20": {
    "stopName": "W 4 St-Wash Sq",
    "trains": {
      "B": {
        "uptown": 1618345950,
        "downtown": 1618345300
      },
      "D": {
        "uptown": 1618345306,
        "downtown": 1618345916
      },
      "F": {
        "uptown": 1618345555,
        "downtown": 1618345798
      },
      "M": {
        "uptown": 1618345800,
        "downtown": 1618345305
      }
    }
  },
  "D21": {
    "stopName": "Broadway-Lafayette St",
    "trains": {
      "B": {
        "uptown": 1618345830,
        "downtown": 1618345375
      },
      "D": {
        "uptown": 1618346005,
        "downtown": 1618345305
      },
      "F": {
        "uptown": 1618345375,
        "downtown": 1618345375
      },
      "M": {
        "uptown": 1618345620,
        "downtown": 1618345305
      }
    }
  },
  "D22": {
    "stopName": "Grand St",
    "trains": {
      "B": {
        "uptown": 1618345680,
        "downtown": 1618345495
      },
      "D": {
        "uptown": 1618345855,
        "downtown": 1618345375
      }
    }
  },
  "D43": {
    "stopName": "Coney Island-Stillwell Av",
    "trains": {
      "D": {
        "uptown": 1618345590,
        "downtown": 1618345660
      },
      "F": {
        "uptown": 1618345650,
        "downtown": 1618345685
      },
      "N": {
        "uptown": 1618345860,
        "downtown": 1618345615
      },
      "Q": {
        "uptown": 1618345650,
        "downtown": 1618345290
      }
    }
  },
  "R31": {
    "stopName": "Atlantic Av-Barclays Ctr",
    "trains": {
      "D": {
        "uptown": 1618345590,
        "downtown": 1618345555
      },
      "N": {
        "uptown": 1618345375,
        "downtown": 1618345555
      },
      "W": {
        "uptown": 1618347900,
        "downtown": null
      },
      "Q": {
        "uptown": 1618348350,
        "downtown": null
      },
      "R": {
        "uptown": 1618345401,
        "downtown": 1618345803
      }
    }
  },
  "R36": {
    "stopName": "36 St",
    "trains": {
      "D": {
        "uptown": 1618345305,
        "downtown": 1618345307
      },
      "N": {
        "uptown": 1618345755,
        "downtown": 1618345465
      },
      "W": {
        "uptown": 1618347330,
        "downtown": null
      },
      "Q": {
        "uptown": 1618348020,
        "downtown": null
      },
      "R": {
        "uptown": 1618345305,
        "downtown": 1618345305
      }
    }
  }
}

export default function LinePage(props) {
  const classes = useStyles()
  const { train } = useParams()
  const curTime = new Date()
  
  var jsonData = [];
  for(var i in testObj)
    jsonData.push([i, testObj[i]]);
  const [stops, setStops] = React.useState(jsonData);
  const handleReverse = () => {
    setStops(stops.slice().reverse())
  }
  
  if(train in descriptions)
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Box my={4}>
              <TrainIcon train={train} width={75}/>
            </Box>
            <Typography variant="h6" color="textSecondary">
              {descriptions[train.toLowerCase()]}
            </Typography>
            <Divider className={classes.divider} variant="middle"/>
            <Grid container justify="flex-end">
              <Box mr={3}>
                <IconButton aria-label="sort" onClick={handleReverse}>
                  <ReorderIcon fontSize="large"/>
                </IconButton>
              </Box>
            </Grid>
            <Grid container align="center">
              {
                stops.map((val, i) => 
                  <Grid key={i} item xs={12} md={4}>
                    <Box mt={3}>
                      <StopCard stopId = {val[0]} stopInfo={val[1]} curTime={curTime}/>
                    </Box>
                  </Grid>
                )
              }
            </Grid>
            <Box my={4}/>
          </Container>
        </ThemeProvider>
      </div>
    )
  else
    return (
      <div className={classes.root}> Invalid Train </div>
    )
}
