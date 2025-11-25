let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let personalEmail = document.getElementById("personalEmail");
let schoolEmailEmail = document.getElementById("schoolEmail");
let studentBtn = document.getElementById("studentBtn");
let previousStudent = document.getElementById("previousStudent");

let previousList = [];

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

    function updatePreviousList(){
        previousStudent.innerHTML = "";
    
        previousList.forEach((studentName) => {
            let li = document.createElement("li");
            li.innerText = studentName;
            previousStudent.appendChild(li);
        });
    }
    


    studentBtn.addEventListener("click", () => {
        getData().then((students) => {
            let randomStudent = randomizeData(students);
            console.log(randomStudent)

            firstName.innerText = randomStudent.firstName;
        lastName.innerText = randomStudent.lastName;
        schoolEmail.innerText = randomStudent.schoolEmail;
        personalEmail.innerText = randomStudent.personalEmail;

        let fullName = `${randomStudent.firstName} ${randomStudent.lastName}`
        previousList.unshift(fullName);

        if(previousList.length>5){
            previousList.pop();
        }

        updatePreviousList();


        })
    });


 