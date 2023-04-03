'use strict';

export function allItemsAddLikeEvent() {
    const items = document.getElementsByClassName('like-item');
    for (let i = 0; i < items.length; i++){
        items[i].addEventListener('click', e => {
            e.preventDefault();
            
            let itemID = items[i].childNodes[0].innerHTML;
    
            const httpRequest = new XMLHttpRequest();
    
            httpRequest.onreadystatechange = () => {
                if(httpRequest.readyState == XMLHttpRequest.DONE) {
                    if(httpRequest.status == 200) {
                        const response = JSON.parse(httpRequest.responseText);
                        const likeCount = items[i].getElementsByClassName('like-count')[0];
                        if(response.msg == 'Like already exists') {
                            console.log('WORKING!!!!!!!!!!!!!!!');
                            likeCount.innerHTML = +likeCount.innerHTML - 1;
                        } else {
                            likeCount.innerHTML = +likeCount.innerHTML + 1;
                        } 
                        console.log('response ---', response);
                    } else {
                        console.log('Error. Запрос на лайк не сработал');
                    }
                    
                }
            };
            
            httpRequest.open('POST', "http://localhost:3001/likes/create", true);
            httpRequest.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            httpRequest.send(`itemId=${itemID}`);
        })
    }
}

export function itemAddLikeEvent() {

    const item = document.getElementsByClassName('like-item')[0];
    console.log(item);
    item.addEventListener('click', e => {
        e.preventDefault();
        let itemID = item.childNodes[0].innerHTML;

        const httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => {
            if(httpRequest.readyState == XMLHttpRequest.DONE) {
                if(httpRequest.status == 200) {
                    const response = JSON.parse(httpRequest.responseText);
                    const likeCount = item.getElementsByClassName('like-count')[0];
                    if(response.msg == 'Like already exists') {
                        console.log('WORKING!!!!!!!!!!!!!!!');
                        likeCount.innerHTML = +likeCount.innerHTML - 1;
                    } else {
                        likeCount.innerHTML = +likeCount.innerHTML + 1;
                    } 
                    console.log('response ---', response);
                } else {
                    console.log('Error. Запрос на лайк не сработал');
                } 
            }
        };
        
        httpRequest.open('POST', "http://localhost:3001/likes/create", true);
        httpRequest.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        httpRequest.send(`itemId=${itemID}`);
    })
}