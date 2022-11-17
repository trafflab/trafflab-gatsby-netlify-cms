import { navigate } from "gatsby";
export const changeRelativeUrlLang = (lang) => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const pathList = path.split('/')
  pathList[1] = lang
  return pathList.join('/')
}

export const getUrlLang = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const pathList = path.split('/')
  return pathList[1]
}

export function changeUrl(url) {
  if (typeof window !== 'undefind' && typeof url !== 'undefined') {
    window.history.pushState({}, '', url)
  }
}