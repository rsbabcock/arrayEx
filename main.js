
// Iterate through the following array of objects and if the gender is "F", console log the name.
const students = [
    {
      name: "Cashew",
      gender: "F"
    },
    {
      name: "Rachael",
      gender: "F"
    },
    {
      name: "Joshua",
      gender: "M"
    },
    {
      name: "Daniel",
      gender: "M"
    },
    {
      name: "Jacob",
      gender: "M"
    },
    {
      name: "Paul",
      gender: "M"
    },
    {
      name: "Meghan",
      gender: "F"
    },
    {
      name: "Hayley",
      gender: "F"
    },
    {
      name: "Deanna",
      gender: "F"
    },
    {
      name: "Kyle",
      gender: "M"
    }
  ];
  const listElement = document.getElementById('printHere')
  
  for(let i = 0; i < students.length; i++) {
      if (students[i].gender === "F") {
          console.log(students[i].name);
          let liElement = document.createElement('li')
          let textNode = document.createTextNode(students[i].name)
          liElement.appendChild(textNode)
          listElement.appendChild(liElement)
      }
  }