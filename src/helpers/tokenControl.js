    /**
    * Test süreci tamamlandığında burası ve ilişkili tüm alanlar kaldırılacak.
    */
    const token = '9Njyk7m2dDdzOsGtM4Ee';
    export default function()
    {
        const storage = localStorage.getItem('token') || '';
        if(storage == token){
            return true
        }

        return false;
    }