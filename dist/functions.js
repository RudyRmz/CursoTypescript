var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var response = {
    id: 1,
    name: "Rudy",
    chargue: "Developer",
    number: 7,
};
function show(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log("El nombre mandado es: ", name);
    console.log("Otros datos: ", other);
    return 1;
}
show(response);
