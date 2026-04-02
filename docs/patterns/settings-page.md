# Settings Page

A realistic settings page combining sidebar navigation, section headers, form controls, and action buttons.

<div class="component-preview">
<div class="lex-pattern-settings">
  <aside class="lex-pattern-settings__nav">
    <nav class="lex-sidebar-nav">
      <a class="lex-sidebar-nav__item lex-sidebar-nav__item--active" href="javascript:void(0)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
        Profile
      </a>
      <a class="lex-sidebar-nav__item" href="javascript:void(0)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Security
      </a>
      <a class="lex-sidebar-nav__item" href="javascript:void(0)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        Notifications
      </a>
      <a class="lex-sidebar-nav__item" href="javascript:void(0)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        Preferences
      </a>
    </nav>
  </aside>
  <main class="lex-pattern-settings__content">
    <div class="lex-pattern-settings__section">
      <h3 class="lex-pattern-settings__heading">Profile information</h3>
      <p class="lex-pattern-settings__desc">Update your name and email address.</p>
      <div class="lex-pattern-form__row">
        <div class="lex-input-group">
          <label class="lex-label">Display name</label>
          <input class="lex-input lex-input--md" type="text" value="Jonathan Pace" />
        </div>
        <div class="lex-input-group">
          <label class="lex-label">Email</label>
          <input class="lex-input lex-input--md" type="email" value="jonathan@thepace.io" />
        </div>
      </div>
    </div>
    <div class="lex-divider lex-divider--horizontal"></div>
    <div class="lex-pattern-settings__section">
      <h3 class="lex-pattern-settings__heading">Notifications</h3>
      <p class="lex-pattern-settings__desc">Choose what you want to be notified about.</p>
      <div class="lex-pattern-settings__toggle-row">
        <div>
          <div class="lex-pattern-settings__toggle-label">Email notifications</div>
          <div class="lex-pattern-settings__toggle-desc">Receive email updates for activity on your projects.</div>
        </div>
        <label class="lex-toggle"><input type="checkbox" checked /><span class="lex-toggle__track"><span class="lex-toggle__thumb"></span></span></label>
      </div>
      <div class="lex-pattern-settings__toggle-row">
        <div>
          <div class="lex-pattern-settings__toggle-label">Push notifications</div>
          <div class="lex-pattern-settings__toggle-desc">Receive push notifications on your mobile device.</div>
        </div>
        <label class="lex-toggle"><input type="checkbox" /><span class="lex-toggle__track"><span class="lex-toggle__thumb"></span></span></label>
      </div>
      <div class="lex-pattern-settings__toggle-row">
        <div>
          <div class="lex-pattern-settings__toggle-label">Weekly digest</div>
          <div class="lex-pattern-settings__toggle-desc">Get a summary email every Monday morning.</div>
        </div>
        <label class="lex-toggle"><input type="checkbox" checked /><span class="lex-toggle__track"><span class="lex-toggle__thumb"></span></span></label>
      </div>
    </div>
    <div class="lex-divider lex-divider--horizontal"></div>
    <div class="lex-pattern-settings__actions">
      <button class="lex-button lex-button--secondary lex-button--md">Cancel</button>
      <button class="lex-button lex-button--primary lex-button--md">Save changes</button>
    </div>
  </main>
</div>
</div>

## Components used

- [Sidebar Nav](/components/sidebar-nav), [Toggle](/components/toggle)
- [Input](/components/input), [Divider](/components/divider)
- [Button](/components/button)

## Key implementation details

- Sidebar + content area layout using CSS Grid
- Sidebar collapses to horizontal tabs on mobile
- Each settings section separated by a divider
- Toggle rows have label + description on left, switch on right
- Save/Cancel actions pinned to the bottom of the content area
