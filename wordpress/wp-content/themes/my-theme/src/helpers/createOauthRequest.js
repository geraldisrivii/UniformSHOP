import WOO from '@/axiosWoocomerce'
import OAuth from 'oauth-1.0a';
import qs from 'qs';

import crypto from 'crypto-js';

const keys = {
    consumerKey: 'ck_34f1f9033dce6581ccadd4769d8e3f37cbbb4cb9',
    consumerSecret: 'cs_014d492305cca63898c34e63218937716c3eebb9',
}

export default async function ({ url, method, params, data }, isDataReturn = true) {

    const oauth = OAuth({
        consumer: { key: keys.consumerKey, secret: keys.consumerSecret },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key) {
            const hash = crypto.HmacSHA1(base_string, key);
            return crypto.enc.Base64.stringify(hash);
        },
    });


    if (!url.startsWith('/')) {
        url = `/${url}`
    }
    if (url.endsWith('?')) {
        url = url.slice(0, -1)
    }
    if (WOO.defaults.baseURL.endsWith('/')) {
        url = url.slice(1)
    }

    method = method || 'GET'

    if (params) {
        url = url + '?'

        for (const key in params) {
            if (params[key]) {
                if (typeof params[key] == 'string') {
                    let words = params[key].split(' ');
                    if (words.length > 1) {
                        url = url + `${key}="${params[key]}"&`
                        continue;
                    }
                }
                url = url + `${key}=${params[key]}&`
            }
        }
        url = url.slice(0, -1)
    }

    let response = null;
    if (method == 'GET') {
        const authorization = oauth.authorize({
            url: WOO.defaults.baseURL + url,
            method: method,
        });
        response = await WOO.request({
            url: url,
            method: method,
            headers: {
                Authorization: oauth.toHeader(authorization)['Authorization'],
            },
        });
    }
    if (method != 'GET') {
        const authorization = oauth.authorize({
            url: WOO.defaults.baseURL + url,
            method: method,
            data: data
        });
        response = await WOO.request({
            url: url,
            method: method,
            headers: oauth.toHeader(authorization),
            data: authorization.data
        });
    }

    if (isDataReturn) {
        return response.data;
    }

    return response;
}