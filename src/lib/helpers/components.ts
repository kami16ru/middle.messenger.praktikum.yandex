type LoadingConfig = {
  target: HTMLElement
  loadingElement: HTMLElement
  loading: boolean
}

export const loading = ({ target, loadingElement, loading }: LoadingConfig) => {
  if (loading) {
    target.style.display = 'none'
    loadingElement.style.display = ''
  } else {
    target.style.display = ''
    loadingElement.style.display = 'none'
  }
}
