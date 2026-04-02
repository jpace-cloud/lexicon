# Data Table with Actions

A composed data table with search toolbar, sortable columns, row selection, action buttons, badges, and pagination.

<div class="component-preview">
<div class="lex-pattern-datatable">
  <div class="lex-pattern-datatable__toolbar">
    <div class="lex-search-input">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
      <input type="text" placeholder="Search users..." class="lex-input lex-input--sm" />
    </div>
    <div class="lex-pattern-datatable__toolbar-actions">
      <button class="lex-button lex-button--secondary lex-button--sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
        Filter
      </button>
      <button class="lex-button lex-button--primary lex-button--sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        Add User
      </button>
    </div>
  </div>
  <div class="lex-table-wrapper">
    <table class="lex-table lex-table--striped">
      <thead>
        <tr>
          <th style="width:40px"><input type="checkbox" class="lex-checkbox" /></th>
          <th>Name <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: -1px; opacity: 0.4;"><path d="M4 6l4 4 4-4"/></svg></th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th style="width:80px">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" class="lex-checkbox" checked /></td>
          <td><strong>Alice Martin</strong></td>
          <td>alice@example.com</td>
          <td>Admin</td>
          <td><span class="lex-badge lex-badge--success">Active</span></td>
          <td><button class="lex-button lex-button--ghost lex-button--sm" style="padding:0 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="lex-checkbox" /></td>
          <td><strong>Ben Torres</strong></td>
          <td>ben@example.com</td>
          <td>Editor</td>
          <td><span class="lex-badge lex-badge--success">Active</span></td>
          <td><button class="lex-button lex-button--ghost lex-button--sm" style="padding:0 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="lex-checkbox" /></td>
          <td><strong>Clara Hughes</strong></td>
          <td>clara@example.com</td>
          <td>Viewer</td>
          <td><span class="lex-badge lex-badge--warning">Pending</span></td>
          <td><button class="lex-button lex-button--ghost lex-button--sm" style="padding:0 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="lex-checkbox" /></td>
          <td><strong>David Kim</strong></td>
          <td>david@example.com</td>
          <td>Editor</td>
          <td><span class="lex-badge lex-badge--error">Inactive</span></td>
          <td><button class="lex-button lex-button--ghost lex-button--sm" style="padding:0 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button></td>
        </tr>
        <tr>
          <td><input type="checkbox" class="lex-checkbox" /></td>
          <td><strong>Eva Lindgren</strong></td>
          <td>eva@example.com</td>
          <td>Admin</td>
          <td><span class="lex-badge lex-badge--success">Active</span></td>
          <td><button class="lex-button lex-button--ghost lex-button--sm" style="padding:0 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="lex-pattern-datatable__footer">
    <span class="lex-pattern-datatable__count">1 of 5 selected</span>
    <div class="lex-pagination">
      <button class="lex-pagination__btn" disabled>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 4l-4 4 4 4"/></svg>
      </button>
      <button class="lex-pagination__btn lex-pagination__btn--active">1</button>
      <button class="lex-pagination__btn">2</button>
      <button class="lex-pagination__btn">3</button>
      <button class="lex-pagination__btn">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4l4 4-4 4"/></svg>
      </button>
    </div>
  </div>
</div>
</div>

## Components used

- [Table](/components/table), [Checkbox](/components/checkbox), [Badge](/components/badge)
- [Input](/components/input) (search), [Button](/components/button)
- [Pagination](/components/pagination)

## Key implementation details

- Toolbar with search input + action buttons above the table
- Column headers with sort indicator icons
- Row selection via checkboxes with "selected" counter in footer
- Status column uses Badge variants (success, warning, error)
- Pagination in the footer with prev/next arrows and page numbers
- Table scrolls horizontally on small screens
