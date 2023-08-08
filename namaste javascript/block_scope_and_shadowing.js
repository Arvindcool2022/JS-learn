//# BLOCK
// b: undefined; //! second initiazilzed
// c: undefined; //! third initiazilzed
//# Script
// e: undefined; //! fifth initiazilzed
// f: undefined; //! sixth initiazilzed
//# Global
// a: undefined; //! first initiazilzed
// d: undefined; //! fourth initiazilzed

{
  var a = 'block var';
  let b = 'block let';
  const c = 'block const';
}
var d = 'global var'; // when control reaches here b and c are not schown in scope meaning not accesable.
let e = 'global let';
const f = 'global const';
//we can access a from here because it is hoisted in global object but not b and c since they are hoisted in block scope

{
  var d = 'Shadowing var';
  let e = 'Shadowing let';
  const f = 'Shadowing const';
  // console.log(d); //Shadowing var
  // console.log(e); //Shadowing let
  // console.log(f); //Shadowing const
}
// console.log(d); //Shadowing var
// console.log(e); //global let
// console.log(f); //global const
{
  // let d = 10;
  // console.log(d); //10
  // const d = 10;
  // console.log(d); //10
  // var e = 10;//!SyntaxError: Identifier 'e' has already been declared
  // console.log(e);
  // const e = 10;
  // console.log(e);//10
  // var f = 10; //!SyntaxError: Identifier 'e' has already been declared
  // console.log(f);
  // let e = 10;
  // console.log(e); //10
  // trying to shadow let and const in a block with var is illegal shadowing
  //in function it is ok to do that
}
