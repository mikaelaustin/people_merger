var fs = require('fs');

//1. read one file -> do this synchronously
//2. read file two -> same way
//we read synchronously because each sync read returns the data from the file; as opposed to an async read
//the async read requires a callback function to do the work on the file, as the handle of the file must be
//handled by the 'readFile' function

//3. once you have both data sets, parse it, JSON.parse, into arrays
//4. sort dat sheit
//5. write to a file

var people1 = fs.readFileSync('./people1.json', 'utf-8', function(err, data){
		if(err){
			throw err;
		}else{
		console.log(data).split("/n").join(" ");
		
		}
	}
)

var people2 = fs.readFileSync('./people2.json', 'utf-8', function(err, data){
		if(err){
			throw err;
		} else{
		console.log(data).split("/n").join(" ");
		
		}
	}
)
// var peep1 = people1.split("/n").join(" ");
// var peep2 = people2.split("/n").join(" ");

var mergePeople = JSON.parse(people1).concat(JSON.parse(people2));
var peopleSort = mergePeople.sort();

fs.writeFile('./peopleComplete.txt', peopleSort, function(err){
	if(err) throw err;
	console.log('written to file')
})


