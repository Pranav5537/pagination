const container1 = document.createElement('div')

container1.className = 'container'

const container2 = document.createElement('div')

container2.className = 'container'

const container3 = document.createElement('div')

const inputBox = document.createElement('input')

document.body.appendChild(inputBox)

const search = document.createElement('button')

search.innerHTML = 'Search'

container1.appendChild(inputBox)
container1.appendChild(search)
document.body.appendChild(container1)

async function repo() {

    let user = inputBox.value
    inputBox.value = ''

    container2.innerHTML = ''
    container3.innerHTML = ''

    const response = await fetch(`https://api.github.com/users/${user}/repos`)

    const data = await response.json();

    console.log(data)

    appendData(data)

}


function appendData(data) {

    const total_repos = document.createElement('h1')

    total_repos.innerHTML = `Total Repos : ${data.length}`

    container3.appendChild(total_repos)
    document.body.appendChild(container3)

    const img = document.createElement('img')
    const git_url = document.createElement('a')

    img.src = data[0].owner.avatar_url

    container3.appendChild(img)



    for (let i = 0; i < data.length; i++) {

        const repo_url = document.createElement('a')
        const fork_counts = document.createElement('h5')
        const stargazers_counts = document.createElement('h5')
        const languages = document.createElement('h4')
        const names = document.createElement('h3')

        const smallbox = document.createElement('div')
        smallbox.className = 'smallbox'

        repo_url.href = data[i].html_url
        repo_url.innerHTML = 'Repo_URL'
        fork_counts.innerHTML = data[i].forks_count
        stargazers_counts.innerHTML = data[i].stargazers_count
        languages.innerHTML = data[i].language
        names.innerHTML = data[i].name

        smallbox.appendChild(names)
        smallbox.appendChild(languages)
        smallbox.appendChild(fork_counts)
        smallbox.appendChild(stargazers_counts)
        smallbox.appendChild(repo_url)

        container2.appendChild(smallbox)

    }

    document.body.appendChild(container2)


}

search.addEventListener('click', repo)