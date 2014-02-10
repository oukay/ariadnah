var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CourseSchema = new Schema({
	index: {type : Number},
	name: {type : String, default : '', trim : true},
	last: {type : Boolean, false : '', trim : true}
});

CourseSchema.crud = {
	read: function(_index, _callback) {
		this.findOne({index: _index}).exec(_callback);
	}
};

mongoose.model('Course', CourseSchema);
