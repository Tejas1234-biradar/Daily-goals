document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("signup").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("psw").value.trim();
        let repeatPassword = document.getElementById("pswrepeat").value.trim();

        // Email validation regex
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Basic validation
        if (!email || !password || !repeatPassword) {
            alert("All fields are required.");
            return;
        }
        if (!emailRegex.test(email)) {
            alert("Enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }
        if (password !== repeatPassword) {
            alert("Passwords do not match.");
            return;
        }

        let userData = { email, password };

        try {
            const response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Data successfully sent:", result);
                alert("Signup successful!");

                // Clear input fields after success
                document.getElementById("signupForm").reset();
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Signup failed. Try again.");
            }
        } catch (error) {
            // console.error("Request failed:", error);
            // alert("Could not connect to the server. Check your backend.");
        }
    });
});
// $(document).ready(function () {
//     $("#signup").on("submit", async function (event) {
//         event.preventDefault(); // Prevent default form submission

//         let email = $("#email").val().trim();
//         let password = $("#psw").val().trim();
//         let repeatPassword = $("#pswrepeat").val().trim();

//         // Email validation regex
//         let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//         // Basic validation
//         if (!email || !password || !repeatPassword) {
//             alert("All fields are required.");
//             return;
//         }
//         if (!emailRegex.test(email)) {
//             alert("Enter a valid email address.");
//             return;
//         }
//         if (password.length < 6) {
//             alert("Password must be at least 6 characters long.");
//             return;
//         }
//         if (password !== repeatPassword) {
//             alert("Passwords do not match.");
//             return;
//         }

//         let userData = { email, password };

//         try {
//             const response = await $.ajax({
//                 url: "http://localhost:5000/signup",
//                 method: "POST",
//                 contentType: "application/json",
//                 data: JSON.stringify(userData),
//             });

//             alert("Signup successful!");
//             console.log("Data successfully sent:", response);

//             // Clear input fields after success
//             $("#signup")[0].reset(); // Reset the form
//         } catch (error) {
//             console.error("Request failed:", error);
//             alert("Could not connect to the server. Check your backend.");
//         }
//     });
// });

