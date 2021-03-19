export default (lang) => {
    localStorage.setItem('lang', lang)
    window.location.href = window.location.href;
}