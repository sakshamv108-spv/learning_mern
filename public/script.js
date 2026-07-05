const form = document.getElementById("studentForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const studentData = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        age: document.getElementById("age").value
    };

    try {

        const response = await fetch("/add-student", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(studentData)

        });

        const data = await response.json();

        alert(data.message);

        form.reset();

    } catch (error) {

        console.log(error);

    }

});