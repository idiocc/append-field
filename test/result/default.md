## basic keys
[
  {
    "key": "name",
    "value": "Bender"
  },
  {
    "key": "hind",
    "value": "Bitable"
  },
  {
    "key": "shiny",
    "value": "Yes"
  }
]

/* expected */
{
  "name": "Bender",
  "hind": "Bitable",
  "shiny": "Yes"
}
/**/

## multiple values
[
  {
    "key": "bottle-on-wall",
    "value": "1"
  },
  {
    "key": "bottle-on-wall",
    "value": "2"
  },
  {
    "key": "bottle-on-wall",
    "value": "3"
  }
]

/* expected */
{
  "bottle-on-wall": [
    "1",
    "2",
    "3"
  ]
}
/**/

## deeper structure
[
  {
    "key": "pet[species]",
    "value": "Dahut"
  },
  {
    "key": "pet[name]",
    "value": "Hypatia"
  },
  {
    "key": "kids[1]",
    "value": "Thelma"
  },
  {
    "key": "kids[0]",
    "value": "Ashley"
  }
]

/* expected */
{
  "pet": {
    "species": "Dahut",
    "name": "Hypatia"
  },
  "kids": [
    "Ashley",
    "Thelma"
  ]
}
/**/

## sparse arrays
[
  {
    "key": "heartbeat[0]",
    "value": "thunk"
  },
  {
    "key": "heartbeat[2]",
    "value": "thunk"
  }
]

/* expected */
{
  "heartbeat": [
    "thunk",
    null,
    "thunk"
  ]
}
/**/

## even deeper
[
  {
    "key": "pet[0][species]",
    "value": "Dahut"
  },
  {
    "key": "pet[0][name]",
    "value": "Hypatia"
  },
  {
    "key": "pet[1][species]",
    "value": "Felis Stultus"
  },
  {
    "key": "pet[1][name]",
    "value": "Billie"
  }
]

/* expected */
{
  "pet": [
    {
      "species": "Dahut",
      "name": "Hypatia"
    },
    {
      "species": "Felis Stultus",
      "name": "Billie"
    }
  ]
}
/**/

## such deep
[
  {
    "key": "wow[such][deep][3][much][power][!]",
    "value": "Amaze"
  }
]

/* expected */
{
  "wow": {
    "such": {
      "deep": [
        null,
        null,
        null,
        {
          "much": {
            "power": {
              "!": "Amaze"
            }
          }
        }
      ]
    }
  }
}
/**/

## merge behaviour
[
  {
    "key": "mix",
    "value": "scalar"
  },
  {
    "key": "mix[0]",
    "value": "array 1"
  },
  {
    "key": "mix[2]",
    "value": "array 2"
  },
  {
    "key": "mix[key]",
    "value": "key key"
  },
  {
    "key": "mix[car]",
    "value": "car key"
  }
]

/* expected */
{
  "mix": {
    "0": "array 1",
    "2": "array 2",
    "": "scalar",
    "key": "key key",
    "car": "car key"
  }
}
/**/

## bad fields
[
  {
    "key": "error[good]",
    "value": "BOOM!"
  },
  {
    "key": "error[bad",
    "value": "BOOM BOOM!"
  }
]

/* expected */
{
  "error": {
    "good": "BOOM!"
  },
  "error[bad": "BOOM BOOM!"
}
/**/