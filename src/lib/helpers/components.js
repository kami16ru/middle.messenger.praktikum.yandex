export const loading = ({ target, loadingElement, loading }) => {
    if (loading) {
        target.style.display = 'none'
        loadingElement.style.display = ''
    } else {
        target.style.display = ''
        loadingElement.style.display = 'none'
    }
}