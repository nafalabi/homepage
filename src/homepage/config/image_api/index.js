import pixabay from './pixabay'
import unsplash from './unsplash'

class ImageApiController {
    apiProvider = {
        pixabay: pixabay,
        unsplash: unsplash,
    };

    getImageBase64(provider) {
        return new Promise(async (resolve, reject) => {
            let apiProvider = Object.keys(this.apiProvider);
            if(apiProvider.includes(provider)){
                apiProvider.forEach((val) => {
                    if (provider === val) {
                        this.apiProvider[val].getImageBase64().then((result) => {
                            resolve({ success: true, data: result });
                        });
                    }
                });
            }else{
                resolve({ success: false });
            }
        })
    }
}

export default new ImageApiController();