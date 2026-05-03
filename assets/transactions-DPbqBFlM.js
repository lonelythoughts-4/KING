import { i as f, a as m, b as a } from "./state-B82jP9eE.js";
import "./index-BXddtMGj.js";
import { c as p } from "./index-BKufv8n1.js";
import "./index-CnDJQN_2.js";
import "./index-A0M8I9iF.js";
import "./index-D8xqqY-u.js";
import "./index-CuWM1KTk.js";
import "./if-defined-Crp9voik.js";
import "./index-Ds6Cdb4C.js";
import "./index-CL7Zk8Eb.js";
const d = f`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;
var u = function (o, e, i, r) {
  var n = arguments.length,
    t =
      n < 3 ? e : r === null ? (r = Object.getOwnPropertyDescriptor(e, i)) : r,
    l;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    t = Reflect.decorate(o, e, i, r);
  else
    for (var c = o.length - 1; c >= 0; c--)
      (l = o[c]) && (t = (n < 3 ? l(t) : n > 3 ? l(e, i, t) : l(e, i)) || t);
  return n > 3 && t && Object.defineProperty(e, i, t), t;
};
let s = class extends m {
  render() {
    return a`
      <wui-flex flexDirection="column" .padding=${["0", "m", "m", "m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `;
  }
};
s.styles = d;
s = u([p("w3m-transactions-view")], s);
export { s as W3mTransactionsView };
