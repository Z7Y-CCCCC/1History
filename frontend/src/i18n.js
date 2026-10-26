export const translations = {
  en: {
    // Nav
    'nav.brand': '1History',
    'nav.search_placeholder': 'Search...',
    'nav.search_btn': 'Search',
    'nav.list_btn': 'List',
    'nav.db': 'Database',
    'nav.db_management': 'Database Management',
    'nav.theme_toggle': 'Toggle theme',
    'nav.yesterday': '← Yesterday',
    'nav.tomorrow': 'Tomorrow →',
    'nav.filter_placeholder': 'Filter...',
    'nav.results_count': '{count} results',

    // Index KPI
    'kpi.total_visits': 'Total Visits',
    'kpi.unique_urls': 'Unique URLs',
    'kpi.active_days': 'Active Days',
    'kpi.today': 'Today',

    // Charts
    'chart.daily_pv': 'Daily Page Views',
    'chart.top10_pages': 'Top 10 Pages',
    'chart.top10_domains': 'Top 10 Domains',
    'chart.pv': 'Page View',
    'chart.pv_label': 'PV',

    // Index Tables
    'table.top100_title': 'TOP 100 by title',
    'table.top100_domain': 'TOP 100 by domain',
    'table.count': 'Count',
    'table.title': 'Title',
    'table.domain': 'Domain',
    'table.time': 'Time',

    // DB page
    'db.status_title': 'Database Status',
    'db.refresh': 'Refresh',
    'db.loading': 'Loading...',
    'db.file': 'File',
    'db.size': 'Size',
    'db.total_visits': 'Total visits',
    'db.date_range': 'Date range',
    'db.import_history': 'Import History',
    'db.source_file': 'Source File',
    'db.last_backup': 'Last Backup',
    'db.no_backups': 'No backups yet',
    'db.failed_to_load': 'Failed to load: ',
    'db.backup_title': 'Backup',
    'db.extra_files_label': 'Extra history files (one path per line)',
    'db.extra_files_placeholder': '/path/to/History\n/path/to/places.sqlite',
    'db.disable_detect': 'Disable auto-detect',
    'db.dry_run': 'Dry run',
    'db.start_backup': 'Start Backup',
    'db.status_running': 'running',
    'db.status_done': 'done',
    'db.status_error': 'error',
    'db.progress_text_running': 'Backup in progress...',
    'db.progress_text_done': 'Backup completed.',
    'db.progress_text_failed': 'Backup failed.',
    'db.summary_found': 'Found:',
    'db.summary_imported': 'Imported:',
    'db.summary_duplicates': 'Duplicates:',
    'db.summary_failed_files': 'Failed files:',
    'db.auto_backup_title': 'Daily Auto Backup (12:00 PM)',
    'db.auto_backup_desc': 'Automatically backup browser history every day at 12:00 PM in background',
    'db.auto_backup_status_on': 'Automatic backup is enabled (Daily at 12:00)',
    'db.auto_backup_status_off': 'Automatic backup is disabled',

    // Search page
    'search.filter_placeholder': 'Filter results...',
    'search.records_count': '{count} records',
  },
  zh: {
    // Nav
    'nav.brand': '1History',
    'nav.search_placeholder': '搜索...',
    'nav.search_btn': '搜索',
    'nav.list_btn': '列表',
    'nav.db': '数据库',
    'nav.db_management': '数据库管理',
    'nav.theme_toggle': '切换主题',
    'nav.yesterday': '← 前一天',
    'nav.tomorrow': '后一天 →',
    'nav.filter_placeholder': '筛选...',
    'nav.results_count': '{count} 条结果',

    // Index KPI
    'kpi.total_visits': '总访问量',
    'kpi.unique_urls': '独立 URL',
    'kpi.active_days': '活跃天数',
    'kpi.today': '今日访问',

    // Charts
    'chart.daily_pv': '每日浏览量 (PV)',
    'chart.top10_pages': '前 10 热门页面',
    'chart.top10_domains': '前 10 热门域名',
    'chart.pv': '浏览量',
    'chart.pv_label': 'PV',

    // Index Tables
    'table.top100_title': '按标题排行 TOP 100',
    'table.top100_domain': '按域名排行 TOP 100',
    'table.count': '访问次数',
    'table.title': '标题',
    'table.domain': '域名',
    'table.time': '时间',

    // DB page
    'db.status_title': '数据库状态',
    'db.refresh': '刷新',
    'db.loading': '加载中...',
    'db.file': '文件路径',
    'db.size': '文件大小',
    'db.total_visits': '总访问记录',
    'db.date_range': '时间跨度',
    'db.import_history': '导入历史',
    'db.source_file': '数据源文件',
    'db.last_backup': '最近备份时间',
    'db.no_backups': '暂无备份记录',
    'db.failed_to_load': '加载失败: ',
    'db.backup_title': '数据备份',
    'db.extra_files_label': '自定义历史文件路径（每行一个路径）',
    'db.extra_files_placeholder': '/path/to/History\n/path/to/places.sqlite',
    'db.disable_detect': '禁用自动检测',
    'db.dry_run': '试运行（不写入数据库）',
    'db.start_backup': '开始备份',
    'db.status_running': '运行中',
    'db.status_done': '已完成',
    'db.status_error': '出错',
    'db.progress_text_running': '正在备份中...',
    'db.progress_text_done': '备份已完成。',
    'db.progress_text_failed': '备份失败。',
    'db.summary_found': '发现:',
    'db.summary_imported': '已导入:',
    'db.summary_duplicates': '重复跳过:',
    'db.summary_failed_files': '失败文件:',
    'db.auto_backup_title': '每日自动后台备份 (12:00)',
    'db.auto_backup_desc': '每天中午 12:00 自动在后台静默抓取 Edge 与 Chrome 历史',
    'db.auto_backup_status_on': '已开启 (每天 12:00 自动备份)',
    'db.auto_backup_status_off': '已关闭',

    // Search page
    'search.filter_placeholder': '过滤结果...',
    'search.records_count': '{count} 条记录',
  },
}

export function getLang() {
  const saved = localStorage.getItem('1history-lang')
  if (saved && (saved === 'zh' || saved === 'en')) return saved
  return (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('zh')) ? 'zh' : 'en'
}

export function setLang(lang) {
  localStorage.setItem('1history-lang', lang)
}

export function t(key, params = {}, lang = getLang()) {
  let text = (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]) || key
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v)
  }
  return text
}

export function applyI18n(lang = getLang()) {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.classList.add('notranslate');
  }
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    el.textContent = t(key, {}, lang)
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder')
    el.setAttribute('placeholder', t(key, {}, lang))
  })
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title')
    el.setAttribute('title', t(key, {}, lang))
  })
}

export function setupLangToggle(onLangChange) {
  const btn = document.getElementById('lang-toggle')
  if (!btn) return
  const updateBtnText = (lang) => {
    btn.textContent = lang === 'zh' ? 'EN' : '中文'
    btn.title = lang === 'zh' ? 'Switch to English' : '切换至中文'
  }
  updateBtnText(getLang())
  btn.addEventListener('click', () => {
    const next = getLang() === 'zh' ? 'en' : 'zh'
    setLang(next)
    updateBtnText(next)
    applyI18n(next)
    if (onLangChange) {
      onLangChange(next)
    }
  })
}
