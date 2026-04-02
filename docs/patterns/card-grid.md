# Card Grid

A responsive grid of cards showing different content types. Demonstrates how Lexicon components compose inside Card containers. Three columns on desktop, two on tablet, one on mobile.

<div class="component-preview">
<div class="lex-pattern-cardgrid">

  <div class="lex-card lex-card--elevated">
    <div class="lex-card__media" style="background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%); height: 120px; border-radius: 8px 8px 0 0;"></div>
    <div class="lex-card__body">
      <h4 class="lex-card__title">Design Tokens</h4>
      <p class="lex-card__desc">419 tokens across colour, type, spacing, radii, shadows, and motion. One source of truth for every surface.</p>
      <div style="display: flex; gap: 6px; margin-top: 8px;">
        <span class="lex-badge lex-badge--info">CSS</span>
        <span class="lex-badge lex-badge--info">Tailwind</span>
        <span class="lex-badge lex-badge--info">Figma</span>
      </div>
    </div>
  </div>

  <div class="lex-card lex-card--elevated">
    <div class="lex-card__body">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div class="lex-avatar lex-avatar--md" style="background: var(--color-purple-500); color: #fff; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; font-weight: 600; font-size: 14px;">JP</div>
        <div>
          <h4 class="lex-card__title" style="margin: 0;">Jonathan Pace</h4>
          <span style="font-size: 12px; color: var(--vp-c-text-3);">Product Designer</span>
        </div>
      </div>
      <p class="lex-card__desc">Building design systems and developer tools at the pace.</p>
      <div style="display: flex; gap: 6px; margin-top: 8px;">
        <span class="lex-status-indicator lex-status-indicator--online"></span>
        <span style="font-size: 12px; color: var(--vp-c-text-3);">Online</span>
      </div>
    </div>
  </div>

  <div class="lex-card lex-card--elevated">
    <div class="lex-card__body" style="text-align: center;">
      <div style="font-size: 36px; font-weight: 700; color: var(--vp-c-text-1); margin-bottom: 4px;">2,847</div>
      <div style="font-size: 13px; color: var(--vp-c-text-3); margin-bottom: 12px;">Downloads this week</div>
      <div style="display: flex; align-items: center; justify-content: center; gap: 4px; font-size: 13px; font-weight: 500; color: #22C55E;">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 12V4M5 7l3-3 3 3"/></svg>
        +18.2%
      </div>
    </div>
  </div>

  <div class="lex-card lex-card--elevated">
    <div class="lex-card__body">
      <h4 class="lex-card__title">Quick Actions</h4>
      <p class="lex-card__desc" style="margin-bottom: 12px;">Common tasks you can do right now.</p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="lex-button lex-button--primary lex-button--sm" style="width: 100%;">Create Project</button>
        <button class="lex-button lex-button--secondary lex-button--sm" style="width: 100%;">Import Data</button>
        <button class="lex-button lex-button--ghost lex-button--sm" style="width: 100%;">View Documentation</button>
      </div>
    </div>
  </div>

  <div class="lex-card lex-card--elevated">
    <div class="lex-card__body">
      <h4 class="lex-card__title">Recent Activity</h4>
      <div class="lex-pattern-activity-list">
        <div class="lex-pattern-activity-item">
          <span class="lex-badge lex-badge--success" style="font-size: 11px;">Deployed</span>
          <span>v1.0.0 released to production</span>
        </div>
        <div class="lex-pattern-activity-item">
          <span class="lex-badge lex-badge--info" style="font-size: 11px;">Updated</span>
          <span>Token documentation refreshed</span>
        </div>
        <div class="lex-pattern-activity-item">
          <span class="lex-badge lex-badge--warning" style="font-size: 11px;">Review</span>
          <span>PR #42 awaiting approval</span>
        </div>
      </div>
    </div>
  </div>

  <div class="lex-card lex-card--elevated">
    <div class="lex-card__body">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <h4 class="lex-card__title" style="margin: 0;">Storage</h4>
        <span style="font-size: 12px; color: var(--vp-c-text-3);">68%</span>
      </div>
      <div class="lex-progress lex-progress--md" style="margin-bottom: 12px;">
        <div class="lex-progress__track">
          <div class="lex-progress__fill" style="width: 68%; background: var(--color-purple-500);"></div>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--vp-c-text-3);">
        <span>6.8 GB used</span>
        <span>10 GB total</span>
      </div>
    </div>
  </div>

</div>
</div>

## Components used

- [Card](/components/card), [Badge](/components/badge), [Button](/components/button)
- [Avatar](/components/avatar), [Progress Bar](/components/progress)
- [Status Indicator](/components/status-indicator)

## Key implementation details

- CSS Grid with `repeat(auto-fill, minmax(280px, 1fr))` for automatic responsive columns
- Each card demonstrates a different content pattern: media, profile, stat, action, activity, metric
- Cards use equal-height rows via grid stretching
- Content within cards uses flex layout for consistent spacing
