// Select elements from the DOM
const timerDisplay = document.getElementById('timer');  // Displays the timer
const startButton = document.getElementById('startButton');  // Start button
const stopButton = document.getElementById('stopButton');  // Stop button
const resetButton = document.getElementById('resetButton');  // Reset button

let countdown;
let minutes = 25;  // Default Pomodoro duration (in minutes)
let seconds = 0;
let isTimerRunning = false;  // Track if the timer is running

// Function to format time as MM:SS
function formatTime(mins, secs) {
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
}

// Function to update the timer display
function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(minutes, seconds);
}

// Start button functionality
startButton.addEventListener('click', () => {
    if (!isTimerRunning) {
        countdown = setInterval(function() {
            if (minutes <= 0 && seconds <= 0) {
                clearInterval(countdown);
                isTimerRunning = false;
                alert("Pomodoro session is over! Take a break.");
                minutes = 0;
                seconds = 0;
                updateTimerDisplay();
                return;
            } else if (seconds <= 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);  // Update every second
        isTimerRunning = true;
    }
});

// Stop button functionality
stopButton.addEventListener('click', () => {
    clearInterval(countdown);  // Stop the countdown
    isTimerRunning = false;  // Reset timer state
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    clearInterval(countdown);  // Stop the countdown
    isTimerRunning = false;  // Reset timer state
    minutes = 25;  // Reset to initial time
    seconds = 0;
    updateTimerDisplay();  // Update display to show 25:00
});
