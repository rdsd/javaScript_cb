function is_palindrome(str){
	let len = str.length;
  
  if(len == 1){
  	return 1;
  }
  
	for (i = 0; i< len/2; i++){
  	if(str[i] != str[len - i - 1]){
    	return 0;
    }
  }
  return 1;
}

//brute force method, complexity O(n2 + n)
function find_longest_palindrome(str){
  console.log('find_longest_palindrome: ');
  let longestPalindrome;
  let longestPalindromeLength = 0;
  let isPal;
  let len = str.length;
  
  if(len == 1){
  	longestPalindrome = str;
  }
  else if(len == 2 && str[0] == str[1]){
    longestPalindrome = str;
  }
  else if(len == 2 && str[0] != str[1]){
    longestPalindrome = str[0];
  }
  else {
  
    for (let i = 0; i < len; i++){
      for(let j = 1; j < len + 1; j++){
        check_str = str.substring(i,j);
        
        console.log('check_str: ' + check_str);
        
        isPal = is_palindrome(check_str);

        if (isPal == 1){
          if (check_str.length > longestPalindromeLength){
            longestPalindrome = check_str;
            longestPalindromeLength = check_str.length;
          }
        }
      }
    }  
  }
  console.log('longestPalindrome: ' + longestPalindrome);
  return longestPalindrome;
}

find_longest_palindrome('ababa');
