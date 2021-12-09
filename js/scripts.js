function setCookie(name, value, days, path, domain, secure) {

    if(!navigator.cookieEnabled) return;

    var e = encodeURIComponent;

    var cookie = e(name) + "=" + e(value);

    if(typeof days === "number") {
        var date = new Date();

        date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);

        cookie += "; expires=" + date.toGMTString();
    }

    if(path) {
        cookie += "; path=" + path;
    }

    if(domain) {
        cookie += "; domain=" + domain;
    }

    if(secure) {
        cookie += "; secure;";
    }

    document.cookie = cookie;

}

function getCookie(name) {

    if(!document.cookie) return null; //jeżeli brak cookie zwróć null

    var arr = document.cookie.split(/; */), // jeżeli jest cookie podziel jego zawartość czyli string w miejscu gdzie pojawi się ; lub ale nie koniecznie spacja - (mówi o tym znak *)
    // wszystko wrzuci w tablicę
        cookies = {};

        //console.log(arr);

    arr.forEach(function(cookie) { //przeiteruj cała zawartość arr
        cookie = cookie.split("="); //podziel wartość 'firstName=Kowalski; session=4055f4ba9f4ae864edb4c83975b9b587' tam gdzie napotkasz znak = 
                                    // teraz w cookie będziemy mieli tablicę cookie[0]=firstName, cookie[1]=Jan
        cookies[cookie[0]] = decodeURIComponent(cookie[1]); //przypisanie wartości tablicy do obiektu cookie, musimy skorzystać z odwrotnej funkcji do encode aby przywrócić znaki specjalne
    });

    

    //console.log(cookies); // tak się prezentuje obiekt cookie 
    /* {
    "firstName": "Kowalski",
    "session": "2f5f240b967dbb0603d35707223ff646"
    }*/

    return cookies[name] || null; //jeżeli ktoś poda firstName i zostanie to odnalezione w obiekcie to zwróci Jan, to samo dla session, jeżeli nie to null

}