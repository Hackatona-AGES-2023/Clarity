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

const test = (question, model) => {
    try {
        const url = "http://localhost:3333/exec"
        let body = {
            "isGPT": false,
            "message": question 
        };
        const headers = {
            "Content-Type": "application/json",
        }
        if (model === 'gpt') {
            body.isGPT = true
        } 

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(result => {
            console.log('__________________________________');
            console.log(result.data.response)
            console.log('__________________________________');
            resolve(result.data.response)
        })
        .catch(e => {
            reject("ERROR")
            console.log(e)
        }) 
    } catch(e) {
        console.log("MUITO ERRADO")
    }
}

const getResponse = async (question, model) => {
    // test(question, model)
    return new Promise(async (resolve, reject) => {

        const url = "http://localhost:8080/exec"
        let body = {
            "isGPT": false,
            "message": question 
        };
        const headers = {
            "Content-Type": "application/json",
        }
        if (model === 'gpt') {
            body.isGPT = true
        } 

        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(result => {
            console.log('__________________________________');
            console.log(result)
            console.log('__________________________________');
            if (model === 'gpt') resolve(result.data.choices[0].message.content)
            else resolve(result.data.response)
        })
        .catch(e => {
            reject("ERROR")
            console.log(e)
        })
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
        
        getResponse(question, model)
        .then(async answer => {
            console.log("aa - ", answer)
            port.postMessage(answer)
        }).catch((e) => port.postMessage(e))
    })
})


// Existem duas maneiras de configurar um servidor web em Python. Python suporta um servidor web "out of the box", ou seja, sem a necessidade de instalar bibliotecas adicionais. É possível iniciar um servidor web com apenas uma linha de código.

// Existem duas maneiras de configurar um servidor web em Python. Python tem suporte nativo a um servidor web. É possível iniciar um servidor web com apenas uma linha de código.