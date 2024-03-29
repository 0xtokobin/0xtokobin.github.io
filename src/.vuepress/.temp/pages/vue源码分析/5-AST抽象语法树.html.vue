<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>Vue 在编译时会将 Vue 文件中的 template 标签内容通过 <code v-pre>模板语法</code> 编译为 <code v-pre>AST抽象语法树</code>，再直接转译为 <code v-pre>渲染函数(h函数)</code></p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/Vue/1673951133288.jpg" alt="语法树渲染过程" tabindex="0" loading="lazy"><figcaption>语法树渲染过程</figcaption></figure>
<p>渲染函数是 AST 的产物，也是 VNode 的源头</p>
<p>在开始手写 AST 抽象语法树之前，建议先熟悉了解<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/4-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E.html">模板引擎</RouterLink>的指针思想与栈结构遍历</p>
<p>本章同样也简化了 AST 语法树的源码，仅生成常规闭合标签与内部常规属性的 AST 语法树，了解模板内的插值语法详见<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/4-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E.html">模板引擎</RouterLink></p>
<h2 id="ast-形成" tabindex="-1"><a class="header-anchor" href="#ast-形成" aria-hidden="true">#</a> AST 形成</h2>
<p>AST 语法树的形成，同样围绕模板字符串的循环遍历，以及标签堆栈和内容堆栈的数据变化进行（为了便于理解此处开辟了双堆栈数组，实际源码可优化压缩至单数组）</p>
<p>循环过程中：</p>
<ul>
<li>剩余字符串 rest 随指针移动不断缩减长度</li>
<li>首先判断 rest 开头是否满足<strong>标签开始标签的正则</strong>，判断通过则将标签截取并推入到标签堆栈中，内容堆栈推入一个包含标签属性和 children 空数组的对象<code v-pre>{ tag, children: [] }</code></li>
<li>其次判断 rest 开头是否满足<strong>标签结束标签的正则</strong>，判断通过则将标签截取，同时标签堆栈 pop 出栈顶标签，判断截取后标签与出栈标签是否相同
<ul>
<li>截取标签与出栈标签相同，说明开始与闭合标签对得上，此时让内容堆栈的栈顶对象(pop_arr)出栈，因为栈结构的性质（后进先出），所以弹出的栈顶对象 pop_arr（栈顶标签）必定是前一项栈顶对象的 children，如果弹栈后的内容堆栈长度不为 0，则将 pop_arr 推入到当前内容堆栈的栈顶对象 children 中；如果弹栈后的内容堆栈为 0，说明最后的弹出项就是最终完整的内容结构，在外部声明一个数组 output 接收它</li>
<li>截取标签与出栈标签不同，说明开始与闭合标签对不上，抛出异常 new Error</li>
</ul>
</li>
<li>然后判断 rest 开头是否满足<strong>标签结束标签之前的正文内容</strong>（开始标签与开始标签之间的文本内容本章节不做判断），判断通过则将文本内容截取，如果内容不为空就把文本内容赋给当前内容堆栈栈顶对象的 text 属性</li>
<li>如果上述判断都未通过，则指针 index 右移一位
<ul>
<li>判断开始标签通过的语句中，最后 index 要增加标签长度+2(<code v-pre>&lt;&gt;</code>的长度为 2)</li>
<li>判断结束标签通过的语句中，最后 index 要增加标签长度+3(<code v-pre>&lt;/&gt;</code>的长度为 3)</li>
</ul>
</li>
<li>最后返回 output 数组，即结构正确的 AST 数组</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> parse <span class="token keyword">from</span> <span class="token string">"./parse.js"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> templateString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>
    &lt;h3>哈哈哈哈你好&lt;/h3>
    &lt;ul>
        &lt;li>A&lt;/li>
        &lt;li>B&lt;/li>
        &lt;li>C&lt;/li>
    &lt;/ul>
    &lt;div>
        &lt;div>哈哈&lt;/div>
    &lt;/div>
&lt;/div>
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>templateString<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// parse函数 主函数</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">templateString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 指针</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 剩余部分</span>
  <span class="token keyword">let</span> rest <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token comment">// 开始标记 &lt;div></span>
  <span class="token keyword">const</span> startReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^&lt;([a-z]+[1-6]?)></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token comment">// 结束标记 &lt;/div></span>
  <span class="token keyword">const</span> endReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^&lt;\/([a-z]+[1-6]?)></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token comment">// 结束标记前的文字</span>
  <span class="token keyword">const</span> wordReg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([^&lt;]+)&lt;\/[a-z]+[1-6]?></span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
  <span class="token comment">// 标签堆栈</span>
  <span class="token keyword">const</span> tagStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 内容堆栈</span>
  <span class="token keyword">const</span> contentStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 输出结果</span>
  <span class="token keyword">let</span> output <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> templateString<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    rest <span class="token operator">=</span> templateString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 识别开始标签</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>startReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tag <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>startReg<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// console.log("检测到开始标记", tag);</span>
      <span class="token comment">// 开始标记入栈1</span>
      tagStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 空数组入栈2</span>
      contentStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// &lt;>占两位，额外+2</span>
      index <span class="token operator">+=</span> tag<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>endReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tag <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>endReg<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// console.log("检测到结束标记", tag);</span>
      <span class="token keyword">const</span> pop_tag <span class="token operator">=</span> tagStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// tag和tagStack顶部相同，标签必定是封闭闭合的</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> pop_tag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> pop_arr <span class="token operator">=</span> contentStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> len <span class="token operator">=</span> contentStack<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 长度不为0，出栈项往上一项的children里推</span>
          contentStack<span class="token punctuation">[</span>contentStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pop_arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 长度为0，最后推出的项就是堆叠完整的AST结构</span>
          output <span class="token operator">=</span> pop_arr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>tagStack<span class="token punctuation">[</span>tagStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"标签没有封闭!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// &lt;/>占三位，额外+3</span>
      index <span class="token operator">+=</span> tag<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>wordReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> word <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>wordReg<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token comment">// 检测截取片段内容不为空</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\s+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log("检测到文字", word);</span>
        contentStack<span class="token punctuation">[</span>tagStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        contentStack<span class="token punctuation">[</span>tagStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>text <span class="token operator">=</span> word<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      index <span class="token operator">+=</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> output<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终输出结果：</p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/Vue/1673964270395.jpg" alt="AST树初步结果" tabindex="0" loading="lazy"><figcaption>AST树初步结果</figcaption></figure>
<h3 id="识别-attrs" tabindex="-1"><a class="header-anchor" href="#识别-attrs" aria-hidden="true">#</a> 识别 attrs</h3>
<p>上面的 parse 函数已经支持纯净标签与文本内容的 AST 生成，但当标签内书写 class 等属性时，仍会报错，所以需要继续完善补充正则与判断</p>
<p>修改开始标签正则：</p>
<p><code v-pre>const startReg = /^&lt;([a-z]+[1-6]?)(\s[^&lt;]+)?&gt;/;</code></p>
<p>调整开始标签正则判断内部语句</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 识别开始标签</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>startReg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> tag <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>startReg<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// attrs内容</span>
  <span class="token keyword">const</span> attrs <span class="token operator">=</span> rest<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>startReg<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// console.log("检测到开始标记", tag);</span>
  <span class="token comment">// 开始标记入栈1</span>
  tagStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 空数组入栈2</span>
  contentStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tag<span class="token punctuation">,</span> <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token function">parseAttrsString</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// &lt;>占两位，额外+2 再加attrs长度</span>
  index <span class="token operator">+=</span> tag<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token punctuation">(</span>attrs <span class="token operator">?</span> attrs<span class="token punctuation">.</span>length <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>attrs 转换函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 把attrsString转换为数组返回</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">parseAttrsString</span><span class="token punctuation">(</span><span class="token parameter">attrsString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>attrsString <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> attrsString <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 当前是否在引号内</span>
  <span class="token keyword">let</span> inYinHao <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token comment">// 断点</span>
  <span class="token keyword">let</span> point <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 结果数组，根据引号判断拆分出的字符串存入result中</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 遍历attrsString</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> attrsString<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> char <span class="token operator">=</span> attrsString<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">'"'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      inYinHao <span class="token operator">=</span> <span class="token operator">!</span>inYinHao<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">" "</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>inYinHao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 遇见了空格并且不在引号中，并且截取范围不为空值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\s*$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>attrsString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>point<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>attrsString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>point<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        point <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 循环结束之后，如果最后引号紧贴标签没有空格比如 &lt;h3 class="hello" id="top" data-src="888"></span>
  <span class="token comment">// data-src会push不到result里面，需要做额外判断</span>
  result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>attrsString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 根据等号拆分</span>
  <span class="token comment">// 将["k=v", "k=v", "k=v"]变为[{ name: k, value: v },{ name: k, value: v },{ name: k, value: v }]</span>
  <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据等号拆分</span>
    <span class="token keyword">const</span> o <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(.+)="(.+)"$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> o<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> o<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="太长不看-总结" tabindex="-1"><a class="header-anchor" href="#太长不看-总结" aria-hidden="true">#</a> 太长不看-总结</h2>
<ol>
<li>搭配<RouterLink to="/vue%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/4-%E6%A8%A1%E6%9D%BF%E5%BC%95%E6%93%8E.html">模板引擎</RouterLink>中对插值语法<code v-pre>{{}}</code>的编译与 data 数据的字符串编译，可以生成数据完整且静态的 DOM 模板字符串（此处插值语法单独处理，实际的 Vue 源码对插值语法解析和 AST 转换是同时进行的）</li>
<li>循环遍历 DOM 模板字符串，通过对开始标签、开始标签内的 attrs 字符串、正文内容、结束标签等正则判断，结合栈结构的原理，解析完开始标签之后，将处于遍历中的 attrs 内容、正文内容推入栈顶对象，解析完结束标签之后栈顶出栈，往上一项栈顶对象的 children 回推，最终生成结构层次分明的 AST 语法树</li>
<li>AST 语法树最后可以经过渲染函数生成虚拟节点对象 VNode，最后根据 diff 算法最小量更新生成真实 DOM 对象，在页面中完成渲染</li>
</ol>
<p>可运行项目 demo 详见：</p>
<p><a href="https://github.com/mi-saka10032/ast-demo" target="_blank" rel="noopener noreferrer">https://github.com/mi-saka10032/ast-demo<ExternalLinkIcon/></a></p>
</div></template>


