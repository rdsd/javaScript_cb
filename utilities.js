/*
 * This function reverses the String supplied.
 * Time complexity: O(n)
 */
function FirstReverse(str) {
    var rStr = [];
    var j = 0;
    for (var i = str.length - 1; i >= 0; i--)
    {
        rStr[j++] = str.charAt(i);
    }
    rStr.join("");
    str = rStr.join("");
    return str;

}

/*
 * This function calculates factorial
 * Time complexity: O(n)
 */
function FirstFactorial(num) {
    var n = num;
    for (var i = n - 1; i >= 2; i--)
    {
        num = num * i;
    }
    return num;
}

/*
 * This function returns the biggest word in a sentences. It ignores any punctutation marks.
 */
function LongestWord(sen) {

    var wordArray = sen.split(' ');
    largestWordIndex = 0;
    for (var i = 1; i < wordArray.length; i++)
    {
        var biggerNum = wordArray[largestWordIndex].replace(/[^A-z0-9_]/g, "");
        var numToCompare = wordArray[i].replace(/^A-z0-9_]/g, "");
        if (biggerNum.length < numToCompare.length)
        {
            largestWordIndex = i;
        }
    }
    return wordArray[largestWordIndex];

}

/*
 * This function converts each alpha character in the string to its next character.
 * The vowels are capitalized.
 * Time Complexity: O(n)
 */
function LetterChanges(str) {
    str = str.toLowerCase();
    var cCode = str.charCodeAt(0);
    var changedStr = [];

    for (var i = 0; i < str.length; i++)
    {
        var chr = str.charAt(i);
        if (!(/[a-zA-Z]/.test(chr)))
        {
            changedStr[i] = chr;
            continue;
        }
        else if (chr === "z" || chr === "Z")
        {
            changedStr[i] = "A";
        }
        else
        {
            cCode = str.charCodeAt(i);
            changedStr[i] = String.fromCharCode(cCode + 1);
        }
    }
    for (var i = 0; i < changedStr.length; i++)
    {
        var character = changedStr[i];
        if (character === 'a' || character === 'e' || character === 'i' || character === 'o' ||
                character === 'u')
        {
            changedStr[i] = character.toUpperCase();
        }
    }

    str = changedStr.join('');
    console.log(str);
    return str;
}

LetterChanges("hello*3");