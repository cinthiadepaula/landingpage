let about = document.querySelector('#github')
let areaProfile = document.querySelector('#area')

async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/cinthiadepaula')
        const profile = await dataProfile.json()

        let content = `
            <img src="${profile.avatar_url}" alt="Foto do Perfil do Github - ${profile.name}">
            <article class="section_content">
                <h1>${profile.name}</h1>
                <p>
                Que os momentos sejam requintados de beleza, que as escolhas tragam com ela novos ares ainda mais interessantes.
                </p>

                <div class="section_github flex">
                    <a class="btn" href="${profile.html_url}">Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()