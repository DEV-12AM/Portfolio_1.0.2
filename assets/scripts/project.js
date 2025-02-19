// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the project parameter from the URL (for view-project.html)
if (window.location.pathname.includes('project.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const project = urlParams.get('project');

    // Project details and code samples
    const projects = {
        game: {
            title: "Game Using Thunkable",
            description: "Created a simple game using Thunkable (07/2024).",
            code: `// Sample code for Thunkable game
function startGame() {
    // Game logic here
    console.log("Game started!");
}`
        },
        website: {
            title: "Simple Website",
            description: "Built a simple website using HTML & CSS (07/2024).",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Webpage</title>
</head>
<body>
    <h1>Welcome to My Simple Webpage</h1>
    <p>This is a sample webpage created using HTML.</p>
</body>
</html>`
        },
        "prototype-website": {
            title: "Prototype for Website",
            description: "Designed a prototype for a website for the Skills Area team (06/2024).",
            code: `// Sample code for website prototype
const prototype = {
    title: "Skills Area Website",
    features: ["Responsive Design", "User -Friendly Interface"]
};`
        },
        "prototype-mobile": {
            title: "Prototype for Mobile App",
            description: "Created a prototype for a mobile application (01/2024).",
            code: `// Sample code for mobile app prototype
function createMobileApp() {
    // Mobile app logic here
    console.log("Mobile app prototype created!");
}`
        },
        "hospital-system": {
            title: "Hospital System",
            description: "Developed a hospital system using C# (01/2024).",
            code: `// Sample C# code for hospital system
using System;

class Hospital
{
    public void AdmitPatient(string name) {
        Console.WriteLine(name + " has been admitted.");
    }
}`
        },
        "bank-system": {
            title: "Bank System",
            description: "Built a bank system using C# (12/2023).",
            code: `// Sample C# code for bank system
using System;

class Bank
{
    public void Deposit(decimal amount) {
        Console.WriteLine("Deposited: " + amount);
    }
}`
        }
    };

    // Display project information and code sample
    if (projects[project]) {
        const projectInfo = projects[project];
        document.getElementById('project-info').innerHTML = `
            <h3>${projectInfo.title}</h3>
            <p>${projectInfo.description}</p>
        `;
        document.getElementById('code-sample').innerText = projectInfo.code;
    } else {
        document.getElementById('project-info').innerHTML = `<p>Project not found.</p>`;
    }
}