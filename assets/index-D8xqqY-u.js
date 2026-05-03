const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/add-CrlE-BH9.js",
      "assets/index-BXddtMGj.js",
      "assets/all-wallets-DHfnR0ju.js",
      "assets/arrow-bottom-circle-e58k2jP5.js",
      "assets/app-store-BtbChWaa.js",
      "assets/apple-CI9_PGWu.js",
      "assets/arrow-bottom-JNXfqMHb.js",
      "assets/arrow-left-B-_ZWbKe.js",
      "assets/arrow-right-U3sqsZCW.js",
      "assets/arrow-top-CqKf1gd7.js",
      "assets/bank-DWISc3i5.js",
      "assets/browser-BLaGrlgq.js",
      "assets/bin-CrbjUvRM.js",
      "assets/bitcoin-D8PW6-R9.js",
      "assets/card-Br3vwItP.js",
      "assets/checkmark-BLPlfJp-.js",
      "assets/checkmark-bold-Cqa4iv1a.js",
      "assets/chevron-bottom-Xp30r6iP.js",
      "assets/chevron-left-B2vGnTWP.js",
      "assets/chevron-right-qMvVJn2S.js",
      "assets/chevron-top-Ctf06vj9.js",
      "assets/chrome-store-D7c0GS5j.js",
      "assets/clock-DURdgW3e.js",
      "assets/close-r0SU9SOi.js",
      "assets/compass-DvufsCEX.js",
      "assets/coinPlaceholder-DRFdyqtj.js",
      "assets/copy-Cy7FSygF.js",
      "assets/cursor-DmgpGT-t.js",
      "assets/cursor-transparent-BQMEZ732.js",
      "assets/circle-BR-y614Y.js",
      "assets/desktop-D9GnQks6.js",
      "assets/disconnect-BJtAX82v.js",
      "assets/discord-DzM6vDwm.js",
      "assets/download-BJyfblid.js",
      "assets/ethereum-CPHrywir.js",
      "assets/etherscan-zrfpAnI_.js",
      "assets/extension-COb6F3VM.js",
      "assets/external-link-bm6Wd8SF.js",
      "assets/facebook-DY8I5Abo.js",
      "assets/farcaster-CczuddZL.js",
      "assets/filters-C3bO5n70.js",
      "assets/github-Dm4Sd7LE.js",
      "assets/google-DSUypiKg.js",
      "assets/help-circle-mp7uy5xh.js",
      "assets/image-1VoaeKyR.js",
      "assets/id-_QI8P_xt.js",
      "assets/info-circle-C1MSfupt.js",
      "assets/lightbulb-Bg3RXVH5.js",
      "assets/mail-C1MQzcJk.js",
      "assets/mobile-G0j7F4tB.js",
      "assets/more-CMWBVazb.js",
      "assets/network-placeholder-BCUSA7xK.js",
      "assets/nftPlaceholder-DW2Z2fab.js",
      "assets/off-C-hyB9Mv.js",
      "assets/play-store-ChWGdTMe.js",
      "assets/plus-D6PrSwj-.js",
      "assets/qr-code-CSgMJeJt.js",
      "assets/recycle-horizontal-C3Fjn4x3.js",
      "assets/refresh-CQsX4DBI.js",
      "assets/search-BuGMyLxz.js",
      "assets/send-C4jXFMOu.js",
      "assets/swapHorizontal-CGGA1fiO.js",
      "assets/swapHorizontalMedium-BofRN2ny.js",
      "assets/swapHorizontalBold-D5FgHPjK.js",
      "assets/swapHorizontalRoundedBold-D_Xtior8.js",
      "assets/swapVertical-BvXJ7gxi.js",
      "assets/solana-CWDES5lF.js",
      "assets/telegram-CAGel3sm.js",
      "assets/three-dots-efQs3v0a.js",
      "assets/twitch-BlBeGRVk.js",
      "assets/x-B3_y-OMR.js",
      "assets/twitterIcon-ndrVebGh.js",
      "assets/user-Be0YUfK3.js",
      "assets/verify-DjgSjIC2.js",
      "assets/verify-filled-Di3kDBfi.js",
      "assets/wallet-BdtdwMmP.js",
      "assets/walletconnect-S2DSoBZN.js",
      "assets/wallet-placeholder-BlgC7sf_.js",
      "assets/warning-circle-7izYA19d.js",
      "assets/info-DLh12qu3.js",
      "assets/exclamation-triangle-BfS5qGbO.js",
      "assets/reown-logo-DsK1i44n.js",
      "assets/x-mark-DM2euYOq.js",
      "assets/dollar-7PyhqNs9.js",
    ])
) => i.map((i) => d[i]);
import {
  G as p,
  i as T,
  r as L,
  v as I,
  a as f,
  b as h,
  _ as a,
} from "./index-BXddtMGj.js";
import { i as O, t as V, e as D, n as d, c as $ } from "./index-BKufv8n1.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const C = (t) =>
    t === null || (typeof t != "object" && typeof t != "function"),
  b = (t) => t.strings === void 0;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const l = (t, r) => {
    const o = t._$AN;
    if (o === void 0) return !1;
    for (const i of o) i._$AO?.(r, !1), l(i, r);
    return !0;
  },
  g = (t) => {
    let r, o;
    do {
      if ((r = t._$AM) === void 0) break;
      (o = r._$AN), o.delete(t), (t = r);
    } while (o?.size === 0);
  },
  P = (t) => {
    for (let r; (r = t._$AM); t = r) {
      let o = r._$AN;
      if (o === void 0) r._$AN = o = new Set();
      else if (o.has(t)) break;
      o.add(t), B(r);
    }
  };
function k(t) {
  this._$AN !== void 0 ? (g(this), (this._$AM = t), P(this)) : (this._$AM = t);
}
function x(t, r = !1, o = 0) {
  const i = this._$AH,
    s = this._$AN;
  if (s !== void 0 && s.size !== 0)
    if (r)
      if (Array.isArray(i))
        for (let e = o; e < i.length; e++) l(i[e], !1), g(i[e]);
      else i != null && (l(i, !1), g(i));
    else l(this, t);
}
const B = (t) => {
  t.type == V.CHILD && ((t._$AP ??= x), (t._$AQ ??= k));
};
class z extends O {
  constructor() {
    super(...arguments), (this._$AN = void 0);
  }
  _$AT(r, o, i) {
    super._$AT(r, o, i), P(this), (this.isConnected = r._$AU);
  }
  _$AO(r, o = !0) {
    r !== this.isConnected &&
      ((this.isConnected = r),
      r ? this.reconnected?.() : this.disconnected?.()),
      o && (l(this, r), g(this));
  }
  setValue(r) {
    if (b(this._$Ct)) this._$Ct._$AI(r, this);
    else {
      const o = [...this._$Ct._$AH];
      (o[this._$Ci] = r), this._$Ct._$AI(o, this, 0);
    }
  }
  disconnected() {}
  reconnected() {}
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class H {
  constructor(r) {
    this.G = r;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(r) {
    this.G = r;
  }
  deref() {
    return this.G;
  }
}
class M {
  constructor() {
    (this.Y = void 0), (this.Z = void 0);
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ??= new Promise((r) => (this.Z = r));
  }
  resume() {
    this.Z?.(), (this.Y = this.Z = void 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const E = (t) => !C(t) && typeof t.then == "function",
  m = 1073741823;
class N extends z {
  constructor() {
    super(...arguments),
      (this._$Cwt = m),
      (this._$Cbt = []),
      (this._$CK = new H(this)),
      (this._$CX = new M());
  }
  render(...r) {
    return r.find((o) => !E(o)) ?? p;
  }
  update(r, o) {
    const i = this._$Cbt;
    let s = i.length;
    this._$Cbt = o;
    const e = this._$CK,
      c = this._$CX;
    this.isConnected || this.disconnected();
    for (let n = 0; n < o.length && !(n > this._$Cwt); n++) {
      const v = o[n];
      if (!E(v)) return (this._$Cwt = n), v;
      (n < s && v === i[n]) ||
        ((this._$Cwt = m),
        (s = 0),
        Promise.resolve(v).then(async (R) => {
          for (; c.get(); ) await c.get();
          const w = e.deref();
          if (w !== void 0) {
            const y = w._$Cbt.indexOf(v);
            y > -1 && y < w._$Cwt && ((w._$Cwt = y), w.setValue(R));
          }
        }));
    }
    return p;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
}
const j = D(N);
class F {
  constructor() {
    this.cache = new Map();
  }
  set(r, o) {
    this.cache.set(r, o);
  }
  get(r) {
    return this.cache.get(r);
  }
  has(r) {
    return this.cache.has(r);
  }
  delete(r) {
    this.cache.delete(r);
  }
  clear() {
    this.cache.clear();
  }
}
const S = new F(),
  G = T`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;
var u = function (t, r, o, i) {
  var s = arguments.length,
    e = s < 3 ? r : i,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    e = Reflect.decorate(t, r, o, i);
  else
    for (var n = t.length - 1; n >= 0; n--)
      (c = t[n]) && (e = (s < 3 ? c(e) : s > 3 ? c(r, o, e) : c(r, o)) || e);
  return s > 3 && e && Object.defineProperty(r, o, e), e;
};
const A = {
  add: async () =>
    (
      await a(async () => {
        const { addSvg: t } = await import("./add-CrlE-BH9.js");
        return { addSvg: t };
      }, __vite__mapDeps([0, 1]))
    ).addSvg,
  allWallets: async () =>
    (
      await a(async () => {
        const { allWalletsSvg: t } = await import("./all-wallets-DHfnR0ju.js");
        return { allWalletsSvg: t };
      }, __vite__mapDeps([2, 1]))
    ).allWalletsSvg,
  arrowBottomCircle: async () =>
    (
      await a(async () => {
        const { arrowBottomCircleSvg: t } = await import(
          "./arrow-bottom-circle-e58k2jP5.js"
        );
        return { arrowBottomCircleSvg: t };
      }, __vite__mapDeps([3, 1]))
    ).arrowBottomCircleSvg,
  appStore: async () =>
    (
      await a(async () => {
        const { appStoreSvg: t } = await import("./app-store-BtbChWaa.js");
        return { appStoreSvg: t };
      }, __vite__mapDeps([4, 1]))
    ).appStoreSvg,
  apple: async () =>
    (
      await a(async () => {
        const { appleSvg: t } = await import("./apple-CI9_PGWu.js");
        return { appleSvg: t };
      }, __vite__mapDeps([5, 1]))
    ).appleSvg,
  arrowBottom: async () =>
    (
      await a(async () => {
        const { arrowBottomSvg: t } = await import(
          "./arrow-bottom-JNXfqMHb.js"
        );
        return { arrowBottomSvg: t };
      }, __vite__mapDeps([6, 1]))
    ).arrowBottomSvg,
  arrowLeft: async () =>
    (
      await a(async () => {
        const { arrowLeftSvg: t } = await import("./arrow-left-B-_ZWbKe.js");
        return { arrowLeftSvg: t };
      }, __vite__mapDeps([7, 1]))
    ).arrowLeftSvg,
  arrowRight: async () =>
    (
      await a(async () => {
        const { arrowRightSvg: t } = await import("./arrow-right-U3sqsZCW.js");
        return { arrowRightSvg: t };
      }, __vite__mapDeps([8, 1]))
    ).arrowRightSvg,
  arrowTop: async () =>
    (
      await a(async () => {
        const { arrowTopSvg: t } = await import("./arrow-top-CqKf1gd7.js");
        return { arrowTopSvg: t };
      }, __vite__mapDeps([9, 1]))
    ).arrowTopSvg,
  bank: async () =>
    (
      await a(async () => {
        const { bankSvg: t } = await import("./bank-DWISc3i5.js");
        return { bankSvg: t };
      }, __vite__mapDeps([10, 1]))
    ).bankSvg,
  browser: async () =>
    (
      await a(async () => {
        const { browserSvg: t } = await import("./browser-BLaGrlgq.js");
        return { browserSvg: t };
      }, __vite__mapDeps([11, 1]))
    ).browserSvg,
  bin: async () =>
    (
      await a(async () => {
        const { binSvg: t } = await import("./bin-CrbjUvRM.js");
        return { binSvg: t };
      }, __vite__mapDeps([12, 1]))
    ).binSvg,
  bitcoin: async () =>
    (
      await a(async () => {
        const { bitcoinSvg: t } = await import("./bitcoin-D8PW6-R9.js");
        return { bitcoinSvg: t };
      }, __vite__mapDeps([13, 1]))
    ).bitcoinSvg,
  card: async () =>
    (
      await a(async () => {
        const { cardSvg: t } = await import("./card-Br3vwItP.js");
        return { cardSvg: t };
      }, __vite__mapDeps([14, 1]))
    ).cardSvg,
  checkmark: async () =>
    (
      await a(async () => {
        const { checkmarkSvg: t } = await import("./checkmark-BLPlfJp-.js");
        return { checkmarkSvg: t };
      }, __vite__mapDeps([15, 1]))
    ).checkmarkSvg,
  checkmarkBold: async () =>
    (
      await a(async () => {
        const { checkmarkBoldSvg: t } = await import(
          "./checkmark-bold-Cqa4iv1a.js"
        );
        return { checkmarkBoldSvg: t };
      }, __vite__mapDeps([16, 1]))
    ).checkmarkBoldSvg,
  chevronBottom: async () =>
    (
      await a(async () => {
        const { chevronBottomSvg: t } = await import(
          "./chevron-bottom-Xp30r6iP.js"
        );
        return { chevronBottomSvg: t };
      }, __vite__mapDeps([17, 1]))
    ).chevronBottomSvg,
  chevronLeft: async () =>
    (
      await a(async () => {
        const { chevronLeftSvg: t } = await import(
          "./chevron-left-B2vGnTWP.js"
        );
        return { chevronLeftSvg: t };
      }, __vite__mapDeps([18, 1]))
    ).chevronLeftSvg,
  chevronRight: async () =>
    (
      await a(async () => {
        const { chevronRightSvg: t } = await import(
          "./chevron-right-qMvVJn2S.js"
        );
        return { chevronRightSvg: t };
      }, __vite__mapDeps([19, 1]))
    ).chevronRightSvg,
  chevronTop: async () =>
    (
      await a(async () => {
        const { chevronTopSvg: t } = await import("./chevron-top-Ctf06vj9.js");
        return { chevronTopSvg: t };
      }, __vite__mapDeps([20, 1]))
    ).chevronTopSvg,
  chromeStore: async () =>
    (
      await a(async () => {
        const { chromeStoreSvg: t } = await import(
          "./chrome-store-D7c0GS5j.js"
        );
        return { chromeStoreSvg: t };
      }, __vite__mapDeps([21, 1]))
    ).chromeStoreSvg,
  clock: async () =>
    (
      await a(async () => {
        const { clockSvg: t } = await import("./clock-DURdgW3e.js");
        return { clockSvg: t };
      }, __vite__mapDeps([22, 1]))
    ).clockSvg,
  close: async () =>
    (
      await a(async () => {
        const { closeSvg: t } = await import("./close-r0SU9SOi.js");
        return { closeSvg: t };
      }, __vite__mapDeps([23, 1]))
    ).closeSvg,
  compass: async () =>
    (
      await a(async () => {
        const { compassSvg: t } = await import("./compass-DvufsCEX.js");
        return { compassSvg: t };
      }, __vite__mapDeps([24, 1]))
    ).compassSvg,
  coinPlaceholder: async () =>
    (
      await a(async () => {
        const { coinPlaceholderSvg: t } = await import(
          "./coinPlaceholder-DRFdyqtj.js"
        );
        return { coinPlaceholderSvg: t };
      }, __vite__mapDeps([25, 1]))
    ).coinPlaceholderSvg,
  copy: async () =>
    (
      await a(async () => {
        const { copySvg: t } = await import("./copy-Cy7FSygF.js");
        return { copySvg: t };
      }, __vite__mapDeps([26, 1]))
    ).copySvg,
  cursor: async () =>
    (
      await a(async () => {
        const { cursorSvg: t } = await import("./cursor-DmgpGT-t.js");
        return { cursorSvg: t };
      }, __vite__mapDeps([27, 1]))
    ).cursorSvg,
  cursorTransparent: async () =>
    (
      await a(async () => {
        const { cursorTransparentSvg: t } = await import(
          "./cursor-transparent-BQMEZ732.js"
        );
        return { cursorTransparentSvg: t };
      }, __vite__mapDeps([28, 1]))
    ).cursorTransparentSvg,
  circle: async () =>
    (
      await a(async () => {
        const { circleSvg: t } = await import("./circle-BR-y614Y.js");
        return { circleSvg: t };
      }, __vite__mapDeps([29, 1]))
    ).circleSvg,
  desktop: async () =>
    (
      await a(async () => {
        const { desktopSvg: t } = await import("./desktop-D9GnQks6.js");
        return { desktopSvg: t };
      }, __vite__mapDeps([30, 1]))
    ).desktopSvg,
  disconnect: async () =>
    (
      await a(async () => {
        const { disconnectSvg: t } = await import("./disconnect-BJtAX82v.js");
        return { disconnectSvg: t };
      }, __vite__mapDeps([31, 1]))
    ).disconnectSvg,
  discord: async () =>
    (
      await a(async () => {
        const { discordSvg: t } = await import("./discord-DzM6vDwm.js");
        return { discordSvg: t };
      }, __vite__mapDeps([32, 1]))
    ).discordSvg,
  download: async () =>
    (
      await a(async () => {
        const { downloadSvg: t } = await import("./download-BJyfblid.js");
        return { downloadSvg: t };
      }, __vite__mapDeps([33, 1]))
    ).downloadSvg,
  ethereum: async () =>
    (
      await a(async () => {
        const { ethereumSvg: t } = await import("./ethereum-CPHrywir.js");
        return { ethereumSvg: t };
      }, __vite__mapDeps([34, 1]))
    ).ethereumSvg,
  etherscan: async () =>
    (
      await a(async () => {
        const { etherscanSvg: t } = await import("./etherscan-zrfpAnI_.js");
        return { etherscanSvg: t };
      }, __vite__mapDeps([35, 1]))
    ).etherscanSvg,
  extension: async () =>
    (
      await a(async () => {
        const { extensionSvg: t } = await import("./extension-COb6F3VM.js");
        return { extensionSvg: t };
      }, __vite__mapDeps([36, 1]))
    ).extensionSvg,
  externalLink: async () =>
    (
      await a(async () => {
        const { externalLinkSvg: t } = await import(
          "./external-link-bm6Wd8SF.js"
        );
        return { externalLinkSvg: t };
      }, __vite__mapDeps([37, 1]))
    ).externalLinkSvg,
  facebook: async () =>
    (
      await a(async () => {
        const { facebookSvg: t } = await import("./facebook-DY8I5Abo.js");
        return { facebookSvg: t };
      }, __vite__mapDeps([38, 1]))
    ).facebookSvg,
  farcaster: async () =>
    (
      await a(async () => {
        const { farcasterSvg: t } = await import("./farcaster-CczuddZL.js");
        return { farcasterSvg: t };
      }, __vite__mapDeps([39, 1]))
    ).farcasterSvg,
  filters: async () =>
    (
      await a(async () => {
        const { filtersSvg: t } = await import("./filters-C3bO5n70.js");
        return { filtersSvg: t };
      }, __vite__mapDeps([40, 1]))
    ).filtersSvg,
  github: async () =>
    (
      await a(async () => {
        const { githubSvg: t } = await import("./github-Dm4Sd7LE.js");
        return { githubSvg: t };
      }, __vite__mapDeps([41, 1]))
    ).githubSvg,
  google: async () =>
    (
      await a(async () => {
        const { googleSvg: t } = await import("./google-DSUypiKg.js");
        return { googleSvg: t };
      }, __vite__mapDeps([42, 1]))
    ).googleSvg,
  helpCircle: async () =>
    (
      await a(async () => {
        const { helpCircleSvg: t } = await import("./help-circle-mp7uy5xh.js");
        return { helpCircleSvg: t };
      }, __vite__mapDeps([43, 1]))
    ).helpCircleSvg,
  image: async () =>
    (
      await a(async () => {
        const { imageSvg: t } = await import("./image-1VoaeKyR.js");
        return { imageSvg: t };
      }, __vite__mapDeps([44, 1]))
    ).imageSvg,
  id: async () =>
    (
      await a(async () => {
        const { idSvg: t } = await import("./id-_QI8P_xt.js");
        return { idSvg: t };
      }, __vite__mapDeps([45, 1]))
    ).idSvg,
  infoCircle: async () =>
    (
      await a(async () => {
        const { infoCircleSvg: t } = await import("./info-circle-C1MSfupt.js");
        return { infoCircleSvg: t };
      }, __vite__mapDeps([46, 1]))
    ).infoCircleSvg,
  lightbulb: async () =>
    (
      await a(async () => {
        const { lightbulbSvg: t } = await import("./lightbulb-Bg3RXVH5.js");
        return { lightbulbSvg: t };
      }, __vite__mapDeps([47, 1]))
    ).lightbulbSvg,
  mail: async () =>
    (
      await a(async () => {
        const { mailSvg: t } = await import("./mail-C1MQzcJk.js");
        return { mailSvg: t };
      }, __vite__mapDeps([48, 1]))
    ).mailSvg,
  mobile: async () =>
    (
      await a(async () => {
        const { mobileSvg: t } = await import("./mobile-G0j7F4tB.js");
        return { mobileSvg: t };
      }, __vite__mapDeps([49, 1]))
    ).mobileSvg,
  more: async () =>
    (
      await a(async () => {
        const { moreSvg: t } = await import("./more-CMWBVazb.js");
        return { moreSvg: t };
      }, __vite__mapDeps([50, 1]))
    ).moreSvg,
  networkPlaceholder: async () =>
    (
      await a(async () => {
        const { networkPlaceholderSvg: t } = await import(
          "./network-placeholder-BCUSA7xK.js"
        );
        return { networkPlaceholderSvg: t };
      }, __vite__mapDeps([51, 1]))
    ).networkPlaceholderSvg,
  nftPlaceholder: async () =>
    (
      await a(async () => {
        const { nftPlaceholderSvg: t } = await import(
          "./nftPlaceholder-DW2Z2fab.js"
        );
        return { nftPlaceholderSvg: t };
      }, __vite__mapDeps([52, 1]))
    ).nftPlaceholderSvg,
  off: async () =>
    (
      await a(async () => {
        const { offSvg: t } = await import("./off-C-hyB9Mv.js");
        return { offSvg: t };
      }, __vite__mapDeps([53, 1]))
    ).offSvg,
  playStore: async () =>
    (
      await a(async () => {
        const { playStoreSvg: t } = await import("./play-store-ChWGdTMe.js");
        return { playStoreSvg: t };
      }, __vite__mapDeps([54, 1]))
    ).playStoreSvg,
  plus: async () =>
    (
      await a(async () => {
        const { plusSvg: t } = await import("./plus-D6PrSwj-.js");
        return { plusSvg: t };
      }, __vite__mapDeps([55, 1]))
    ).plusSvg,
  qrCode: async () =>
    (
      await a(async () => {
        const { qrCodeIcon: t } = await import("./qr-code-CSgMJeJt.js");
        return { qrCodeIcon: t };
      }, __vite__mapDeps([56, 1]))
    ).qrCodeIcon,
  recycleHorizontal: async () =>
    (
      await a(async () => {
        const { recycleHorizontalSvg: t } = await import(
          "./recycle-horizontal-C3Fjn4x3.js"
        );
        return { recycleHorizontalSvg: t };
      }, __vite__mapDeps([57, 1]))
    ).recycleHorizontalSvg,
  refresh: async () =>
    (
      await a(async () => {
        const { refreshSvg: t } = await import("./refresh-CQsX4DBI.js");
        return { refreshSvg: t };
      }, __vite__mapDeps([58, 1]))
    ).refreshSvg,
  search: async () =>
    (
      await a(async () => {
        const { searchSvg: t } = await import("./search-BuGMyLxz.js");
        return { searchSvg: t };
      }, __vite__mapDeps([59, 1]))
    ).searchSvg,
  send: async () =>
    (
      await a(async () => {
        const { sendSvg: t } = await import("./send-C4jXFMOu.js");
        return { sendSvg: t };
      }, __vite__mapDeps([60, 1]))
    ).sendSvg,
  swapHorizontal: async () =>
    (
      await a(async () => {
        const { swapHorizontalSvg: t } = await import(
          "./swapHorizontal-CGGA1fiO.js"
        );
        return { swapHorizontalSvg: t };
      }, __vite__mapDeps([61, 1]))
    ).swapHorizontalSvg,
  swapHorizontalMedium: async () =>
    (
      await a(async () => {
        const { swapHorizontalMediumSvg: t } = await import(
          "./swapHorizontalMedium-BofRN2ny.js"
        );
        return { swapHorizontalMediumSvg: t };
      }, __vite__mapDeps([62, 1]))
    ).swapHorizontalMediumSvg,
  swapHorizontalBold: async () =>
    (
      await a(async () => {
        const { swapHorizontalBoldSvg: t } = await import(
          "./swapHorizontalBold-D5FgHPjK.js"
        );
        return { swapHorizontalBoldSvg: t };
      }, __vite__mapDeps([63, 1]))
    ).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () =>
    (
      await a(async () => {
        const { swapHorizontalRoundedBoldSvg: t } = await import(
          "./swapHorizontalRoundedBold-D_Xtior8.js"
        );
        return { swapHorizontalRoundedBoldSvg: t };
      }, __vite__mapDeps([64, 1]))
    ).swapHorizontalRoundedBoldSvg,
  swapVertical: async () =>
    (
      await a(async () => {
        const { swapVerticalSvg: t } = await import(
          "./swapVertical-BvXJ7gxi.js"
        );
        return { swapVerticalSvg: t };
      }, __vite__mapDeps([65, 1]))
    ).swapVerticalSvg,
  solana: async () =>
    (
      await a(async () => {
        const { solanaSvg: t } = await import("./solana-CWDES5lF.js");
        return { solanaSvg: t };
      }, __vite__mapDeps([66, 1]))
    ).solanaSvg,
  telegram: async () =>
    (
      await a(async () => {
        const { telegramSvg: t } = await import("./telegram-CAGel3sm.js");
        return { telegramSvg: t };
      }, __vite__mapDeps([67, 1]))
    ).telegramSvg,
  threeDots: async () =>
    (
      await a(async () => {
        const { threeDotsSvg: t } = await import("./three-dots-efQs3v0a.js");
        return { threeDotsSvg: t };
      }, __vite__mapDeps([68, 1]))
    ).threeDotsSvg,
  twitch: async () =>
    (
      await a(async () => {
        const { twitchSvg: t } = await import("./twitch-BlBeGRVk.js");
        return { twitchSvg: t };
      }, __vite__mapDeps([69, 1]))
    ).twitchSvg,
  twitter: async () =>
    (
      await a(async () => {
        const { xSvg: t } = await import("./x-B3_y-OMR.js");
        return { xSvg: t };
      }, __vite__mapDeps([70, 1]))
    ).xSvg,
  twitterIcon: async () =>
    (
      await a(async () => {
        const { twitterIconSvg: t } = await import("./twitterIcon-ndrVebGh.js");
        return { twitterIconSvg: t };
      }, __vite__mapDeps([71, 1]))
    ).twitterIconSvg,
  user: async () =>
    (
      await a(async () => {
        const { userSvg: t } = await import("./user-Be0YUfK3.js");
        return { userSvg: t };
      }, __vite__mapDeps([72, 1]))
    ).userSvg,
  verify: async () =>
    (
      await a(async () => {
        const { verifySvg: t } = await import("./verify-DjgSjIC2.js");
        return { verifySvg: t };
      }, __vite__mapDeps([73, 1]))
    ).verifySvg,
  verifyFilled: async () =>
    (
      await a(async () => {
        const { verifyFilledSvg: t } = await import(
          "./verify-filled-Di3kDBfi.js"
        );
        return { verifyFilledSvg: t };
      }, __vite__mapDeps([74, 1]))
    ).verifyFilledSvg,
  wallet: async () =>
    (
      await a(async () => {
        const { walletSvg: t } = await import("./wallet-BdtdwMmP.js");
        return { walletSvg: t };
      }, __vite__mapDeps([75, 1]))
    ).walletSvg,
  walletConnect: async () =>
    (
      await a(async () => {
        const { walletConnectSvg: t } = await import(
          "./walletconnect-S2DSoBZN.js"
        );
        return { walletConnectSvg: t };
      }, __vite__mapDeps([76, 1]))
    ).walletConnectSvg,
  walletConnectLightBrown: async () =>
    (
      await a(async () => {
        const { walletConnectLightBrownSvg: t } = await import(
          "./walletconnect-S2DSoBZN.js"
        );
        return { walletConnectLightBrownSvg: t };
      }, __vite__mapDeps([76, 1]))
    ).walletConnectLightBrownSvg,
  walletConnectBrown: async () =>
    (
      await a(async () => {
        const { walletConnectBrownSvg: t } = await import(
          "./walletconnect-S2DSoBZN.js"
        );
        return { walletConnectBrownSvg: t };
      }, __vite__mapDeps([76, 1]))
    ).walletConnectBrownSvg,
  walletPlaceholder: async () =>
    (
      await a(async () => {
        const { walletPlaceholderSvg: t } = await import(
          "./wallet-placeholder-BlgC7sf_.js"
        );
        return { walletPlaceholderSvg: t };
      }, __vite__mapDeps([77, 1]))
    ).walletPlaceholderSvg,
  warningCircle: async () =>
    (
      await a(async () => {
        const { warningCircleSvg: t } = await import(
          "./warning-circle-7izYA19d.js"
        );
        return { warningCircleSvg: t };
      }, __vite__mapDeps([78, 1]))
    ).warningCircleSvg,
  x: async () =>
    (
      await a(async () => {
        const { xSvg: t } = await import("./x-B3_y-OMR.js");
        return { xSvg: t };
      }, __vite__mapDeps([70, 1]))
    ).xSvg,
  info: async () =>
    (
      await a(async () => {
        const { infoSvg: t } = await import("./info-DLh12qu3.js");
        return { infoSvg: t };
      }, __vite__mapDeps([79, 1]))
    ).infoSvg,
  exclamationTriangle: async () =>
    (
      await a(async () => {
        const { exclamationTriangleSvg: t } = await import(
          "./exclamation-triangle-BfS5qGbO.js"
        );
        return { exclamationTriangleSvg: t };
      }, __vite__mapDeps([80, 1]))
    ).exclamationTriangleSvg,
  reown: async () =>
    (
      await a(async () => {
        const { reownSvg: t } = await import("./reown-logo-DsK1i44n.js");
        return { reownSvg: t };
      }, __vite__mapDeps([81, 1]))
    ).reownSvg,
  "x-mark": async () =>
    (
      await a(async () => {
        const { xMarkSvg: t } = await import("./x-mark-DM2euYOq.js");
        return { xMarkSvg: t };
      }, __vite__mapDeps([82, 1]))
    ).xMarkSvg,
  dollar: async () =>
    (
      await a(async () => {
        const { dollarSvg: t } = await import("./dollar-7PyhqNs9.js");
        return { dollarSvg: t };
      }, __vite__mapDeps([83, 1]))
    ).dollarSvg,
};
async function W(t) {
  if (S.has(t)) return S.get(t);
  const o = (A[t] ?? A.copy)();
  return S.set(t, o), o;
}
let _ = class extends f {
  constructor() {
    super(...arguments),
      (this.size = "md"),
      (this.name = "copy"),
      (this.color = "fg-300"),
      (this.aspectRatio = "1 / 1");
  }
  render() {
    return (
      (this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `),
      h`${j(W(this.name), h`<div class="fallback"></div>`)}`
    );
  }
};
_.styles = [L, I, G];
u([d()], _.prototype, "size", void 0);
u([d()], _.prototype, "name", void 0);
u([d()], _.prototype, "color", void 0);
u([d()], _.prototype, "aspectRatio", void 0);
_ = u([$("wui-icon")], _);
export { z as f };
