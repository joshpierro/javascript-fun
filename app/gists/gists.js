//TODO format date
//Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
//For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
function padNumber(n){
    console.log('0'+ n)
    return '0'+ n;
}

function formatDate(userDate) {
    //YYYYMMDD
    var date = new Date(userDate);

    var month = (date.getMonth()+1).toString();
    month = month.length<2 ? padNumber(month): month;

    var day = (date.getDate()).toString();
    day = day.length<2 ? padNumber(day) : day;

    var year = (date.getFullYear()).toString();

    var d =  year+month+day;
    return d;
}

console.log(formatDate("1/3/2014"));
console.log(formatDate("12/30/2014"));

//TODO  remove property
//Implement the removeProperty function which takes an object and property name, and does the following:
//If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.
function removeProperty(obj, prop) {
    console.log(obj)
    if(obj.hasOwnProperty(prop)){
        delete obj[prop];
        console.log(obj)
        return true;
    }else{
        console.log(obj)
        return false;
    }
}


//recursive movie
const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
/*
function getMovieTitles(substr,pageNumber,titles) {

    if(!pageNumber){
        pageNumber = 1;
        titles = [];
    }

    https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title='+substr + '&page=' + pageNumber, (resp) => {
        let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
});

    // The whole response has been received. Print out the result.
    resp.on('end', () => {

        let page = JSON.parse(data);
    //console.log(page)

    page.data.forEach((movie)=>{
        titles.push(movie.Title);
});

    if(page.total_pages>1){
        let nextPage = parseInt(page.page) +1;

        if(nextPage<=parseInt(page.total_pages)){
            getMovieTitles(substr,nextPage,titles);
        }else{
            titles.sort().forEach((t)=>{
                console.log(t)
        });
        }
    }else{
        titles.sort().forEach((t)=>{
            console.log(t)
    });
    }

    //Create an array of strings named titles to store total elements. For each page of results, store the Title of each movie in the titles array.
    //Sort titles in ascending order and return it as your answer.

});

}).on("error", (err) => {
        console.log("Error: " + err.message);
});

}*/

/*
sql
SELECT NAME, CountOfEmployeesInTheDepartment
FROM
(SELECT DEPARTMENT.ID,DEPARTMENT.NAME,COUNT(EMPLOYEE.ID) CountOfEmployeesInTheDepartment
FROM DEPARTMENT DEPARTMENT
LEFT JOIN EMPLOYEE EMPLOYEE
ON DEPARTMENT.ID = EMPLOYEE.DEPT_ID
GROUP BY DEPARTMENT.ID,DEPARTMENT.NAME) AS foo
ORDER BY foo.CountOfEmployeesInTheDepartment DESC,foo.NAME*/


//hosts
/*
function main() {
    const filename = readLine()
    //  let filename = 'hosts_access_log_09.txt';
    fs = require('fs');
    fs.readFile(filename,function(err,contents){
        if(err){
            console.log(err);
        }else{
            let data =  contents.toString();
            //console.log(data)
            let lines = data.split('\n');
            ///console.log(lines.length)
            let hosts = [];
            //console.log(lines)
            for(var line in lines){
                let name = lines[line].substring(0,lines[line].indexOf(' ')).trim();
                if(name!==''){
                    hosts.push(name)
                }

            }
            //  console.log(hosts)
            let hostMap = {};
            hosts.forEach((host)=>{
                if(!hostMap[host]){
                hostMap[host] = 1
            }else{
                hostMap[host]++;
            }
        });
            // console.log(hostMap)


            fs.writeFile('records_'+ filename,'',(error,content)=>{
                if(error){
                    console.log(error)
                }else{
                    // console.log(content)
                }
            })

            //append file
            for(var key in hostMap){
                //   console.log(hostMap[key])
                fs.appendFile('records_'+ filename, key + ' ' +  hostMap[key] + '\n',(error,content)=>{
                    if(error){
                        console.log(error)
                    }else{
                        // console.log('wrote to file', hostMap[key] )
                    }
                })
            }


        }
    });

}*/
