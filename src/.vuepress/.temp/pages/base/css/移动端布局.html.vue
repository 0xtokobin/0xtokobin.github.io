<template><div><h2 id="现状" tabindex="-1"><a class="header-anchor" href="#现状" aria-hidden="true">#</a> 现状</h2>
<h3 id="浏览器现状" tabindex="-1"><a class="header-anchor" href="#浏览器现状" aria-hidden="true">#</a> 浏览器现状</h3>
<p>UC QQ 欧朋 百度手机 360 安全 谷歌 搜狗手机 猎豹 以及其他杂牌浏览器。</p>
<p>以上均为移动端浏览器。</p>
<p>兼容移动端主流浏览器，处理 Webkit 内核浏览器即可。</p>
<h3 id="手机屏幕" tabindex="-1"><a class="header-anchor" href="#手机屏幕" aria-hidden="true">#</a> 手机屏幕</h3>
<p>移动端设备屏幕尺寸非常多，碎片化严重。</p>
<p>Android 设备有多重分辨率：480x800，480x854，540x960，720x1280，1080x1920 等，甚至 2K、4K 屏等。</p>
<p>近年来 iPhone 的碎片化也加剧了，其设备的主要分辨率有：640x960，640x1136，750x1334，1242x2208 等。</p>
<p>作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是 px。</p>
<h3 id="移动端调试方法" tabindex="-1"><a class="header-anchor" href="#移动端调试方法" aria-hidden="true">#</a> 移动端调试方法</h3>
<p>Chrome DevTools（谷歌浏览器）模拟手机调试</p>
<p>搭建本地 Web 服务器，手机和服务器一个局域网内，通过手机访问服务器</p>
<p>使用外网服务器，直接 IP 或域名访问。</p>
<h2 id="视口" tabindex="-1"><a class="header-anchor" href="#视口" aria-hidden="true">#</a> 视口</h2>
<p>视口就是浏览器显示页面内容的屏幕区域，视口可以分为<strong>布局视口</strong>、<strong>视觉视口</strong>和<strong>理想视口</strong></p>
<h3 id="布局视口-layout-viewport" tabindex="-1"><a class="header-anchor" href="#布局视口-layout-viewport" aria-hidden="true">#</a> 布局视口 layout-viewport</h3>
<p>一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期 PC 端页面在手机上显示的问题</p>
<p>iOS，Android 基本都将这个视口分辨率设置为 980px，所以 PC 上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。</p>
<h3 id="视觉视口-visual-viewport" tabindex="-1"><a class="header-anchor" href="#视觉视口-visual-viewport" aria-hidden="true">#</a> 视觉视口 visual-viewport</h3>
<p>它是用户正在看到的网站区域。<strong>注意</strong>：是网站的区域。</p>
<p>我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来宽度。</p>
<h3 id="理想视口-ideal-viewport" tabindex="-1"><a class="header-anchor" href="#理想视口-ideal-viewport" aria-hidden="true">#</a> 理想视口 ideal-viewport</h3>
<p>为了使网站在移动端有最理想的浏览和阅读宽度而设定</p>
<ul>
<li>
<p>理想视口，对设备来讲，是最理想的视口尺寸</p>
</li>
<li>
<p>需要手动添写 meta 视口标签通知浏览器操作</p>
</li>
<li>
<p>meta 视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽</p>
</li>
</ul>
<h3 id="视口标签-meta" tabindex="-1"><a class="header-anchor" href="#视口标签-meta" aria-hidden="true">#</a> 视口标签 meta</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width,
  user-scalable=no,
  initial-scale=1.0,
  maximum-scale=1.0,
  minimum-scale=1.0<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">解释说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">宽度设置的是 viewport 宽度，可以设置 device-width 特殊值</td>
</tr>
<tr>
<td style="text-align:left">initial-scale</td>
<td style="text-align:left">初始缩放比，大于 0 的数字</td>
</tr>
<tr>
<td style="text-align:left">maximum-scale</td>
<td style="text-align:left">最大缩放比，大于 0 的数字</td>
</tr>
<tr>
<td style="text-align:left">minimum-scale</td>
<td style="text-align:left">最小缩放比，大于 0 的数字</td>
</tr>
<tr>
<td style="text-align:left">user-scalable</td>
<td style="text-align:left">用户是否可以缩放，yes or no(1 or 0)</td>
</tr>
</tbody>
</table>
<p><strong>标准 viewport 设置</strong></p>
<ul>
<li>
<p>视口宽度和设备保持一致</p>
</li>
<li>
<p>视口默认缩放比例 1.0</p>
</li>
<li>
<p>不允许用户自行缩放</p>
</li>
<li>
<p>最大允许的缩放比例 1.0</p>
</li>
<li>
<p>最小允许的缩放比例 1.0</p>
</li>
</ul>
<h2 id="二倍图" tabindex="-1"><a class="header-anchor" href="#二倍图" aria-hidden="true">#</a> 二倍图</h2>
<h3 id="物理像素-物理像素比" tabindex="-1"><a class="header-anchor" href="#物理像素-物理像素比" aria-hidden="true">#</a> 物理像素&amp;物理像素比</h3>
<ul>
<li>
<p>物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的。</p>
</li>
<li>
<p>开发时候的 1px 不是一定等于 1 个物理像素的。</p>
</li>
<li>
<p>一个 px 能显示的物理像素点的个数，称为物理像素比或者屏幕像素比。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">设备</th>
<th style="text-align:left">尺寸(英寸)</th>
<th style="text-align:left">开发尺寸(px)</th>
<th style="text-align:left">物理像素比(dpr)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">iphone3G</td>
<td style="text-align:left">3.5</td>
<td style="text-align:left">320*480</td>
<td style="text-align:left">1.0</td>
</tr>
<tr>
<td style="text-align:left">iphone4/4s</td>
<td style="text-align:left">3.5</td>
<td style="text-align:left">320*480</td>
<td style="text-align:left">2.0</td>
</tr>
<tr>
<td style="text-align:left">iphone5/5s/5c</td>
<td style="text-align:left">4.0</td>
<td style="text-align:left">320*568</td>
<td style="text-align:left">2.0</td>
</tr>
<tr>
<td style="text-align:left">HTC One M8</td>
<td style="text-align:left">4.5</td>
<td style="text-align:left">360*640</td>
<td style="text-align:left">3.0</td>
</tr>
<tr>
<td style="text-align:left">iphone6</td>
<td style="text-align:left">4.7</td>
<td style="text-align:left">375*667</td>
<td style="text-align:left">2.0</td>
</tr>
<tr>
<td style="text-align:left">Nexus 4</td>
<td style="text-align:left">4.7</td>
<td style="text-align:left">384*640</td>
<td style="text-align:left">2.0</td>
</tr>
<tr>
<td style="text-align:left">Nexus 5x</td>
<td style="text-align:left">5.2</td>
<td style="text-align:left">411*731</td>
<td style="text-align:left">2.6</td>
</tr>
<tr>
<td style="text-align:left">iphone6 Plus</td>
<td style="text-align:left">5.5</td>
<td style="text-align:left">414*736</td>
<td style="text-align:left">3.0</td>
</tr>
<tr>
<td style="text-align:left">Samsung Galaxy Note 4</td>
<td style="text-align:left">5.7</td>
<td style="text-align:left">480*853</td>
<td style="text-align:left">3.0</td>
</tr>
<tr>
<td style="text-align:left">Sony Xperia Z Ultra</td>
<td style="text-align:left">6.4</td>
<td style="text-align:left">540*960</td>
<td style="text-align:left">2.0</td>
</tr>
<tr>
<td style="text-align:left">Nexus 7('12)</td>
<td style="text-align:left">7.0</td>
<td style="text-align:left">600*960</td>
<td style="text-align:left">1.3</td>
</tr>
<tr>
<td style="text-align:left">iPad Mini</td>
<td style="text-align:left">7.9</td>
<td style="text-align:left">768*1024</td>
<td style="text-align:left">1.0</td>
</tr>
</tbody>
</table>
<h3 id="多倍图" tabindex="-1"><a class="header-anchor" href="#多倍图" aria-hidden="true">#</a> 多倍图</h3>
<ul>
<li>
<p>在标准 viewport 设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题</p>
</li>
<li>
<p>通常使用二倍图，但也有 3 倍图 4 倍图的情况，看实际需求。</p>
</li>
</ul>
<h3 id="背景缩放-background-size" tabindex="-1"><a class="header-anchor" href="#背景缩放-background-size" aria-hidden="true">#</a> 背景缩放 background-size</h3>
<p>属性：background-size: 背景图片宽度 背景图片高度;</p>
<ul>
<li>
<p>属性值可以是 px(50px 50px)、方向词(left center)、cover、contain。</p>
</li>
<li>
<p>只写一个参数，高度省略的会等比例缩放。</p>
</li>
<li>
<p>里面的单位可以跟%，相对于父盒子而言。</p>
</li>
<li>
<p>cover：把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。</p>
</li>
<li>
<p>contain：把图像扩展至最大尺寸，以使宽度和高度完全适应内容区域。</p>
</li>
</ul>
<h3 id="其他图片格式" tabindex="-1"><a class="header-anchor" href="#其他图片格式" aria-hidden="true">#</a> 其他图片格式</h3>
<ul>
<li>
<p>DPG 图片压缩技术：京东自主研发的图片压缩技术，能够兼容 jpeg，压缩后的图片和 webp 的清晰度对比没有差距。</p>
</li>
<li>
<p>webp 图片格式：谷歌开发的一种旨在加快图片加载速度的图片格式，图片压缩体积大约只有 jpeg 的 2/3，节省大量服务器宽带资源和数据空间。</p>
</li>
</ul>
<h2 id="移动端开发选择" tabindex="-1"><a class="header-anchor" href="#移动端开发选择" aria-hidden="true">#</a> 移动端开发选择</h2>
<h3 id="单独制作移动端页面-主流" tabindex="-1"><a class="header-anchor" href="#单独制作移动端页面-主流" aria-hidden="true">#</a> 单独制作移动端页面（主流）</h3>
<p>通常情况下，网站域名前面加 m（mobile）可以打开移动端。通过判断设备，如果是移动设备打开，则跳转至移动端页面。</p>
<h3 id="响应式页面兼容移动端-其次" tabindex="-1"><a class="header-anchor" href="#响应式页面兼容移动端-其次" aria-hidden="true">#</a> 响应式页面兼容移动端（其次）</h3>
<p>通过判断屏幕宽度来改变样式，以适应不同终端。</p>
<p>缺点：制作麻烦，需要花很大精力去调兼容性问题。</p>
<h2 id="移动端常见布局" tabindex="-1"><a class="header-anchor" href="#移动端常见布局" aria-hidden="true">#</a> 移动端常见布局</h2>
<p>移动端布局和 PC 端有所区别：</p>
<p>1.单独制作移动端页面（主流）</p>
<ul>
<li>
<p>流式布局（百分比布局）</p>
</li>
<li>
<p>flex 弹性布局（强烈推荐）</p>
</li>
<li>
<p>less+rem+媒体查询布局</p>
</li>
<li>
<p>混合布局</p>
<p>2.响应式页面兼容移动端（其次）</p>
</li>
<li>
<p>媒体查询</p>
</li>
<li>
<p>bootstrap</p>
</li>
</ul>
<h3 id="流式布局" tabindex="-1"><a class="header-anchor" href="#流式布局" aria-hidden="true">#</a> 流式布局</h3>
<p>流式布局，就是百分比布局，也称非固定像素布局。</p>
<p>通过盒子的宽度设置成百分比来根据屏幕的宽度进行伸缩，不受固定像素的限制，内容向两侧填充。</p>
<p>流式布局方式是移动 web 开发使用的比较常见的布局方式。</p>
<p>max-width：最大宽度；min-width：最小宽度。height 同理</p>
<p>视口标签与样式初始化示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span>
  <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span>
  <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 640px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex-布局" tabindex="-1"><a class="header-anchor" href="#flex-布局" aria-hidden="true">#</a> flex 布局</h3>
<p>详见 <RouterLink to="/base/css/CSS3%E6%96%B0%E5%B1%9E%E6%80%A7.html#flex%E5%B8%83%E5%B1%80-%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81">CSS3 新属性-flex 布局</RouterLink></p>
<h3 id="rem-适配布局-重要" tabindex="-1"><a class="header-anchor" href="#rem-适配布局-重要" aria-hidden="true">#</a> rem 适配布局（重要）</h3>
<p>流式布局和 flex 布局带来的问题：</p>
<ul>
<li>
<p>页面布局文字能否随着屏幕大小变化而变化？</p>
</li>
<li>
<p>流式布局和 flex 布局主要针对于宽度布局，高度如何设置？</p>
</li>
<li>
<p>怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？</p>
</li>
</ul>
<p><strong>rem + 媒体查询 + less 预编译语言 提供了解决方案</strong></p>
<h4 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h4>
<p>rem（root em）是一个相对单位，类似于 em，em 是父元素字体大小。</p>
<p>不同的是 rem 的基准是相对于 html 元素的字体大小。</p>
<p>比如，根元素(html)设置 font-size=12px;非根元素设置 width:2rem;则换成 px 表示就是 24px。</p>
<p><strong>rem 的优点就是可以通过修改 html 里面的文字大小来改变页面中元素的大小，可以整体控制</strong></p>
<h4 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h4>
<p>媒体查询是 CSS3 新语法。</p>
<p>使用@media 查询，可以针对不同的媒体类型定义不同的样式</p>
<p>@media 可以针对不同的屏幕尺寸设置不同的样式</p>
<p>当你重置浏览器大小的过程中，页面也会跟随重置</p>
<p>目前针对很多手机、平板等设备都用得到多媒体查询</p>
<p>语法：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span>|<span class="token keyword">not</span>|<span class="token keyword">only</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
	CSS-Code<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.gridmenu</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.gridmain</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.gridright</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>用@media 开头注意 @符号</p>
</li>
<li>
<p>mediatype：媒体类型</p>
</li>
<li>
<p>关键字 and not only</p>
</li>
<li>
<p>media feature 媒体特性必须有小括号包含</p>
</li>
</ul>
<br>
<ol>
<li>媒体类型 mediatype</li>
</ol>
<p>all：所有设备</p>
<p>print：打印机和打印预览</p>
<p>screen：电脑屏幕、平板电脑、手机等</p>
<br>
<ol start="2">
<li>关键字 not and only</li>
</ol>
<p>关键字将媒体类型或多个媒体特性连接到一起作为媒体查询条件。</p>
<ul>
<li>
<p>not: not 运算符用于否定媒体查询，如果不满足这个条件则返回 true，否则返回 false。 如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。 如果使用 not 运算符，则还必须指定媒体类型。</p>
</li>
<li>
<p>only: only 运算符仅在整个查询匹配时才用于应用样式，并且对于防止较早的浏览器应用所选样式很有用。 当不使用 only 时，旧版本的浏览器会将 screen and (max-width: 500px) 简单地解释为 screen，忽略查询的其余部分，并将其样式应用于所有屏幕。 如果使用 only 运算符，则还必须指定媒体类型。</p>
</li>
<li>
<p>, (逗号) 逗号用于将多个媒体查询合并为一个规则。 逗号分隔列表中的每个查询都与其他查询分开处理。 因此，如果列表中的任何查询为 true，则整个 media 语句均返回 true。 换句话说，列表的行为类似于逻辑或 or 运算符。</p>
</li>
<li>
<p>and: and 操作符用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为真，它还用于将媒体功能与媒体类型结合在一起。</p>
</li>
</ul>
<br>
<ol start="3">
<li>媒体特性</li>
</ol>
<p><strong>媒体特性必须加小括号包含</strong></p>
<ul>
<li>
<p>width：页面可见区域宽度</p>
</li>
<li>
<p>min-width：页面最小可见区域宽度</p>
</li>
<li>
<p>max-width：页面最大可见区域宽度</p>
</li>
</ul>
<p><strong>注意</strong>：为了防止混乱，媒体查询要按照从小到大或者从大到小的顺序来写。</p>
<br>
<p>示例代码：</p>

<CodeDemo id="code-demo-710" type="normal" title="%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2%E7%A4%BA%E4%BE%8B" code="eJytlFtL7DAQx7/KnMKBc+TU7upBd9d0UbyAT/qgoLAvaTK0wTSpbfaG+N2dttvaVdQKPjXzn9svQydPXuJS7U089uvs6vTm/vocSmE6M6z8guYmDmcemplHGgBLkMvqROcUHQeR8LxAR0G3Nxf+aOZBsOVPnMt8fJyrBYXc+bcn/qlNM+5UpJGChTUOTZl+eR6ijEttu4DhKZJ7oXCZ2dxt5SyVdEkocaEE+pXxD5RRTnHtF4JrDIe7g25Fp5zG6ZkV85QqsKC2N87CrVsDYDe3S3hqLIDI5hLzCQyzFRRWKwk5yqPG/9ymCau7aVIVmebrCXFpZdCPtBUPbRpARU1VB4PfHTVBFSeukrNVR4+4eIhzOzfSpz6WcOIc0bzHCHaAHR6MiHUnaLTjFKXiUIgyBbiR8Cflq3puE6ii/3bR317lI9i2abf7NByP96omXxAo0xBQQl+C/+MeAPX9yy5suFcOsjfJZhZvR1RX6Uk46kH4Tazv9N/f/6w/C15/dha0S80iK9fNOki1AKF5UdCi0S5sXoB3LgIgFwtI+7GA1zMLNkhEWT9M3vMLTDRWHQ==">
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">.row</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token selector">.col</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* &lt;768px */</span>
      <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token selector">.col</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* >=992 and  */</span>
      <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 992px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token selector">.col</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 49%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* >=768px and &lt;1200px */</span>
      <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token selector">.col</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 48%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">/* >=1200px */</span>
      <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token selector">.col</span> <span class="token punctuation">{</span>
          <span class="token property">width</span><span class="token punctuation">:</span> 33%<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo><ol start="4">
<li>引入资源</li>
</ol>
<p>当样式比较繁多的时候，我们可以针对不同的媒体使用不同 stylesheets(样式表)</p>
<p>原理就是直接在 link 中判断设备的尺寸，然后引用不同的 css 文件。</p>
<p>语法：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>&lt;link rel=<span class="token string">"stylesheets"</span> media=<span class="token string">"mediatype and|not|only (media feature)"</span> href=<span class="token string">"***.css"</span>>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>link 引入同样遵循从小到大的方法</p>
<h4 id="less-变量转换-rem" tabindex="-1"><a class="header-anchor" href="#less-变量转换-rem" aria-hidden="true">#</a> less 变量转换 rem</h4>
<p>通过在 less 中声明变量，确定默认设计稿和默认等分数下的基准尺寸值，其余 px 属性写成(实际大小 px / 基准尺寸值) rem</p>
<div class="language-less line-numbers-mode" data-ext="less"><pre v-pre class="language-less"><code><span class="token comment">// 此处默认设计稿750px与15等分，默认基准尺寸值 750 / 15 = 50px</span>
<span class="token variable">@width<span class="token punctuation">:</span></span> 50px<span class="token punctuation">;</span>

<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>100px <span class="token operator">/</span> <span class="token variable">@width</span><span class="token punctuation">)</span> rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>50px <span class="token operator">/</span> <span class="token variable">@width</span><span class="token punctuation">)</span> rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less 详见 <RouterLink to="/base/css/%E9%A2%84%E7%BC%96%E8%AF%91%E8%AF%AD%E8%A8%80.html#%E5%8F%98%E9%87%8F">预编译语言#变量</RouterLink></p>
<h3 id="实时响应式适配方案实现" tabindex="-1"><a class="header-anchor" href="#实时响应式适配方案实现" aria-hidden="true">#</a> 实时响应式适配方案实现</h3>
<p>响应式屏幕样式方案由 媒体查询 + less + rem 共同组成</p>
<ul>
<li>一般情况下我们以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果。现在基本以 750 为准。</li>
</ul>
<p>① 假设设计稿是 750px</p>
<p>② 假设我们把整个屏幕划分为 15 等份（划分标准不一，可以是 20 份也可以是 10 等份）</p>
<p>③ 每一份作为 html 字体大小，这里就是 50px</p>
<p>④ 在 320px 设备的时候，字体大小为 320 / 15 就是 21.33px</p>
<p>⑤ 用我们页面元素的大小，除以不同的 html 字体大小会发现它们比例还是相同的</p>
<p>⑥ 比如我们以 750 为标准设计稿</p>
<p>⑦ 一个 100*100 像素的页面元素在 750 屏幕下，就是 100 / 50 转换为 rem 是 2rem * 2rem，比例还是 1 比 1</p>
<p>⑧ 320 屏幕下，html 字体大小为 21.33，则 2rem = 42.66px，此时宽和高都是 42.66，宽和高的比例还是 1 比 1</p>
<p>⑨ 已经能实现不同屏幕下 页面元素盒子等比例缩放的效果</p>
<br>
<ul>
<li>元素 font-size 取值方法</li>
</ul>
<p>① 最后的公式：页面元素的 rem 值 = 页面实际元素值(px) / （屏幕宽度 / 划分的份数）</p>
<p>② 屏幕宽度 / 划分的份数 就是 html font-size 的大小</p>
<p>③ 或者：页面元素的 rem 值 = 页面实际元素值(px) / html font-size 字体大小</p>
<br>
<p><strong>重点</strong></p>
<ol>
<li>
<p>媒体查询提供不同设备、不同屏幕下 html 根元素的 font-size 字体大小基准值</p>
</li>
<li>
<p>在已知设计稿宽度（如 750px）和切割份数（如 15 等份）的前提下，以 750 / 15 = 50px 的 font-size 为基准进行宽高比例计算，此时通过 less 中的变量声明 @width = 50px; 以及 less 允许的四则运算方式，样式表中所有涉及 px 单位的书写均可表示为 (实际大小 / @width) rem，以此实现全尺寸属性的比例化。</p>
</li>
<li>
<p>其余设备屏幕下的 html font-size 字体大小基准值，根据媒体查询动态调整，同时全元素尺寸属性通过 rem 比例数值动态调整尺寸。</p>
</li>
<li>
<p>现阶段可实现的技术方案有限，后期学习 js 和框架之后有两种方案可选：</p>
</li>
</ol>
<p>① script 引入 flexible.js 提供的默认 750 / 15 等份媒体查询方法可提供媒体查询与设备的匹配关系方案，开发者只需要关注 rem 尺寸比例即可。</p>
<p>② 前端工程化之后，开发者更是直接正常书写 px 属性，项目整体打包之前，打包软件会对项目全局样式进行预扫描和预处理，将全部的 px 属性根据媒体查询匹配方案自动转换为 rem 比例值，最后再统一导入样式文件。</p>
</div></template>


