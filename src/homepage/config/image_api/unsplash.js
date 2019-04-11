import Axios from 'axios'

class unsplash {
    apiUrl = 'https://source.unsplash.com/';
    minImageSize = '1600x900';
    searchRetention = null;// null / '', 'daily', 'weekly'
    keyword = [
        'nature',
        'landscape',
    ];

    generateUrl() {
        const retention = this.searchRetention !== null ? `${this.searchRetention}/` : '';
        const keyword = this.keyword.join(',');
        return `${this.apiUrl}${this.minImageSize}/${retention}?${keyword}`;
    }

    getImageBase64(){
        return new Promise(async (resolve,reject)=>{
            const imageStream = await Axios.get(this.generateUrl(), { responseType: 'arraybuffer' });

            resolve(new Buffer(imageStream.data, 'binary').toString('base64'));
        });
    }
}

export default new unsplash();