var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
function getData(id) { }
getData("Hola");
var HTTPResponse = /** @class */ (function () {
    function HTTPResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HTTPResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Rudy",
    };
};
var myUser = fetchUser();
var res = new HTTPResponse(myUser, 200, 1);
console.log(res);
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function (item) {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Rudy" },
    { id: 2, name: "Roman" },
    { id: 3, name: "Victoria" },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "Sebastian" });
console.log(userCRUD.printItems());
