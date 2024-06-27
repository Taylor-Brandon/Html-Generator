const inquirer = require('inquirer');
const fs = require('fs');


const createHtml = ({ name, location, linkedIn, github }) => 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Workday Planner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css">
    </head>
    <body>
        <div class="container-fluid bg-secondary">
            <h1 class="text-center">Welcome! My name is ${name}!</h1>
            <h2 class="text-center">I am located in ${location}.</h2>
            <h4 class="text-center border border-light rounded w-25 h-50 mx-auto bg-light">Contact Me<i class="bi bi-arrow-down p-2"></i></h4>
            <ul class="list-group w-25 text-center mx-auto p-4">
                <li class="list-group-item">${linkedIn}</li>
                <li class="list-group-item">${github}</li>
            </ul>
        </div>
    </body>
    </html>`;

inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location'
        },
        {
            type: 'input',
            message: 'What is your linkedIn Url?',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        }
    ]);

    