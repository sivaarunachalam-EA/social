/* Javascript program to perform CRUD operations on part_mst
   C - Create 
   R - Read 
   U - Update 
   D - Delete 
**/ 
// Database connection 
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '52.26.36.54',
  user     : 'catalyst',
  password : 'catalyst',
  database : 'catalyst_base',
  multipleStatements: true
});

connection.connect();
// variable declarations

var partmst = {
part_num: 'samsung410091', 
part_desc:'samsung 4100TV' + '91'
};

// Create record in  part_mst 

var query =  connection.query('insert into part_mst set ?',partmst,  function(err, result) {
// Error handling for insert 
if (!err) 
   console.log ('record successfully inserted into part_mst' ) ; 
 else 
    console.error(err) ; 
    return ; 
});

// Read specific part from part_mst 
//eco-catalyst.com/partmst?part_id=

/*  possible hacker issue with multistatement true
    var partid = '105; drop table part_mst' ;
    connection.escape used to avoid any additional operations after selecting data  
*/ 

var partid = '108' ; 

connection.query('select part_id, part_num, part_desc from part_mst where part_id = ' + connection.escape(partid),function(err, result) {
console.log(result) ; 
 if (!err) 
   console.log ('record successfully retrieved from part_mst' ) ; 
 else 
    console.error(err) ; 
 return ; 
})

// Update record in part_mst 

/***

var partnotes = 'ECO' ; 

connection.query('update part_mst set part_notes  = ' + partnotes , function(err, result) {
if (!err) 
   console.log ('record successfully  updated  from part_mst' ) ; 
  else 
    console.error(err) ; 
    return ; 

})

***/


connection.end();

