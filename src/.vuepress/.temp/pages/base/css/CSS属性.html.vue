<template><div><h2 id="显示属性" tabindex="-1"><a class="header-anchor" href="#显示属性" aria-hidden="true">#</a> 显示属性</h2>
<p>元素显示模式就是元素（标签）以什么方式进行显示。</p>
<p>HTML 元素一般分为块元素和行内元素两种类型。</p>
<h3 id="块元素" tabindex="-1"><a class="header-anchor" href="#块元素" aria-hidden="true">#</a> 块元素</h3>
<p>常见块元素 h1~h6 p div ul ol li，其中 div 是最典型的块元素。</p>
<p>特点：</p>
<ol>
<li>
<p>比较霸道，自己独占一行。</p>
</li>
<li>
<p>高度、宽度、外边距以及内边距都可以控制。</p>
</li>
<li>
<p>宽度默认是容器（父级宽度）的 100%。</p>
</li>
<li>
<p>是一个容器及盒子，里面可以放行内或者块级元素。</p>
</li>
</ol>
<p><strong>注意：</strong></p>
<ul>
<li>
<p>文字类的元素内不能使用块级元素。</p>
</li>
<li>
<p><code v-pre>&lt;p&gt;</code>标签主要用于存放文字，因此<code v-pre>&lt;p&gt;</code>里面不能放块级元素，特别不能放<code v-pre>&lt;div&gt;</code>。h1~h6 这种文字类块级元素也不能放其他块级元素。</p>
</li>
</ul>
<h3 id="行内元素" tabindex="-1"><a class="header-anchor" href="#行内元素" aria-hidden="true">#</a> 行内元素</h3>
<p>常见行内元素 a strong b em i del s ins u span，其中 span 是最典型的行内元素，也称为内联元素。</p>
<p>特点：</p>
<ol>
<li>
<p>相邻行内元素在一行上，一行可以显示多个。</p>
</li>
<li>
<p>高、宽度直接设置无效。</p>
</li>
<li>
<p>默认宽度为本身内容的宽度。</p>
</li>
<li>
<p>行内元素只能容纳文本或其他行内元素。</p>
</li>
</ol>
<p>注意：</p>
<ul>
<li>
<p>链接里面不能再放链接。</p>
</li>
<li>
<p>特殊情况链接<code v-pre>&lt;a&gt;</code>里面可以放块级元素，但是转换块级模式更安全。</p>
</li>
</ul>
<h3 id="行内块元素" tabindex="-1"><a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a> 行内块元素</h3>
<p><code v-pre>&lt;img /&gt;</code> <code v-pre>&lt;input /&gt;</code> <code v-pre>&lt;td&gt;</code>，同时具有块元素和行内元素的特点，有些资料称为行内块元素。</p>
<p>特点：</p>
<ol>
<li>
<p>和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。一行可以显示多个（行内元素特点）。</p>
</li>
<li>
<p>默认宽度是本身内容宽度（行内元素特点）。</p>
</li>
<li>
<p>高度、行高、外边距以及内边距都可以控制（块级元素特点）。</p>
</li>
</ol>
<br>
<p><strong>元素显示模式总结</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">元素模式</th>
<th style="text-align:left">元素排列</th>
<th style="text-align:left">设置样式</th>
<th style="text-align:left">默认宽度</th>
<th style="text-align:left">包含</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">块级元素</td>
<td style="text-align:left">一行只能放一个块级元素</td>
<td style="text-align:left">可以设置宽度高度</td>
<td style="text-align:left">容器的 100%</td>
<td style="text-align:left">容器级可以包含任何标签</td>
</tr>
<tr>
<td style="text-align:left">行内元素</td>
<td style="text-align:left">一行可以放多个行内元素</td>
<td style="text-align:left">不可以直接设置宽度高度</td>
<td style="text-align:left">它本身内容的宽度</td>
<td style="text-align:left">容纳文本或其他行内元素</td>
</tr>
<tr>
<td style="text-align:left">行内块元素</td>
<td style="text-align:left">一行放多个行内块元素</td>
<td style="text-align:left">可以这是宽度高度</td>
<td style="text-align:left">它本身内容的宽度</td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>
<h3 id="元素显示模式转换" tabindex="-1"><a class="header-anchor" href="#元素显示模式转换" aria-hidden="true">#</a> 元素显示模式转换</h3>
<p>块元素转换：display: block;</p>
<p>行内元素转换：display: inline;</p>
<p>行内块元素转换：display:inline-block;</p>
<h3 id="小技巧-单行文字垂直居中代码" tabindex="-1"><a class="header-anchor" href="#小技巧-单行文字垂直居中代码" aria-hidden="true">#</a> 小技巧 单行文字垂直居中代码</h3>
<p>CSS 没有提供文字垂直居中代码，实现方法：让文字的行高 line-height == 盒子高度 div.height。</p>
<h2 id="字体属性" tabindex="-1"><a class="header-anchor" href="#字体属性" aria-hidden="true">#</a> 字体属性</h2>
<p>字体属性定义 字体系列、大小、粗细和文字样式。</p>
<h3 id="字体系列-font-family" tabindex="-1"><a class="header-anchor" href="#字体系列-font-family" aria-hidden="true">#</a> 字体系列 font-family</h3>
<p>CSS 使用 font-family 属性定义文本的字体系列。</p>
<p>各字体之间必须使用英文逗号隔开。</p>
<p>一般情况下，如果有空格隔开的多个单词组成的字体，加引号。</p>
<p>尽量使用系统默认自带字体，保证任何用户浏览器都能正确显示。</p>
<p>最常见的字体：</p>
<p><code v-pre>body{font-family:’Microsoft YaHei’,tahoma,arial,’Hiragino Sans GB’;}</code></p>
<h3 id="字体大小-font-size" tabindex="-1"><a class="header-anchor" href="#字体大小-font-size" aria-hidden="true">#</a> 字体大小 font-size</h3>
<p>CSS 使用 font-size 属性定义字体大小。</p>
<p>px（像素）大小是我们网页的最常用的单位。谷歌浏览器默认 16px。</p>
<p>不同浏览器可能默认显示的字号大小不一致，尽量给一个明确值大小，不要默认太小。</p>
<p>可以给 body 指定整个页面文字的大小。</p>
<h3 id="字体粗细-font-weight" tabindex="-1"><a class="header-anchor" href="#字体粗细-font-weight" aria-hidden="true">#</a> 字体粗细 font-weight</h3>
<p>CSS 使用 font-weight 属性设置文本字体的粗细。</p>
<p>参数：</p>
<p>normal number400</p>
<p>bold number700</p>
<p>bolder IE5 + 特粗体</p>
<p>lighter IE5 + 细体</p>
<p>number IE5 + 100 200 300 ……</p>
<p>实际开发中，提倡使用数字表示加粗或者变细。</p>
<h3 id="文本风格-font-style" tabindex="-1"><a class="header-anchor" href="#文本风格-font-style" aria-hidden="true">#</a> 文本风格 font-style</h3>
<p>CSS 使用 font-style 属性设置文本的风格。</p>
<p>属性值：</p>
<p>normal 默认值，浏览器显示标准样式 font-style: normal;</p>
<p>italic 浏览器会显示斜体的字体样式。</p>
<p><strong>注意</strong>：平时很少给文字加斜体，反而要给斜体标签改不倾斜字体</p>
<h3 id="大小写显示-font-variant" tabindex="-1"><a class="header-anchor" href="#大小写显示-font-variant" aria-hidden="true">#</a> 大小写显示 font-variant</h3>
<p>font-variant 属性主要用于定义小型大写字母文本</p>
<p>font-variant 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>small-caps</td>
<td>浏览器会显示小型大写字母的字体。0</td>
</tr>
<tr>
<td>inherit</td>
<td>规定应该从父元素继承 font-variant 属性的值。</td>
</tr>
</tbody>
</table>
<h3 id="font-属性复合使用" tabindex="-1"><a class="header-anchor" href="#font-属性复合使用" aria-hidden="true">#</a> font 属性复合使用</h3>
<p>font:font-sytle font-variant font-weight font-size/line-height font-family;</p>
<p>顺序依次为 风格 粗细 大小 样式。不能颠倒顺序，属性间以空格隔开。必须至少保留 font-size 和 font-family 属性。</p>
<br>
<p><strong>字体属性总结</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">表示</th>
<th style="text-align:left">注意点</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">font-size</td>
<td style="text-align:left">字号</td>
<td style="text-align:left">我们通常用的单位是 px 像素，一定要跟上单位</td>
</tr>
<tr>
<td style="text-align:left">font-family</td>
<td style="text-align:left">字体</td>
<td style="text-align:left">实际工作中按照团队约定来写字体</td>
</tr>
<tr>
<td style="text-align:left">font-weight</td>
<td style="text-align:left">字体粗细</td>
<td style="text-align:left">记住加粗是 700 或者 bold，不加粗是 normal 或者 400，记住数字不要跟单位</td>
</tr>
<tr>
<td style="text-align:left">font-style</td>
<td style="text-align:left">字体样式</td>
<td style="text-align:left">记住倾斜是 italic，不倾斜是 normal，工作中我们最常用 normal</td>
</tr>
<tr>
<td style="text-align:left">font</td>
<td style="text-align:left">字体连写</td>
<td style="text-align:left">1.字体连写是有顺序的，不能随意换位置 2.其中字号和字体必须同时出现</td>
</tr>
</tbody>
</table>
<h2 id="文本属性" tabindex="-1"><a class="header-anchor" href="#文本属性" aria-hidden="true">#</a> 文本属性</h2>
<p>CSStext 文本属性可定义文本外观（颜色、对齐文本、装饰文本、文本缩进、行间距等）。</p>
<h3 id="文本颜色-color" tabindex="-1"><a class="header-anchor" href="#文本颜色-color" aria-hidden="true">#</a> 文本颜色 color</h3>
<p>表示：预定义颜色、<strong>十六进制（<code v-pre>#FF0000</code>）</strong>（最常用）、RGB 代码(rgb(255,0,0)或者 rgb(100%,0%,0%))。</p>
<h3 id="对齐文本-text-align" tabindex="-1"><a class="header-anchor" href="#对齐文本-text-align" aria-hidden="true">#</a> 对齐文本 text-align</h3>
<p>用于设置元素内文本内容的水平对齐方式。</p>
<p>left 左对齐（默认） right 右对齐 center 居中对齐</p>
<h3 id="装饰文本-text-decoration" tabindex="-1"><a class="header-anchor" href="#装饰文本-text-decoration" aria-hidden="true">#</a> 装饰文本 text-decoration</h3>
<p>规定添加到文本的修饰。可添加下划线、删除线、上划线等。</p>
<p>none 默认无装饰线 underline 下划线，链接 a 自带下划线</p>
<p>overline 上划线（几乎不用） line-through 删除线（不常用）</p>
<h3 id="文本缩进-text-indent" tabindex="-1"><a class="header-anchor" href="#文本缩进-text-indent" aria-hidden="true">#</a> 文本缩进 text-indent</h3>
<p>指定文本的第一行缩进，通常是将段落的首行缩进。</p>
<p>px:像素单位 em:相对单位，相对当前元素的倍数。</p>
<h3 id="行间距-line-height" tabindex="-1"><a class="header-anchor" href="#行间距-line-height" aria-hidden="true">#</a> 行间距 line-height</h3>
<p>设置行间距离（行高）。控制文字行与行之间的距离。</p>
<p>行间距=上间距+文本高度+下间距。</p>
<h3 id="文本转换-text-transform" tabindex="-1"><a class="header-anchor" href="#文本转换-text-transform" aria-hidden="true">#</a> 文本转换 text-transform</h3>
<p>对标签中的文本值做大小写转换。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>默认。定义带有小写字母和大写字母的标准的文本。</td>
</tr>
<tr>
<td>capitalize</td>
<td>文本中的每个单词以大写字母开头。1</td>
</tr>
<tr>
<td>uppercase</td>
<td>定义仅有大写字母。全部大写 1</td>
</tr>
<tr>
<td>lowercase</td>
<td>定义无大写字母，仅有小写字母。全部小写 1</td>
</tr>
<tr>
<td>inherit</td>
<td>规定应该从父元素继承 text-transform 属性的值。</td>
</tr>
</tbody>
</table>
<h3 id="单词间距-word-spacing" tabindex="-1"><a class="header-anchor" href="#单词间距-word-spacing" aria-hidden="true">#</a> 单词间距 word-spacing</h3>
<p>word-spacing 属性增加或减少单词间的空白（即单词间隔）。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>normal</td>
<td>默认。定义单词间的标准空间。</td>
</tr>
<tr>
<td>length</td>
<td>定义单词间的固定空间。</td>
</tr>
<tr>
<td>inherit</td>
<td>规定应该从父元素继承 word-spacing 属性的值。</td>
</tr>
</tbody>
</table>
<h3 id="字符间距-letter-spacing" tabindex="-1"><a class="header-anchor" href="#字符间距-letter-spacing" aria-hidden="true">#</a> 字符间距 letter-spacing</h3>
<p>letter-spacing 属性增加或减少字符间的空白（字母或中文在间距）。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>normal</td>
<td>默认。规定字符间没有额外的空间。</td>
</tr>
<tr>
<td>length</td>
<td>定义字符间的固定空间（允许使用负值）。</td>
</tr>
<tr>
<td>inherit</td>
<td>规定应该从父元素继承 letter-spacing 属性的值。</td>
</tr>
</tbody>
</table>
<h3 id="文本溢出-text-overflow" tabindex="-1"><a class="header-anchor" href="#文本溢出-text-overflow" aria-hidden="true">#</a> 文本溢出 text-overflow</h3>
<p>text-overflow 属性指定当文本溢出包含它的元素时，应该如何显示。可以设置溢出后，文本被剪切、显示省略号 (...) 或显示自定义字符串（不是所有浏览器都支持）。</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">clip</td>
<td style="text-align:left">剪切文本</td>
</tr>
<tr>
<td style="text-align:left">ellipsis</td>
<td style="text-align:left">显示省略符号…来代表被修剪的文本</td>
</tr>
<tr>
<td style="text-align:left">string</td>
<td style="text-align:left">使用给定的字符串来代表被修剪的文本</td>
</tr>
<tr>
<td style="text-align:left">initial</td>
<td style="text-align:left">设置为属性默认值</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">从父元素继承该属性值</td>
</tr>
</tbody>
</table>
<h3 id="元素间距-white-space" tabindex="-1"><a class="header-anchor" href="#元素间距-white-space" aria-hidden="true">#</a> 元素间距 white-space</h3>
<p>用于处理元素内的空白，只在一行内显示。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>normal</td>
<td>默认。空白会被浏览器忽略。</td>
</tr>
<tr>
<td>pre</td>
<td>空白会被浏览器保留。其行为方式类似 HTML 中的<code v-pre>&lt;pre&gt;</code>标签。0</td>
</tr>
<tr>
<td>nowrap</td>
<td>文本不会换行，文本会在在同一行上继续，直到遇到<code v-pre>&lt;br&gt;</code>标签为止。0.5</td>
</tr>
<tr>
<td>pre-wrap</td>
<td>保留空白符序列，但是正常地进行换行。0</td>
</tr>
<tr>
<td>pre-line</td>
<td>合并空白符序列，但是保留换行符。</td>
</tr>
<tr>
<td>inherit</td>
<td>规定应该从父元素继承 white-space 属性的值。</td>
</tr>
</tbody>
</table>
<h3 id="单词换行-word-wrap" tabindex="-1"><a class="header-anchor" href="#单词换行-word-wrap" aria-hidden="true">#</a> 单词换行 word-wrap</h3>
<p>word-wrap 属性允许长单词或 URL 地址换行到下一行。</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">只在允许的断字点换行（浏览器保持默认处理）</td>
</tr>
<tr>
<td style="text-align:left">break-word</td>
<td style="text-align:left">在长单词或 URL 地址内部进行换行</td>
</tr>
</tbody>
</table>
<h3 id="单词断行-word-break" tabindex="-1"><a class="header-anchor" href="#单词断行-word-break" aria-hidden="true">#</a> 单词断行 word-break</h3>
<p>word-break 属性指定非 CJK 脚本的断行规则。</p>
<p>提示:CJK 脚本是中国，日本和韩国（&quot;中日韩&quot;）脚本</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">normal</td>
<td style="text-align:left">使用浏览器默认的换行规则</td>
</tr>
<tr>
<td style="text-align:left">break-all</td>
<td style="text-align:left">允许在单词内换行</td>
</tr>
<tr>
<td style="text-align:left">keep-all</td>
<td style="text-align:left">只能在半角空格或连字符处换行</td>
</tr>
</tbody>
</table>
<br>
<p><strong>word-bread、word-wrap、white-space 区别</strong></p>
<p>white-space、word-wrap 和 word-break 通常用来解决如下问题：</p>
<ul>
<li>
<p>强制字符串过长在一行显示；</p>
</li>
<li>
<p>单词太长，希望折成多行显示（避免溢出）；</p>
</li>
<li>
<p>保留空格（敲了 10 个空格，最终只显示 1 个）</p>
</li>
<li>
<p>保留回车（敲了 10 个回车，浏览器完全不显示）</p>
</li>
</ul>
<p>但三者仍有区别：</p>
<ol>
<li>
<p>white-space 属性设置如何处理元素内的空白</p>
</li>
<li>
<p>word-wrap 属性用来标明是否允许浏览器在单词内进行断句</p>
</li>
<li>
<p>word-break 属性用来标明怎么样进行单词内的断句</p>
</li>
<li>
<p>单行文本超出显示省略号方法详见 <RouterLink to="/base/css/CSS%E6%8A%80%E5%B7%A7.html#%E6%BA%A2%E5%87%BA%E6%96%87%E5%AD%97%E7%9C%81%E7%95%A5%E5%8F%B7%E6%98%BE%E7%A4%BA">溢出文字省略号显示</RouterLink></p>
</li>
</ol>
<h2 id="背景属性" tabindex="-1"><a class="header-anchor" href="#背景属性" aria-hidden="true">#</a> 背景属性</h2>
<p>通过背景属性，可以给页面元素添加背景样式。</p>
<p>背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。</p>
<h3 id="背景颜色-background-color" tabindex="-1"><a class="header-anchor" href="#背景颜色-background-color" aria-hidden="true">#</a> 背景颜色 background-color</h3>
<p>背景颜色为红色：<code v-pre>{ background-color: red }</code></p>
<p>一般情况下背景颜色默认值 transparent（透明）。</p>
<h3 id="背景图片-background-image" tabindex="-1"><a class="header-anchor" href="#背景图片-background-image" aria-hidden="true">#</a> 背景图片 background-image</h3>
<p>实际开发常见于 logo 或者一些装饰性的小图片或者超大背景图，优点是非常便于控制位置（精灵图也是一种运用场景）。</p>
<p><code v-pre>{ background-image: none | url (url) }</code> （默认平铺）</p>
<h3 id="背景平铺-background-repeat" tabindex="-1"><a class="header-anchor" href="#背景平铺-background-repeat" aria-hidden="true">#</a> 背景平铺 background-repeat</h3>
<p>对背景图像实现平铺。</p>
<p><code v-pre>{ background-repeat: repeat | no-repeat | repeat-x | repeat-y }</code></p>
<h3 id="背景图片位置-background-position" tabindex="-1"><a class="header-anchor" href="#背景图片位置-background-position" aria-hidden="true">#</a> 背景图片位置 background-position</h3>
<p>改变图片在背景中的位置。</p>
<p><code v-pre>{ background-position: x y; }</code></p>
<p>x 坐标和 y 坐标，可以使用方位名词或精确单位。</p>
<ol>
<li>参数是方位名词</li>
</ol>
<ul>
<li>
<p>前后顺序无关：left top / top left 效果一致。</p>
</li>
<li>
<p>只指定了一个方位名词，另一个值省略，第二个值默认居中对齐。</p>
</li>
</ul>
<ol start="2">
<li>参数是精确单位</li>
</ol>
<ul>
<li>
<p>第一个是 x 坐标，第二个是 y 坐标。</p>
</li>
<li>
<p>只指定一个数值，那该数值一定是 x 坐标，y 坐标默认垂直居中。</p>
</li>
</ul>
<ol start="3">
<li>参数是混合单位</li>
</ol>
<ul>
<li>方位名词和精确单位混用，第一个是 x 坐标，第二个是 y 坐标。</li>
</ul>
<h3 id="背景图像固定-background-attachment" tabindex="-1"><a class="header-anchor" href="#背景图像固定-background-attachment" aria-hidden="true">#</a> 背景图像固定 background-attachment</h3>
<p>设置背景图像是否固定或者随着页面的其余部分滚动。后期可以制作视差滚动效果。</p>
<p><code v-pre>{ background-attachment: scroll | fixed 滚动/固定 }</code></p>
<h3 id="背景复合写法" tabindex="-1"><a class="header-anchor" href="#背景复合写法" aria-hidden="true">#</a> 背景复合写法</h3>
<p>简写属性没有特定书写顺序，一般书写规范：</p>
<p><strong>background:背景颜色 图片地址 背景平铺 背景图像滚动 背景图片位置</strong>。</p>
<h3 id="背景色半透明" tabindex="-1"><a class="header-anchor" href="#背景色半透明" aria-hidden="true">#</a> 背景色半透明</h3>
<p><code v-pre>{ background: rgba(0, 0, 0, 0.3); }</code>（一般习惯把 0.3 的 0 省略掉）</p>
<p>最后一个参数是 alpha 透明度，取值范围 0~1。</p>
<p><strong>背景总结</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">作用</th>
<th style="text-align:left">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">background-color</td>
<td style="text-align:left">背景颜色</td>
<td style="text-align:left">预定义的颜色值/十六进制/RGB(A)代码</td>
</tr>
<tr>
<td style="text-align:left">background-image</td>
<td style="text-align:left">背景图片</td>
<td style="text-align:left">url(图片路径)</td>
</tr>
<tr>
<td style="text-align:left">background-repeat</td>
<td style="text-align:left">是否平铺</td>
<td style="text-align:left">repeat/no-repeat/repeat-x/repeat-y</td>
</tr>
<tr>
<td style="text-align:left">background-position</td>
<td style="text-align:left">背景位置</td>
<td style="text-align:left">length/position 分别是 x 和 y 坐标</td>
</tr>
<tr>
<td style="text-align:left">background-attachment</td>
<td style="text-align:left">背景附着</td>
<td style="text-align:left">scroll（背景滚动）/fixed（背景固定）</td>
</tr>
<tr>
<td style="text-align:left">背景简写</td>
<td style="text-align:left">书写更简单</td>
<td style="text-align:left">背景颜色 背景图片地址 背景平铺 背景滚动 背景位置;</td>
</tr>
<tr>
<td style="text-align:left">背景色半透明</td>
<td style="text-align:left">背景颜色<br>半透明</td>
<td style="text-align:left">background: rgba(0,0,0,0.3); 后面必须是 4 个值</td>
</tr>
</tbody>
</table>
<h2 id="边框属性" tabindex="-1"><a class="header-anchor" href="#边框属性" aria-hidden="true">#</a> 边框属性</h2>
<ol>
<li>
<p>边框组成：边框宽度（粗细）、边框样式、边框颜色。</p>
</li>
<li>
<p>语法：border : border-width border-style border-color</p>
</li>
</ol>
<p>border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset</p>
<p><strong>详细参数</strong></p>
<p>none: 无边框。与任何指定的 border-width 值无关</p>
<p>hidden：隐藏边框。IE 不支持</p>
<p>dashed：虚线边框，当 border 不定义边框指定的一面，就默认四条边都是实线边框。也可以虚线跟实线定义</p>
<p>dotted：虚线边框，dashed 是短竖线，而 dotted 边框是由点组成的。主要还是点状的频率不同，dotted 频度高，dashed 的频度偏小</p>
<p>solid：实线边框</p>
<p>double：双线边框。两条单线与其间隔的和等于指定的 border-width 值</p>
<p>groove：根据 border-color 值画 3D 凹槽</p>
<p>ridge：根据 border-color 值画菱形边框</p>
<p>inset：根据 border-color 值画 3D 凹边</p>
<p>outset：根据 border-color 值画 3D 凸边</p>
<p><strong>常用：solid dashed dotted</strong></p>
<br>
<p><strong>额外内容1：表格细线边框 border-collapse</strong></p>
<p>语法：border-collapse: collapse; 相邻边框合并在一起。</p>
<p>因为常态下边框会额外增加盒子的实际大小，解决方案：</p>
<ol>
<li>
<p>测量盒子大小的时候，不量边框。</p>
</li>
<li>
<p>如果测量的时候包含了边框，则需要宽高减去边框厚度。</p>
</li>
</ol>
<br>
<p><strong>额外内容2：边框图像 border-image</strong></p>
<p>border-image 属性可以通过一些简单的规则，将一副图像划分为 9 个单独的部分，浏览器会自动使用相应的部分来替换边框的默认样式。border-image 属性是五个 border-image-* 属性的简写，其语法格式如下：</p>
<p><code v-pre>border-image：border-image-source || border-image-slice [ / border-image-width | / border-image-width ? / border-image-outset ]? || border-image-repeat</code></p>
<ul>
<li>
<p>border-image-source：定义边框图像的路径；</p>
</li>
<li>
<p>border-image-slice：定义边框图像从什么位置开始分割；</p>
</li>
<li>
<p>border-image-width：定义边框图像的厚度（宽度）；</p>
</li>
<li>
<p>border-image-outset：定义边框图像的外延尺寸（边框图像区域超出边框的量）；</p>
</li>
<li>
<p>border-image-repeat：定义边框图像的平铺方式。</p>
</li>
</ul>
<h2 id="边框扩展与阴影属性" tabindex="-1"><a class="header-anchor" href="#边框扩展与阴影属性" aria-hidden="true">#</a> 边框扩展与阴影属性</h2>
<h3 id="圆角边框-border-radius" tabindex="-1"><a class="header-anchor" href="#圆角边框-border-radius" aria-hidden="true">#</a> 圆角边框 border-radius</h3>
<p>语法：border-radius: length;</p>
<ul>
<li>
<p>参数值可以为数值或百分比的形式。</p>
</li>
<li>
<p>正方形设置为一个圆，数值修改为高度或宽度的一半，或直接写 50%。</p>
</li>
<li>
<p>矩形设置高度的一半就可以。</p>
</li>
<li>
<p>该属性是一个简写属性，可以跟四个值，分别代表左上角、右上角、右下角、左下角。</p>
</li>
</ul>
<h3 id="盒子阴影-box-shadow" tabindex="-1"><a class="header-anchor" href="#盒子阴影-box-shadow" aria-hidden="true">#</a> 盒子阴影 box-shadow</h3>
<p>语法：box-shadow: h-shadow v-shadow blur spread color inset;</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">h-shadow</td>
<td style="text-align:left">必需。水平阴影的位置，允许负值</td>
</tr>
<tr>
<td style="text-align:left">v-shadow</td>
<td style="text-align:left">必需。垂直阴影的位置，允许负值</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">可选。模糊距离</td>
</tr>
<tr>
<td style="text-align:left">spread</td>
<td style="text-align:left">可选。阴影的尺寸</td>
</tr>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">可选。阴影的颜色，参阅 CSS 颜色值</td>
</tr>
<tr>
<td style="text-align:left">inset</td>
<td style="text-align:left">可选。将外部阴影(默认值 outset)改为内部阴影</td>
</tr>
</tbody>
</table>
<h3 id="文字阴影-text-shadow" tabindex="-1"><a class="header-anchor" href="#文字阴影-text-shadow" aria-hidden="true">#</a> 文字阴影 text-shadow</h3>
<p>语法：text-shadow: h-shadow v-shadow blur color;</p>
<p><strong>多重阴影</strong>：阴影属性之间用 逗号 隔开</p>
<table>
<thead>
<tr>
<th style="text-align:left">值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">h-shadow</td>
<td style="text-align:left">必需。水平阴影的位置，允许负值</td>
</tr>
<tr>
<td style="text-align:left">v-shadow</td>
<td style="text-align:left">必需。垂直阴影的位置，允许负值</td>
</tr>
<tr>
<td style="text-align:left">blur</td>
<td style="text-align:left">可选。模糊距离</td>
</tr>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left">可选。阴影的颜色，参阅 CSS 颜色值</td>
</tr>
</tbody>
</table>
<h2 id="元素显示与隐藏" tabindex="-1"><a class="header-anchor" href="#元素显示与隐藏" aria-hidden="true">#</a> 元素显示与隐藏</h2>
<p>本质：让一个元素在页面中隐藏或者显示出来。</p>
<ul>
<li>display 显示隐藏</li>
</ul>
<p>display 隐藏元素后，不再占有原来的位置。</p>
<p>后面应用极其广泛，搭配 JS 可以做很多的网页特效。</p>
<ul>
<li>visibility 显示隐藏</li>
</ul>
<p>visibility 属性用于指定一个元素应可见还是隐藏。</p>
<p>visibility: visible; 元素可视</p>
<p>visibility: hidden; 元素隐藏</p>
<p>visibility 隐藏元素后，继续占有原来的位置。</p>
<ul>
<li>overflow 溢出显示隐藏</li>
</ul>
<p>指定了如果内容溢出了一个元素的框（超过其指定高度及宽度时），超出部分隐藏 overflow: hidden。</p>
<p>如果有定位的盒子，请慎用 overflow: hidden 因为它会隐藏多余部分</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">visible</td>
<td style="text-align:left">不剪切内容也不添加滚动条</td>
</tr>
<tr>
<td style="text-align:left">hidden</td>
<td style="text-align:left">不显示超过对象尺寸的内容，超出的部分隐藏</td>
</tr>
<tr>
<td style="text-align:left">scroll</td>
<td style="text-align:left">不管超出内容否，始终显示滚动条</td>
</tr>
<tr>
<td style="text-align:left">auto</td>
<td style="text-align:left">超出自动显示滚动条，不超出则不显示</td>
</tr>
</tbody>
</table>
</div></template>


