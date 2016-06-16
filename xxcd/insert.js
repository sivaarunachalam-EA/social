var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '52.26.36.54',
  user     : 'catalyst',
  password : 'catalyst',
  database : 'catalyst_base'
});

connection.connect();

var partmst = {
part_num: 'samsung4100',
part_desc:'samsung 4100TV' 
};

var query =  connection.query('insert into part_mst set ?',partmst,  function(err, result) {
if (!err) 
   console.log ('record successfully inserted into part_mst' , result) ; 
 else 
    console.error(err) ; 
    return ; 
});

connection.end();

