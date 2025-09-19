// variable scope = wehre a variable is recognized and accessible (loval vs global)
let x = 5;
func1();
func2();
function func1()
{
    let x = 1;
    console.log(x);
}
function func2()
{
    // let x = 2;
    console.log(x);
}