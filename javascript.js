// File: javascript.js
// Function to check if the angles form a right-angled triangle
function checkTriangle() {
    // Get input values
    const angle1 = parseFloat(document.getElementById('angle1').value);
    const angle2 = parseFloat(document.getElementById('angle2').value);
    const resultDiv = document.getElementById('result1');

    // Validate inputs
    if (isNaN(angle1) || isNaN(angle2)) {
        resultDiv.textContent = "Please enter valid numbers for both angles.";
        return;
    }

    // Calculate third angle
    const angle3 = 180 - (angle1 + angle2);

    // Check if it's a valid triangle
    if (angle3 <= 0) {
        resultDiv.textContent = "These angles don't form a valid triangle!";
        return;
    }

    // Check for right angle
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
        resultDiv.textContent = "This is a right-angled triangle!";
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = "This is not a right-angled triangle.";
        resultDiv.style.color = "red";
    }
}
// Function palindrome checker javascript-->
function checkPalindrome() {
    const input = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result2');

    // Validate input
    if (input === "") {
        resultDiv.textContent = "Please enter a number.";
        return;
    }

    // Convert to string for easy reversal
    const numStr = input.toString();
    const reversedStr = numStr.split('').reverse().join('');

    if (numStr === reversedStr) {
        resultDiv.textContent = `Yes! ${input} is a palindrome!`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.textContent = `No, ${input} is not a palindrome.`;
        resultDiv.style.color = "red";
    }
}
// Function to toggle group members display
        function toggleMembers() {
            const members = document.getElementById('groupMembers');
            const btn = document.getElementById('toggleMembers');
            if (members.style.display === 'none') {
                members.style.display = 'block';
                btn.textContent = 'Hide Group Members';
            } else {
                members.style.display = 'none';
                btn.textContent = 'Show Group Members';
            }
        }