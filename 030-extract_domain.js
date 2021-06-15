/*
Day-by-Day-Challenge
Exercice 029 - "extract domain"

Task
------------
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/


//first solution

// const domainName = (url) =>
//   url.replace(/(https?:\/\/)|(www\d?\.)?/g, "").split(".")[0];

//second solution

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};


  function verify(input, goal) {
    input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
    if (input == goal) {
      console.log("Congratulation!");
    } else {
      console.log(`Sorry, expected - ${goal}, received - ${input}`);
    }
  }



  verify(domainName("http://google.com"), "google");
  verify(domainName("http://google.co.jp"), "google");
  verify(domainName("www.xakep.ru"), "xakep");
  verify(domainName("https://youtube.com"), "youtube");