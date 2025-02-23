
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];


function displayReviews() {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <h3>${review.username}</h3>
            <p>${review.text}</p>
        </div>
    `).join('');
}
displayReviews();


document.getElementById('writeReviewBtn').addEventListener('click', () => {
    document.getElementById('reviewForm').style.display = 'block';
});


document.getElementById('reviewForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const reviewText = document.getElementById('reviewText').value;
    
    
    const usernameExists = reviews.some(review => 
        review.username.toLowerCase() === username.toLowerCase()
    );

    if (usernameExists) {
        document.getElementById('usernameError').style.display = 'block';
        return;
    }

    
    reviews.push({ username, text: reviewText });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    
    document.getElementById('reviewForm').reset();
    document.getElementById('reviewForm').style.display = 'none';
    document.getElementById('usernameError').style.display = 'none';
    
    displayReviews();
});


document.getElementById('username').addEventListener('input', () => {
    document.getElementById('usernameError').style.display = 'none';
});
