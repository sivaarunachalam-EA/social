var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '52.26.36.54',
  user     : 'catalyst',
  password : 'catalyst',
  database : 'catalyst_base'
});

connection.connect();

var partmst = {
part_id: '103',
part_num: 'ECO iPhone',
part_desc:'iphonedesc' 
};

var query =  connection.query('insert into part_mst set ?’,partmst,  function(err, result) {
  if (!err)
    console.log(‘record inserted into partmst ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();


