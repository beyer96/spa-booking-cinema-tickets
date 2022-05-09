const date = new Date(Date.now());
const tomorrow = new Date(date.getFullYear(), date.getMonth(),date.getDate() + 1);

const movies = [
    {
        name: 'COMEDY WITH EDDIE MURPHY',
        description: 'This is short description of film VERY GOOD COMEDY WITH EDDIE MURPHY',
        image: 'https://unsplash.it/310/300',
        dates: [
            [           
                {
                    time: '16:00',
                    seats: [
                        [false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],
                        [false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],
                        [false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],
                        [false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],
                        [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],
                        [false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],
                        [false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],
                        [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '20:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '14:00',
                    seats: [[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]                      
                    ]
                },
                {
                    time: '16:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],
                    ]
                }
            ],
            [
                {
                    time: '18:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '14:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [],
            [],
            []
        ]
    },
    {
        name: 'SCARY HORROR WITH SCARLETT JOHANNSON',
        description: 'This is short description of film SCARY HORROR WITH SCARLETT JOHANNSON',
        image: 'https://unsplash.it/307/302',
        dates: [
            [           
                {
                    time: '10:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '18:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '12:00',
                    seats: [[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]                      
                    ]
                },
                {
                    time: '18:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],
                    ]
                }
            ],
            [           
                {
                    time: '20:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [           
                {
                    time: '14:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '16:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '16:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [],
            [           
                {
                    time: '10:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '16:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
        ]
    },
    {
        name: 'HISTORICAL FILM WITH COLIN FIRTH',
        description: 'This is short description of film HISTORICAL FILM WITH COLIN FIRTH',
        image: 'https://unsplash.it/301/308',
        dates: [
            [           
                {
                    time: '12:00',
                    seats: [[false, true, true, false, true, true, true, true, true, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, true, false, true, true, true, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '14:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '10:00',
                    seats: [[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]                      
                    ]
                },
                {
                    time: '20:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],
                    ]
                }
            ],
            [           
                {
                    time: '10:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '16:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [           
                {
                    time: '12:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '18:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [],
            [
                {
                    time: '10:00',
                    seats: [[false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            []
        ]
    },
    {
        name: 'BRAD PITT IN WW2 MILITARY MOVIE',
        description: 'This is short description of film BRAD PITT IN WW2 MILITARY MOVIE',
        image: 'https://unsplash.it/302/308',
        dates: [
            [],
            [],
            [           
                {
                    time: '12:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '14:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '10:00',
                    seats: [[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]                      
                    ]
                },
                {
                    time: '20:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],
                    ]
                }
            ],
            [           
                {
                    time: '12:00',
                    seats: [[false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '18:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '20:00',
                    seats: [[false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [
                {
                    time: '14:00',
                    seats: [[false, false, true, true, true, false, true, true, true, false, false, true, true, true, true, false, true, true, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ]
        ]
    },
    {
        name: 'ROMANTIC COMEDY WITH JENNIFER ANISTON',
        description: 'This is short description of film ROMANTIC COMEDY WITH JIM CARREY AND JENNIFER ANISTON',
        image: 'https://unsplash.it/302/307',
        dates: [
            [],
            [],
            [],
            [],
            [
                {
                    time: '10:00',
                    seats: [[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],  [false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]                      
                    ]
                },
                {
                    time: '20:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],
                    ]
                } 
            ],
            [           
                {
                    time: '12:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '16:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            [           
                {
                    time: '18:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ]
        ]
    },
    {
        name: 'COMEDY WITH ADAM SANDLER',
        description: 'This is short description of film COMEDY WITH ADAM SANDLER',
        image: 'https://unsplash.it/304/307',
        dates: [
            [],
            [],
            [],
            [],
            [],
            [           
                {
                    time: '14:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '18:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
            ,
            [           
                {
                    time: '12:00',
                    seats: [[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                },
                {
                    time: '20:00',
                    seats: [[false, false, false, false, false, false, true, true, false, false, true, true, true, true, false, false, true, false, true, false],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true],[false, true, true, false, false, false, true, true, true, false, false, true, true, true, false, true, false, true, false, false],[false, true, true, false, false, true, false, true, false, false, false, false, false, false, true, false, false, true, false, false],[false, false, true, true, true, false, true, true, true, false, false, true, true, false, true, false, false, true, true, true]
                    ]
                }
            ],
        ]
    }
]

console.log(movies)

export default movies;