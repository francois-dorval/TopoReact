const request = require('sync-request');


function DownloadData(){

}

DownloadData.get= function(url){
    let res = request('GET', url);
    let data = JSON.parse(res.getBody('utf8'));
    return data;
}


if (module.parent == undefined) {
    let voies = DownloadData.get("http://gsx2json.com/api?id=1jjGhJJwYKgCx2nt7clCZVE3FJPXcaeqfOqmBnObKI1A&sheet=23");
    console.log(voies)
}

module.exports=DownloadData;