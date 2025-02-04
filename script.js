const check_btn = document.getElementById("check-button");
const results = document.getElementById("result");
let isPalindrome;
check_btn.addEventListener("click", () => {
  const textInput = document.getElementById("text-input").value.trim();

  if (!textInput) {
    alert("Please input a value");
    return;
  }

  const processedText = textInput.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (processedText === processedText.split('').reverse().join('')) {
    isPalindrome = true;
    results.innerHTML = `${textInput} is a Palindrome`

  } else {
    isPalindrome = false;
    results.innerHTML = `"${textInput}" is not a Palindrome`

  }

});
