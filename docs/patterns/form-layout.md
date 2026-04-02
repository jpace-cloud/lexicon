# Form Layout

A realistic form combining multiple Lexicon input components with validation states. Responsive: two columns on desktop, single column on mobile.

<div class="component-preview">
<div class="lex-pattern-form">
  <div class="lex-pattern-form__row">
    <div class="lex-input-group">
      <label class="lex-label">First name</label>
      <input class="lex-input lex-input--md" type="text" value="Jonathan" />
      <span class="lex-helper lex-helper--success"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8.5l3.5 3.5 6.5-7"/></svg> Looks good</span>
    </div>
    <div class="lex-input-group">
      <label class="lex-label">Last name</label>
      <input class="lex-input lex-input--md" type="text" value="Pace" />
      <span class="lex-helper lex-helper--success"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8.5l3.5 3.5 6.5-7"/></svg> Looks good</span>
    </div>
  </div>
  <div class="lex-pattern-form__row">
    <div class="lex-input-group lex-input-group--full">
      <label class="lex-label">Email</label>
      <input class="lex-input lex-input--md lex-input--error" type="email" value="jonathan@" />
      <span class="lex-helper lex-helper--error"><svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M8 5v3M8 10.5v.5"/></svg> Enter a valid email address</span>
    </div>
  </div>
  <div class="lex-pattern-form__row">
    <div class="lex-input-group">
      <label class="lex-label">Role</label>
      <div class="lex-select-wrapper">
        <select class="lex-select lex-select--md">
          <option>Designer</option>
          <option selected>Developer</option>
          <option>Manager</option>
        </select>
        <svg class="lex-select-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
      </div>
    </div>
    <div class="lex-input-group">
      <label class="lex-label">Team size</label>
      <div class="lex-select-wrapper">
        <select class="lex-select lex-select--md">
          <option>1–5</option>
          <option selected>6–20</option>
          <option>21–50</option>
          <option>50+</option>
        </select>
        <svg class="lex-select-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6l4 4 4-4"/></svg>
      </div>
    </div>
  </div>
  <div class="lex-input-group lex-input-group--full">
    <label class="lex-label">Bio</label>
    <textarea class="lex-textarea" rows="3" placeholder="Tell us about yourself..."></textarea>
    <span class="lex-helper">0 / 280 characters</span>
  </div>
  <div class="lex-pattern-form__row">
    <div class="lex-input-group lex-input-group--full">
      <div class="lex-checkbox-row">
        <input type="checkbox" class="lex-checkbox" id="pf-terms" checked />
        <label for="pf-terms">I agree to the terms and conditions</label>
      </div>
      <div class="lex-radio-group">
        <span class="lex-label" style="margin-bottom: 4px;">Preferred contact</span>
        <label class="lex-radio-label"><input type="radio" class="lex-radio" name="pf-contact" checked /> Email</label>
        <label class="lex-radio-label"><input type="radio" class="lex-radio" name="pf-contact" /> Phone</label>
        <label class="lex-radio-label"><input type="radio" class="lex-radio" name="pf-contact" /> Slack</label>
      </div>
    </div>
  </div>
  <div class="lex-pattern-form__actions">
    <button class="lex-button lex-button--secondary lex-button--md">Cancel</button>
    <button class="lex-button lex-button--primary lex-button--md">Save Profile</button>
  </div>
</div>
</div>

## Components used

- [Input](/components/input), [Textarea](/components/textarea), [Select](/components/select)
- [Checkbox](/components/checkbox), [Radio](/components/radio)
- [Button](/components/button)

## Key implementation details

- Two-column grid on desktop (`grid-template-columns: 1fr 1fr`), collapses to single column below 640px
- Validation states shown inline: success (green check), error (red with message)
- Form actions right-aligned with secondary + primary button pair
- All inputs use consistent `--md` sizing for visual rhythm
