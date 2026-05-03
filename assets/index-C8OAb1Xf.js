import { i as g, r as m, a as x, b as l } from "./state-B82jP9eE.js";
import {
  p as O,
  s as j,
  t as P,
  i as y,
  r as v,
  a as k,
  b as C,
  O as c,
  e as T,
} from "./index-BXddtMGj.js";
import { n as U, c as f } from "./index-BKufv8n1.js";
import { o as B } from "./if-defined-Crp9voik.js";
import { e as E, n as L } from "./ref-DW5yp8T7.js";
import "./index-D8xqqY-u.js";
import { R as W } from "./ConstantsUtil-Dmg8YACJ.js";
const u = O({ isLegalCheckboxChecked: !1 }),
  b = {
    state: u,
    subscribe(n) {
      return P(u, () => n(u));
    },
    subscribeKey(n, e) {
      return j(u, n, e);
    },
    setIsLegalCheckboxChecked(n) {
      u.isLegalCheckboxChecked = n;
    },
  },
  F = y`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;
var $ = function (n, e, r, o) {
  var i = arguments.length,
    t =
      i < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(n, e, r, o);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (t = (i < 3 ? s(t) : i > 3 ? s(e, r, t) : s(e, r)) || t);
  return i > 3 && t && Object.defineProperty(e, r, t), t;
};
let p = class extends k {
  constructor() {
    super(...arguments), (this.inputElementRef = E()), (this.checked = void 0);
  }
  render() {
    return C`
      <label>
        <input
          ${L(this.inputElementRef)}
          ?checked=${B(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `;
  }
  dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("checkboxChange", {
        detail: this.inputElementRef.value?.checked,
        bubbles: !0,
        composed: !0,
      })
    );
  }
};
p.styles = [v, F];
$([U({ type: Boolean })], p.prototype, "checked", void 0);
p = $([f("wui-checkbox")], p);
const D = g`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;
var _ = function (n, e, r, o) {
  var i = arguments.length,
    t =
      i < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(n, e, r, o);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (t = (i < 3 ? s(t) : i > 3 ? s(e, r, t) : s(e, r)) || t);
  return i > 3 && t && Object.defineProperty(e, r, t), t;
};
let h = class extends x {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.checked = b.state.isLegalCheckboxChecked),
      this.unsubscribe.push(
        b.subscribeKey("isLegalCheckboxChecked", (e) => {
          this.checked = e;
        })
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: r } = c.state,
      o = c.state.features?.legalCheckbox;
    return (!e && !r) || !o
      ? null
      : l`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: r } = c.state;
    return e && r ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = c.state;
    return e
      ? l`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`
      : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = c.state;
    return e
      ? l`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`
      : null;
  }
  onCheckboxChange() {
    b.setIsLegalCheckboxChecked(!this.checked);
  }
};
h.styles = [D];
_([m()], h.prototype, "checked", void 0);
h = _([f("w3m-legal-checkbox")], h);
const I = y`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;
var K = function (n, e, r, o) {
  var i = arguments.length,
    t =
      i < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(n, e, r, o);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (t = (i < 3 ? s(t) : i > 3 ? s(e, r, t) : s(e, r)) || t);
  return i > 3 && t && Object.defineProperty(e, r, t), t;
};
let w = class extends k {
  render() {
    return C`
      <a
        data-testid="ux-branding-reown"
        href=${W}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0", "0", "l", "0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `;
  }
};
w.styles = [v, T, I];
w = K([f("wui-ux-by-reown")], w);
const S = g`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;
var R = function (n, e, r, o) {
  var i = arguments.length,
    t =
      i < 3 ? e : o === null ? (o = Object.getOwnPropertyDescriptor(e, r)) : o,
    s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(n, e, r, o);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (t = (i < 3 ? s(t) : i > 3 ? s(e, r, t) : s(e, r)) || t);
  return i > 3 && t && Object.defineProperty(e, r, t), t;
};
let d = class extends x {
  constructor() {
    super(),
      (this.unsubscribe = []),
      (this.remoteFeatures = c.state.remoteFeatures),
      this.unsubscribe.push(
        c.subscribeKey("remoteFeatures", (e) => (this.remoteFeatures = e))
      );
  }
  disconnectedCallback() {
    this.unsubscribe.forEach((e) => e());
  }
  render() {
    const { termsConditionsUrl: e, privacyPolicyUrl: r } = c.state,
      o = c.state.features?.legalCheckbox;
    return (!e && !r) || o
      ? l`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(
          !0
        )} </wui-flex>
      `
      : l`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m", "s", "s", "s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `;
  }
  andTemplate() {
    const { termsConditionsUrl: e, privacyPolicyUrl: r } = c.state;
    return e && r ? "and" : "";
  }
  termsTemplate() {
    const { termsConditionsUrl: e } = c.state;
    return e
      ? l`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`
      : null;
  }
  privacyTemplate() {
    const { privacyPolicyUrl: e } = c.state;
    return e
      ? l`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`
      : null;
  }
  reownBrandingTemplate(e = !1) {
    return this.remoteFeatures?.reownBranding
      ? e
        ? l`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`
        : l`<wui-ux-by-reown></wui-ux-by-reown>`
      : null;
  }
};
d.styles = [S];
R([m()], d.prototype, "remoteFeatures", void 0);
d = R([f("w3m-legal-footer")], d);
export { b as O };
