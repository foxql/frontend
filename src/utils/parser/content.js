import censore from '../censore';
import xssReplace from '../xss';

export default function (text) {
    return xssReplace(
        censore(text)
    )
    .replace(/(?:https?|ftp):\/\/[\S]*\.(?:png|jpe?g|gif|svg|webp)(?:\?\S+=\S*(?:&\S+=\S*)*)?/g, '<img src="$&" class = "post-content-image"/>')
    .replace(/(https?:\/\/[^\s]+)$(?<!png|jpg\i)/g, '<a href="$1" target = "_blank" class = "post-content-link">$1</a>')
    .replace(/\n/g, "<br />")
}   