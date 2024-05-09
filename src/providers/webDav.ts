import { Provider } from "./_main";

interface save {
	data: string
}

export class WebDav extends Provider {
	url;
	content = "";

	constructor(url : string, saveEnabled : boolean){
		super()

		this.url = url
		this.saveEnabled = saveEnabled
	}

	load() : Promise<string> {
		return fetch(this.url)
			.then(response => response.text())
	}

	save(data : string): void {
		if (this.saveEnabled){
			fetch(this.url, {
				method: 'PUT',
				headers: {
					'Content-Type': 'text/plain'
				},
				body: data
			})
		}
	}
}