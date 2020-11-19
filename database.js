let Database = {
    'cindy': {
        reminders: [],
        friends: ["alex"]
    },
    'alex': {
        reminders: [{
            title: "Social Reminder",
            description: "Test the social reminder function",
            completed: false
        }],
        friends: []
    } 
}

module.exports = Database;