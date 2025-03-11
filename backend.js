// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGJtQq5JSw6BprEWOeiqIK62mEFD2mpXc",
    authDomain: "day-2-task.firebaseapp.com",
    databaseURL: "https://day-2-task-default-rtdb.firebaseio.com",
    projectId: "day-2-task",
    storageBucket: "day-2-task.firebasestorage.app",
    messagingSenderId: "696129109397",
    appId: "1:696129109397:web:292df0d230b5e2a81f0a9c",
    measurementId: "G-MZME7KPF00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase();

function write(event) {
    event.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        return;
    }
    let genderele = document.getElementsByName('gender')
    let gender = "";
    for (let i of genderele) {
        if (i.checked) {
            gender = i.value;
        }
    }

    let hobbiesele = document.getElementsByName('hobbies')
    let hobbies = "";
    for (let i of hobbiesele) {
        if (i.checked) {
            hobbies += i.value + " ";
        }
    }

    let sourceOfIncome = document.getElementById('sourceOfIncome').value;

    let income = document.getElementById('income').value;

    let profilePicture = document.getElementById('uploadProfilePicture').files[0];

    let age = document.getElementById('age').value;

    let bio = document.getElementById('bio').value;

    const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        gender: gender,
        hobbies: hobbies.trim(),
        sourceOfIncome: sourceOfIncome,
        income: income,
        profilePicture: profilePicture ? profilePicture.name : null,
        age: age,
        bio: bio
    };

    set(ref(db, "user/" + firstname+lastname), userData).then(() => {
        alert("User created successfully");
        window.location.reload();
    }).catch(() => {
        alert("Error creating user");
    })

}

document.getElementById('button').addEventListener('click', write);