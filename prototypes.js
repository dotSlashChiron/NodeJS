var student = function(){
    this.name = "Jin",
    this.age  = 22,
    this.email = "jin@hotmail.com"
}
student.prototype={
    address: "Japan",
    getName:function(){
        return this.address
    }
}
let jin = new student()
console.log(jin.getName())