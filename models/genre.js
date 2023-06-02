const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema  = new Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:100
    }
})


GenreSchema.virtual('url').get(function(){
    return '/genres/' + this._id;
});
module.exports = mongoose.model('Genre', GenreSchema);

