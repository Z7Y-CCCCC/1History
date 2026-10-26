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

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fmtBytes(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / 1024 / 1024).toFixed(2) + ' MB'
}

function fmtDate(ms) {
  if (!ms) return '—'
  return new Date(ms).toLocaleString()
}

async function loadStatus() {
  document.getElementById('status-content').innerHTML = `<p style="color:var(--text-muted)">${esc(t('db.loading'))}</p>`
  try {
    const res = await fetch('/api/db/status')
    const s = await res.json()
    document.getElementById('status-content').innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
        <div>
          <span style="font-size:12px;color:var(--text-muted)">${esc(t('db.file'))}</span>
          <div style="font-size:13px;font-family:monospace;margin-top:2px;word-break:break-all">${esc(s.file_path)}</div>
        </div>
        <div>
          <span style="font-size:12px;color:var(--text-muted)">${esc(t('db.size'))}</span>
          <div style="font-size:13px;margin-top:2px">${fmtBytes(s.file_size_bytes)}</div>
        </div>
        <div>
          <span style="font-size:12px;color:var(--text-muted)">${esc(t('db.total_visits'))}</span>
          <div style="font-size:20px;font-weight:700;color:var(--accent);margin-top:2px">${s.total_visits.toLocaleString()}</div>
        </div>
        <div>
          <span style="font-size:12px;color:var(--text-muted)">${esc(t('db.date_range'))}</span>
          <div style="font-size:13px;margin-top:2px">${fmtDate(s.min_time)} → ${fmtDate(s.max_time)}</div>
        </div>
      </div>
      <h3 style="font-size:13px;font-weight:600;margin-bottom:8px">${esc(t('db.import_history'))}</h3>
      <div style="overflow-x:auto">
        <table>
          <thead><tr><th>${esc(t('db.source_file'))}</th><th>${esc(t('db.last_backup'))}</th></tr></thead>
          <tbody>
            ${s.import_records.length === 0
              ? `<tr><td colspan="2" style="color:var(--text-muted);text-align:center">${esc(t('db.no_backups'))}</td></tr>`
              : s.import_records.map(r => `
                <tr>
                  <td style="font-family:monospace;font-size:12px">${esc(r.data_path)}</td>
                  <td style="font-size:12px;color:var(--text-muted)">${fmtDate(r.last_import)}</td>
                </tr>`).join('')}
          </tbody>
        </table>
      </div>`
  } catch (e) {
    document.getElementById('status-content').innerHTML =
      `<p style="color:red">${esc(t('db.failed_to_load'))}${esc(e.message)}</p>`
  }
}

loadStatus()
document.getElementById('refresh-status').addEventListener('click', loadStatus)

let pollTimer = null

document.getElementById('start-backup').addEventListener('click', async () => {
  const files = document.getElementById('extra-files').value
    .split('\n').map(s => s.trim()).filter(Boolean)
  const disable_detect = document.getElementById('disable-detect').checked
  const dry_run = document.getElementById('dry-run').checked

  document.getElementById('start-backup').disabled = true
  document.getElementById('backup-progress').style.display = 'block'
  document.getElementById('backup-log').textContent = ''
  document.getElementById('backup-summary').style.display = 'none'

  const badge = document.getElementById('backup-status-badge')
  const statusText = document.getElementById('backup-status-text')
  badge.textContent = t('db.status_running')
  badge.style.background = 'var(--accent)'
  statusText.textContent = t('db.progress_text_running')

  const res = await fetch('/api/backup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ files, disable_detect, dry_run }),
  })
  const { job_id } = await res.json()

  let lastLineCount = 0
  pollTimer = setInterval(async () => {
    const poll = await fetch(`/api/backup/${job_id}`)
    const data = await poll.json()
    const logEl = document.getElementById('backup-log')
    if (data.log_lines.length > lastLineCount) {
      logEl.textContent = data.log_lines.join('\n')
      logEl.scrollTop = logEl.scrollHeight
      lastLineCount = data.log_lines.length
    }
    if (data.status === 'done' || data.status === 'error') {
      clearInterval(pollTimer)
      document.getElementById('start-backup').disabled = false
      badge.textContent = data.status === 'done' ? t('db.status_done') : t('db.status_error')
      badge.style.background = data.status === 'done' ? '#16a34a' : '#dc2626'
      statusText.textContent = data.status === 'done' ? t('db.progress_text_done') : t('db.progress_text_failed')
      if (data.summary) {
        const s = data.summary
        const summaryEl = document.getElementById('backup-summary')
        summaryEl.style.display = 'block'
        summaryEl.innerHTML = s.error
          ? `<span style="color:red">Error: ${esc(s.error)}</span>`
          : `${esc(t('db.summary_found'))} <strong>${s.found}</strong> &nbsp; ${esc(t('db.summary_imported'))} <strong>${s.imported}</strong> &nbsp; ${esc(t('db.summary_duplicates'))} <strong>${s.duplicated}</strong> &nbsp; ${esc(t('db.summary_failed_files'))} <strong>${s.failed}</strong>`
      }
      if (data.status === 'done') loadStatus()
    }
  }, 1000)
})
