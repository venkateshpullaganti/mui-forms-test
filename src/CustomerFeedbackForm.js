import MetaForm from '@manojadams/metaforms-mui'
import { ThemeProvider as MuiThemeProvider } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material";

const schema = {
  "fields": [
    {
      "name": "first_name",
      "meta": {
        "displayName": "First name",
        "displayType": "text_field",
        "displayProps": {
          "md": 6,
          "sm": 6,
          "xs": 6
        },
        "validation": {
          "max": 30,
          "required": true
        }
      }
    },
    {
      "name": "last_name",
      "meta": {
        "displayName": "Last name",
        "displayType": "text_field",
        "displayProps": {
          "md": 6,
          "sm": 6,
          "xs": 6
        },
        "validation": {
          "max": 30,
          "required": true
        }
      }
    },
    {
      "name": "provide_address",
      "meta": {
        "displayName": "",
        "displayType": "checkbox",
        "options": [
          {
            "label": "Provide address",
            "value": "true"
          }
        ]
      }
    },
    {
      "name": "header",
      "meta": {
        "displayType": "header",
        "displayName": "Address",
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          }
        }
      }
    },
    {
      "name": "prefill_address",
      "meta": {
        "displayName": "",
        "displayType": "checkbox",
        "options": [
          {
            "label": "Prefill",
            "value": "true"
          }
        ],
        "displayProps": {
          "md": 6
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          }
        }
      }
    },
    {
      "name": "street_address",
      "meta": {
        "displayName": "Street",
        "displayType": "text_field",
        "validation": {
          "max": 30,
          "required": true
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          },
          "prop_update": {
            "ref": "prefill_address",
            "propName": "value",
            "valueMap": {
              "true": "random street",
              "": ""
            }
          }
        }
      }
    },
    {
      "name": "landmark",
      "meta": {
        "displayName": "Landmark",
        "displayType": "text_field",
        "validation": {
          "max": 30,
          "required": true
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          },
          "prop_update": {
            "ref": "prefill_address",
            "propName": "value",
            "valueMap": {
              "true": "random landmark",
              "": ""
            }
          }
        }
      }
    },
    {
      "name": "country",
      "meta": {
        "config": {
          "url": "/api/countries",
          "valueKey": "code",
          "labelKey": "name"
        },
        "displayName": "Country",
        "displayType": "select",
        "displayProps": {
          "md": 6,
          "sm": 6,
          "xs": 6
        },
        "validation": {
          "max": 30,
          "required": true
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          },
          "prop_update": {
            "ref": "prefill_address",
            "propName": "value",
            "valueMap": {
              "true": "EC",
              "": ""
            }
          }
        }
      }
    },
    {
      "name": "state",
      "meta": {
        "displayName": "State",
        "displayType": "text_field",
        "validation": {
          "max": 30,
          "required": true
        },
        "displayProps": {
          "md": 6,
          "sm": 6,
          "xs": 6
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          },
          "prop_update": {
            "ref": "prefill_address",
            "propName": "value",
            "valueMap": {
              "true": "My State",
              "": ""
            }
          }
        }
      }
    },
    {
      "name": "city",
      "meta": {
        "displayName": "City",
        "displayType": "text_field",
        "validation": {
          "max": 30,
          "required": true
        },
        "displayProps": {
          "md": 6,
          "sm": 6,
          "xs": 6
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          },
          "prop_update": {
            "ref": "prefill_address",
            "propName": "value",
            "valueMap": {
              "true": "My City",
              "": ""
            }
          }
        }
      }
    },
    {
      "name": "pincode",
      "meta": {
        "displayName": "Pincode",
        "displayType": "text_field",
        "validation": {
          "max": 30,
          "required": true,
          "pattern": "^[1-9][0-9]{0,5}$",
          "patternDetail": {
            "allowValidOnly": true,
            "errorMsg": "Invalid pincode"
          }
        },
        "displayProps": {
          "md": 6,
          "sm": 6,
          "xs": 6
        },
        "dependencies": {
          "exists": {
            "ref": "provide_address",
            "value": "true"
          },
          "prop_update": {
            "ref": "prefill_address",
            "propName": "value",
            "valueMap": {
              "true": "561011",
              "": ""
            }
          }
        }
      }
    },
    {
      "name": "header2",
      "meta": {
        "displayName": "Your Feedback",
        "displayType": "header"
      }
    },
    {
      "name": "how_did_you_hear",
      "meta": {
        "displayType": "select",
        "displayName": "How did you hear about us?",
        "options": [
          {
            "label": "Newspaper",
            "value": "newspapaer"
          },
          {
            "label": "Social Media",
            "value": "socialmedia"
          },
          {
            "label": "Through online search",
            "value": "onlinesearch"
          },
          {
            "label": "Friend or relative",
            "value": "relative"
          }
        ],
        "displayProps": {
          "md": 6
        }
      }
    },
    {
      "name": "feedback",
      "meta": {
        "displayName": "Feedback about us",
        "displayType": "multitext",
        "validation": {
          "required": true,
          "max": 300
        }
      }
    }
  ]
}


export const Theme = createTheme({
  palette: {
    primary: {
      main: "#6725f4"
    }
  },
  typography: {
    fontFamily: "Maven Pro"
  }
});



export default function () {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
      <MetaForm
        config={{
          variant: "outlined",
          size: "small",
        }}
        schema={schema}
        onSubmit={(data) => {
          console.log(data);
        }}
        onNext={(data) => {
          console.log(data);
        }}
        theme={Theme}
      />
      </MuiThemeProvider>
    </div>
  );
}
