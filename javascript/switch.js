// let num1=70
// let num2=80
// let ops="%"
// let result
// 
// }

// console.log(result)
let num1=document.querySelector("#num1")
let num2=document.querySelector("#num2")
let result
let output=document.querySelector("#output")
let ops=document.querySelector("#operator")
let btn=document.querySelector("#btn")
btn.addEventListener('click',function() {
console.log(`input your value${num1.value}`)
console.log(`input your values${num2.value}`)
switch (ops.value) {
  case "+":
      result = parseInt(num1.value)+parseInt(num2.value)
    break;
  case"-":
      result = num1.value-num2.value
    break
  case"x":
      result = num1.value*num2.value
    break 
  case"%":
      result = num1.value/num2.value  
    break     
  default:
      console.log("error")
}
output.innerHTML = result
})

