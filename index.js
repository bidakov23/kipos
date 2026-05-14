// поиск
const searchInput = document.getElementById('postSearch');
const posts = document.querySelectorAll('.post-card');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase(); 

    posts.forEach(post => {
        const postContent = post.querySelector('.description').textContent.toLowerCase();
        if (postContent.includes(filter)) {
            post.style.display = ""; 
            post.style.animation = "fadeIn 0.3s"; 
        } else {
            post.style.display = "none"; 
        }
    });
});
// лайки
document.querySelectorAll('.post-card').forEach(post => {
    const likeBtn = post.querySelector('.actions span:first-child'); 
    const likesCountElem = post.querySelector('.likes');
    let isLiked = false;
    
    
    let currentLikes = parseInt(likesCountElem.textContent);

    likeBtn.style.cursor = 'pointer';
    likeBtn.addEventListener('click', () => {
        isLiked = !isLiked;
        if (isLiked) {
            likeBtn.textContent = '❤️'; 
            likeBtn.style.filter = 'drop-shadow(0 0 2px red)'; 
            currentLikes++;
        } else {
            likeBtn.textContent = '🤍'; 
            likeBtn.style.filter = 'none';
            currentLikes--;
        }
        likesCountElem.textContent = `${currentLikes.toLocaleString()} Likes`;
    });
});




// чат
const chatModal = document.getElementById('chatModal');
const chatFriendName = document.getElementById('chatFriendName');

// Вешаем клик на каждый элемент списка чатов
document.querySelectorAll('.chat-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
        const name = item.querySelector('strong').textContent;
        chatFriendName.textContent = name;
        chatModal.style.display = 'block';
    });
});

function closeChat() {
    chatModal.style.display = 'none';
}




const chatInput = document.getElementById('chatInputField');
const chatMessages = document.getElementById('chatMessages');


function appendMessage(text, type) {
    const msgDiv = document.createElement('p');
    msgDiv.classList.add('msg', type); // type может быть 'sent' или 'received'
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && this.value.trim() !== "") {
        const userText = this.value;
        
        
        appendMessage(userText, 'sent');
        this.value = ""; 

        
        setTimeout(() => {
            const friendName = document.getElementById('chatFriendName').textContent;
            const responses = [
                "Круто! Рад за тебя.",
                "Понял, спишемся позже!",
                "Ого, ничего себе!",
                "Ха-ха, забавно 😄",
                "Я сейчас немного занят, отвечу позже!"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            
            appendMessage(`${friendName}: ${randomResponse}`, 'received');
        }, 1000);
    }
});

