import 'fontsource-roboto';
import { useParams } from 'react-router';
import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Typography, unstable_createMuiStrictModeTheme as createMuiTheme, Container, Box, Grid} from '@material-ui/core';
// Custom Components
import StopCard from '../components/StopCard.js'
import TrainIcon from '../components/TrainIcon.js'

// Material UI CSS
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  }
});

// Material UI Theme
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

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

export default function LinePage() {
  const classes = useStyles()
  const { train } = useParams()
  const curTime = new Date()
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box my={4}>
            <TrainIcon train={train} width={75}/>
          </Box>
          <Grid container align="center">
            {
              Object.keys(testObj).map((key, i) => 
                <Grid key={i} item xs={12} md={4}>
                  <Box mt={3}>
                    <StopCard stopId = {key} stopInfo={testObj[key]} curTime={curTime}/>
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
}
