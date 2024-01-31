enum Users {
  NormalUser = "normal",
  PayedUser = 7,
  AdminUser = 9,
  MegaUser = 11,
}

const myUser = Users.AdminUser;

if (myUser === Users.AdminUser) {
}

console.log(myUser);
