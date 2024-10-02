const mongoose = require('mongoose');

//Define the team schemes
const TeamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    //Team name, required feild
    description: { type: String, required: true },
    //Brief description info, required feild
    details: { type: String, required: true },
    //Detailed info, required feild
});

//Export the Team model
module.exports = mongoose.model('Team', TeamSchema);