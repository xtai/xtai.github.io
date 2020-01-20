---
title: Tic-Tac-Toe
category: project
cover: cover.jpg
ref: tic-game
lang: en

fulltitle: Tic-Tac-Toe Web Game
subtitle: 2015
desc: A minimalistic JavaScript game
tags: [Code, Web, Fun]
---
<p class="iframe" height="670" scrolling="no">
  <iframe src="{{ site.baseurl }}/potato/project/tic-game/game/"></iframe>
</p>
<style type="text/css">
  p.iframe {
    display: none;
  }
  iframe {
    height: 670px;
    width: 100%;
    border: 1px solid #EEE;
  }
  @media (min-width: 600px){
    p.iframe {
      display: block;
    }
    span.iframe-desc {
      display: none;
    }
  }
</style>

<span class="iframe-desc"><a href="http://631.taixiaoyu.com/game/" target="_blank">Play it here.</a></span>  

Game code is available on <a href="https://github.com/xtai/INST631-HW0" target="_blank">GitHub</a>.  

Some thoughts while designing this game:

- Minimized mouse clickings
- Swift loading speed
- Delightful color scheme (credit to coolors.co)
- Responsive animations

---

## Screenshots

<p class="full-width" style="background-color: #F6F6F6;">
  <img src="{{ site.baseurl }}/potato/project/tic-game/1.png" alt="Tic-Tac-Toe Screenshots" style="width: 32.5%; display: inline-block; max-width: 600px;">
  <img src="{{ site.baseurl }}/potato/project/tic-game/2.png" alt="Tic-Tac-Toe Screenshots" style="width: 32.5%; display: inline-block; max-width: 600px;">
  <br>
  <img src="{{ site.baseurl }}/potato/project/tic-game/3.png" alt="Tic-Tac-Toe Screenshots" style="width: 32.5%; display: inline-block; max-width: 600px;">
  <img src="{{ site.baseurl }}/potato/project/tic-game/4.png" alt="Tic-Tac-Toe Screenshots" style="width: 32.5%; display: inline-block; max-width: 600px;">
  <img src="{{ site.baseurl }}/potato/project/tic-game/5.png" alt="Tic-Tac-Toe Screenshots" style="width: 32.5%; display: inline-block; max-width: 600px;">
</p>

---

## Code

<!-- <script src="https://gist.github.com/xtai/e21c80ed127a803014121c51e2fa21c4.js"></script> -->
<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-1baaff35daab552f019ad459494450f1.css">
<div id="gist40603166" class="gist">
  <div class="gist-file">
  <div class="gist-data">
  <div class="js-gist-file-update-container js-task-list-container file-box">
  <div id="file-tic-tac-toe-js" class="file">
  <div itemprop="text" class="blob-wrapper data type-javascript">
  <table class="highlight tab-size js-file-line-container" data-tab-size="8">
    <tbody>
      <tr>
        <td id="file-tic-tac-toe-js-L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="file-tic-tac-toe-js-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="file-tic-tac-toe-js-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Tic-tac-toe</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="file-tic-tac-toe-js-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Xiaoyu Tai</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="file-tic-tac-toe-js-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 08/30/2015</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="file-tic-tac-toe-js-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="file-tic-tac-toe-js-LC6" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="file-tic-tac-toe-js-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Game</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="file-tic-tac-toe-js-LC8" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DataStorage</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="file-tic-tac-toe-js-LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">ui</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">UI</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="file-tic-tac-toe-js-LC10" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">controller</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Controller</span>(<span class="pl-v">this</span>.<span class="pl-smi">ui</span>, <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="file-tic-tac-toe-js-LC11" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-en">on</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="file-tic-tac-toe-js-LC12" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="file-tic-tac-toe-js-LC13" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="file-tic-tac-toe-js-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Game</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">on</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="file-tic-tac-toe-js-LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">init</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="file-tic-tac-toe-js-LC16" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">updateAll</span>(<span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-c1">cells</span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="file-tic-tac-toe-js-LC17" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">controller</span>.<span class="pl-en">monitor</span>(<span class="pl-k">function</span>(<span class="pl-smi">cell</span>, <span class="pl-smi">ui</span>, <span class="pl-smi">data_storage</span>, <span class="pl-smi">controller</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="file-tic-tac-toe-js-LC18" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// console.log(cell);</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="file-tic-tac-toe-js-LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> next_turn;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="file-tic-tac-toe-js-LC20" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">letter</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="file-tic-tac-toe-js-LC21" class="blob-code blob-code-inner js-file-line">      next_turn <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>o<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="file-tic-tac-toe-js-LC22" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="file-tic-tac-toe-js-LC23" class="blob-code blob-code-inner js-file-line">      next_turn <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="file-tic-tac-toe-js-LC24" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="file-tic-tac-toe-js-LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">data_storage</span>.<span class="pl-c1">cells</span>[<span class="pl-smi">cell</span>.<span class="pl-c1">x</span>][<span class="pl-smi">cell</span>.<span class="pl-c1">y</span>] <span class="pl-k">=</span> <span class="pl-smi">cell</span>.<span class="pl-smi">letter</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="file-tic-tac-toe-js-LC26" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">ui</span>.<span class="pl-en">updateAll</span>(<span class="pl-smi">data_storage</span>.<span class="pl-c1">cells</span>, next_turn);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="file-tic-tac-toe-js-LC27" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">ui</span>.<span class="pl-c1">next</span>(next_turn);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="file-tic-tac-toe-js-LC28" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>update: <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">controller</span>.<span class="pl-en">if_wins</span>(cell));</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="file-tic-tac-toe-js-LC29" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="file-tic-tac-toe-js-LC30" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="file-tic-tac-toe-js-LC31" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="file-tic-tac-toe-js-LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Game</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">restart</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="file-tic-tac-toe-js-LC33" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">location</span>.<span class="pl-c1">reload</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="file-tic-tac-toe-js-LC34" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="file-tic-tac-toe-js-LC35" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="file-tic-tac-toe-js-LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">DataStorage</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="file-tic-tac-toe-js-LC37" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-c1">cells</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="file-tic-tac-toe-js-LC38" class="blob-code blob-code-inner js-file-line">    [<span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>],</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="file-tic-tac-toe-js-LC39" class="blob-code blob-code-inner js-file-line">    [<span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>],</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="file-tic-tac-toe-js-LC40" class="blob-code blob-code-inner js-file-line">    [<span class="pl-c1">null</span>, <span class="pl-c1">null</span>, <span class="pl-c1">null</span>]</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="file-tic-tac-toe-js-LC41" class="blob-code blob-code-inner js-file-line">  ];</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="file-tic-tac-toe-js-LC42" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="file-tic-tac-toe-js-LC43" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="file-tic-tac-toe-js-LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">DataStorage</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">getEmptyCells</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="file-tic-tac-toe-js-LC45" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> r <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="file-tic-tac-toe-js-LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="file-tic-tac-toe-js-LC47" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> <span class="pl-v">this</span>.<span class="pl-c1">cells</span>[i].<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="file-tic-tac-toe-js-LC48" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-v">this</span>.<span class="pl-c1">cells</span>[i][j] <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="file-tic-tac-toe-js-LC49" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">r</span>.<span class="pl-c1">push</span>({</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="file-tic-tac-toe-js-LC50" class="blob-code blob-code-inner js-file-line">          x<span class="pl-k">:</span> i,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="file-tic-tac-toe-js-LC51" class="blob-code blob-code-inner js-file-line">          y<span class="pl-k">:</span> j</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="file-tic-tac-toe-js-LC52" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="file-tic-tac-toe-js-LC53" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="file-tic-tac-toe-js-LC54" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="file-tic-tac-toe-js-LC55" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="file-tic-tac-toe-js-LC56" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> r;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="file-tic-tac-toe-js-LC57" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="file-tic-tac-toe-js-LC58" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="file-tic-tac-toe-js-LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">UI</span>() {}</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="file-tic-tac-toe-js-LC60" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="file-tic-tac-toe-js-LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">UI</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">updateAll</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cells</span>, <span class="pl-smi">next_turn</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="file-tic-tac-toe-js-LC62" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">cells</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="file-tic-tac-toe-js-LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> cells[i].<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="file-tic-tac-toe-js-LC64" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">updateCell</span>({</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="file-tic-tac-toe-js-LC65" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> i,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="file-tic-tac-toe-js-LC66" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> j,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="file-tic-tac-toe-js-LC67" class="blob-code blob-code-inner js-file-line">        letter<span class="pl-k">:</span> cells[i][j]</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="file-tic-tac-toe-js-LC68" class="blob-code blob-code-inner js-file-line">      }, next_turn);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="file-tic-tac-toe-js-LC69" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="file-tic-tac-toe-js-LC70" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="file-tic-tac-toe-js-LC71" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="file-tic-tac-toe-js-LC72" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="file-tic-tac-toe-js-LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">UI</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">updateCell</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cell</span>, <span class="pl-smi">next_turn</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="file-tic-tac-toe-js-LC74" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// console.log(cell);</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="file-tic-tac-toe-js-LC75" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">letter</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="file-tic-tac-toe-js-LC76" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty starter<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="file-tic-tac-toe-js-LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-o<span class="pl-pds">'</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="file-tic-tac-toe-js-LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-x<span class="pl-pds">'</span></span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="file-tic-tac-toe-js-LC79" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">letter</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>o<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="file-tic-tac-toe-js-LC80" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty starter<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="file-tic-tac-toe-js-LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-x<span class="pl-pds">'</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>#f3f3f3<span class="pl-pds">"</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">"</span>height<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>0px<span class="pl-pds">"</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">"</span>font-size<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>0px<span class="pl-pds">"</span></span>); <span class="pl-c">// just for a better animation :P</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="file-tic-tac-toe-js-LC82" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-o<span class="pl-pds">'</span></span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="file-tic-tac-toe-js-LC83" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">letter</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> next_turn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="file-tic-tac-toe-js-LC84" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>starter<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="file-tic-tac-toe-js-LC85" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-o<span class="pl-pds">'</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="file-tic-tac-toe-js-LC86" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-x<span class="pl-pds">'</span></span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="file-tic-tac-toe-js-LC87" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">letter</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> next_turn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>o<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="file-tic-tac-toe-js-LC88" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>starter<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="file-tic-tac-toe-js-LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-x<span class="pl-pds">'</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="file-tic-tac-toe-js-LC90" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-o<span class="pl-pds">'</span></span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="file-tic-tac-toe-js-LC91" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">cell</span>.<span class="pl-smi">letter</span> <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> next_turn <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="file-tic-tac-toe-js-LC92" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>starter<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="file-tic-tac-toe-js-LC93" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-x<span class="pl-pds">'</span></span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="file-tic-tac-toe-js-LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-o<span class="pl-pds">'</span></span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="file-tic-tac-toe-js-LC95" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="file-tic-tac-toe-js-LC96" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="file-tic-tac-toe-js-LC97" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="file-tic-tac-toe-js-LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">UI</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">init</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="file-tic-tac-toe-js-LC99" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>body<span class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="file-tic-tac-toe-js-LC100" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// $('.option-x, .option-o').show();</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="file-tic-tac-toe-js-LC101" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>Tic-Tac-Toe<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="file-tic-tac-toe-js-LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-desc<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>Let<span class="pl-cce">\'</span>s start!<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="file-tic-tac-toe-js-LC103" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="file-tic-tac-toe-js-LC104" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="file-tic-tac-toe-js-LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">UI</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">next</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">next_turn</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="file-tic-tac-toe-js-LC106" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (next_turn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="file-tic-tac-toe-js-LC107" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-desc<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>X<span class="pl-cce">\'</span>s turn!<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="file-tic-tac-toe-js-LC108" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (next_turn <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>o<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="file-tic-tac-toe-js-LC109" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-desc<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>O<span class="pl-cce">\'</span>s turn!<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="file-tic-tac-toe-js-LC110" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="file-tic-tac-toe-js-LC111" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="file-tic-tac-toe-js-LC112" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="file-tic-tac-toe-js-LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">UI</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">end</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">player</span>, <span class="pl-smi">winning_cells</span>, <span class="pl-smi">empty_cells</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="file-tic-tac-toe-js-LC114" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> restart_btn <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>&lt;a class=<span class="pl-cce">\"</span>btn btn-default<span class="pl-cce">\"</span> href=<span class="pl-cce">\"\"</span> id=<span class="pl-cce">\"</span>header-restart-btn<span class="pl-cce">\"</span>&gt;&lt;span class=<span class="pl-cce">\"</span>glyphicon glyphicon-repeat<span class="pl-cce">\"</span> aria-hidden=<span class="pl-cce">\"</span>true<span class="pl-cce">\"</span>&gt;&lt;/span&gt; Start Over&lt;/a&gt;<span class="pl-pds">'</span></span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="file-tic-tac-toe-js-LC115" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">empty_cells</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="file-tic-tac-toe-js-LC116" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> empty_cells[i].<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> empty_cells[i].<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-x<span class="pl-pds">'</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="file-tic-tac-toe-js-LC117" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> empty_cells[i].<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> empty_cells[i].<span class="pl-c1">y</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span> .option-o<span class="pl-pds">'</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="file-tic-tac-toe-js-LC118" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="file-tic-tac-toe-js-LC119" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (player <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>tie<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="file-tic-tac-toe-js-LC120" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>body<span class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>().<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>tie<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="file-tic-tac-toe-js-LC121" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>It<span class="pl-cce">\'</span>s a tie!<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="file-tic-tac-toe-js-LC122" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-desc<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(restart_btn);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="file-tic-tac-toe-js-LC123" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (player <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="file-tic-tac-toe-js-LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>body<span class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>().<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>x-wins<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="file-tic-tac-toe-js-LC125" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-desc<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(restart_btn);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="file-tic-tac-toe-js-LC126" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-restart-btn<span class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>btn-default<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>btn-primary<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="file-tic-tac-toe-js-LC127" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>X wins!<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="file-tic-tac-toe-js-LC128" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">winning_cells</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="file-tic-tac-toe-js-LC129" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> cell <span class="pl-k">=</span> winning_cells[i];</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="file-tic-tac-toe-js-LC130" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty starter disabled<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>x-wins<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="file-tic-tac-toe-js-LC131" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="file-tic-tac-toe-js-LC132" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (player <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">'</span>o<span class="pl-pds">'</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="file-tic-tac-toe-js-LC133" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>body<span class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>().<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>o-wins<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="file-tic-tac-toe-js-LC134" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">'</span>O wins!<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="file-tic-tac-toe-js-LC135" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-desc<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(restart_btn);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="file-tic-tac-toe-js-LC136" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#header-restart-btn<span class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>btn-default<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>btn-danger<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="file-tic-tac-toe-js-LC137" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">winning_cells</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="file-tic-tac-toe-js-LC138" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> cell <span class="pl-k">=</span> winning_cells[i];</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="file-tic-tac-toe-js-LC139" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#cell-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">x</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>-<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">cell</span>.<span class="pl-c1">y</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty starter disabled<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>o-wins<span class="pl-pds">'</span></span>);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="file-tic-tac-toe-js-LC140" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="file-tic-tac-toe-js-LC141" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="file-tic-tac-toe-js-LC142" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="file-tic-tac-toe-js-LC143" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="file-tic-tac-toe-js-LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">Controller</span>(<span class="pl-smi">ui</span>, <span class="pl-smi">data_storage</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="file-tic-tac-toe-js-LC145" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">ui</span> <span class="pl-k">=</span> ui;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="file-tic-tac-toe-js-LC146" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span> <span class="pl-k">=</span> data_storage;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="file-tic-tac-toe-js-LC147" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="file-tic-tac-toe-js-LC148" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="file-tic-tac-toe-js-LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Controller</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">monitor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="file-tic-tac-toe-js-LC150" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> ui <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">ui</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="file-tic-tac-toe-js-LC151" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> data_storage <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="file-tic-tac-toe-js-LC152" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> controller <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="file-tic-tac-toe-js-LC153" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>.option-o, .option-x<span class="pl-pds">'</span></span>).<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="file-tic-tac-toe-js-LC154" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>().<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">'</span>starter<span class="pl-pds">'</span></span>) <span class="pl-k">||</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>().<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">'</span>empty<span class="pl-pds">'</span></span>)) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="file-tic-tac-toe-js-LC155" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">'</span>option-x<span class="pl-pds">'</span></span>)) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="file-tic-tac-toe-js-LC156" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> l <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="file-tic-tac-toe-js-LC157" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="file-tic-tac-toe-js-LC158" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> l <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">'</span>o<span class="pl-pds">'</span></span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="file-tic-tac-toe-js-LC159" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="file-tic-tac-toe-js-LC160" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> new_cell <span class="pl-k">=</span> { <span class="pl-c">// parent id type: cell-x-y</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="file-tic-tac-toe-js-LC161" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>()[<span class="pl-c1">0</span>].<span class="pl-c1">id</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">5</span>),</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="file-tic-tac-toe-js-LC162" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>()[<span class="pl-c1">0</span>].<span class="pl-c1">id</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">7</span>),</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="file-tic-tac-toe-js-LC163" class="blob-code blob-code-inner js-file-line">        letter<span class="pl-k">:</span> l</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="file-tic-tac-toe-js-LC164" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="file-tic-tac-toe-js-LC165" class="blob-code blob-code-inner js-file-line">      <span class="pl-c">// console.log(new_cell);</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="file-tic-tac-toe-js-LC166" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">"</span>function<span class="pl-pds">"</span></span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="file-tic-tac-toe-js-LC167" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">callback</span>(new_cell, ui, data_storage, controller);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="file-tic-tac-toe-js-LC168" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="file-tic-tac-toe-js-LC169" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="file-tic-tac-toe-js-LC170" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="file-tic-tac-toe-js-LC171" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="file-tic-tac-toe-js-LC172" class="blob-code blob-code-inner js-file-line"></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="file-tic-tac-toe-js-LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">Controller</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">if_wins</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">last_cell</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="file-tic-tac-toe-js-LC174" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">last_cell</span>.<span class="pl-c1">x</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="file-tic-tac-toe-js-LC175" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> y <span class="pl-k">=</span> <span class="pl-smi">last_cell</span>.<span class="pl-c1">y</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="file-tic-tac-toe-js-LC176" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> l <span class="pl-k">=</span> <span class="pl-smi">last_cell</span>.<span class="pl-smi">l</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="file-tic-tac-toe-js-LC177" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> player <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-c1">cells</span>[x][y];</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="file-tic-tac-toe-js-LC178" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> all <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-c1">cells</span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="file-tic-tac-toe-js-LC179" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// First, check the diagonal, if the last cell was in it.</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="file-tic-tac-toe-js-LC180" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (x <span class="pl-k">==</span> y <span class="pl-k">||</span> (<span class="pl-c1">parseInt</span>(x) <span class="pl-k">+</span> <span class="pl-c1">parseInt</span>(y)) <span class="pl-k">==</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="file-tic-tac-toe-js-LC181" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (player <span class="pl-k">==</span> all[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> all[<span class="pl-c1">0</span>][<span class="pl-c1">0</span>] <span class="pl-k">==</span> all[<span class="pl-c1">1</span>][<span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> all[<span class="pl-c1">1</span>][<span class="pl-c1">1</span>] <span class="pl-k">==</span> all[<span class="pl-c1">2</span>][<span class="pl-c1">2</span>]) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="file-tic-tac-toe-js-LC182" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">end</span>(player, [{</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="file-tic-tac-toe-js-LC183" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="file-tic-tac-toe-js-LC184" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="file-tic-tac-toe-js-LC185" class="blob-code blob-code-inner js-file-line">      }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="file-tic-tac-toe-js-LC186" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="file-tic-tac-toe-js-LC187" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="file-tic-tac-toe-js-LC188" class="blob-code blob-code-inner js-file-line">      }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="file-tic-tac-toe-js-LC189" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="file-tic-tac-toe-js-LC190" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="file-tic-tac-toe-js-LC191" class="blob-code blob-code-inner js-file-line">      }], <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-en">getEmptyCells</span>());</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="file-tic-tac-toe-js-LC192" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> player;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="file-tic-tac-toe-js-LC193" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (player <span class="pl-k">==</span> all[<span class="pl-c1">0</span>][<span class="pl-c1">2</span>] <span class="pl-k">&amp;&amp;</span> all[<span class="pl-c1">0</span>][<span class="pl-c1">2</span>] <span class="pl-k">==</span> all[<span class="pl-c1">1</span>][<span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> all[<span class="pl-c1">1</span>][<span class="pl-c1">1</span>] <span class="pl-k">==</span> all[<span class="pl-c1">2</span>][<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="file-tic-tac-toe-js-LC194" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">end</span>(player, [{</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="file-tic-tac-toe-js-LC195" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="file-tic-tac-toe-js-LC196" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="file-tic-tac-toe-js-LC197" class="blob-code blob-code-inner js-file-line">      }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="file-tic-tac-toe-js-LC198" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="file-tic-tac-toe-js-LC199" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="file-tic-tac-toe-js-LC200" class="blob-code blob-code-inner js-file-line">      }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="file-tic-tac-toe-js-LC201" class="blob-code blob-code-inner js-file-line">        x<span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="file-tic-tac-toe-js-LC202" class="blob-code blob-code-inner js-file-line">        y<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="file-tic-tac-toe-js-LC203" class="blob-code blob-code-inner js-file-line">      }], <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-en">getEmptyCells</span>());</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="file-tic-tac-toe-js-LC204" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> player;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="file-tic-tac-toe-js-LC205" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="file-tic-tac-toe-js-LC206" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="file-tic-tac-toe-js-LC207" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// then check vertical and horizontal directions</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="file-tic-tac-toe-js-LC208" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (player <span class="pl-k">==</span> all[x][<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> all[x][<span class="pl-c1">0</span>] <span class="pl-k">==</span> all[x][<span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> all[x][<span class="pl-c1">1</span>] <span class="pl-k">==</span> all[x][<span class="pl-c1">2</span>]) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="file-tic-tac-toe-js-LC209" class="blob-code blob-code-inner js-file-line">    <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">end</span>(player, [{</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="file-tic-tac-toe-js-LC210" class="blob-code blob-code-inner js-file-line">      x<span class="pl-k">:</span> x,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="file-tic-tac-toe-js-LC211" class="blob-code blob-code-inner js-file-line">      y<span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="file-tic-tac-toe-js-LC212" class="blob-code blob-code-inner js-file-line">    }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="file-tic-tac-toe-js-LC213" class="blob-code blob-code-inner js-file-line">      x<span class="pl-k">:</span> x,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="file-tic-tac-toe-js-LC214" class="blob-code blob-code-inner js-file-line">      y<span class="pl-k">:</span> <span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="file-tic-tac-toe-js-LC215" class="blob-code blob-code-inner js-file-line">    }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="file-tic-tac-toe-js-LC216" class="blob-code blob-code-inner js-file-line">      x<span class="pl-k">:</span> x,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="file-tic-tac-toe-js-LC217" class="blob-code blob-code-inner js-file-line">      y<span class="pl-k">:</span> <span class="pl-c1">2</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="file-tic-tac-toe-js-LC218" class="blob-code blob-code-inner js-file-line">    }], <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-en">getEmptyCells</span>());</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="file-tic-tac-toe-js-LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> player;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="file-tic-tac-toe-js-LC220" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> <span class="pl-k">if</span> (player <span class="pl-k">==</span> all[<span class="pl-c1">0</span>][y] <span class="pl-k">&amp;&amp;</span> all[<span class="pl-c1">0</span>][y] <span class="pl-k">==</span> all[<span class="pl-c1">1</span>][y] <span class="pl-k">&amp;&amp;</span> all[<span class="pl-c1">1</span>][y] <span class="pl-k">==</span> all[<span class="pl-c1">2</span>][y]) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="file-tic-tac-toe-js-LC221" class="blob-code blob-code-inner js-file-line">    <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">end</span>(player, [{</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="file-tic-tac-toe-js-LC222" class="blob-code blob-code-inner js-file-line">      x<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="file-tic-tac-toe-js-LC223" class="blob-code blob-code-inner js-file-line">      y<span class="pl-k">:</span> y</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="file-tic-tac-toe-js-LC224" class="blob-code blob-code-inner js-file-line">    }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="file-tic-tac-toe-js-LC225" class="blob-code blob-code-inner js-file-line">      x<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="file-tic-tac-toe-js-LC226" class="blob-code blob-code-inner js-file-line">      y<span class="pl-k">:</span> y</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="file-tic-tac-toe-js-LC227" class="blob-code blob-code-inner js-file-line">    }, {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="file-tic-tac-toe-js-LC228" class="blob-code blob-code-inner js-file-line">      x<span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="file-tic-tac-toe-js-LC229" class="blob-code blob-code-inner js-file-line">      y<span class="pl-k">:</span> y</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="file-tic-tac-toe-js-LC230" class="blob-code blob-code-inner js-file-line">    }], <span class="pl-v">this</span>.<span class="pl-smi">data_storage</span>.<span class="pl-en">getEmptyCells</span>());</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="file-tic-tac-toe-js-LC231" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> player;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="file-tic-tac-toe-js-LC232" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="file-tic-tac-toe-js-LC233" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// check if it still has free space, if not then it's a tie</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="file-tic-tac-toe-js-LC234" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">all</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="file-tic-tac-toe-js-LC235" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> <span class="pl-smi">all</span>.<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="file-tic-tac-toe-js-LC236" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (all[i][j] <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="file-tic-tac-toe-js-LC237" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>nah<span class="pl-pds">"</span></span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="file-tic-tac-toe-js-LC238" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="file-tic-tac-toe-js-LC239" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="file-tic-tac-toe-js-LC240" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="file-tic-tac-toe-js-LC241" class="blob-code blob-code-inner js-file-line">  <span class="pl-c">// it's a tie!</span></td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="file-tic-tac-toe-js-LC242" class="blob-code blob-code-inner js-file-line">  <span class="pl-v">this</span>.<span class="pl-smi">ui</span>.<span class="pl-en">end</span>(<span class="pl-s"><span class="pl-pds">"</span>tie<span class="pl-pds">"</span></span>, [], []);</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="file-tic-tac-toe-js-LC243" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>tie<span class="pl-pds">"</span></span>;</td>
      </tr>
      <tr>
        <td id="file-tic-tac-toe-js-L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="file-tic-tac-toe-js-LC244" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
    </tbody>
  </table>
  </div>
  </div>
  </div>
  </div>
  <div class="gist-meta">
    <a href="https://gist.github.com/xtai/e21c80ed127a803014121c51e2fa21c4/raw/7271c31e17c5704d844ca22b1d23795330d0042b/tic-tac-toe.js" style="float:right">view raw</a>
    <a href="https://gist.github.com/xtai/e21c80ed127a803014121c51e2fa21c4#file-tic-tac-toe-js">tic-tac-toe.js</a>
    hosted with ❤ by <a href="https://github.com">GitHub</a>
  </div>
  </div>
</div>