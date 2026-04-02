# Dashboard Header

A top bar combining page title, breadcrumb navigation, and action buttons. Responsive: buttons collapse into a compact layout on mobile.

<div class="component-preview">
<div class="lex-pattern-dash-header">
  <div class="lex-pattern-dash-header__left">
    <nav class="lex-breadcrumbs">
      <a class="lex-breadcrumbs__item" href="javascript:void(0)">Home</a>
      <span class="lex-breadcrumbs__sep">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4l4 4-4 4"/></svg>
      </span>
      <a class="lex-breadcrumbs__item" href="javascript:void(0)">Projects</a>
      <span class="lex-breadcrumbs__sep">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4l4 4-4 4"/></svg>
      </span>
      <span class="lex-breadcrumbs__current">Analytics</span>
    </nav>
    <h2 class="lex-pattern-dash-header__title">Analytics Overview</h2>
  </div>
  <div class="lex-pattern-dash-header__actions">
    <button class="lex-button lex-button--secondary lex-button--sm">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
      Filter
    </button>
    <button class="lex-button lex-button--secondary lex-button--sm">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      Export
    </button>
    <button class="lex-button lex-button--primary lex-button--sm">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      New Report
    </button>
  </div>
</div>
</div>

## With stats row

<div class="component-preview">
<div class="lex-pattern-dash-header">
  <div class="lex-pattern-dash-header__left">
    <h2 class="lex-pattern-dash-header__title" style="margin-bottom: 0;">Dashboard</h2>
  </div>
  <div class="lex-pattern-dash-header__actions">
    <div class="lex-select-wrapper" style="min-width: 140px;">
      <select class="lex-select lex-select--sm">
        <option>Last 7 days</option>
        <option selected>Last 30 days</option>
        <option>Last 90 days</option>
      </select>
      <svg class="lex-select-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
    </div>
    <button class="lex-button lex-button--secondary lex-button--sm">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
      Export
    </button>
  </div>
</div>
<div class="lex-pattern-stats-row">
  <div class="lex-pattern-stat">
    <div class="lex-pattern-stat__label">Total Users</div>
    <div class="lex-pattern-stat__value">12,847</div>
    <div class="lex-pattern-stat__trend lex-pattern-stat__trend--up">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12V4M5 7l3-3 3 3"/></svg>
      +12.5%
    </div>
  </div>
  <div class="lex-pattern-stat">
    <div class="lex-pattern-stat__label">Active Sessions</div>
    <div class="lex-pattern-stat__value">1,024</div>
    <div class="lex-pattern-stat__trend lex-pattern-stat__trend--up">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12V4M5 7l3-3 3 3"/></svg>
      +4.1%
    </div>
  </div>
  <div class="lex-pattern-stat">
    <div class="lex-pattern-stat__label">Conversion Rate</div>
    <div class="lex-pattern-stat__value">3.24%</div>
    <div class="lex-pattern-stat__trend lex-pattern-stat__trend--down">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 4v8M5 9l3 3 3-3"/></svg>
      -0.8%
    </div>
  </div>
  <div class="lex-pattern-stat">
    <div class="lex-pattern-stat__label">Revenue</div>
    <div class="lex-pattern-stat__value">€48.2K</div>
    <div class="lex-pattern-stat__trend lex-pattern-stat__trend--up">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12V4M5 7l3-3 3 3"/></svg>
      +22.4%
    </div>
  </div>
</div>
</div>

## Components used

- [Breadcrumbs](/components/breadcrumbs), [Button](/components/button)
- [Select](/components/select), [Stat Block](/components/stat-block)

## Key implementation details

- Header uses `display: flex; justify-content: space-between` with wrapping on small screens
- Breadcrumbs sit above the page title for contextual navigation
- Action buttons group on the right; on mobile they wrap below the title
- Stats row uses CSS Grid with `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns
- Trend indicators use green (up) and red (down) with directional arrows
