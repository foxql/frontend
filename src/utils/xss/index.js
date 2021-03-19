export default (str)=>{
    return str.replace(/<(|\/|[^>\/bi]|\/[^>bi]|[^\/>][^>]+|\/[^>][^>]+)>/g, '')
}