type HelloWorld = string; // expected to be a string
import type { Equal, Expect, NotAny } from "@type-challenges/utils";
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];

// メモ
/**
 * Expect型で、期待する方を明示している
 * NotAny型で、Any型をしないようにしている
 * HelloWorld型は、anyになっていた。
 * casesは型の配列
 * Equalで型比較をおこなっている
 * Equal<比較する型1, 比較する型2>
 * 比較する型1 === 比較する型2
 * よって、type HelloWorld = string 型が適切
 */
