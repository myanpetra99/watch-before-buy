export  function getProductName(){
    const titleElement = document.querySelector('h1');
    return titleElement ? titleElement.textContent.trim() : document.title;
 }

 export async function getVideoList(string:string){
    const product = string.replace(/ /g, '+')
    const baseURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${string}&type=video&key=AIzaSyDGs6epEE05f_oOvaU1Secw2yw-hmINrDk`
    return await fetch(baseURL,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    }