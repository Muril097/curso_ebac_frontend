document.addEventListener('DOMContentLoaded', function () {
    try {
        fetch('https://api.github.com/users/Muril097')
            .then(response => response.json())
            .then(data => {
                const nameElement = document.querySelector('#name');
                const usernameElement = document.querySelector('#username');
                const avatarElement = document.querySelector('#avatar');
                const reposElement = document.querySelector('#repos');
                const followersElement = document.querySelector('#followers');
                const followingElement = document.querySelector('#following');
                const linkElement = document.querySelector('#link');

                nameElement.innerText = data.name;
                usernameElement.innerText = data.login;
                avatarElement.src = data.avatar_url;
                followingElement.innerText = data.following;
                followersElement.innerText = data.followers;
                reposElement.innerText = data.public_repos;
                linkElement.href = data.html_url;
            })
            .catch(error => console.error('Erro na requisição de dados:', error));
    } catch (e) {
        console.error('Erro no script:', e);
    }
});