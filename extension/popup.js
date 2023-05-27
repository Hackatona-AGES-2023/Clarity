document.addEventListener("DOMContentLoaded", async () => {

    const sleep = ms => new Promise(r => setTimeout(r, ms))

    const getActiveTab = async () => {
        const tabs = await chrome.tabs.query({
            currentWindow: true,
            active: true
        })
        return tabs[0]
    }

    const showPopup = async (answer) => {
        if (answer !== "ERROR") {
            try {
                console.log('___________')
                console.log(answer)
                document.getElementById('output').style.opacity = 1
                document.getElementById('output').innerHTML = answer
                let res = await answer.split("data:")
                try {
                    const detail = JSON.parse(res[0]).detail
                    return;
                } catch (e) {
                    try {
                        res = res[1].trim()
                        if (res === "[DONE]") return
                        answer = JSON.parse(res)
                        let final = answer.message.content.parts[0]
                        final = final.replace(/\n/g,'<br>')
                        document.getElementById('output').style.opacity = 1
                        document.getElementById('output').innerHTML = final
                    } catch (e) {}
                }
            } catch (e) {
                document.getElementById('output').style.opacity = 1
                document.getElementById('output').innerHTML = "Something went wrong. Please try in a few minutes."
            }
        } else {
            document.getElementById('output').style.opacity = 1
            document.getElementById('output').innerHTML = 'ERROR'
        }
    }

    const getData = async (selection) => {
        console.log("0--0-0-0-0-0-0--0-0-0-0-0")
        console.log(selection)
        console.log("0--0-0-0-0-0-0--0-0-0-0-0")
        if (!selection.length == 0) {
            document.getElementById('input').style.opacity = 1
            document.getElementById('input').innerHTML = selection
            document.getElementById('output').style.opacity = 0.5
            document.getElementById('output').innerHTML = "Loading..."
            const port = chrome.runtime.connect();
            port.postMessage({question: selection})
            port.onMessage.addListener((msg) => showPopup(msg))
        } else {
            document.getElementById('input').style.opacity = 0.5
            document.getElementById('input').innerHTML = "You have to first select some text"
        }
    }

    const getSelectedText = async () => {
        const activeTab = await getActiveTab()
        chrome.tabs.sendMessage(activeTab.id, {type: "LOAD"}, getData)
    }

    getSelectedText()
})