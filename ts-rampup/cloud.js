function Cloud(name, launch) {
    this.name = name;
    this.launch = launch;
}

function myOwnFunc() {
    return Cloud;
}

let gcloud = new Cloud('GCloud', 2008);
let aws = new Cloud('AWS', 2006);
let azure = new Cloud('Azure', 2009);

console.log(gcloud.name, gcloud.launch);
console.log(aws.name, aws.launch);
console.log(azure.name, azure.launch);

let test = new (myOwnFunc())('NewCloud', 2016);

console.log(test.name, test.launch);

Cloud.prototype.app_engine = function() {
    console.log('Super cool apps with gcloud, angular and node');
}

gcloud.app_engine();