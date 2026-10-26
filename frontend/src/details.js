import './style.css'
import { initTheme, toggleTheme } from './theme.js'
import { applyI18n, setupLangToggle, t } from './i18n.js'

applyI18n()
setupLangToggle(() => window.location.reload())

const theme = initTheme()
const themeBtn = document.getElementById('theme-toggle')
themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙'
themeBtn.addEventListener('click', () => {
  const next = toggleTheme()
  themeBtn.textContent = next === 'dark' ? '☀️' : '🌙'
})

const countEl = document.getElementById('details-count')
if (countEl) {
  const count = parseInt(countEl.dataset.count || '0', 10)
  countEl.textContent = t('nav.results_count', { count: count.toLocaleString() })
}

document.getElementById('submit').addEventListener('click', () => {
  const kw = document.getElementById('keyword').value
  const ymd = window.location.pathname.split('/').pop()
  window.location = `/details/${ymd}?keyword=${encodeURIComponent(kw)}`
})
document.getElementById('keyword').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') document.getElementById('submit').click()
})
