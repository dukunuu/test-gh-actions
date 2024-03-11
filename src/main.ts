import axios from "axios"
const msg = ''

function triggerGithubAction() {
  axios.post("https://api.github.com/repos/dukunuu/test-gh-actions/dispatches", {
    event_type: "manual-workflow"
  }, {
    headers: {
      "Accept": "application/vnd.github.everest-preview+json",
      "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`
    }
  }).then(res => {
    console.log(res)
  })
}

document.getElementById("trigger")?.addEventListener("click", triggerGithubAction)
document.getElementById("action").innerText = "Success"
