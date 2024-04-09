import { create } from 'apisauce'
import Toast from 'react-native-simple-toast';

const api = create({
    baseURL: 'https://cleanfold.in/sifti/public/api/',
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export const get = (url) => {
    return new Promise((resolve, reject) => {
        api.get(url)
            .then((res) => {
                if (res.data.status == 'error') {
                    reject(res)
                } else {
                    resolve(res);
                }
            })
            .catch((err) => {
                reject(err);
            })
    })
}

export const post = (url, postedData) => {
    return new Promise((resolve, reject) => {
        api.post(url, JSON.stringify(postedData))
            .then((response) => {
                console.log('response');
                if (response.data.status == 'error') {
                    reject(response)
                } else {
                    resolve(response);
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

export const ShowToast = (message) => {
    Toast.show(message, Toast.LONG);
}

