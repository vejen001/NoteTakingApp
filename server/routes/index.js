var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});
/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});
/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var userName = req.body.username;
  var userEmail = req.body.useremail;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
    "username" : userName,
    "email" : userEmail
  }, function (err, doc) {
    if (err) {
      // If it failed, return error
      res.send("There was a problem adding the information to the database.");
    }
    else {
      // And forward to success page
      res.redirect("userlist");
    }
  });
});



/* GET NotesList. */
router.get('/noteslist', function(req, res) {
  var db = req.db;
  var collection = db.get('mynotescollection');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* GET a note. */
router.get('/getnote/:id*?', function(req, res) {
  var db = req.db;
  var note = {_id: req.params.id};
  var collection = db.get('mynotescollection');
  collection.findOne(note,{},function(e,docs){
    res.json(docs);
  });
});


/* Delete a note. */
router.delete('/deletenote/:id*?', function(req, res) {
  var db = req.db;
  var note = {_id: req.params.id};
  var collection = db.get('mynotescollection');
  collection.remove(note,{},function(e,docs){
    res.json(docs);
  });
});

/* Add a note. */
router.post('/addnote', function(req, res) {
  var db = req.db;
  var data = req.body;
  var collection = db.get('mynotescollection');
  collection.insert(data,{},function(e,docs){
    res.json(docs);
  });
});


/* Edit a note. */
router.put('/editnote', function(req, res) {
  var db = req.db;
  var id = req.body._id;
  var note = req.body;
  if(!req.body) {
    return res.send(400);
  }
  console.log(note);
  var collection = db.get('mynotescollection');
  collection.findById(id, function(e,data){
    if(e) {
      return res.send(500, e);
    } // 1, 2
    if(!data) {
      return res.send(404);
    } // 3
    var update = {
      title : req.body.title,
      text : req.body.text,
      color : req.body.color
    }; // 4

    collection.updateById(id, update, function(err) { // 5
      if(err) {
        return res.send(500, err);
      }

      res.json(data);

    });
  });
});

module.exports = router;
