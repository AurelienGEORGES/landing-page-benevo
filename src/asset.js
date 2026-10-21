// Chemin vers un fichier de public/assets, compatible avec le `base` de Vite
export const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`
