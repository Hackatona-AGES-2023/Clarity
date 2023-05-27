const uid = () => {
	const generateNumber = (limit) => {
	   const value = limit * Math.random();
	   return value | 0;
	}
	const generateX = () => {
		const value = generateNumber(16);
		return value.toString(16);
	}
	const generateXes = (count) => {
		let result = '';
		for(let i = 0; i < count; ++i) {
			result += generateX();
		}
		return result;
	}
	const generateconstant = () => {
		const value = generateNumber(16);
		const constant =  (value & 0x3) | 0x8;
		return constant.toString(16);
	}
    
	const generate = () => {
  	    const result = generateXes(8)
  	         + '-' + generateXes(4)
  	         + '-' + '4' + generateXes(3)
  	         + '-' + generateconstant() + generateXes(3)
  	         + '-' + generateXes(12)
  	    return result;
	};
    return generate()
};

const getToken = async () => {
    return new Promise(async (resolve, reject) => {
        const resp = await fetch("https://chat.openai.com/api/auth/session")
        if (resp.status === 403) {
            reject('CLOUDFLARE')
        }
        try {
            const data = await resp.json()
            if (!data.accessToken) {
                reject('ERROR')
            }
            resolve(data.accessToken)
        } catch (err) {
            reject('ERROR')
        }
    })
}

const getResponse = async (question) => {
    return new Promise(async (resolve, reject) => {
        fetch("https://api.soffos.ai/service/chat/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "Token 8b8de695-81ed-4614-96a8-9f69419600e3"
            },
            body: JSON.stringify({
                "messages": [
                    {
                    "source": "user",
                    "text": `Existe ambiguidade nessa frase? ${question}`
                    }
                ],
                "mode": "open",
                "session_id": uid(),
                "user": "gataba.santos@gmail.com",
                "user_id": 437
            }),
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            resolve(result.response)
        })
        .catch(error => {
            console.log("Error ", error)
            reject("ERROR")
        });
    })
}

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        const question = msg.question
        const model = msg.model
        console.log('-------------------')
        console.log(question)
        console.log(model)
        console.log('-------------------')
        
        getResponse(question)
        .then(async answer => {
            console.log("aa - ", answer)
            port.postMessage(answer)
            // const resRead = answer.getReader()
            // while (true) {
            //     const {done, value} = await resRead.read()
            //     if (done) break
            //     if (done === undefined || value === undefined) port.postMessage('ERROR')
            //     const data = new TextDecoder().decode(value)
            //     // console.log('==============================')
            //     // console.log(data)
            //     // console.log('==============================')
            //     port.postMessage(data)
            // }
        }).catch((e) => port.postMessage(e))
    })
})
