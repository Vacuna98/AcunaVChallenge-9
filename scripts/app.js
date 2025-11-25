let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let personalEmail = document.getElementById("personalEmail");
let studentEmail = document.getElementById("studentEmail");
let studentBtn = document.getElementById("studentBtn");


function getData(){
   return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.students);
        return data.students;
    });
}
getData();



function randomizeData(students){
        let randomIndex = Math.floor(Math.random() * students.length);
        console.log([randomIndex]);
        return students[randomIndex];
    }


    studentBtn.addEventListener("click", () => {
        getData().then((students) => {
            let randomStudent = randomizeData(students);
            console.log(randomStudent)

            firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        studentEmail.innerText = randomStudent.studentEmail;
        personalEmail.innerText = randomStudent.personalEmail;

        })
    });

 