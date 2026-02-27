DATABASE = (window.DATABASE || []).concat([
    {
        "id": "season-type-1",
        "tags": [
            "season"
        ],
        "methods": {
            "getName": {
                "EN": "spring"
            },
            "getWeather": {
                "EN": {
                    "oneOf": [
                        "mild and sunny",
                        "nice and drizzly",
                        "cool and breezy",
                        "mild and cloudy",
                        "cold and windy",
                        "cold and rainy"
                    ]
                }
            }
        }
    },
    {
        "id": "season-type-2",
        "tags": [
            "season"
        ],
        "methods": {
            "getName": {
                "EN": "summer"
            },
            "getWeather": {
                "EN": {
                    "oneOf": [
                        "hot and sunny",
                        "nice and cloudy",
                        "mild and rainy",
                        "cool and stormy",
                        "hot and humid",
                        "sweltering and humid"
                    ]
                }
            }
        }
    },
    {
        "id": "season-type-3",
        "tags": [
            "season"
        ],
        "methods": {
            "getName": {
                "EN": "fall"
            },
            "getWeather": {
                "EN": {
                    "oneOf": [
                        "nice and breezy",
                        "mild and windy",
                        "cool and foggy",
                        "cold and cloudy",
                        "cool and rainy",
                        "chilly and stormy"
                    ]
                }
            }
        }
    },
    {
        "id": "season-type-4",
        "tags": [
            "season"
        ],
        "methods": {
            "getName": {
                "EN": "winter"
            },
            "getWeather": {
                "EN": {
                    "oneOf": [
                        "mild and clear",
                        "cool and windy",
                        "cold and rainy",
                        "frigid and stormy",
                        "freezing and snowy",
                        "freezing and hailing"
                    ]
                }
            }
        }
    }
]);