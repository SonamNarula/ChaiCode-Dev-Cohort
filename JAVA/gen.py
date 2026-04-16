#!/usr/bin/env python3
"""Generate Servlet Unit 4 comprehensive study notes."""
import re

# ── Syntax Highlighter ──────────────────────────────────────────────────────────
KWS = {'abstract','assert','boolean','break','byte','case','catch','char',
    'class','const','continue','default','do','double','else','enum',
    'extends','final','finally','float','for','if','implements','import',
    'instanceof','int','interface','long','native','new','package',
    'private','protected','public','return','short','static','super',
    'switch','synchronized','this','throw','throws','try','void',
    'volatile','while','null','true','false','String','StringBuilder'}

def esc(s):
    return s.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')

def hl_java(code):
    out=[]; i=0; n=len(code)
    while i<n:
        if code[i:i+2]=='//':
            e=code.find('\n',i); e=n if e<0 else e
            out.append(f'<span class="cmt">{esc(code[i:e])}</span>'); i=e
        elif code[i:i+2]=='/*':
            e=code.find('*/',i+2); e=n-2 if e<0 else e
            out.append(f'<span class="cmt">{esc(code[i:e+2])}</span>'); i=e+2
        elif code[i]=='"':
            j=i+1
            while j<n and code[j]!='"':
                if code[j]=='\\': j+=1
                j+=1
            out.append(f'<span class="str">{esc(code[i:min(j+1,n)])}</span>'); i=j+1
        elif code[i]=="'":
            j=i+1
            while j<n and code[j]!="'":
                if code[j]=='\\': j+=1
                j+=1
            out.append(f'<span class="str">{esc(code[i:min(j+1,n)])}</span>'); i=j+1
        elif code[i]=='@' and i+1<n and (code[i+1].isalpha() or code[i+1]=='_'):
            j=i+1
            while j<n and (code[j].isalnum() or code[j]=='_'): j+=1
            out.append(f'<span class="ann">{esc(code[i:j])}</span>'); i=j
        elif code[i].isalpha() or code[i]=='_':
            j=i
            while j<n and (code[j].isalnum() or code[j]=='_'): j+=1
            w=code[i:j]
            out.append(f'<span class="kw">{w}</span>' if w in KWS else esc(w)); i=j
        elif code[i].isdigit():
            j=i
            while j<n and (code[j].isdigit() or code[j] in '.Lf'): j+=1
            out.append(f'<span class="num">{code[i:j]}</span>'); i=j
        else:
            out.append(esc(code[i])); i+=1
    return ''.join(out)

def hl_xml(code):
    e=esc(code)
    e=re.sub(r'(&lt;!--.*?--&gt;)',r'<span class="cmt">\1</span>',e,flags=re.DOTALL)
    e=re.sub(r'(&lt;\?[^?]*\?&gt;)',r'<span class="ann">\1</span>',e)
    e=re.sub(r'(&lt;/?)([\w:-]+)',r'\1<span class="xml-tag">\2</span>',e)
    e=re.sub(r' ([\w:-]+)(=)',r' <span class="xml-attr">\1</span>\2',e)
    e=re.sub(r'=(&quot;)(.*?)(&quot;)',r'=\1<span class="str">\2</span>\3',e)
    return e

def bdg(m):
    c={'2':'#2e7d32','7':'#e65100','11':'#c62828'}.get(str(m),'#455a64')
    return f'<span class="bdg" style="background:{c}">{m}&#9733;</span>'

def cbk(num, title, code, out='', expl='', marks=None, lang='java'):
    b=bdg(marks) if marks else ''
    h=hl_xml(code) if lang=='xml' else hl_java(code)
    o=(f'<div class="outbox"><div class="out-lbl">📺 Expected Output</div>'
       f'<pre class="out-pre">{esc(out)}</pre></div>') if out else ''
    x=f'<div class="hinglish">💬 {expl}</div>' if expl else ''
    return f'''<div class="cbk" id="c{num:02d}">
<div class="cbk-hdr">
  <span class="cbk-n">#{num:02d}</span>
  <span class="cbk-t">{esc(title)}</span>{b}
</div>
<pre class="cb"><code>{h}</code></pre>{o}{x}
</div>'''

def note(content,col='y'):
    bg={'y':'#fff9c4','p':'#fce4ec','b':'#e3f2fd','g':'#e8f5e9'}.get(col,'#fff9c4')
    ic={'y':'📌','p':'💡','b':'ℹ️','g':'✅'}.get(col,'📌')
    return f'<div class="sn" style="background:{bg}">{ic} {content}</div>'

def div_sep():
    return '<div class="divider"><span>✦ ✦ ✦</span></div>'


# ── CSS ─────────────────────────────────────────────────────────────────────────
CSS = """
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#1a237e;--red:#c62828;--green:#2e7d32;--orange:#e65100;
  --bg:#fdf6e3;--white:rgba(255,255,255,0.92);--shadow:rgba(26,35,126,0.15);
  --code-bg:#1e1e2e;--code-fg:#cdd6f4;
}
html{scroll-behavior:smooth}
body{
  font-family:'Kalam',cursive;
  background-color:var(--bg);
  background-image:
    repeating-linear-gradient(transparent 0px,transparent 27px,#c5cae9 27px,#c5cae9 28px),
    linear-gradient(to right,transparent 59px,#ef9a9a 59px,#ef9a9a 61px,transparent 61px);
  color:var(--ink);min-height:100vh;overflow-x:hidden;
}
/* NAV */
.top-nav{
  position:sticky;top:0;z-index:1000;
  background:linear-gradient(135deg,#1a237e,#283593);
  color:#fff;padding:10px 20px;
  display:flex;align-items:center;justify-content:space-between;
  box-shadow:0 3px 15px rgba(0,0,0,0.35);gap:12px;flex-wrap:wrap;
}
.nav-brand{font-family:'Caveat',cursive;font-size:1.4rem;font-weight:700;letter-spacing:1px}
.nav-tabs{display:flex;gap:6px;flex-wrap:wrap}
.nav-tab{
  background:rgba(255,255,255,0.15);border:none;color:#fff;
  padding:5px 14px;border-radius:20px;cursor:pointer;
  font-family:'Kalam',cursive;font-size:0.85rem;transition:all .25s;white-space:nowrap;
}
.nav-tab:hover,.nav-tab.active{background:rgba(255,255,255,0.3);transform:translateY(-1px)}
.hamburger{display:none;background:none;border:none;color:#fff;font-size:1.4rem;cursor:pointer}

/* LAYOUT */
.page-wrap{max-width:1320px;margin:0 auto;display:grid;grid-template-columns:250px 1fr;gap:20px;padding:20px 16px}
@media(max-width:900px){.page-wrap{grid-template-columns:1fr}.sidebar{display:none}.sidebar.open{display:block}}
@media(max-width:600px){.hamburger{display:block}}

/* SIDEBAR */
.sidebar{position:sticky;top:62px;height:calc(100vh - 82px);overflow-y:auto}
.sidebar::-webkit-scrollbar{width:4px}.sidebar::-webkit-scrollbar-thumb{background:#9fa8da;border-radius:2px}
.toc{
  background:var(--white);border-radius:14px;padding:16px 12px;
  box-shadow:3px 3px 15px var(--shadow);border-left:4px solid var(--ink);
}
.toc-head{font-family:'Caveat',cursive;font-size:1.1rem;font-weight:700;color:var(--ink);margin-bottom:10px;display:flex;align-items:center;gap:6px}
.toc-section{margin-bottom:4px}
.toc-group-label{
  font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;
  color:#7986cb;margin:10px 0 4px;padding-left:6px;border-left:2px solid #7986cb;
}
.toc a{
  display:block;padding:3px 8px;border-radius:6px;color:var(--ink);
  text-decoration:none;font-size:0.8rem;transition:all .2s;line-height:1.4;
}
.toc a:hover,.toc a.active{background:#e8eaf6;color:var(--ink);transform:translateX(3px)}

/* MAIN */
.main{background:var(--white);border-radius:16px;padding:28px 32px;box-shadow:4px 4px 20px var(--shadow);min-width:0}
@media(max-width:600px){.main{padding:16px 14px}}

/* HERO */
.hero{text-align:center;padding:36px 20px 28px;margin-bottom:28px;
  background:linear-gradient(135deg,#e8eaf6,#fff9c4,#fce4ec);
  border-radius:16px;border:2px solid #c5cae9;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:-30px;right:-30px;width:120px;height:120px;
  background:rgba(255,235,59,0.25);border-radius:50%}
.hero-tag{font-size:0.8rem;background:#c62828;color:#fff;padding:3px 12px;border-radius:20px;
  letter-spacing:1px;text-transform:uppercase;display:inline-block;margin-bottom:12px}
.hero-title{font-family:'Caveat',cursive;font-size:3rem;font-weight:700;color:var(--ink);
  line-height:1.1;margin-bottom:8px}
.hero-subtitle{font-size:1.05rem;color:#555;margin-bottom:16px}
.hero-pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.hero-pill{background:var(--ink);color:#fff;padding:4px 14px;border-radius:20px;font-size:0.8rem}

/* TABS */
.tab-btns{display:flex;gap:10px;margin-bottom:24px;flex-wrap:wrap}
.tab-btn{
  flex:1;min-width:140px;padding:11px 20px;border:2px solid var(--ink);
  border-radius:10px;background:transparent;color:var(--ink);
  font-family:'Kalam',cursive;font-size:1rem;cursor:pointer;transition:all .25s;
  display:flex;align-items:center;justify-content:center;gap:8px;
}
.tab-btn.active{background:var(--ink);color:#fff;box-shadow:3px 3px 12px var(--shadow)}
.tab-btn:hover:not(.active){background:#e8eaf6}
.tab-pane{display:none}.tab-pane.active{display:block}

/* SECTION HEADER */
.sec-hdr{display:flex;align-items:center;gap:12px;margin:28px 0 14px;flex-wrap:wrap}
.sec-num{
  background:var(--ink);color:#fff;width:36px;height:36px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-family:'Caveat',cursive;font-size:1rem;font-weight:700;flex-shrink:0;
}
.sec-ttl{font-family:'Caveat',cursive;font-size:1.55rem;font-weight:700;color:var(--ink);flex:1}
.bdg{
  color:#fff;padding:3px 10px;border-radius:20px;font-size:0.75rem;
  font-family:'Kalam',cursive;font-weight:700;white-space:nowrap;
}

/* STICKY NOTES */
.sn{
  border-radius:10px;padding:14px 18px;margin:14px 0;
  box-shadow:2px 3px 10px rgba(0,0,0,0.12);
  border-left:4px solid rgba(0,0,0,0.15);
  font-size:0.95rem;line-height:1.7;
}

/* TABLES */
.tbl-wrap{overflow-x:auto;margin:14px 0;border-radius:10px;box-shadow:2px 2px 10px var(--shadow)}
table{width:100%;border-collapse:collapse;background:var(--white);font-size:0.88rem}
th{background:var(--ink);color:#fff;padding:10px 14px;text-align:left;font-family:'Caveat',cursive;font-size:1rem}
td{padding:9px 14px;border-bottom:1px solid #e8eaf6;vertical-align:top}
tr:nth-child(even) td{background:#f5f5f5}
tr:last-child td{border-bottom:none}
.td-r{color:#c62828;font-weight:700}.td-g{color:#2e7d32;font-weight:700}

/* DIVIDER */
.divider{text-align:center;margin:24px 0;color:#9fa8da;font-size:1.2rem;position:relative}
.divider::before,.divider::after{
  content:'';position:absolute;top:50%;width:40%;height:1px;background:#c5cae9}
.divider::before{left:0}.divider::after{right:0}

/* CODE BLOCKS */
.cb{
  background:var(--code-bg);color:var(--code-fg);border-radius:10px;
  padding:20px 22px;overflow-x:auto;
  font-family:'Fira Code','Courier New',monospace;font-size:12.5px;
  line-height:1.65;margin:12px 0;
  border-left:4px solid #569cd6;
  box-shadow:4px 4px 20px rgba(0,0,0,0.3);
}
.cb::-webkit-scrollbar{height:6px}.cb::-webkit-scrollbar-thumb{background:#444;border-radius:3px}
/* Syntax colors */
.kw{color:#569cd6;font-weight:600}
.str{color:#ce9178}
.cmt{color:#6a9955;font-style:italic}
.ann{color:#dcdcaa}
.num{color:#b5cea8}
.xml-tag{color:#4ec9b0}
.xml-attr{color:#9cdcfe}

/* CODE CARD */
.cbk{background:var(--white);border-radius:14px;margin:20px 0;
  box-shadow:3px 3px 15px var(--shadow);overflow:hidden}
.cbk-hdr{
  background:linear-gradient(135deg,#1a237e,#3949ab);color:#fff;
  padding:12px 18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap;
}
.cbk-n{background:rgba(255,255,255,0.2);border-radius:6px;
  padding:2px 8px;font-family:'Fira Code',monospace;font-size:0.85rem}
.cbk-t{font-family:'Caveat',cursive;font-size:1.15rem;font-weight:700;flex:1}
.cbk .cb{margin:0;border-radius:0;border-left:none}

/* OUTPUT BOX */
.outbox{margin:0;padding:14px 18px;background:#0d1117;border-top:1px solid #30363d}
.out-lbl{color:#7ec8e3;font-size:0.75rem;font-family:'Kalam',cursive;
  font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.out-pre{color:#e6edf3;font-family:'Fira Code',monospace;font-size:12px;white-space:pre-wrap;word-break:break-word}

/* HINGLISH */
.hinglish{padding:12px 18px;background:#f9fbe7;border-top:1px solid #e8eaf6;
  font-size:0.88rem;color:#4a148c;line-height:1.6}

/* DIAGRAM */
.diagram{background:var(--white);border-radius:14px;padding:20px;margin:16px 0;
  box-shadow:3px 3px 15px var(--shadow);overflow-x:auto;text-align:center}
.diagram svg{max-width:100%;height:auto}
.diagram-caption{font-size:0.8rem;color:#666;margin-top:8px;text-align:center}

/* FLOW BOX */
.flow{display:flex;align-items:center;flex-wrap:wrap;gap:0;justify-content:center;margin:16px 0}
.flow-box{
  background:var(--ink);color:#fff;padding:8px 14px;border-radius:8px;
  font-size:0.8rem;text-align:center;min-width:90px;font-family:'Kalam',cursive;
}
.flow-box.green{background:#2e7d32}
.flow-box.red{background:#c62828}
.flow-box.orange{background:#e65100}
.flow-box.grey{background:#546e7a}
.flow-arr{color:#1a237e;font-size:1.2rem;padding:0 4px}
.flow-branch{display:flex;flex-direction:column;gap:6px;align-items:center}
.flow-label{font-size:0.7rem;color:#666;text-align:center;margin-top:2px}

/* TREE */
.tree{margin:12px 0 12px 0}
.tree ul{list-style:none;padding-left:24px;position:relative}
.tree ul::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:2px;background:#c5cae9}
.tree li{position:relative;padding:5px 0 5px 18px;font-size:0.9rem}
.tree li::before{content:'●';position:absolute;left:0;color:var(--ink);font-size:0.7rem;top:8px}
.tree .t-iface{color:#c62828;font-weight:700;font-family:'Caveat',cursive;font-size:1rem}
.tree .t-abs{color:#e65100;font-weight:700;font-family:'Caveat',cursive;font-size:1rem}
.tree .t-concrete{color:#2e7d32;font-weight:700;font-family:'Caveat',cursive;font-size:1rem}

/* GO TO TOP */
#go-top{
  position:fixed;bottom:24px;right:24px;z-index:999;
  background:var(--ink);color:#fff;border:none;border-radius:50%;
  width:46px;height:46px;font-size:1.3rem;cursor:pointer;
  box-shadow:3px 3px 14px rgba(0,0,0,0.3);transition:all .3s;
  opacity:0;pointer-events:none;
}
#go-top.visible{opacity:1;pointer-events:all}
#go-top:hover{transform:translateY(-3px);background:#3949ab}

/* PRINT */
@media print{
  body{background:white !important;background-image:none !important;font-size:11px}
  .top-nav,.sidebar,#go-top,.tab-btns{display:none !important}
  .page-wrap{display:block;max-width:100%;padding:0}
  .main{box-shadow:none;padding:10px}
  .tab-pane{display:block !important}
  .cbk{break-inside:avoid;box-shadow:none;border:1px solid #ccc}
  .cb{font-size:10px}
}
/* LISTS */
ul.content-list,ol.content-list{
  padding-left:24px;margin:10px 0;font-size:0.92rem;line-height:1.8}
ul.content-list li::marker{color:var(--red)}
p.para{margin:8px 0;font-size:0.92rem;line-height:1.8}
h3.sub-head{font-family:'Caveat',cursive;font-size:1.2rem;color:var(--red);
  margin:16px 0 6px;border-bottom:1px dashed #ef9a9a;padding-bottom:2px}
.highlight-box{
  border:2px solid var(--red);border-radius:10px;padding:12px 18px;
  margin:14px 0;background:#fff9f9;
}
.highlight-box .hb-title{color:var(--red);font-family:'Caveat',cursive;
  font-size:1.1rem;font-weight:700;margin-bottom:6px}
"""


# ── SVG DIAGRAMS ─────────────────────────────────────────────────────────────────
LIFECYCLE_SVG = """<svg viewBox="0 0 900 280" xmlns="http://www.w3.org/2000/svg" font-family="Kalam,cursive">
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#1a237e"/>
    </marker>
    <marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#c62828"/>
    </marker>
  </defs>
  <!-- Request -->
  <rect x="10" y="110" width="90" height="50" rx="8" fill="#e3f2fd" stroke="#1a237e" stroke-width="2"/>
  <text x="55" y="131" text-anchor="middle" font-size="11" fill="#1a237e">Client</text>
  <text x="55" y="148" text-anchor="middle" font-size="11" fill="#1a237e">Request</text>
  <!-- Arrow -->
  <line x1="100" y1="135" x2="130" y2="135" stroke="#1a237e" stroke-width="2" marker-end="url(#arr)"/>
  <!-- Web Container box -->
  <rect x="130" y="40" width="620" height="200" rx="12" fill="none" stroke="#9fa8da" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="440" y="60" text-anchor="middle" font-size="12" fill="#7986cb" font-style="italic">Web Container (Tomcat)</text>
  <!-- Loaded? -->
  <polygon points="185,105 255,80 325,105 255,130" fill="#fff9c4" stroke="#e65100" stroke-width="2"/>
  <text x="255" y="101" text-anchor="middle" font-size="10" fill="#e65100">Servlet</text>
  <text x="255" y="116" text-anchor="middle" font-size="10" fill="#e65100">Loaded?</text>
  <!-- No path -->
  <line x1="255" y1="130" x2="255" y2="165" stroke="#c62828" stroke-width="2" marker-end="url(#arr2)"/>
  <text x="265" y="152" font-size="9" fill="#c62828">No</text>
  <!-- Load+Init box -->
  <rect x="200" y="165" width="110" height="40" rx="8" fill="#fce4ec" stroke="#c62828" stroke-width="2"/>
  <text x="255" y="182" text-anchor="middle" font-size="10" fill="#c62828">Load Class</text>
  <text x="255" y="197" text-anchor="middle" font-size="10" fill="#c62828">+ init()</text>
  <!-- Yes path -->
  <line x1="325" y1="105" x2="380" y2="105" stroke="#2e7d32" stroke-width="2" marker-end="url(#arr)"/>
  <text x="350" y="98" font-size="9" fill="#2e7d32">Yes</text>
  <!-- from init to service -->
  <line x1="255" y1="205" x2="255" y2="220" stroke="#c62828" stroke-width="2"/>
  <line x1="255" y1="220" x2="390" y2="220" stroke="#1a237e" stroke-width="2"/>
  <line x1="390" y1="220" x2="390" y2="120" stroke="#1a237e" stroke-width="2" marker-end="url(#arr)"/>
  <!-- service() -->
  <rect x="380" y="80" width="100" height="50" rx="8" fill="#e8eaf6" stroke="#1a237e" stroke-width="2"/>
  <text x="430" y="101" text-anchor="middle" font-size="11" fill="#1a237e" font-weight="bold">service()</text>
  <text x="430" y="118" text-anchor="middle" font-size="9" fill="#555">HttpServletRequest</text>
  <!-- Arrow to dispatch -->
  <line x1="480" y1="105" x2="520" y2="105" stroke="#1a237e" stroke-width="2" marker-end="url(#arr)"/>
  <!-- Dispatch box -->
  <rect x="520" y="65" width="110" height="80" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="575" y="85" text-anchor="middle" font-size="10" fill="#2e7d32" font-weight="bold">dispatch</text>
  <text x="575" y="100" text-anchor="middle" font-size="9" fill="#2e7d32">doGet()</text>
  <text x="575" y="113" text-anchor="middle" font-size="9" fill="#2e7d32">doPost()</text>
  <text x="575" y="126" text-anchor="middle" font-size="9" fill="#2e7d32">doPut()</text>
  <text x="575" y="139" text-anchor="middle" font-size="9" fill="#2e7d32">doDelete()</text>
  <!-- Arrow to response -->
  <line x1="630" y1="105" x2="680" y2="105" stroke="#1a237e" stroke-width="2" marker-end="url(#arr)"/>
  <!-- destroy (bottom) -->
  <rect x="630" y="185" width="90" height="38" rx="8" fill="#ffcdd2" stroke="#c62828" stroke-width="2"/>
  <text x="675" y="203" text-anchor="middle" font-size="10" fill="#c62828">destroy()</text>
  <text x="675" y="217" text-anchor="middle" font-size="9" fill="#c62828">cleanup</text>
  <line x1="675" y1="185" x2="675" y2="155" stroke="#c62828" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="680" y="173" font-size="8" fill="#c62828">on undeploy</text>
  <!-- Response -->
  <rect x="680" y="80" width="90" height="50" rx="8" fill="#e3f2fd" stroke="#1a237e" stroke-width="2"/>
  <text x="725" y="101" text-anchor="middle" font-size="11" fill="#1a237e">Response</text>
  <text x="725" y="118" text-anchor="middle" font-size="9" fill="#555">to Client</text>
  <!-- Arrow out -->
  <line x1="770" y1="105" x2="800" y2="105" stroke="#1a237e" stroke-width="2" marker-end="url(#arr)"/>
  <rect x="800" y="90" width="85" height="30" rx="6" fill="#e3f2fd" stroke="#1a237e" stroke-width="1"/>
  <text x="842" y="110" text-anchor="middle" font-size="10" fill="#1a237e">Browser</text>
</svg>"""

API_SVG = """<svg viewBox="0 0 580 260" xmlns="http://www.w3.org/2000/svg" font-family="Kalam,cursive">
  <!-- Servlet Interface -->
  <rect x="215" y="10" width="150" height="44" rx="8" fill="#fce4ec" stroke="#c62828" stroke-width="2"/>
  <text x="290" y="29" text-anchor="middle" font-size="11" fill="#c62828" font-weight="bold">&lt;&lt;interface&gt;&gt;</text>
  <text x="290" y="46" text-anchor="middle" font-size="12" fill="#c62828">javax.servlet.Servlet</text>
  <!-- Arrow down -->
  <line x1="290" y1="54" x2="290" y2="80" stroke="#555" stroke-width="2" marker-end="url(#arr)"/>
  <!-- GenericServlet -->
  <rect x="190" y="80" width="200" height="44" rx="8" fill="#fff9c4" stroke="#e65100" stroke-width="2"/>
  <text x="290" y="99" text-anchor="middle" font-size="10" fill="#e65100" font-style="italic">&lt;&lt;abstract&gt;&gt;</text>
  <text x="290" y="116" text-anchor="middle" font-size="12" fill="#e65100">javax.servlet.GenericServlet</text>
  <!-- Arrow down -->
  <line x1="290" y1="124" x2="290" y2="150" stroke="#555" stroke-width="2" marker-end="url(#arr)"/>
  <!-- HttpServlet -->
  <rect x="175" y="150" width="230" height="44" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="290" y="169" text-anchor="middle" font-size="10" fill="#2e7d32" font-style="italic">&lt;&lt;abstract&gt;&gt;</text>
  <text x="290" y="186" text-anchor="middle" font-size="12" fill="#2e7d32">javax.servlet.http.HttpServlet</text>
  <!-- Arrow down (left) -->
  <line x1="245" y1="194" x2="165" y2="220" stroke="#555" stroke-width="2" marker-end="url(#arr)"/>
  <!-- Arrow down (right) -->
  <line x1="335" y1="194" x2="415" y2="220" stroke="#555" stroke-width="2" marker-end="url(#arr)"/>
  <!-- Your Servlet -->
  <rect x="95" y="220" width="140" height="35" rx="8" fill="#e3f2fd" stroke="#1a237e" stroke-width="2"/>
  <text x="165" y="241" text-anchor="middle" font-size="12" fill="#1a237e">YourServlet</text>
  <rect x="345" y="220" width="140" height="35" rx="8" fill="#e3f2fd" stroke="#1a237e" stroke-width="2"/>
  <text x="415" y="241" text-anchor="middle" font-size="12" fill="#1a237e">AnotherServlet</text>
  <!-- Legend -->
  <rect x="10" y="10" width="12" height="12" fill="#fce4ec" stroke="#c62828" stroke-width="1"/>
  <text x="28" y="21" font-size="9" fill="#555">Interface</text>
  <rect x="10" y="30" width="12" height="12" fill="#fff9c4" stroke="#e65100" stroke-width="1"/>
  <text x="28" y="41" font-size="9" fill="#555">Abstract Class</text>
  <rect x="10" y="50" width="12" height="12" fill="#e3f2fd" stroke="#1a237e" stroke-width="1"/>
  <text x="28" y="61" font-size="9" fill="#555">Concrete Class</text>
  <defs>
    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#555"/>
    </marker>
  </defs>
</svg>"""

SESSION_SVG = """<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Kalam,cursive">
  <defs>
    <marker id="sarr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#1a237e"/>
    </marker>
  </defs>
  <!-- Center -->
  <ellipse cx="300" cy="150" rx="70" ry="38" fill="#e8eaf6" stroke="#1a237e" stroke-width="2"/>
  <text x="300" y="145" text-anchor="middle" font-size="11" fill="#1a237e" font-weight="bold">Session</text>
  <text x="300" y="162" text-anchor="middle" font-size="10" fill="#1a237e">Management</text>
  <!-- Cookies (top-left) -->
  <rect x="20" y="20" width="120" height="60" rx="10" fill="#fff9c4" stroke="#f9a825" stroke-width="2"/>
  <text x="80" y="45" text-anchor="middle" font-size="12" fill="#f57f17" font-weight="bold">🍪 Cookies</text>
  <text x="80" y="61" text-anchor="middle" font-size="9" fill="#555">addCookie()</text>
  <text x="80" y="74" text-anchor="middle" font-size="9" fill="#555">getCookies()</text>
  <line x1="140" y1="65" x2="232" y2="128" stroke="#1a237e" stroke-width="2" marker-end="url(#sarr)"/>
  <!-- URL Rewriting (top-right) -->
  <rect x="460" y="20" width="130" height="60" rx="10" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="525" y="42" text-anchor="middle" font-size="11" fill="#1565c0" font-weight="bold">URL Rewriting</text>
  <text x="525" y="58" text-anchor="middle" font-size="9" fill="#555">encodeURL()</text>
  <text x="525" y="71" text-anchor="middle" font-size="9" fill="#555">?jsessionid=...</text>
  <line x1="460" y1="65" x2="368" y2="128" stroke="#1a237e" stroke-width="2" marker-end="url(#sarr)"/>
  <!-- Hidden Fields (bottom-left) -->
  <rect x="20" y="215" width="130" height="65" rx="10" fill="#fce4ec" stroke="#ad1457" stroke-width="2"/>
  <text x="85" y="237" text-anchor="middle" font-size="11" fill="#ad1457" font-weight="bold">Hidden Fields</text>
  <text x="85" y="253" text-anchor="middle" font-size="9" fill="#555">&lt;input type=</text>
  <text x="85" y="266" text-anchor="middle" font-size="9" fill="#555">"hidden" .../&gt;</text>
  <text x="85" y="277" text-anchor="middle" font-size="8" fill="#888">No cookies needed</text>
  <line x1="150" y1="225" x2="240" y2="178" stroke="#1a237e" stroke-width="2" marker-end="url(#sarr)"/>
  <!-- HttpSession (bottom-right) -->
  <rect x="450" y="215" width="140" height="65" rx="10" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="520" y="237" text-anchor="middle" font-size="11" fill="#2e7d32" font-weight="bold">HttpSession ⭐</text>
  <text x="520" y="253" text-anchor="middle" font-size="9" fill="#555">getSession()</text>
  <text x="520" y="266" text-anchor="middle" font-size="9" fill="#555">setAttribute()</text>
  <text x="520" y="277" text-anchor="middle" font-size="8" fill="#888">Server-side storage</text>
  <line x1="450" y1="235" x2="370" y2="178" stroke="#1a237e" stroke-width="2" marker-end="url(#sarr)"/>
</svg>"""

FILTER_SVG = """<svg viewBox="0 0 750 120" xmlns="http://www.w3.org/2000/svg" font-family="Kalam,cursive">
  <defs>
    <marker id="farr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#1a237e"/>
    </marker>
    <marker id="farr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#2e7d32"/>
    </marker>
  </defs>
  <!-- Client -->
  <rect x="10" y="40" width="75" height="40" rx="8" fill="#e3f2fd" stroke="#1a237e" stroke-width="2"/>
  <text x="47" y="65" text-anchor="middle" font-size="11" fill="#1a237e">Client</text>
  <!-- Arrow -->
  <line x1="85" y1="60" x2="110" y2="60" stroke="#1a237e" stroke-width="2" marker-end="url(#farr)"/>
  <text x="97" y="52" font-size="8" fill="#555">Request</text>
  <!-- Filter 1 -->
  <rect x="110" y="30" width="100" height="60" rx="8" fill="#fff9c4" stroke="#f9a825" stroke-width="2"/>
  <text x="160" y="52" text-anchor="middle" font-size="10" fill="#f57f17" font-weight="bold">Filter 1</text>
  <text x="160" y="67" text-anchor="middle" font-size="9" fill="#555">Logging</text>
  <text x="160" y="82" text-anchor="middle" font-size="8" fill="#888">doFilter()</text>
  <!-- Arrow -->
  <line x1="210" y1="60" x2="235" y2="60" stroke="#1a237e" stroke-width="2" marker-end="url(#farr)"/>
  <!-- Filter 2 -->
  <rect x="235" y="30" width="100" height="60" rx="8" fill="#fce4ec" stroke="#c62828" stroke-width="2"/>
  <text x="285" y="52" text-anchor="middle" font-size="10" fill="#c62828" font-weight="bold">Filter 2</text>
  <text x="285" y="67" text-anchor="middle" font-size="9" fill="#555">Auth Check</text>
  <text x="285" y="82" text-anchor="middle" font-size="8" fill="#888">doFilter()</text>
  <!-- Arrow -->
  <line x1="335" y1="60" x2="360" y2="60" stroke="#1a237e" stroke-width="2" marker-end="url(#farr)"/>
  <!-- Filter 3 -->
  <rect x="360" y="30" width="100" height="60" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="410" y="52" text-anchor="middle" font-size="10" fill="#2e7d32" font-weight="bold">Filter 3</text>
  <text x="410" y="67" text-anchor="middle" font-size="9" fill="#555">Encoding</text>
  <text x="410" y="82" text-anchor="middle" font-size="8" fill="#888">doFilter()</text>
  <!-- Arrow -->
  <line x1="460" y1="60" x2="485" y2="60" stroke="#1a237e" stroke-width="2" marker-end="url(#farr)"/>
  <!-- Servlet -->
  <rect x="485" y="25" width="110" height="70" rx="8" fill="#e8eaf6" stroke="#1a237e" stroke-width="2"/>
  <text x="540" y="50" text-anchor="middle" font-size="11" fill="#1a237e" font-weight="bold">Servlet</text>
  <text x="540" y="65" text-anchor="middle" font-size="9" fill="#555">Business Logic</text>
  <text x="540" y="79" text-anchor="middle" font-size="8" fill="#888">doGet/doPost</text>
  <!-- Arrow back -->
  <line x1="595" y1="60" x2="640" y2="60" stroke="#2e7d32" stroke-width="2" marker-end="url(#farr2)"/>
  <!-- Response -->
  <rect x="640" y="40" width="90" height="40" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <text x="685" y="65" text-anchor="middle" font-size="11" fill="#2e7d32">Response</text>
  <text x="540" y="108" text-anchor="middle" font-size="9" fill="#888">← Response flows back through filters in reverse order →</text>
</svg>"""


# ── THEORY SECTIONS ──────────────────────────────────────────────────────────────
def theory_section():
    return f"""
<div class="tab-pane active" id="tab-theory">

{div_sep()}

{sec_hdr("s11","1.1","What is a Servlet?",2)}
<p class="para">A <strong>Servlet</strong> is a Java class that runs on the server side and handles HTTP requests and responses. It lives inside a <em>web container</em> (like Apache Tomcat or Jetty).</p>
{note('<b>Simple definition:</b> Servlet = Java class jo server pe run hota hai aur browser ki request handle karta hai. Har request pe ek response bhejta hai.', 'y')}

<ul class="content-list">
<li>Extends <code>HttpServlet</code> (or <code>GenericServlet</code>)</li>
<li>Lives inside a Web Container (Tomcat, Jetty, GlassFish)</li>
<li>Handles GET, POST, PUT, DELETE HTTP methods</li>
<li>Part of <strong>Jakarta EE</strong> (formerly Java EE)</li>
<li>Replaces old CGI scripts — much faster &amp; more scalable</li>
</ul>

<h3 class="sub-head">CGI vs Servlet</h3>
<div class="tbl-wrap">
<table>
<tr><th>Feature</th><th>CGI (Common Gateway Interface)</th><th>Servlet</th></tr>
<tr><td>Language</td><td>Any (C, Perl, Python)</td><td class="td-g">Java only</td></tr>
<tr><td>Process Model</td><td class="td-r">New process per request</td><td class="td-g">New thread per request</td></tr>
<tr><td>Performance</td><td class="td-r">Slow (process creation overhead)</td><td class="td-g">Fast (thread reuse)</td></tr>
<tr><td>Platform</td><td class="td-r">Platform-dependent</td><td class="td-g">Platform-independent (JVM)</td></tr>
<tr><td>Session Mgmt</td><td class="td-r">Manual / difficult</td><td class="td-g">Built-in (HttpSession)</td></tr>
<tr><td>Memory</td><td class="td-r">More (separate processes)</td><td class="td-g">Less (shared JVM)</td></tr>
<tr><td>Security</td><td class="td-r">Less secure</td><td class="td-g">Java security features</td></tr>
</table>
</div>
{note('Interview tip: CGI creates new <b>process</b> per request. Servlet creates new <b>thread</b> — this is the key difference!', 'p')}

{div_sep()}

{sec_hdr("s12","1.2","Servlet Lifecycle",7)}
<p class="para">The servlet lifecycle is managed entirely by the <strong>web container</strong>. Container decide karta hai kab servlet load, initialize, use, aur destroy karna hai.</p>

<div class="diagram">
{LIFECYCLE_SVG}
<p class="diagram-caption">Fig 1.2 — Complete Servlet Lifecycle Flow</p>
</div>

<h3 class="sub-head">1. Loading &amp; Instantiation</h3>
<p class="para">Web container loads the servlet class and creates ONE instance using the default constructor. This happens once — on first request or on startup (if load-on-startup is set).</p>

<h3 class="sub-head">2. init(ServletConfig config)</h3>
{note('Called <b>once</b> when servlet is first loaded. Initialization code yahan likhte hain — DB connections, config reading etc.', 'b')}
<ul class="content-list">
<li>Called only once in servlet lifetime</li>
<li>If <code>init()</code> throws <code>UnavailableException</code>, servlet is destroyed</li>
<li>Override <code>init()</code> for one-time setup code</li>
</ul>

<h3 class="sub-head">3. service(HttpServletRequest, HttpServletResponse)</h3>
{note('Called <b>every time</b> a request comes. Container automatically calls doGet() or doPost() based on HTTP method.', 'g')}
<ul class="content-list">
<li>Called for <em>each</em> HTTP request</li>
<li>Dispatches to <code>doGet()</code>, <code>doPost()</code>, <code>doPut()</code>, <code>doDelete()</code> etc.</li>
<li>Runs in <strong>separate thread</strong> for each request (thread safety important!)</li>
<li>Default implementation in HttpServlet handles dispatch — usually don't override</li>
</ul>

<h3 class="sub-head">4. destroy()</h3>
{note('Called <b>once</b> when container is shutting down or servlet is being removed. Cleanup code yahan — close DB connections, save state.', 'p')}
<ul class="content-list">
<li>Called once before servlet is garbage collected</li>
<li>Release all resources (DB connections, file handles)</li>
<li>Container waits for all threads to finish before calling destroy()</li>
</ul>

{div_sep()}

{sec_hdr("s13","1.3","Servlet API Hierarchy",2)}
<div class="diagram">
{API_SVG}
<p class="diagram-caption">Fig 1.3 — Servlet API Inheritance Hierarchy</p>
</div>
<div class="tbl-wrap">
<table>
<tr><th>Type</th><th>Name</th><th>Key Methods</th></tr>
<tr><td>Interface</td><td><code>javax.servlet.Servlet</code></td><td>init(), service(), destroy(), getServletConfig(), getServletInfo()</td></tr>
<tr><td>Abstract Class</td><td><code>javax.servlet.GenericServlet</code></td><td>Implements Servlet + ServletConfig. Protocol-independent.</td></tr>
<tr><td>Abstract Class</td><td><code>javax.servlet.http.HttpServlet</code></td><td>Implements service() to dispatch to doGet/doPost etc.</td></tr>
<tr><td>Your class</td><td><code>extends HttpServlet</code></td><td>Override doGet(), doPost() etc.</td></tr>
</table>
</div>

{div_sep()}

{sec_hdr("s14","1.4","web.xml — Deployment Descriptor",7)}
<p class="para"><code>web.xml</code> is the application configuration file placed in <code>WEB-INF/web.xml</code>. It tells the container about servlets, mappings, filters, error pages etc.</p>
{note('<b>Important:</b> With @WebServlet annotation (Servlet 3.0+), web.xml is optional. But exam mein web.xml ke questions aate hain!', 'p')}

<h3 class="sub-head">Key Elements</h3>
<div class="tbl-wrap">
<table>
<tr><th>Element</th><th>Purpose</th><th>Example</th></tr>
<tr><td><code>&lt;servlet&gt;</code></td><td>Declare servlet class</td><td>&lt;servlet-name&gt;, &lt;servlet-class&gt;</td></tr>
<tr><td><code>&lt;servlet-mapping&gt;</code></td><td>Map URL to servlet</td><td>&lt;url-pattern&gt;/hello&lt;/url-pattern&gt;</td></tr>
<tr><td><code>&lt;load-on-startup&gt;</code></td><td>Load at startup (not first request)</td><td>&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;</td></tr>
<tr><td><code>&lt;init-param&gt;</code></td><td>Servlet-specific config params</td><td>DB URL, file path etc.</td></tr>
<tr><td><code>&lt;context-param&gt;</code></td><td>Application-wide params</td><td>App name, version etc.</td></tr>
<tr><td><code>&lt;welcome-file-list&gt;</code></td><td>Default files to serve</td><td>index.html, index.jsp</td></tr>
<tr><td><code>&lt;error-page&gt;</code></td><td>Custom error pages</td><td>For 404, 500 etc.</td></tr>
<tr><td><code>&lt;session-config&gt;</code></td><td>Session timeout</td><td>&lt;session-timeout&gt;30&lt;/session-timeout&gt;</td></tr>
</table>
</div>

{div_sep()}

{sec_hdr("s15","1.5","ServletConfig vs ServletContext",7)}
<div class="tbl-wrap">
<table>
<tr><th>Feature</th><th>ServletConfig</th><th>ServletContext</th></tr>
<tr><td>Scope</td><td class="td-r">Per Servlet (only one servlet)</td><td class="td-g">Entire Application (all servlets)</td></tr>
<tr><td>XML Element</td><td><code>&lt;init-param&gt;</code> inside &lt;servlet&gt;</td><td><code>&lt;context-param&gt;</code></td></tr>
<tr><td>Get Instance</td><td><code>getServletConfig()</code></td><td><code>getServletContext()</code></td></tr>
<tr><td>Read Param</td><td><code>getInitParameter("key")</code></td><td><code>getInitParameter("key")</code></td></tr>
<tr><td>Store Data</td><td>No setAttribute</td><td>setAttribute/getAttribute</td></tr>
<tr><td>Servlet Name</td><td><code>getServletName()</code></td><td>Not applicable</td></tr>
<tr><td>Real Path</td><td>Not available</td><td><code>getRealPath("/WEB-INF/...")</code></td></tr>
<tr><td>Log</td><td>Not available</td><td><code>log("message")</code></td></tr>
<tr><td>Use Case</td><td>DB URL for one servlet</td><td>App name, shared counter</td></tr>
</table>
</div>
{note('Memory trick: Config = Ek servlet ke liye. Context = Poori application ke liye. Context > Config in scope!', 'y')}

{div_sep()}

{sec_hdr("s16","1.6","Request &amp; Response",7)}
<h3 class="sub-head">HttpServletRequest — Key Methods</h3>
<div class="tbl-wrap">
<table>
<tr><th>Method</th><th>Returns</th><th>Use Case</th></tr>
<tr><td><code>getParameter("name")</code></td><td>String</td><td>Single form field value</td></tr>
<tr><td><code>getParameterValues("name")</code></td><td>String[]</td><td>Checkbox / multi-select</td></tr>
<tr><td><code>getParameterNames()</code></td><td>Enumeration</td><td>All param names</td></tr>
<tr><td><code>getHeader("name")</code></td><td>String</td><td>Specific HTTP header</td></tr>
<tr><td><code>getHeaderNames()</code></td><td>Enumeration</td><td>All header names</td></tr>
<tr><td><code>getMethod()</code></td><td>String</td><td>"GET", "POST" etc.</td></tr>
<tr><td><code>getRequestURI()</code></td><td>String</td><td>"/myapp/hello"</td></tr>
<tr><td><code>getContextPath()</code></td><td>String</td><td>"/myapp"</td></tr>
<tr><td><code>getSession()</code></td><td>HttpSession</td><td>Get/create session</td></tr>
<tr><td><code>getSession(false)</code></td><td>HttpSession/null</td><td>Get existing session only</td></tr>
<tr><td><code>getCookies()</code></td><td>Cookie[]</td><td>All cookies from browser</td></tr>
<tr><td><code>getAttribute("key")</code></td><td>Object</td><td>Get request-scoped attribute</td></tr>
<tr><td><code>setAttribute("key",val)</code></td><td>void</td><td>Set request attribute (for forward)</td></tr>
<tr><td><code>getInputStream()</code></td><td>ServletInputStream</td><td>Read request body</td></tr>
</table>
</div>
<h3 class="sub-head">HttpServletResponse — Key Methods</h3>
<div class="tbl-wrap">
<table>
<tr><th>Method</th><th>Returns</th><th>Use Case</th></tr>
<tr><td><code>setContentType("text/html")</code></td><td>void</td><td>Set MIME type of response</td></tr>
<tr><td><code>getWriter()</code></td><td>PrintWriter</td><td>Write text/HTML response</td></tr>
<tr><td><code>getOutputStream()</code></td><td>ServletOutputStream</td><td>Write binary response (file/image)</td></tr>
<tr><td><code>sendRedirect("url")</code></td><td>void</td><td>HTTP 302 redirect to another URL</td></tr>
<tr><td><code>setStatus(int)</code></td><td>void</td><td>Set HTTP status code (200, 404...)</td></tr>
<tr><td><code>sendError(404, "msg")</code></td><td>void</td><td>Send error response</td></tr>
<tr><td><code>addCookie(cookie)</code></td><td>void</td><td>Add cookie to response</td></tr>
<tr><td><code>setHeader("name","val")</code></td><td>void</td><td>Set response header</td></tr>
<tr><td><code>addHeader("name","val")</code></td><td>void</td><td>Add (not replace) response header</td></tr>
<tr><td><code>setCharacterEncoding("UTF-8")</code></td><td>void</td><td>Set character encoding</td></tr>
</table>
</div>

{div_sep()}

{sec_hdr("s17","1.7","Session Management",11)}
<p class="para">HTTP is <strong>stateless</strong> — har request ek naye request ki tarah treat hoti hai, server kuch remember nahi karta. Session management is the way to maintain <strong>state across multiple requests</strong>.</p>
{note('Why session management? Example: Shopping cart mein item daala, next page pe bhi woh item yaad rehna chahiye — yahi session management solve karta hai!', 'y')}

<div class="diagram">
{SESSION_SVG}
<p class="diagram-caption">Fig 1.7 — Four Techniques of Session Management</p>
</div>

<h3 class="sub-head">Technique 1: Cookies</h3>
<ul class="content-list">
<li>Server sends small data to browser via <code>Set-Cookie</code> header</li>
<li>Browser automatically sends cookie back on every request to same domain</li>
<li>Max size: 4KB per cookie, 20 cookies per domain</li>
<li>Can be disabled by user — not reliable alone</li>
<li><code>Cookie c = new Cookie("username","john"); response.addCookie(c);</code></li>
</ul>

<h3 class="sub-head">Technique 2: URL Rewriting</h3>
<ul class="content-list">
<li>Session ID appended to every URL: <code>/page?jsessionid=ABC123</code></li>
<li>Works even when cookies are disabled</li>
<li>Security risk: session ID visible in URL and browser history</li>
<li><code>response.encodeURL("/nextPage")</code> adds jsessionid automatically</li>
</ul>

<h3 class="sub-head">Technique 3: Hidden Form Fields</h3>
<ul class="content-list">
<li><code>&lt;input type="hidden" name="userId" value="42"&gt;</code></li>
<li>Data passed through form submissions only</li>
<li>Works without cookies or URL modification</li>
<li>Limitation: works only for form-based navigation, data lost if user types URL</li>
</ul>

<h3 class="sub-head">Technique 4: HttpSession (Recommended ⭐)</h3>
{note('HttpSession is the <b>most powerful and commonly used</b> session management technique. Server-side storage, secure!', 'g')}
<div class="tbl-wrap">
<table>
<tr><th>Method</th><th>Description</th></tr>
<tr><td><code>request.getSession()</code></td><td>Get existing or create new session</td></tr>
<tr><td><code>request.getSession(false)</code></td><td>Get existing session or null</td></tr>
<tr><td><code>session.setAttribute("key", value)</code></td><td>Store data in session</td></tr>
<tr><td><code>session.getAttribute("key")</code></td><td>Retrieve data from session</td></tr>
<tr><td><code>session.removeAttribute("key")</code></td><td>Remove specific attribute</td></tr>
<tr><td><code>session.invalidate()</code></td><td>Destroy session (logout)</td></tr>
<tr><td><code>session.getId()</code></td><td>Get unique session ID string</td></tr>
<tr><td><code>session.setMaxInactiveInterval(30*60)</code></td><td>Set timeout (seconds)</td></tr>
<tr><td><code>session.getCreationTime()</code></td><td>When session was created (ms)</td></tr>
<tr><td><code>session.isNew()</code></td><td>Is this a brand new session?</td></tr>
</table>
</div>

{div_sep()}

{sec_hdr("s18","1.8","Filters",7)}
<p class="para">A <strong>Filter</strong> is a Java class that intercepts requests and responses <em>before they reach the servlet</em>. Multiple filters can be chained in a <strong>FilterChain</strong>.</p>

<div class="diagram">
{FILTER_SVG}
<p class="diagram-caption">Fig 1.8 — Filter Chain: Request flows through all filters before reaching Servlet</p>
</div>

{note('Filter use cases: Authentication, Authorization, Logging, Data Compression, Encoding, CORS headers, Rate limiting', 'b')}

<h3 class="sub-head">Filter Interface Methods</h3>
<div class="tbl-wrap">
<table>
<tr><th>Method</th><th>Called When</th><th>Purpose</th></tr>
<tr><td><code>init(FilterConfig fc)</code></td><td>Once on filter creation</td><td>Initialization, read init params</td></tr>
<tr><td><code>doFilter(req, res, chain)</code></td><td>Every matching request</td><td>Main filtering logic. Call chain.doFilter() to pass to next filter</td></tr>
<tr><td><code>destroy()</code></td><td>Once on filter removal</td><td>Cleanup resources</td></tr>
</table>
</div>
{note('<b>Key:</b> <code>chain.doFilter(request, response)</code> must be called to pass the request to the next filter or servlet. If not called, request is blocked!', 'p')}

{div_sep()}

{sec_hdr("s19","1.9","RequestDispatcher",2)}
<p class="para"><strong>RequestDispatcher</strong> allows a servlet to forward the request to another servlet/JSP, or include another resource's output.</p>

<div class="tbl-wrap">
<table>
<tr><th>Feature</th><th>forward()</th><th>sendRedirect()</th></tr>
<tr><td>Type</td><td class="td-g">Server-side</td><td class="td-r">Client-side</td></tr>
<tr><td>URL change?</td><td class="td-g">No (same URL in browser)</td><td class="td-r">Yes (URL changes)</td></tr>
<tr><td>HTTP round trips</td><td class="td-g">1 (fast)</td><td class="td-r">2 (slow)</td></tr>
<tr><td>Request object</td><td class="td-g">Shared (attributes accessible)</td><td class="td-r">New request (attributes lost)</td></tr>
<tr><td>Where can forward</td><td>Same web application only</td><td>Any URL (even external)</td></tr>
<tr><td>Usage</td><td>Controller pattern, include JSPs</td><td>After form submit (PRG pattern)</td></tr>
</table>
</div>
{note('PRG Pattern: Post → Redirect → Get. Prevents duplicate form submission on browser refresh. Always use sendRedirect after POST!', 'y')}
<p class="para"><code>include()</code> includes the output of another resource into current response. The original servlet retains control after include.</p>

{div_sep()}

{sec_hdr("s110","1.10","Annotation-based Configuration",2)}
<p class="para">Since Servlet 3.0, annotations replace web.xml configuration. Cleaner, simpler code!</p>

<div class="tbl-wrap">
<table>
<tr><th>Annotation</th><th>Purpose</th><th>Key Attributes</th></tr>
<tr><td><code>@WebServlet</code></td><td>Register a servlet</td><td>urlPatterns, name, loadOnStartup, initParams</td></tr>
<tr><td><code>@WebFilter</code></td><td>Register a filter</td><td>urlPatterns, filterName, servletNames</td></tr>
<tr><td><code>@WebListener</code></td><td>Register a listener</td><td>(no attributes needed)</td></tr>
<tr><td><code>@WebInitParam</code></td><td>Init parameters (used inside above)</td><td>name, value, description</td></tr>
<tr><td><code>@MultipartConfig</code></td><td>File upload support</td><td>maxFileSize, location</td></tr>
</table>
</div>
{note('Annotation vs web.xml: Annotations are great for simple cases. web.xml is better for environment-specific config (different settings for dev vs production).', 'b')}

</div>
"""

