document.getElementById('submit-comment').addEventListener('click', function () {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        const commentDisplay = document.getElementById('comments-display');
        const commentElement = document.createElement('p');
        commentElement.textContent = commentText;
        commentDisplay.appendChild(commentElement);

        // Clear the input field after submission
        commentInput.value = '';
    } else {
        alert('Please enter a comment before submitting.');
    }
});
