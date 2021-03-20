export default async ()=> {

    let lang = 'tr';

    try {

        const request = await fetch('https://ip-api.com/json');

        const json = await request.json();

        const country = json.country || 'Turkey';

        if(country != 'Turkey') {
            localStorage.setItem('lang', 'en')
        }else{
            localStorage.setItem('lang', 'tr')
        }

        window.location.href = window.location.href

    }catch(e)
    {
        lang = 'tr';
    }

}