<button
  class="kuc-dropdown__toggle"
  id="${this._GUID}-toggle"
  aria-haspopup="true"
  aria-labelledby="${this._GUID}-label ${this._GUID}-toggle"
  aria-describedby="${this._GUID}-error"
  aria-required=${this.requiredIcon}
  ?disabled="${this.disabled}"
  @change="${this._handleClickDropdownToggle}"
  @focus="${this._handleBlurDropdownToggle}"
  @keydown="${this._handleKeyDownDropdownToggle}"
>