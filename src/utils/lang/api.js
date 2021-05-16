export default async ()=> {

    let lang = 'tr';

    try {

        const country = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UnitedState';

        if(country != 'Europe/Istanbul') {
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