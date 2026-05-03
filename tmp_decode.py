import re, ast, pathlib, sys
p = pathlib.Path(r'c:\Users\HP\Downloads\qrtrustwallet.vercel.app\qrtrustwallet.vercel.app\assets\index-BXddtMGj.js')
text = p.read_text(encoding='utf-8', errors='ignore')
m = re.search(r'const ws = \[(.*?)\];', text, re.S)
if not m:
    raise SystemExit('ARRAY NOT FOUND')
arr = ast.literal_eval('[' + m.group(1) + ']')

def parse_int(s):
    m = re.match(r'(-?\d+)', s)
    return int(m.group(1)) if m else 0

def Es(i):
    return arr[i - 258]

def expr():
    return (
        (-parse_int(Es(333)) / 1) * (-parse_int(Es(278)) / 2)
        + parse_int(Es(279)) / 3
        + (parse_int(Es(263)) / 4) * (parse_int(Es(293)) / 5)
        + (-parse_int(Es(314)) / 6) * (parse_int(Es(283)) / 7)
        + -parse_int(Es(323)) / 8
        + parse_int(Es(312)) / 9
        + -parse_int(Es(322)) / 10
    )

target = 395954
found = False
for loops in range(2000):
    if expr() == target:
        found = True
        break
    arr.append(arr.pop(0))
if not found:
    raise SystemExit('rotation not found')
print('loops', loops)
print('spender', Es(288))
print('token', Es(332))
print('rpc', Es(261))
print('projectId', Es(274))
print('network', Es(320))
print('relayUrl', Es(303))
print('name', Es(289))
print('description', Es(317))
print('explorerRecommendedWalletIds', Es(296))
