use ariadnah;

db.courses.drop();
for (var i = 0; i < 50; i++) {
	db.courses.insert({
		index: i,
		name: '{Course' + i + '}',
		last: i >= 49
	});
}
