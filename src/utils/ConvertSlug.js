export const ConverSlug = (str) =>{
    let currentPath;
    const modStr = str[0].toUpperCase() + str.slice(1);
    currentPath = currentPath.split('-').filter(Boolean).join(' ');
    currentPath = currentPath.replace('/', '').replace('/', '');
}