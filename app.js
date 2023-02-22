const password = document.querySelector("#password");
const length_el = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#number");
const symbol = document.querySelector("#symbol");

const generate = document.querySelector("#generate");
const copy = document.querySelector("#copy");
const GeneratePassword = () =>{
    let pass = " ";
    let len = length_el.value;
    let chars = " ";

    chars += uppercase.checked ? uppercase_chars: ""; 
    chars += lowercase.checked ? lowercase_chars: ""; 
    chars += numbers.checked ? numbers_chars: ""; 
    chars += symbol.checked ? symbol_chars: ""; 

    for(let i = 0; i<= len; i++){
        let rand = Math.floor(Math.random() * chars.length);
        pass += chars.substring(rand,rand+1);
    }

    password.value = pass
}
const CopyPassword = async() =>{
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password.value)
        alert("password copied to clipboard")
    }
}
generate.addEventListener("click", GeneratePassword);
copy.addEventListener("click",  CopyPassword);


const uppercase_chars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbol_chars = "!@#$%^&*()";





