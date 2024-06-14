import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'apisauce'
import Toast from 'react-native-simple-toast';

const api = create({
    baseURL: 'http://kkskfoods.com/public/api/',
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export const get = (url) => {
    return new Promise((resolve, reject) => {
        api.get(url).then((res) => {
            console.log('res');
            console.log(res)
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
        AsyncStorage.getItem('userDetails').then((userDetails) => {
            postedData['userId'] = JSON.parse(userDetails)?.id;
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
        
    })
}

export const ShowToast = (message) => {
    Toast.show(message, Toast.LONG);
}