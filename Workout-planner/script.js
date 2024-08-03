const nameInput = document.getElementById("name");
const goalInput = document.getElementById("goal");
const muscleGroupSelected = document.getElementById("muscleGroup");
const duration = document.getElementById("duration");
const button = document.getElementById("createWorkoutButton");
let workoutComplete = false; 

button.addEventListener("click", function () {
  if (
    nameInput.value &&
    goalInput.value &&
    muscleGroupSelected.value &&
    duration.value
  ) { // if and only if all fields are filled in, create :
    let introduction = document.createElement("p");
    introduction.innerHTML = `Hey ${nameInput.value}! Are you ready to crush this workout? Let's <strong>${goalInput.value}</strong>! 💪🏼. Your ${duration.value} minute workout starts when you are ready!`;

    introduction.style.cssText =
      "width: 500px; margin: 0 auto; font-size: 26px; padding: 18px;";
    document.body.appendChild(introduction);

    // Call paraInput function only after button click
    paraInput();

    complete(); // Move complete function call here
  } else {
    alert("Please fill out all fields before creating a workout.");
  }
});

function paraInput() {
  let selectedWorkout;
  let exerciseList = document.createElement("ul");

  // exercise list is currently empty
  exerciseList.innerHTML = "";

  // Set the list with exercises based on the user's selected workout
  if (muscleGroupSelected.value === "lower") {
    selectedWorkout = [
      { name: "Squats", reps: 8, sets: 3 },
      { name: "Hip Thrusts", reps: 8, sets: 3 },
      { name: "Quad Extentions", reps: 8, sets: 3 },
      { name: "Hip Abductions", reps: 8, sets: 3 },
      { name: "Leg Press", reps: 8, sets: 3 },
    ];
  } else if (muscleGroupSelected.value === "upper") {
    selectedWorkout = [
      { name: "Shoulder press", reps: 8, sets: 3 },
      { name: "Chest press", reps: 8, sets: 3 },
      { name: "Bicep Curl", reps: 8, sets: 3 },
      { name: "Skull Crushers", reps: 8, sets: 3 },
      { name: "Pull Ups", reps: 8, sets: 3 },
    ];
  } else if (muscleGroupSelected.value === "full_body") {
    selectedWorkout = [
      { name: "Jumping Jacks ", reps: 8, sets: 3 },
      { name: "Deadlifts ", reps: 8, sets: 3 },
      { name: "Squats", reps: 8, sets: 3 },
      { name: "Shoulder Press", reps: 8, sets: 3 },
      { name: "Calf Raises", reps: 8, sets: 3 },
    ];
  }
  for (let i = 0; i < selectedWorkout.length; i++) { //used a for loop to loop through the selected workouts
    let listItem = document.createElement("li");
    listItem.style.listStyleType = "none";
    listItem.textContent = `${selectedWorkout[i].name} - ${selectedWorkout[i].reps} x ${selectedWorkout[i].sets}`;
    exerciseList.appendChild(listItem).style.fontSize = "20px";
  }

  document.body.appendChild(exerciseList);
}

function complete() {
  let completeButton = document.createElement("button");
  completeButton.textContent = "Workout Complete!";
  document.body.appendChild(completeButton);
  completeButton.style.cssText = "background-color: green; color: #fff; border: none;";

  completeButton.addEventListener("click", function () {
    console.log("button clicked!")
    document.body.style.backgroundColor = "#99ff66";
    workoutComplete = true;
    alert("Workout complete! Well Done 😁");
  });
}