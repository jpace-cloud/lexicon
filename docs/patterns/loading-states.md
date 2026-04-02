# Loading States

Demonstrates the transition from loading (skeleton) to empty state (no data) to populated state (real content). Shows how feedback components compose with data display.

## Loading (Skeleton)

<div class="component-preview">
<div class="lex-pattern-loading-card">
  <div class="lex-skeleton lex-skeleton--circle" style="width: 40px; height: 40px;"></div>
  <div style="flex: 1;">
    <div class="lex-skeleton lex-skeleton--text" style="width: 60%; height: 14px; margin-bottom: 8px;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 40%; height: 12px;"></div>
  </div>
</div>
<div class="lex-pattern-loading-card">
  <div class="lex-skeleton lex-skeleton--circle" style="width: 40px; height: 40px;"></div>
  <div style="flex: 1;">
    <div class="lex-skeleton lex-skeleton--text" style="width: 75%; height: 14px; margin-bottom: 8px;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 50%; height: 12px;"></div>
  </div>
</div>
<div class="lex-pattern-loading-card">
  <div class="lex-skeleton lex-skeleton--circle" style="width: 40px; height: 40px;"></div>
  <div style="flex: 1;">
    <div class="lex-skeleton lex-skeleton--text" style="width: 55%; height: 14px; margin-bottom: 8px;"></div>
    <div class="lex-skeleton lex-skeleton--text" style="width: 35%; height: 12px;"></div>
  </div>
</div>
</div>

## Empty State

<div class="component-preview">
<div class="lex-empty-state">
  <div class="lex-empty-state__icon">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  </div>
  <h3 class="lex-empty-state__title">No team members yet</h3>
  <p class="lex-empty-state__desc">Invite your first team member to get started collaborating.</p>
  <button class="lex-button lex-button--primary lex-button--md">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
    Invite Member
  </button>
</div>
</div>

## Populated State

<div class="component-preview">
<div class="lex-pattern-populated-list">
  <div class="lex-pattern-populated-item">
    <div class="lex-avatar lex-avatar--md" style="background: #7C3AED; color: #fff; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; font-weight: 600; font-size: 13px;">AM</div>
    <div style="flex: 1;">
      <div style="font-weight: 500; font-size: 14px;">Alice Martin</div>
      <div style="font-size: 12px; color: var(--vp-c-text-3);">alice@example.com</div>
    </div>
    <span class="lex-badge lex-badge--success">Admin</span>
  </div>
  <div class="lex-pattern-populated-item">
    <div class="lex-avatar lex-avatar--md" style="background: #0D9488; color: #fff; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; font-weight: 600; font-size: 13px;">BT</div>
    <div style="flex: 1;">
      <div style="font-weight: 500; font-size: 14px;">Ben Torres</div>
      <div style="font-size: 12px; color: var(--vp-c-text-3);">ben@example.com</div>
    </div>
    <span class="lex-badge lex-badge--info">Editor</span>
  </div>
  <div class="lex-pattern-populated-item">
    <div class="lex-avatar lex-avatar--md" style="background: #EA580C; color: #fff; display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; font-weight: 600; font-size: 13px;">CH</div>
    <div style="flex: 1;">
      <div style="font-weight: 500; font-size: 14px;">Clara Hughes</div>
      <div style="font-size: 12px; color: var(--vp-c-text-3);">clara@example.com</div>
    </div>
    <span class="lex-badge lex-badge--warning">Pending</span>
  </div>
</div>
</div>

## Components used

- [Skeleton](/components/skeleton), [Empty State](/components/empty-state)
- [Avatar](/components/avatar), [Badge](/components/badge)
- [Button](/components/button)

## Key implementation details

- **Loading**: Skeleton placeholders match the shape of real content (circle for avatar, text bars for name/email)
- **Empty**: Centred layout with icon, heading, description, and a primary CTA
- **Populated**: List items with avatar, text, and status badge — the real content that replaces the skeleton
- Transition order in real apps: Loading → Empty (if no data) or Populated (if data exists)
