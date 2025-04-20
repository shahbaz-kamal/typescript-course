let hobbies = ["playing", "reading"];

// let users: (string | number)[];
let users: Array<string | number>;
users = [1, "max"];
users = ["3", "5"];
let possibleUser: [string, number];
possibleUser = ["Tamim", 25];

let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Tamim",
  age: 28,
  hobbies: ["Playing", "Watching"],
  role: {
    description: "hello",
    id: 2,
  },
};

let val: {} = "null";

let data: Record<string, number | string>;
data = {
  entry1: 1,
  entry2: "max",
  
};
