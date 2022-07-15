let Length = function (stri)
 {
 let TheFirstLength = 0;

  for (let i = 0; i < stri.length; i++) 
  {
    let newString = new Set();

    for (let j = i; j < stri.length; j++) 
	{
      if (newString.has(stri[j]))
	  {
        break;
      } 
	  else 
	  {
        newString.add(stri[j]);
      }
    }

   TheFirstLength  = Math.max(TheFirstLength, newString.size);
  }

  return TheFirstLength;
};

const stri = "abbbcabcdefef";

console.log(Length(stri));