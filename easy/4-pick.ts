// TypeScirptのPick<K, V>を自前で実装する
// Pickって何だ？
// https://typescriptbook.jp/reference/type-reuse/utility-types/pick
// 第一引数の型からPickupする感じ

// 変更箇所
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

/** ------------------------------------- */
// keyofについて学ぶ
// https://typescriptbook.jp/reference/type-reuse/keyof-type-operator

type Person = {
  name: string;
};
type PersonKey = keyof Person;
const main = (name: PersonKey) => {
  console.log(name);
};
// main("こんにちは"); //error
main("name");
// nameという文字列しか受け付けなくなる

type Book = {
  title: string;
  price: number;
  rating: number;
};
type BookKey = keyof Book;
// 上は次と同じ意味になる
type SameBookKey = "title" | "price" | "rating";

/** ------------------------------------- */
// extends について学ぶ
// https://typescriptbook.jp/reference/generics/type-parameter-constraint#%E5%9E%8B%E5%BC%95%E6%95%B0%E3%81%AB%E5%88%B6%E7%B4%84%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B
// notionにまとめました。 https://www.notion.so/TypeScript-3d6eeadd73c143dba4525757fb03aebf
interface Test {
  title: string;
  description: string;
  completed: boolean;
}
type MyTest<T, K extends keyof T> = {};
type Pick = MyTest<Test, "title">; // Testという型には、titleが含まれているのでOK
// type Pick1 = MyPick<Test, "name">  // Testという型には、nameが含まれてないのでエラーになる

/** ------------------------------------- */
// inについて学ぶ
type PersonTest = {
  name: string;
  old: number;
};
const person: PersonTest = {
  name: "yamada",
  old: 22,
};

// Personというオブジェクトには name は含まれますか？
console.log("name" in person); // true
console.log("xxx" in person); // false

/** ------------------------------------- */
// [Key in K]: T[Key]; について理解する

type Ponpoko = "title" | "description" | "completed";
type Dondoko = {
  [Ponpoko in "title"]: Todo[Ponpoko];
};

// mapped typesについて理解する
type Fruit = "apple" | "orange" | "strawberry";
type FruitNumbers = {
  [P in Fruit]: number;
};
const number: FruitNumbers = {
  apple: 3,
  orange: 10,
  strawberry: 5,
};

type MyPickTest<K extends Fruit> = {
  [Key in K]: string;
};
type Bonboko = MyPickTest<"apple">;
