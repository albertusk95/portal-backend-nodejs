exports.list = function(req, res){
	req.getConnection(function(err,connection){
       
		connection.query('SELECT * FROM category', function(err,rows) {
			if(err) {
				console.log("Error selecting : %s ", err);
			} else {
				res.render('viewcategory', {page_title: "Sample list view database", data: rows});
			}
		});
       
    });
};

exports.remove = function(req, res) {
	
	var id = req.query.id;
	
	req.getConnection(function(err,connection){
       
		connection.query('DELETE FROM category WHERE id = ?', [id], function(err,rows) {
			if(err) {
				console.log("Error removing : %s ", err);
			} else {
				res.redirect('/');
			}
		});
       
    });
};

exports.edit = function(req, res) {
	
	var id = req.query.id;
	var name = req.query.category;
	
	res.render('viewedit', {page_title: "Edit category", id: id, name: name});
	
};

exports.saveedit = function(req, res) {
	
	var id = req.query.editCategory_id;
	var name = req.query.editCategory_name;
	
	req.getConnection(function(err,connection){
       
		connection.query('UPDATE category SET name = ? WHERE id = ?', [name, id], function(err,rows) {
			if(err) {
				console.log("Error updating: %s ", err);
			} else {
				res.redirect('/');
			}
		});
       
    });
	
};

exports.add = function(req, res) {
	res.render('viewadd', {page_title: "Add category"});
};

exports.saveadd = function(req, res) {
	
	var name = req.query.addCategory_name;
	
	req.getConnection(function(err,connection){
       
		connection.query('INSERT INTO category (name) VALUES (?)', [name], function(err,rows) {
			if(err) {
				console.log("Error inserting: %s ", err);
			} else {
				res.redirect('/');
			}
		});
       
    });
	
};