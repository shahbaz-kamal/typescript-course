enum Role {
  Admin,
  Editor = "editor",
  Guest="Guest",
}

let userRole: Role = Role.Editor;

userRole = Role.Guest;
