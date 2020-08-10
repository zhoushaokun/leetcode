function http(type, url, ...options) {
    const promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // xhr.setRequestHeader("conent-type", "application/x-www-form-urlencoded");
        xhr.open(type, url);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.send(null);
    });
    return promise;
}

var urls = [
    'https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg',
    'https://www.kkkk1000.com/images/getImgData/gray.gif',
    'https://www.kkkk1000.com/images/getImgData/Particle.gif',
    'https://www.kkkk1000.com/images/getImgData/arithmetic.png',
    'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif',
    'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg',
    'https://www.kkkk1000.com/images/getImgData/arithmetic.gif',
    'https://www.kkkk1000.com/images/wxQrCode2.png'
];

