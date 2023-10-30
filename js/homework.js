let input = prompt("Son kiriting: "); // "843957398" => "56" => "11" => "2"

let num = 0;
while (input.length > 1) {
  num = 0;

  for (let i = 0; i < input.length; i++) {
    num = num + +input[i];
  }

  input = num + "";
}

console.log(num);
