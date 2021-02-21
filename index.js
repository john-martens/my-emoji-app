// Make the unshift button work just as the push button (but with unshifting instead of pushing)

const myEmojis = ["👨‍💻", "⛷", "🍲","🥓","🎸","🍷"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()
function updateEmojis(dir){
        const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value || dir==='shift' || dir==='pop') {
        if(dir==='end')myEmojis.push(emojiInput.value)
        else if (dir=='front') myEmojis.unshift(emojiInput.value)
        else if (dir=='pop') myEmojis.pop()
        else if (dir=='shift') myEmojis.shift()
        console.log(myEmojis)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
}

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    updateEmojis("end")
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    updateEmojis('front')
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    updateEmojis('pop')
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    updateEmojis('shift')
})
