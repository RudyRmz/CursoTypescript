var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Kevin");
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User("Kevin 2");
console.log(myOtherUser);
/// <reference path="namespaces.ts"/>
var myOtherUserTwo = new DatabaseEntity.User("Rodolfo");
console.log(myOtherUserTwo);
