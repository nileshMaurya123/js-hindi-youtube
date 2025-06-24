// ### 4. **Remove the last element**

// > Remove the last item from the `fruits` array using a method and store it in a variable called `removedFruit`.

function removeElement() {
  let fruits = ["apple", "banana", "orange"];
  let removedFruit = fruits.pop(); // Removes the last element, "orange"
  let index = fruits.indexOf("banana"); // Find the index of "banana"
  if (index !== -1) {
    fruits.splice(index, 1); // Removes "banana" from the array
  }
  console.log(fruits); // ["apple"]
  console.log(removedFruit); // "orange"
}
removeElement();
