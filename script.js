const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}


let ctitle=document.getElementsByClassName("card-title")[0]
ctitle.style.color="red"

let cardtext=document.getElementById("firstcardtext")
cardtext.style.color="green"


let ctitles=document.querySelectorAll(".card-title")
ctitles[0].style.color="blue"
ctitles[1].style.color="red"
ctitles[2].style.color="green"
ctitles[3].style.color="red"

document.querySelector(".this").style.color="red"
document.querySelector(".this").style.background="black"

console.log(document.getElementsByTagName("a"))
console.log(document.getElementsByTagName("div"))
