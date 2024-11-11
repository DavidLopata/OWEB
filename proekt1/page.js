// Initialize an object to keep track of the like state and like count
const likes = {};

// Function to toggle the like status and update the like count
function toggleLike(id) {
    // Initialize like status and count if not set for this id
    if (!(id in likes)) {
        likes[id] = { liked: false, count: 0 };
    }

    // Toggle like status
    likes[id].liked = !likes[id].liked;

    // Update count based on like status
    likes[id].count += likes[id].liked ? 1 : -1;

    // Update the button text and like count display
    const likeButton = document.getElementById(`like-button-${id}`);
    const likeCount = document.getElementById(`like-count-${id}`);

    likeButton.textContent = likes[id].liked ? "Unlike" : "Like";
    likeCount.textContent = `Likes: ${likes[id].count}`;
}

// Function to add a comment and allow deletion
function addComment(id) {
    // Get the comment input element and comment list container
    const commentInput = document.getElementById(`comment-input-${id}`);
    const commentsList = document.getElementById(`comments-list-${id}`);
    
    // Get the comment text from the input
    const commentText = commentInput.value.trim();
    
    // Only add comment if the input is not empty
    if (commentText !== "") {
        // Create a new list item for the comment
        const commentItem = document.createElement("li");
        
        // Create a span for the comment text
        const commentTextSpan = document.createElement("span");
        commentTextSpan.textContent = commentText;
        
        // Create a delete button for the comment
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.className = "delete-button";
        
        // Event listener to remove the comment when delete button is clicked
        deleteButton.onclick = function () {
            commentsList.removeChild(commentItem);
        };

        // Append comment text and delete button to the list item
        commentItem.appendChild(commentTextSpan);
        commentItem.appendChild(deleteButton);

        // Append the new comment to the comment list
        commentsList.appendChild(commentItem);

        // Clear the comment input
        commentInput.value = "";
    }
}
 // Open and close survey popup
function openSurvey() {
    document.getElementById('survey-popup').style.display = 'block';
}
function closeSurvey() {
    document.getElementById('survey-popup').style.display = 'none';
}

// Handle survey form submission
document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Thank you for your feedback!`);
    closeSurvey();
});

//nemav vreme instagram delot ubavo da go napravam