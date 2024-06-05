export const channels = [
    {
        name: "general",
        type: "public"
    },
    {
        name: "random",
        type: "public"
    },
    {
        name: "announcements",
        type: "public"
    },
    {
        name: "marketing",
        type: "public"
    },
    {
        name: "design-team",
        type: "private"
    },
    {
        name: "dev-team",
        type: "private"
    },
    {
        name: "sales",
        type: "private"
    },
    {
        name: "support",
        type: "private"
    },
    {
        name: "finance",
        type: "private"
    },
    {
        name: "feedback",
        type: "public",
    },
    {
        name: "bug-reports",
        type: "public"
    },
    {
        name: "partnerships",
        type: "public"
    }
]

export const messages = {
    channel: {
        general: [
            {
                text: "Welcome to the channel",
                author: {
                    id: 1,
                    name: "John"
                },
                time: new Date('2024-06-01T08:00:00')
            },
            {
                text: "Don't forget to join the #announcements channel for updates.",
                author: {
                    id: 2,
                    name: "Alice"
                },
                time: new Date('2024-06-01T08:05:00')
            }
        ],
        random: [
            {
                text: "What's everyone doing this weekend?",
                author: {
                    id: 3,
                    name: "Bob"
                },
                time: new Date('2024-06-01T09:00:00')
            },
            {
                text: "I'm planning to go hiking.",
                author: {
                    id: 4,
                    name: "Eve"
                },
                time: new Date('2024-06-01T09:10:00')
            }
        ],
        announcements: [
            {
                text: "Company-wide meeting at 10 AM tomorrow.",
                author: {
                    id: 2,
                    name: "Alice"
                },
                time: new Date('2024-06-01T10:00:00')
            },
            {
                text: "New policy updates have been posted on the intranet.",
                author: {
                    id: 5,
                    name: "Karen"
                },
                time: new Date('2024-06-01T10:15:00')
            }
        ],
        marketing: [
            {
                text: "We need to finalize the campaign strategy by EOD.",
                author: {
                    id: 8,
                    name: "Chris"
                },
                time: new Date('2024-06-01T11:00:00')
            },
            {
                text: "Here's the draft for the social media posts.",
                author: {
                    id: 9,
                    name: "Nina"
                },
                time: new Date('2024-06-01T11:30:00')
            }
        ],
        "design-team": [
            {
                text: "The new logo design looks great!",
                author: {
                    id: 10,
                    name: "Leo"
                },
                time: new Date('2024-06-01T12:00:00')
            },
            {
                text: "Can we discuss the color palette tomorrow?",
                author: {
                    id: 11,
                    name: "Emma"
                },
                time: new Date('2024-06-01T12:30:00')
            }
        ],
        "dev-team": [
            {
                text: "The code review session is scheduled for 2 PM.",
                author: {
                    id: 12,
                    name: "Ryan"
                },
                time: new Date('2024-06-01T13:00:00')
            },
            {
                text: "I'm facing an issue with the API integration.",
                author: {
                    id: 13,
                    name: "Tina"
                },
                time: new Date('2024-06-01T13:30:00')
            }
        ],
        sales: [
            {
                text: "Great job on closing the deal with XYZ Corp!",
                author: {
                    id: 14,
                    name: "Victor"
                },
                time: new Date('2024-06-01T14:00:00')
            },
            {
                text: "We need to prepare the presentation for next week's client meeting.",
                author: {
                    id: 15,
                    name: "Olivia"
                },
                time: new Date('2024-06-01T14:30:00')
            }
        ],
        support: [
            {
                text: "Has anyone resolved the issue reported by client ABC?",
                author: {
                    id: 18,
                    name: "David"
                },
                time: new Date('2024-06-01T15:00:00')
            },
            {
                text: "Yes, I handled it this morning.",
                author: {
                    id: 19,
                    name: "Sophia"
                },
                time: new Date('2024-06-01T15:30:00')
            }
        ],
        finance: [
            {
                text: "The quarterly budget review meeting is tomorrow.",
                author: {
                    id: 20,
                    name: "Alex"
                },
                time: new Date('2024-06-01T16:00:00')
            },
            {
                text: "Please submit your expense reports by Friday.",
                author: {
                    id: 21,
                    name: "Mia"
                },
                time: new Date('2024-06-01T16:30:00')
            }
        ],
        feedback: [
            {
                text: "Your feedback on the new feature is appreciated.",
                author: {
                    id: 24,
                    name: "Grace"
                },
                time: new Date('2024-06-01T17:00:00')
            },
            {
                text: "I think the new UI is very user-friendly.",
                author: {
                    id: 25,
                    name: "Henry"
                },
                time: new Date('2024-06-01T17:30:00')
            }
        ],
        partnerships: [
            {
                text: "Meeting with potential partners next Tuesday.",
                author: {
                    id: 34,
                    name: "Ethan"
                },
                time: new Date('2024-06-01T18:00:00')
            },
            {
                text: "Discussing joint venture opportunities.",
                author: {
                    id: 35,
                    name: "Chloe"
                },
                time: new Date('2024-06-01T18:30:00')
            }
        ],
        "bug-reports": [
            {
                text: "Found a bug in the login module. The 'Remember Me' feature isn't working.",
                author: {
                    id: 40,
                    name: "Alice"
                },
                time: new Date('2024-06-01T19:00:00')
            },
            {
                text: "The app crashes when trying to upload a profile picture larger than 5MB.",
                author: {
                    id: 41,
                    name: "Bob"
                },
                time: new Date('2024-06-01T19:30:00')
            },
            {
                text: "The search function returns incorrect results when using special characters.",
                author: {
                    id: 42,
                    name: "Charlie"
                },
                time: new Date('2024-06-01T20:00:00')
            },
            {
                text: "The notification badge doesn't update in real-time.",
                author: {
                    id: 43,
                    name: "Dana"
                },
                time: new Date('2024-06-01T20:30:00')
            },
            {
                text: "There is a layout issue on the dashboard when viewed on mobile devices.",
                author: {
                    id: 44,
                    name: "Eve"
                },
                time: new Date('2024-06-01T21:00:00')
            }
        ]
    },
    dms: {
        alice_wonder: [
            {
                text: "Hi Alice, did you get a chance to review the report?",
                author: {
                    id: 3,
                    name: "Bob"
                },
                time: new Date('2024-06-01T09:00:00'),
                formattedDateTime: "6/1/2024 9:00 AM"
            },
            {
                text: "Yes, I'll send you the feedback by noon.",
                author: {
                    id: 4,
                    name: "John Doe"
                },
                time: new Date('2024-06-01T09:15:00'),
                formattedDateTime: "6/1/2024 9:15 AM"
            }
        ],
        bob_builder: [
            {
                text: "Bob, can you help me with the project plan?",
                author: {
                    id: 5,
                    name: "John Doe"
                },
                time: new Date('2024-06-01T10:00:00'),
                formattedDateTime: "6/1/2024 10:00 AM"
            },
            {
                text: "Sure, let's discuss it at 2 PM.",
                author: {
                    id: 3,
                    name: "Bob"
                },
                time: new Date('2024-06-01T10:15:00'),
                formattedDateTime: "6/1/2024 10:15 AM"
            }
        ],
        charlie_chap: [
            {
                text: "Charlie, can you review my code?",
                author: {
                    id: 6,
                    name: "John Doe"
                },
                time: new Date('2024-06-01T11:00:00'),
                formattedDateTime: "6/1/2024 11:00 AM"
            },
            {
                text: "Sure, I'll get to it by this afternoon.",
                author: {
                    id: 7,
                    name: "Charlie"
                },
                time: new Date('2024-06-01T11:30:00'),
                formattedDateTime: "6/1/2024 11:30 AM"
            }
        ],
        dana_scully: [
            {
                text: "Dana, any updates on the investigation?",
                author: {
                    id: 8,
                    name: "John Doe"
                },
                time: new Date('2024-06-01T12:00:00'),
                formattedDateTime: "6/1/2024 12:00 PM"
            },
            {
                text: "Yes, I'll brief you in the meeting at 3 PM.",
                author: {
                    id: 9,
                    name: "Dana"
                },
                time: new Date('2024-06-01T12:30:00'),
                formattedDateTime: "6/1/2024 12:30 PM"
            }
        ],
        eve_apple: [
            {
                text: "Hey Eve, did you see the latest design mockups?",
                author: {
                    id: 10,
                    name: "John Doe"
                },
                time: new Date('2024-06-01T13:00:00'),
                formattedDateTime: "6/1/2024 1:00 PM"
            },
            {
                text: "Yes, they look great! We should discuss them.",
                author: {
                    id: 4,
                    name: "Eve"
                },
                time: new Date('2024-06-01T13:30:00'),
                formattedDateTime: "6/1/2024 1:30 PM"
            }
        ]
    }
};

export const dms = [
    {
        name: "alice_wonder",
        renderName: "Alice"
    },
    {
        name: "bob_builder",
        renderName: "Bob"
    },
    {
        name: "charlie_chap",
        renderName: "Charlie"
    },
    {
        name: "dana_scully",
        renderName: "Dana"
    },
    {
        name: "eve_apple",
        renderName: "Eve"
    }
];