const quizData = {
  basics: [
    {
      question: "What does DSA stand for?",
      options: { A: "Data Structure and Algorithm", B: "Data Science Analysis", C: "Digital Systems Architecture", D: "Direct Software Access" },
      correct: "A",
    },
    {
      question: "Which data structure uses FIFO principle?",
      options: { A: "Stack", B: "Queue", C: "Graph", D: "Tree" },
      correct: "B",
    },
    {
      question: "What is the worst-case time complexity of binary search?",
      options: { A: "O(n)", B: "O(log n)", C: "O(n log n)", D: "O(1)" },
      correct: "B",
    },
    {
      question: "Which of these is a non-linear data structure?",
      options: { A: "Array", B: "Linked List", C: "Tree", D: "Queue" },
      correct: "C",
    },
    {
      question: "Which data structure is used in recursion?",
      options: { A: "Queue", B: "Stack", C: "Linked List", D: "Array" },
      correct: "B",
    },
  ],
  arrays: [
    {
      question: "What is the time complexity of inserting at the end in a dynamic array?",
      options: { A: "O(n)", B: "O(1)", C: "O(log n)", D: "O(n^2)" },
      correct: "B",
    },
    {
      question: "What is the default indexing of an array in C?",
      options: { A: "1", B: "0", C: "-1", D: "Undefined" },
      correct: "B",
    },
    {
      question: "Which operation in an array takes O(n) time in the worst case?",
      options: { A: "Accessing element by index", B: "Appending at end", C: "Inserting at start", D: "Updating element" },
      correct: "C",
    },
    {
      question: "What is the space complexity of an array storing n elements?",
      options: { A: "O(1)", B: "O(log n)", C: "O(n)", D: "O(n^2)" },
      correct: "C",
    },
    {
      question: "Which of these is true about arrays?",
      options: { A: "Elements are stored non-contiguously", B: "Arrays have dynamic size by default", C: "Arrays provide constant time access by index", D: "Arrays can store elements of different types" },
      correct: "C",
    },
  ],
  linkedlist: [
    {
      question: "What is the time complexity to insert at the head of a singly linked list?",
      options: { A: "O(1)", B: "O(n)", C: "O(log n)", D: "O(n^2)" },
      correct: "A",
    },
    {
      question: "How many pointers does a doubly linked list node contain?",
      options: { A: "1", B: "2", C: "3", D: "0" },
      correct: "B",
    },
    {
      question: "What is the advantage of a linked list over an array?",
      options: { A: "Random access", B: "Dynamic size", C: "Faster search", D: "Less memory usage" },
      correct: "B",
    },
    {
      question: "Which operation takes O(n) time in singly linked list?",
      options: { A: "Insert at head", B: "Delete head", C: "Search for an element", D: "Insert at tail if tail pointer exists" },
      correct: "C",
    },
    {
      question: "Which of these is true about circular linked lists?",
      options: { A: "Last node points to the head", B: "They cannot be singly linked", C: "They have NULL pointers", D: "They have a fixed size" },
      correct: "A",
    },
  ],
  stack: [
    {
      question: "What data structure is used to implement function call recursion?",
      options: { A: "Queue", B: "Stack", C: "Graph", D: "Tree" },
      correct: "B",
    },
    {
      question: "Which operation is used to add an element to a stack?",
      options: { A: "Pop", B: "Push", C: "Peek", D: "Insert" },
      correct: "B",
    },
    {
      question: "What does LIFO stand for?",
      options: { A: "Last In First Out", B: "Last In First On", C: "Least In First Out", D: "Last Inserted First Ordered" },
      correct: "A",
    },
    {
      question: "Which of the following is NOT a typical stack operation?",
      options: { A: "Push", B: "Pop", C: "Enqueue", D: "Peek" },
      correct: "C",
    },
    {
      question: "What happens when you pop from an empty stack?",
      options: { A: "Returns NULL", B: "Stack Underflow", C: "Stack Overflow", D: "Adds an element" },
      correct: "B",
    },
  ],
  queue: [
    {
      question: "What is the principle used in a queue?",
      options: { A: "LIFO", B: "FIFO", C: "Random access", D: "Priority access" },
      correct: "B",
    },
    {
      question: "Which operation removes an element from a queue?",
      options: { A: "Dequeue", B: "Enqueue", C: "Push", D: "Pop" },
      correct: "A",
    },
    {
      question: "Which of these is true about circular queue?",
      options: { A: "Waste space at the front", B: "Does not allow reuse of free space", C: "Rear node links to front node", D: "Queue overflow never happens" },
      correct: "C",
    },
    {
      question: "What happens if you enqueue in a full queue?",
      options: { A: "Queue Underflow", B: "Queue Overflow", C: "Removes element", D: "Nothing" },
      correct: "B",
    },
    {
      question: "What is the time complexity for enqueue and dequeue operations?",
      options: { A: "O(n)", B: "O(log n)", C: "O(1)", D: "O(n^2)" },
      correct: "C",
    },
  ],
};


const form = document.getElementById("quizForm");
const questionsContainer = document.getElementById("questionsContainer");
const resultSection = document.getElementById("resultSection");
const scoreText = document.getElementById("scoreText");
const wrongAnswersDiv = document.getElementById("wrongAnswers");

function loadQuestions() {
  questionsContainer.innerHTML = "";

  Object.keys(quizData).forEach((topic) => {
    const topicDiv = document.createElement("div");
    topicDiv.classList.add("topic-section");
    topicDiv.innerHTML = `<h3>${topic.charAt(0).toUpperCase() + topic.slice(1)}</h3>`;

    quizData[topic].forEach((q, index) => {
      const questionBlock = document.createElement("div");
      questionBlock.classList.add("question-block");

      let optionsHtml = "";
      for (const [key, value] of Object.entries(q.options)) {
        optionsHtml += `
          <label>
            <input type="radio" name="${topic}_q${index}" value="${key}" required />
            ${key}. ${value}
          </label>
        `;
      }

      questionBlock.innerHTML = `
        <p>${index + 1}. ${q.question}</p>
        <div class="answers">${optionsHtml}</div>
      `;

      topicDiv.appendChild(questionBlock);
    });

    questionsContainer.appendChild(topicDiv);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  if (!studentName) {
    alert("Please enter your name.");
    return;
  }

  let totalQuestions = 0;
  let totalCorrect = 0;
  const topicResults = {};
  const wrongAnswers = [];

  // Initialize topic results
  Object.keys(quizData).forEach((topic) => {
    topicResults[topic] = { correct: 0, total: quizData[topic].length };
  });

  // Check answers
  for (const topic in quizData) {
    quizData[topic].forEach((q, index) => {
      totalQuestions++;
      const userAnswer = form[`${topic}_q${index}`].value;
      if (userAnswer === q.correct) {
        totalCorrect++;
        topicResults[topic].correct++;
      } else {
        wrongAnswers.push({
          topic,
          question: q.question,
          yourAnswer: userAnswer,
          correctAnswer: q.correct,
          correctText: q.options[q.correct],
          yourText: q.options[userAnswer] || "No Answer",
        });
      }
    });
  }

  // Show results
  scoreText.textContent = `${studentName}, You scored ${totalCorrect} out of ${totalQuestions}`;

  // Show wrong answers
  if (wrongAnswers.length) {
    let wrongHtml = "<h3>Review Incorrect Answers:</h3>";
    wrongAnswers.forEach((w) => {
      wrongHtml += `<p><strong>[${w.topic.toUpperCase()}]</strong> ${w.question}<br/>
      Your answer: <span style="color:red">${w.yourText}</span><br/>
      Correct answer: <span style="color:green">${w.correctText}</span></p>`;
    });
    wrongAnswersDiv.innerHTML = wrongHtml;
  } else {
    wrongAnswersDiv.innerHTML = "<p>Great! All answers are correct.</p>";
  }

  // Show graph
  showChart(topicResults);

  // Show result section
  resultSection.style.display = "block";

  // Save results via API
  saveResults(studentName, topicResults);
});

// Chart.js rendering
function showChart(topicResults) {
  const ctx = document.getElementById("performanceChart").getContext("2d");

  // Destroy previous chart if any
  if (window.barChart) {
    window.barChart.destroy();
  }

  const topics = Object.keys(topicResults);
  const correctCounts = topics.map((t) => topicResults[t].correct);
  const totals = topics.map((t) => topicResults[t].total);

  window.barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: topics.map((t) => t.charAt(0).toUpperCase() + t.slice(1)),
      datasets: [
        {
          label: "Correct",
          data: correctCounts,
          backgroundColor: "rgba(54, 162, 235, 0.7)",
        },
        {
          label: "Wrong",
          data: totals.map((t, i) => t - correctCounts[i]),
          backgroundColor: "rgba(255, 99, 132, 0.7)",
        },
      ],
    },
    options: {
      scales: {
        y: { beginAtZero: true, precision: 0 },
      },
    },
  });
}

// Send results to server (submit.php)
function saveResults(name, topicResults) {
  // Prepare data array per topic for backend
  const payload = [];
  for (const topic in topicResults) {
    payload.push({
      topic,
      correct: topicResults[topic].correct,
      total: topicResults[topic].total,
    });
  }

  fetch("submit.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, results: payload }),
  })
    .then((res) => res.text())
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((err) => {
      console.error("Error saving results:", err);
    });
}

// Load questions on page load
window.onload = loadQuestions;
