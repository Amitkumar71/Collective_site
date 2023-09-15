function Strength(password) {
    let strength = 0;
  
    if (password.length >= 8) {
      strength++;
    }
  
    if (/[a-z]/.test(password)) {
      strength++;
    }
  
    if (/[A-Z]/.test(password)) {
      strength++;
    }
  
    if (/[0-9]/.test(password)) {
      strength++;
    }
  
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      strength++;
    }
  
    return strength;
  }
  
  document.addEventListener("keyup", function (e) {
    let password = document.querySelector("#YourPassword").value;
    let container = document.querySelector(".container");
    let feedback = document.querySelector(".feedback");
  
    container.classList.remove("weak", "moderate", "strong");
  
    if (password.length === 0) {
      feedback.textContent = "";
    } else {
      let strength = Strength(password);
      if (strength <= 3) {
        container.classList.add("weak");
        feedback.textContent = "Weak password";
      } else if (strength <= 4) {
        container.classList.add("moderate");
        feedback.textContent = "Moderate password";
      } else {
        container.classList.add("strong");
        feedback.textContent = "Strong password";
      }
    }
  });
  
  let password = document.querySelector("#YourPassword");
  let show = document.querySelector(".show");
  show.onclick = function () {
    if (password.type === "password") {
      password.setAttribute("type", "text");
      show.classList.add("hide");
    } else {
      password.setAttribute("type", "password");
      show.classList.remove("hide");
    }
  };
  