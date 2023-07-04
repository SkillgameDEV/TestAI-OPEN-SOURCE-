// JavaScript code for handling form submission and AI response
document.querySelector('.question-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  const questionInput = document.querySelector('.question-input');
  const answerDiv = document.querySelector('.answer');
  const question = questionInput.value;
  
  // Clear previous answer
  answerDiv.textContent = '';

  // Send the question to the server to get the generated code
  try {
    const response = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    if (!response.ok) {
      throw new Error('An error occurred while fetching the answer.');
    }

    const { generatedCode } = await response.json();

    // Display the generated code as the answer
    const codeElement = document.createElement('code');
    codeElement.textContent = generatedCode;
    answerDiv.appendChild(codeElement);
  } catch (error) {
    console.error(error);
    answerDiv.textContent = 'An error occurred while fetching the answer.';
  }
});
