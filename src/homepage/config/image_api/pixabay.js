import Axios from 'axios'

class pixabay {
    apiUrl = "https://pixabay.com/api/?";
    apiKey = "12131809-85f2cccb60191c4a39fe5d268";
    params = {
        q: 'landscape',
        category: 'background',
        image_type: 'photo',
        per_page: '10',
        page: '1',
        editors_choice: 'true',
        min_width: '1920',
    }

    generateUrl() {
        let paramStr = Object.keys(this.params).reduce((prevVal, curVal) => {
            return encodeURI(prevVal + `&${curVal}=${this.params[curVal]}`);
        }, '');
        return `${this.apiUrl}key=${this.apiKey}${paramStr}`;
    }

    getImageBase64() {
        return new Promise(async (resolve,reject)=>{
            const res = await Axios.get(this.generateUrl());
            const random = Math.floor(Math.random() * this.params.per_page);
            const imageStream = await Axios.get(res.data.hits[random].largeImageURL, { responseType: 'arraybuffer' });

            resolve(new Buffer(imageStream.data, 'binary').toString('base64'));
        });
    }
}

export default new pixabay();