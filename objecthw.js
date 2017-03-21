
function photo (filePath,location,name){
  this.filePath = filePath;
  this.location= location;
  this.name= name;
}


var newPhoto= new photo("flower.jpeg","flower","rose")
var newPhoto2= new photo ("scottland.jpeg","scottland", "bar")
var newPhoto3= new photo ("portland.jpeg","portland", "coffeeshop" )



photo.prototype.pic= function(){
  return "This photos name is: " + this.name
 

}

newPhoto.pic()