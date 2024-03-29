<template><div><h2 id="响应式数据转化-api" tabindex="-1"><a class="header-anchor" href="#响应式数据转化-api" aria-hidden="true">#</a> 响应式数据转化 API</h2>
<h3 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h3>
<p>作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。</p>
<p>语法：<code v-pre>const name = toRef(person,'name')</code></p>
<p>应用: 要将响应式对象中的某个属性单独提供给外部使用时。</p>
<p>toRefs 与 toRef 功能一致，但可以批量创建多个 ref 对象，语法：<code v-pre>toRefs(person)</code></p>
<h3 id="shallowreactive-与-shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive-与-shallowref" aria-hidden="true">#</a> shallowReactive 与 shallowRef</h3>
<ul>
<li>shallowReactive：只处理对象最外层属性的响应式（浅响应式）。</li>
<li>shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理。</li>
<li>什么时候使用?
<ul>
<li>如果有一个对象数据，结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive。</li>
<li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===&gt; shallowRef。</li>
</ul>
</li>
</ul>
<h3 id="readonly-与-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#readonly-与-shallowreadonly" aria-hidden="true">#</a> readonly 与 shallowReadonly</h3>
<ul>
<li>readonly: 让一个响应式数据变为只读的（深只读）。</li>
<li>shallowReadonly：让一个响应式数据变为只读的（浅只读）。</li>
<li>应用场景: 不希望数据被修改时。</li>
</ul>
<h3 id="toraw-与-markraw" tabindex="-1"><a class="header-anchor" href="#toraw-与-markraw" aria-hidden="true">#</a> toRaw 与 markRaw</h3>
<ul>
<li>toRaw：
<ul>
<li>作用：将一个由<code v-pre>reactive</code>生成的响应式对象转为普通对象。</li>
<li>使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。</li>
</ul>
</li>
<li>markRaw：
<ul>
<li>作用：标记一个对象，使其永远不会再成为响应式对象。</li>
<li>应用场景:
<ol>
<li>有些值不应被设置为响应式的，例如复杂的第三方类库等。</li>
<li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。</li>
</ol>
</li>
</ul>
</li>
</ul>
<h3 id="customref" tabindex="-1"><a class="header-anchor" href="#customref" aria-hidden="true">#</a> customRef</h3>
<p>作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。</p>
<p>示例：创建一个实现了防抖效果的响应式数据</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyword<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ keyword }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> customRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Demo"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// let keyword = ref('hello') //使用Vue准备好的内置ref</span>
    <span class="token comment">//自定义一个myRef</span>
    <span class="token keyword">function</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
      <span class="token comment">//通过customRef去实现自定义</span>
      <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//告诉Vue这个value值是需要被“追踪”的</span>
            <span class="token keyword">return</span> value<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
              <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//告诉Vue去更新界面</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> keyword <span class="token operator">=</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//使用程序员自定义的ref</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      keyword<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应式数据判断" tabindex="-1"><a class="header-anchor" href="#响应式数据判断" aria-hidden="true">#</a> 响应式数据判断</h3>
<ul>
<li>isRef: 检查一个值是否为一个 ref 对象</li>
<li>isReactive: 检查一个对象是否是由 <code v-pre>reactive</code> 创建的响应式代理</li>
<li>isReadonly: 检查一个对象是否是由 <code v-pre>readonly</code> 创建的只读代理</li>
<li>isProxy: 检查一个对象是否是由 <code v-pre>reactive</code> 或者 <code v-pre>readonly</code> 方法创建的代理</li>
<li>以上返回值均为 boolean</li>
</ul>
<h2 id="other-api" tabindex="-1"><a class="header-anchor" href="#other-api" aria-hidden="true">#</a> Other API</h2>
<h3 id="provide-与-inject" tabindex="-1"><a class="header-anchor" href="#provide-与-inject" aria-hidden="true">#</a> provide 与 inject</h3>
<ul>
<li>provide 和 inject 提供依赖注入，功能类似 2.x 的 provide/inject</li>
</ul>
<p>示例：实现跨层级祖孙组件通信</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>父组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>当前颜色: {{ color }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'red'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>红<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'yellow'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'blue'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>蓝<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token comment">/* 
- provide` 和 `inject` 提供依赖注入，功能类似 2.x 的 `provide/inject
- 实现跨层级组件(祖孙)间通信
*/</span>

<span class="token keyword">import</span> Son <span class="token keyword">from</span> <span class="token string">"./Son.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"ProvideInject"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Son<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      color<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GrandSon</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GrandSon <span class="token keyword">from</span> <span class="token string">"./GrandSon.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GrandSon<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ color }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>孙子组件: {{ color }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">"color"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      color<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局-api-的转移" tabindex="-1"><a class="header-anchor" href="#全局-api-的转移" aria-hidden="true">#</a> 全局 API 的转移</h3>
<p>Vue2 有许多全局 API 和配置,例如：注册全局组件、注册全局指令等。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//注册全局组件</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'MyButton'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;button @click="count++">Clicked {{ count }} times.&lt;/button>'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//注册全局指令</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'focus'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">inserted</span><span class="token operator">:</span> <span class="token parameter">el</span> <span class="token operator">=></span> el<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3 对这些 API 做出了调整：</p>
<p>将全局的 API，即：<code v-pre>Vue.xxx</code>调整到应用实例（<code v-pre>app</code>）上</p>
<table>
<thead>
<tr>
<th>2.x 全局 API（<code v-pre>Vue</code>）</th>
<th>3.x 实例 API (<code v-pre>app</code>)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vue.config.xxxx</td>
<td>app.config.xxxx</td>
</tr>
<tr>
<td>Vue.config.productionTip</td>
<td><strong>移除</strong></td>
</tr>
<tr>
<td>Vue.component</td>
<td>app.component</td>
</tr>
<tr>
<td>Vue.directive</td>
<td>app.directive</td>
</tr>
<tr>
<td>Vue.mixin</td>
<td>app.mixin</td>
</tr>
<tr>
<td>Vue.use</td>
<td>app.use</td>
</tr>
<tr>
<td>Vue.prototype</td>
<td>app.config.globalProperties</td>
</tr>
</tbody>
</table>
<h3 id="过渡类名更改" tabindex="-1"><a class="header-anchor" href="#过渡类名更改" aria-hidden="true">#</a> 过渡类名更改</h3>
<p>Vue2 写法</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.v-enter,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.v-leave,
.v-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue3 写法</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.v-enter-from,
.v-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.v-leave-from,
.v-enter-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h3>
<ul>
<li>
<p>移除 <strong>keyCode</strong> 作为 v-on 的修饰符，同时也不再支持 config.keyCodes</p>
</li>
<li>
<p>移除 v-on.native 修饰符</p>
</li>
<li>
<p>emits 声明</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 父组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleComponentEvent<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleNativeClickEvent<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token comment">&lt;!-- 子组件中需要声明emits事件之后才能在setup中使用 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"close"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除过滤器" tabindex="-1"><a class="header-anchor" href="#移除过滤器" aria-hidden="true">#</a> 移除过滤器</h3>
<p>过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。</p>
</div></template>


