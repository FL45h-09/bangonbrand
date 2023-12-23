
export const ConvertSlug = (str) => {
    let currentText = str[0].toUpperCase() + str.slice(1);
    currentText = currentText.split('-').filter(Boolean).join(' ');
    currentText = currentText.replace('/', '').replace('/', '');
    return currentText;
}
