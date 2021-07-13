/*
Day-by-Day-Challenge
Exercice 058 - "Api Book"

Task
------------
Description:

Using the googleapis API display in the console the author and the title of the book based on the isbn number
*/


const isbn = prompt("Enter ISBN number");
fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //console.log(data);
    console.log("Title: " + data.items[0]["volumeInfo"]["title"]);
    console.log("Author/Authors: ");
    data.items[0]["volumeInfo"]["authors"].forEach((author, i) =>
      console.log(`${i}: ${author}`)
    );
  })
  .catch((error) => {
    console.log("Something went wrong...", error);
  });