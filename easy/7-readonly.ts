// mapped types
type Fruit = "apple" | "orange" | "strawberry";
type FruitNumbers = {
  readonly [P in Fruit]: number;
};
const number: FruitNumbers = {
  apple: 3,
  orange: 10,
  strawberry: 5,
};

// dondoko
type MyReadonly = {
  [P in keyof Todo1]: Todo1[P];
};
type Todo1 = {
  title: string;
  description: string;
  completed: boolean;
};

type Dondoko = "title" | "description" | "completed";
type MyDondoko = {
  [P in Dondoko]: number;
};

type Test = {
  title: Todo1["title"];
  description: Todo1["description"];
  completed: Todo1["completed"];
};
