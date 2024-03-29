<template><div><h2 id="html-与浏览器基础" tabindex="-1"><a class="header-anchor" href="#html-与浏览器基础" aria-hidden="true">#</a> HTML 与浏览器基础</h2>
<h3 id="掌握网页基本组成" tabindex="-1"><a class="header-anchor" href="#掌握网页基本组成" aria-hidden="true">#</a> 掌握网页基本组成</h3>
<p>网站：在因特网上根据一定的规则，使用 HTML 等制作的用于展示特定内容相关的网页集合。</p>
<p>网页：网站中的一“页”，通常是 HTML 格式的文件，要通过浏览器来阅读。</p>
<p>网页是构成网站的基本元素，通常的网站以.htm 或.html 后缀结尾，俗称为 HTML 文件。</p>
<p><strong>网页的形成</strong>：前端人员开发代码 → 浏览器显示代码（解析、渲染）→ 生成最后的 Web 页面</p>
<h3 id="html-是什么" tabindex="-1"><a class="header-anchor" href="#html-是什么" aria-hidden="true">#</a> HTML 是什么</h3>
<p>HTML 是超文本标记语言（Hyper Text Markup Language）</p>
<p>属于标记语言，非编程语言。</p>
<p>超文本的含义：1、超越文本限制；2、超级链接文本。</p>
<h3 id="常用浏览器" tabindex="-1"><a class="header-anchor" href="#常用浏览器" aria-hidden="true">#</a> 常用浏览器</h3>
<p>浏览器是网页显示、运行的平台。常用的浏览器有 IE(Edge)、FireFox、Chrome、Safari 和 Opera。</p>
<p>浏览器内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。</p>
<p>Chrome 内核：Blink，属于 WebKit 的分支。国内一般浏览器都会采用 WebKit/Blink 内核。</p>
<p>由于浏览器内核的差异性，显示原生 html 会有所差异：</p>
<p>从服务器接收的数据会存放在一个临时的文件夹。接收我们缓存的数据(chrome://version/)</p>
<p>临时文件夹作用：第二次访问同一个网站速度会变快，因为第一次浏览的时候，大部分文件已经缓存在本地。</p>
<h3 id="web标准的三大组成部分" tabindex="-1"><a class="header-anchor" href="#web标准的三大组成部分" aria-hidden="true">#</a> <code v-pre>Web</code>标准的三大组成部分</h3>
<p>Web标准是由 W3C 组织和其他标准化组织制定的一系列标准的集合。W3C（万维网联盟）是国际最著名的标准化组织。</p>
<p>为什么需要 Web 标准</p>
<p>遵循 Web 标准除了可以让不同的开发人员写出的页面更标准、更统一之外，还有以下优点：</p>
<ol>
<li>
<p>让 Web 的发展前景更广阔。</p>
</li>
<li>
<p>内容能被更广泛的设备访问。</p>
</li>
<li>
<p>更容易被搜寻引擎搜索。</p>
</li>
<li>
<p>降低网站流量费用。</p>
</li>
<li>
<p>使网站更易于维护。</p>
</li>
<li>
<p>提高页面浏览速度。</p>
</li>
</ol>
<p>三大部分组成包括<strong>结构</strong>（Structure）、<strong>表现</strong>（Presentation）和<strong>行为</strong>（Behavior）三个方面。</p>
<p>结构：用于对网页元素进行整理和分类，现阶段主要学的是 HTML。</p>
<p>表现：表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是 CSS。</p>
<p>行为：网页模型的定义以及交互的编写，现阶段主要学的是 Javascript。</p>
<p>Web标准提出的最佳体验方案：结构、表现、行为相分离。</p>
<p>简单理解：结构写到 HTML 文件中，表现写到 CSS 文件中，行为写到 Javascript 文件中。</p>
<p>构成理解：结构=身体、表现=外观装饰、行为=行为动作。三者中结构最重要。</p>
<h2 id="html-标签" tabindex="-1"><a class="header-anchor" href="#html-标签" aria-hidden="true">#</a> HTML 标签</h2>
<p>元素、标签与属性</p>
<p>元素：HTML 元素就是构成 HTML 文件的基本对象。</p>
<p>标签：标记 HTML 元素。</p>
<p>属性：为 HTML 元素提供各种附加信息，总是以键值对的形式出现，属性总是在 HTML 元素的开始标签中进行定义。</p>
<h3 id="标签书写注意规范" tabindex="-1"><a class="header-anchor" href="#标签书写注意规范" aria-hidden="true">#</a> 标签书写注意规范</h3>
<p>①HTML 标签是由尖括号包围的关键词，例如<code v-pre>&lt;html /&gt;</code>。</p>
<p>②HTML 标签通常是成对出现的，例如<code v-pre>&lt;html&gt;</code>和<code v-pre>&lt;/html&gt;</code>，我们称为双标签。标签中的第一个标签是开始标签，第二个标签是结束标签。</p>
<p>③ 有些特殊的标签必须是单个标签（极少情况），例如<code v-pre>&lt;br /&gt;</code>，我们称为单标签。</p>
<p>④ 双标签关系可以分为两类：包含关系和并列关系。</p>
<p>包含：</p>
<p><code v-pre>&lt;head&gt;</code></p>
<p>​ <code v-pre>&lt;title&gt;&lt;/title&gt;</code></p>
<p><code v-pre>&lt;head&gt;</code></p>
<p>并列：</p>
<p><code v-pre>&lt;head&gt;&lt;/head&gt;</code></p>
<p><code v-pre>&lt;body&gt;&lt;/body&gt;</code></p>
<h3 id="html-骨架标签" tabindex="-1"><a class="header-anchor" href="#html-骨架标签" aria-hidden="true">#</a> HTML 骨架标签</h3>
<p>每个网页都会有一个基本的结构标签（骨架标签），页面内容也是在这些基本标签上书写。HTML 页面也被称为 HTML 文档。</p>
<p>HTML 页面也被称为 HTML 文档。</p>
<table>
<thead>
<tr>
<th style="text-align:left">标签名</th>
<th style="text-align:left">定义</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>&lt;html&gt;&lt;/html&gt;</code></td>
<td style="text-align:left">HTML 标签</td>
<td style="text-align:left">页面中最大的标签，我们称为 根标签</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&lt;head&gt;&lt;/head&gt;</code></td>
<td style="text-align:left">文档头部</td>
<td style="text-align:left">注意在 head 标签中我们必须要设置的标签是 title</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&lt;title&gt;&lt;/title&gt;</code></td>
<td style="text-align:left">文档标题</td>
<td style="text-align:left">让页面拥有一个属于自己的网页标题</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>&lt;body&gt;&lt;/body&gt;</code></td>
<td style="text-align:left">文档主体</td>
<td style="text-align:left">元素包含文档的所有内容，页面内容基本都放到 body 里面</td>
</tr>
</tbody>
</table>
<br>
<p><strong>额外内容</strong>：开发工具（建议使用<strong>VsCode</strong>）</p>
<p>掌握文件新建、保存，插件安装。HTML 基础结构标签快捷输入键: !</p>
<p>Open in Default Browser (Alt + B)</p>
<p>Ctrl +/Ctrl – 放大缩小视图</p>
<p>插件安装：</p>
<table>
<thead>
<tr>
<th style="text-align:left">插件</th>
<th style="text-align:left">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Chinese（Simplified）Language<br>Pack for VS Code</td>
<td style="text-align:left">中文（简体）语言包</td>
</tr>
<tr>
<td style="text-align:left">Open in Browser</td>
<td style="text-align:left">右击选择浏览器打开 html 文件</td>
</tr>
<tr>
<td style="text-align:left">JS-CSS-HTML Formatter</td>
<td style="text-align:left">每次保存，都会自动格式化 js css 和 html 代码</td>
</tr>
<tr>
<td style="text-align:left">Auto Rename Tag</td>
<td style="text-align:left">自动重命名配对的 HTML/XML 标签</td>
</tr>
<tr>
<td style="text-align:left">CSS Peek</td>
<td style="text-align:left">样式追踪</td>
</tr>
</tbody>
</table>
<br>
<p><strong>根标签、头部标签、标题标签、主体标签的关系</strong></p>
<h4 id="_1-doctype-文档类型声明标签" tabindex="-1"><a class="header-anchor" href="#_1-doctype-文档类型声明标签" aria-hidden="true">#</a> 1.<code v-pre>&lt;!DOCTYPE&gt;</code>文档类型声明标签</h4>
<p><code v-pre>&lt;!DOCTYPE&gt;</code>文档类型声明，作用就是告诉浏览器使用哪种 HTML 版本来显示网页。</p>
<p><code v-pre>&lt;!DOCTYPE html&gt;</code> 代码含义：当前页面采取的是 HTML5 版本来显示网页。</p>
<p>注意：</p>
<ol>
<li>
<p><code v-pre>&lt;!DOCTYPE&gt;</code>声明位于文档中的最前面位置，处于<code v-pre>&lt;/html&gt;</code>标签之前。</p>
</li>
<li>
<p><code v-pre>&lt;!DOCTYPE&gt;</code>不是一个 HTML 标签，是文档类型声明标签。</p>
</li>
</ol>
<h4 id="_2-html-lang-语言种类-全局属性" tabindex="-1"><a class="header-anchor" href="#_2-html-lang-语言种类-全局属性" aria-hidden="true">#</a> 2.<code v-pre>&lt;html lang&gt;</code>语言种类（全局属性）</h4>
<p>用于定义当前文档显示的语言。</p>
<p>en 英语; zh-CN 中文</p>
<p>实际文档显示与语言定义之间非强制关系。该属性对浏览器起提示作用，告诉浏览器这个页面采取某种语言来显示。</p>
<h4 id="_3-meta-charset-字符集" tabindex="-1"><a class="header-anchor" href="#_3-meta-charset-字符集" aria-hidden="true">#</a> 3.<code v-pre>&lt;meta charset&gt;</code>字符集</h4>
<p><code v-pre>&lt;head&gt;</code>标签内，通过<meta>标签的 charset 属性规定 HTML 文档使用的字符编码。</p>
<p>常用值：GB2312 BIG5 GBK UTF-8，<strong>UTF-8</strong>也被称为万国码，最常用的字符编码。</p>
<br>
<p><strong>以上三类代码 VSCode 自动生成，不需要重写。</strong></p>
<br>
<p>根据标签的语义，在合适的地方给一个最为合理的标签，可以让页面结构更清晰。</p>
<h4 id="_4-标题标签-h1-h6-重要" tabindex="-1"><a class="header-anchor" href="#_4-标题标签-h1-h6-重要" aria-hidden="true">#</a> 4.标题标签<code v-pre>&lt;h1&gt;</code> - <code v-pre>&lt;h6&gt;</code>（重要）</h4>
<p>HTML 提供了 6 个等级的网页标题，<code v-pre>&lt;h1&gt;</code>-<code v-pre>&lt;h6&gt;</code>。一个标题独占一行，加了标题标签的文字加粗，字号变大。</p>
<p>标题一共六级选，</p>
<p>文字加粗一行显。</p>
<p>由大到小依次减，</p>
<p>从重到轻随之变。</p>
<p>语法规范书写后，</p>
<p>具体效果刷新见。</p>
<h4 id="_5-段落和换行标签-重要" tabindex="-1"><a class="header-anchor" href="#_5-段落和换行标签-重要" aria-hidden="true">#</a> 5.段落和换行标签（重要）</h4>
<p><code v-pre>&lt;p&gt;</code>标签用于定义段落，可以将整个网页分为若干个段落。</p>
<p>特点：1、文本在一个段落中会根据浏览器窗口的大小自动换行。</p>
<p>​ 2、段落和段落之间保有空隙。</p>
<p><code v-pre>&lt;br&gt;</code>单标签，用于某段文本强制换行显示。</p>
<p>特点：1、单标签。2、简单地开始新一行，不插入段落的间距。</p>
<h4 id="_6-文本格式化标签" tabindex="-1"><a class="header-anchor" href="#_6-文本格式化标签" aria-hidden="true">#</a> 6.文本格式化标签</h4>
<p>标签语义：突出重要性。</p>
<table>
<thead>
<tr>
<th style="text-align:left">语义</th>
<th style="text-align:left">标签</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">加粗</td>
<td style="text-align:left"><code v-pre>&lt;strong&gt;&lt;/strong&gt;</code>或者<code v-pre>&lt;b&gt;&lt;/b&gt;</code></td>
<td style="text-align:left">更推荐使用<code v-pre>&lt;strong&gt;</code>标签 语义更强烈</td>
</tr>
<tr>
<td style="text-align:left">倾斜</td>
<td style="text-align:left"><code v-pre>&lt;em&gt;&lt;/em&gt;</code>或者<code v-pre>&lt;i&gt;&lt;/i&gt;</code></td>
<td style="text-align:left">更推荐使用<code v-pre>&lt;em&gt;</code>标签 语义更强烈</td>
</tr>
<tr>
<td style="text-align:left">删除线</td>
<td style="text-align:left"><code v-pre>&lt;del&gt;&lt;/del&gt;</code>或者<code v-pre>&lt;s&gt;&lt;/s&gt;</code></td>
<td style="text-align:left">更推荐使用<code v-pre>&lt;del&gt;</code>标签 语义更强烈</td>
</tr>
<tr>
<td style="text-align:left">下划线</td>
<td style="text-align:left"><code v-pre>&lt;ins&gt;&lt;/ins&gt;</code>或者<code v-pre>&lt;u&gt;&lt;/u&gt;</code></td>
<td style="text-align:left">更推荐使用<code v-pre>&lt;ins&gt;</code>标签 语义更强烈</td>
</tr>
</tbody>
</table>
<h4 id="_7-div-和-span-标签" tabindex="-1"><a class="header-anchor" href="#_7-div-和-span-标签" aria-hidden="true">#</a> 7.<code v-pre>&lt;div&gt;</code>和<code v-pre>&lt;span&gt;</code>标签</h4>
<p><code v-pre>&lt;div&gt;</code>和<code v-pre>&lt;span&gt;</code>没有语义，是装内容的一个盒子。</p>
<p>特点：1、<code v-pre>&lt;div&gt;</code>标签用来布局，但是一行只能放一个<code v-pre>&lt;div&gt;</code>。大盒子</p>
<p>​ 2、<code v-pre>&lt;span&gt;</code>标签用来布局 ，一行上可以放多个<code v-pre>&lt;span&gt;</code>。小盒子</p>
<h4 id="_8-sup-和-sub-标签" tabindex="-1"><a class="header-anchor" href="#_8-sup-和-sub-标签" aria-hidden="true">#</a> 8.<code v-pre>&lt;sup&gt;</code>和<code v-pre>&lt;sub&gt;</code>标签</h4>
<p><code v-pre>&lt;sup&gt;&lt;/sup&gt;</code>上标文本标签</p>
<p><code v-pre>&lt;sub&gt;&lt;/sub&gt;</code>下标文本标签</p>
<h4 id="_9-注释" tabindex="-1"><a class="header-anchor" href="#_9-注释" aria-hidden="true">#</a> 9.注释</h4>
<p>如果需要在 HTML 文档中添加一些便于阅读和理解但又不需要显示在页面中的注释文字，就需要使用注释标签，HTML 中的注释以”<!--”开头，以”-->”结束。</p>
<p>&lt;!—注释语句 --&gt; 快捷键 Ctrl + /</p>
<p>注释标签里面的内容是给程序员看的，这个代码时不执行不显示到页面中的。</p>
<h3 id="超链接标签-a" tabindex="-1"><a class="header-anchor" href="#超链接标签-a" aria-hidden="true">#</a> 超链接标签<code v-pre>&lt;a&gt;</code></h3>
<p><code v-pre>&lt;a&gt;</code>用于定义超链接，作用是从一个页面链接到另一个页面。</p>
<h4 id="链接的语法格式" tabindex="-1"><a class="header-anchor" href="#链接的语法格式" aria-hidden="true">#</a> 链接的语法格式</h4>
<p><code v-pre>&lt;a href=”跳转目标” target=”目标窗口的弹出方式”&gt; 文本或图像 &lt;/a&gt;</code></p>
<p>href:用于指定链接目标的 url 地址，必须属性。当为标签应用 href 属性时，它就具有了超链接功能。</p>
<p>target:用于指定链接页面的打开方式，其中_self 为默认值，_blank 为在新窗口中打开方式。</p>
<h4 id="链接的分类" tabindex="-1"><a class="header-anchor" href="#链接的分类" aria-hidden="true">#</a> 链接的分类</h4>
<ol>
<li>
<p>外部链接。例如<code v-pre>&lt;a href=&quot;https://www.baidu.com&quot;&gt;百度&lt;/a&gt;</code></p>
</li>
<li>
<p>内部链接。网站内部页面之间的相互链接，直接链接内部页面名称。</p>
</li>
<li>
<p>空链接：如果当时没有确定链接目标时，<code v-pre>&lt;a href=&quot;#&quot;&gt; 首页&lt;/a&gt;</code>。</p>
</li>
<li>
<p>下载链接：如果 href 里面地址是一个文件或者压缩包，会下载这个文件。</p>
</li>
<li>
<p>网页元素链接：在网页中的各种网页元素，如文本、图像、表格、音频、视频等都可以添加超链接。</p>
</li>
<li>
<p>锚点链接：点击链接后，可以快速定位到页面中的某个位置。</p>
</li>
</ol>
<ul>
<li>
<p>锚点：<code v-pre>&lt;a href=”#abc”&gt; xxx&lt;/a&gt;</code></p>
</li>
<li>
<p>目标：<code v-pre>&lt;a id=”abc”&gt; xxxx&lt;/a&gt;</code></p>
</li>
</ul>
<h3 id="图片标签-img" tabindex="-1"><a class="header-anchor" href="#图片标签-img" aria-hidden="true">#</a> 图片标签<code v-pre>&lt;img&gt;</code></h3>
<p><code v-pre>&lt;img&gt;</code>标签用于定义 HTML 页面中的图像。</p>
<p><code v-pre>&lt;img src=”图像URL”/&gt;</code></p>
<p>src 是<code v-pre>&lt;img&gt;</code>标签的必须属性，用于制定图像文件的路径和文件名。</p>
<p><strong>其他属性</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">属性值</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">src</td>
<td style="text-align:left">图片路径</td>
<td style="text-align:left">必须属性</td>
</tr>
<tr>
<td style="text-align:left">alt</td>
<td style="text-align:left">文本</td>
<td style="text-align:left">替换文本，图像路径无效时的代替文字</td>
</tr>
<tr>
<td style="text-align:left">title</td>
<td style="text-align:left">文本</td>
<td style="text-align:left">提示文本，鼠标放到图像上的提示文字</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">像素</td>
<td style="text-align:left">设置图像宽度</td>
</tr>
<tr>
<td style="text-align:left">height</td>
<td style="text-align:left">像素</td>
<td style="text-align:left">设置图像高度</td>
</tr>
<tr>
<td style="text-align:left">border</td>
<td style="text-align:left">像素</td>
<td style="text-align:left">设置图像的边框粗细</td>
</tr>
</tbody>
</table>
<p><strong>width 和 height，修改其中一个像素值，另一个等比例缩放。</strong></p>
<p><strong>alt 替换文本；title 提示文本。</strong></p>
<p>图像标签注意点：</p>
<ul>
<li>
<p>图像标签可以拥有多个属性，必须写在标签名的后面。</p>
</li>
<li>
<p>属性之间不分先后顺序，标签名与属性、属性与属性之间均以空格分开。</p>
</li>
<li>
<p>属性采取键值对，即 key=”value”的格式，属性=”属性值”。</p>
</li>
</ul>
<h3 id="相对路径的三种形式" tabindex="-1"><a class="header-anchor" href="#相对路径的三种形式" aria-hidden="true">#</a> 相对路径的三种形式</h3>
<ul>
<li>
<p>目录文件夹和根目录（目录文件夹第一层）</p>
</li>
<li>
<p>相对路径：以引用文件所在位置为参考基础，建立出的目录路径。</p>
</li>
<li>
<p>绝对路径：目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。</p>
</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:left">相对路径分类</th>
<th style="text-align:left">符号</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">同一级路径</td>
<td style="text-align:left">.</td>
<td style="text-align:left">图像文件位于 HTML 文件同一级 如<code v-pre>&lt;img src=&quot;baidu.gif&quot; /&gt;</code></td>
</tr>
<tr>
<td style="text-align:left">下一级路径</td>
<td style="text-align:left">/</td>
<td style="text-align:left">图像文件位于 HTML 文件下一级 如<code v-pre>&lt;img src=&quot;images/baidu.gif&quot; /&gt;</code></td>
</tr>
<tr>
<td style="text-align:left">上一级路径</td>
<td style="text-align:left">../</td>
<td style="text-align:left">图像文件位于 HTML 文件上一级 如<code v-pre>&lt;img src=&quot;../baidu.gif&quot; /&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="表格标签" tabindex="-1"><a class="header-anchor" href="#表格标签" aria-hidden="true">#</a> 表格标签</h3>
<p>表格是实际开发中非常常用的标签：</p>
<h4 id="表格的主要作用" tabindex="-1"><a class="header-anchor" href="#表格的主要作用" aria-hidden="true">#</a> 表格的主要作用</h4>
<p>表格主要用于显示、展示数据，因为它可以让数据显示得非常的规整，可读性非常好。特别是后台展示数据的时候， 能够熟练运用表格就显得很重要。一个清爽简约的表格能够把繁杂的数据表现得很有条理。</p>
<p>小总结：表格不是用来布局页面的，而是用来展示数据的。</p>
<h4 id="表格的基本语法" tabindex="-1"><a class="header-anchor" href="#表格的基本语法" aria-hidden="true">#</a> 表格的基本语法</h4>
<p><code v-pre>&lt;table&gt;&lt;table&gt;</code>是用于定义表格的标签。</p>
<p><code v-pre>&lt;tr&gt;&lt;tr&gt;</code>标签用于定义表格中的行，必须嵌套在<code v-pre>&lt;table&gt;&lt;table&gt;</code>标签中。</p>
<p><code v-pre>&lt;td&gt;&lt;td&gt;</code>用于定义表格中的单元格，必须嵌套在<code v-pre>&lt;tr&gt;&lt;tr&gt;</code>标签中。</p>
<p>字母 td 指表格是数据 table data，即数据单元格的内容。</p>
<p>一般表头单元格位于表格的首行/首列，文本内容加粗居中显示。</p>
<p><code v-pre>&lt;th&gt;</code>标签表示 HTML 表格的表头部分(table head 缩写)。</p>
<p><strong>提醒：表格标签这部分属性我们实际开发不常用，后面通过CSS设置。</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">属性值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">align</td>
<td style="text-align:left">left、center、right</td>
<td style="text-align:left">规定表格相对周围元素的对齐方式</td>
</tr>
<tr>
<td style="text-align:left">border</td>
<td style="text-align:left">1或&quot;&quot;</td>
<td style="text-align:left">规定表格单元是否拥有边框，默认为&quot;&quot;，表示没有边框</td>
</tr>
<tr>
<td style="text-align:left">cellpadding</td>
<td style="text-align:left">像素值</td>
<td style="text-align:left">规定单元边沿与其内容之间的空白，默认1像素</td>
</tr>
<tr>
<td style="text-align:left">cellspacing</td>
<td style="text-align:left">像素值</td>
<td style="text-align:left">规定单元格之间的空白，默认2像素</td>
</tr>
<tr>
<td style="text-align:left">width</td>
<td style="text-align:left">像素值或百分比</td>
<td style="text-align:left">规定表格的宽度</td>
</tr>
</tbody>
</table>
<p>一般默认 cellpadding 和 cellspacing 设置为 0；表格浏览器中对齐 align。</p>
<p>style属性：style=&quot; border-collapse: collapse&quot;，表示将相邻边框合并。不写该属性，则默认值是 separate 不合并边框。</p>
<h4 id="表格结构标签" tabindex="-1"><a class="header-anchor" href="#表格结构标签" aria-hidden="true">#</a> 表格结构标签</h4>
<p>使用场景：因为表格可能很长，为了更好表示表格语义，可以将表格分割为表格头部和表格主体两大部分。</p>
<h4 id="合并单元格" tabindex="-1"><a class="header-anchor" href="#合并单元格" aria-hidden="true">#</a> 合并单元格</h4>
<ul>
<li>合并单元格方式</li>
</ul>
<p>跨行合并 rowspan=”合并单元格的个数”</p>
<p>跨列合并 colspan=”合并单元格的个数”</p>
<ul>
<li>目标单元格</li>
</ul>
<p>跨行：最上侧单元格为目标单元格，写合并代码。</p>
<p>跨列：最左侧单元格为目标单元格，写合并代码。</p>
<ul>
<li>合并单元格的步骤</li>
</ul>
<ol>
<li>
<p>先确定是跨行还是跨列合并。</p>
</li>
<li>
<p>找到目标单元格，写上合并方式=合并的单元格数量。</p>
</li>
<li>
<p>删除多余的单元格。</p>
</li>
</ol>
<h3 id="列表标签" tabindex="-1"><a class="header-anchor" href="#列表标签" aria-hidden="true">#</a> 列表标签</h3>
<p>表格是用来显示数据的，那么列表就是用来布局的。</p>
<p>列表最大的特点就是整齐、整洁、有序，布局更加自由和方便。</p>
<p>列表分类：无序列表、有序列表、自定义列表。</p>
<h4 id="无序列表-重点" tabindex="-1"><a class="header-anchor" href="#无序列表-重点" aria-hidden="true">#</a> 无序列表（重点）</h4>
<p><code v-pre>&lt;ul&gt;</code>标签表示 HTML 页面中项目的无序列表，列表项使用<code v-pre>&lt;li&gt;</code>标签定义。</p>
<ul>
<li>
<p>无序列表的各个列表项之间没有顺序级别之分，是并列的。</p>
</li>
<li>
<p>ul 中只能嵌套 li，直接在<code v-pre>&lt;ul&gt;&lt;/ul&gt;</code>标签中输入其他标签或者文字的做法是不被允许的。</p>
</li>
<li>
<p><code v-pre>&lt;li&gt;&lt;/li&gt;</code>之间相当于一个容器，可以容纳所有元素。</p>
</li>
<li>
<p>无序列表会带有自己的样式属性，实际使用时，使用 CSS 设置。</p>
</li>
<li>
<p>属性 type: disc 实心圆 square 实心方块 circle 空心圆,更改无序列表前面的点。</p>
</li>
</ul>
<h4 id="有序列表-理解" tabindex="-1"><a class="header-anchor" href="#有序列表-理解" aria-hidden="true">#</a> 有序列表（理解）</h4>
<p><code v-pre>&lt;ol&gt;</code>标签用于定义有序列表，列表排序以数字显示，并且使用<code v-pre>&lt;li&gt;</code>标签来定义列表项。</p>
<ul>
<li>
<p>ol 中只能嵌套 li，直接在<code v-pre>&lt;ol&gt;&lt;/ol&gt;</code>标签中输入其他标签或文字的做法是不被允许的。</p>
</li>
<li>
<p>属性 type：阿拉伯数字、罗马数字、英文字母大小写，start: 起始的数字项。</p>
</li>
</ul>
<h4 id="自定义列表" tabindex="-1"><a class="header-anchor" href="#自定义列表" aria-hidden="true">#</a> 自定义列表</h4>
<p>自定义列表常用语对属于或名词进行解释和描述，定义列表的列表项前没有任何项目符号。</p>
<p><code v-pre>&lt;dl&gt;</code>标签用于定义描述列表（或定义列表），该标签会与<code v-pre>&lt;dt&gt;</code>（定义项目/名字）和<code v-pre>&lt;dd&gt;</code>（描述每一个项目/名字）一起使用。</p>
<ul>
<li>
<p><code v-pre>&lt;dl&gt;&lt;/dl&gt;</code>里面只能包含<code v-pre>&lt;dt&gt;&lt;dd&gt;</code>。</p>
</li>
<li>
<p>dt 和 dd 个数没有限制，经常是一个 dt 对应多个 dd。</p>
</li>
</ul>
<h3 id="表单标签" tabindex="-1"><a class="header-anchor" href="#表单标签" aria-hidden="true">#</a> 表单标签</h3>
<p>表单需求：收集用户信息，跟用户进行交互，收集资料。</p>
<p>HTML中完整的表单通常由表单域、表单控件（也称为表单元素）和提示信息 3 个部分构成。</p>
<h4 id="form-标签" tabindex="-1"><a class="header-anchor" href="#form-标签" aria-hidden="true">#</a> <code v-pre>&lt;form&gt;</code>标签</h4>
<p>用于定义表单域，实现用户信息的收集和传递。</p>
<p><code v-pre>&lt;form&gt;</code>会把它范围内的表单元素信息提交给服务器。</p>
<p><code v-pre>&lt;form action=&quot;url地址&quot; method=&quot;提交方式&quot; name=&quot;表单域名称&quot;&gt;</code></p>
<pre><code>  表单元素控件
</code></pre>
<p><code v-pre>&lt;/form&gt;</code></p>
<p>暂时不用表单域提交数据，写上 form 标签即可。</p>
<p><strong>method</strong>: post 加密提交 get 明文提交</p>
<h4 id="表单控件-表单元素" tabindex="-1"><a class="header-anchor" href="#表单控件-表单元素" aria-hidden="true">#</a> 表单控件（表单元素）</h4>
<p>表单元素是允许用户在表单中输入或者选择的内容控件。</p>
<p>input 输入表单元素（单标签）</p>
<ol>
<li>type 属性</li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:left">属性值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">button</td>
<td style="text-align:left">定义可点击按钮（多数情况下，用于通过Javascript启动脚本）</td>
</tr>
<tr>
<td style="text-align:left">checkbox</td>
<td style="text-align:left">定义复选框</td>
</tr>
<tr>
<td style="text-align:left">file</td>
<td style="text-align:left">定义输入字段和“浏览”按钮，按文件上传</td>
</tr>
<tr>
<td style="text-align:left">hidden</td>
<td style="text-align:left">定义隐藏的输入字段</td>
</tr>
<tr>
<td style="text-align:left">image</td>
<td style="text-align:left">定义图像形式的提交按钮</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">定义密码字段，该字段中的字符被掩码</td>
</tr>
<tr>
<td style="text-align:left">radio</td>
<td style="text-align:left">定义单选按钮</td>
</tr>
<tr>
<td style="text-align:left">reset</td>
<td style="text-align:left">定义重置按钮，重置按钮会清除表单中的所有数据</td>
</tr>
<tr>
<td style="text-align:left">submit</td>
<td style="text-align:left">定义提交按钮，提交按钮会把表单数据发送到服务器</td>
</tr>
<tr>
<td style="text-align:left">text</td>
<td style="text-align:left">定义单行的输入字段，用户可在其中输入文本，默认宽度为20个字符</td>
</tr>
</tbody>
</table>
<br>
<ol start="2">
<li>input 其他属性</li>
</ol>
<table>
<thead>
<tr>
<th style="text-align:left">属性</th>
<th style="text-align:left">属性值</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">由用户自定义</td>
<td style="text-align:left">定义input元素的名称</td>
</tr>
<tr>
<td style="text-align:left">value</td>
<td style="text-align:left">由用户自定义</td>
<td style="text-align:left">规定input元素的值</td>
</tr>
<tr>
<td style="text-align:left">checked</td>
<td style="text-align:left">checked</td>
<td style="text-align:left">规定此input元素首次加载时应当被选中</td>
</tr>
<tr>
<td style="text-align:left">maxlength</td>
<td style="text-align:left">正整数</td>
<td style="text-align:left">规定输入字段中的字符的最大长度</td>
</tr>
</tbody>
</table>
<br>
<ol start="3">
<li>radio&amp;checkbox</li>
</ol>
<p>性别表单控件 radio 必须有相同的名字 name 才能多选一。checkbox 同理。</p>
<p>设置 checked 属性之后，页面打开默认选中按这个按钮。</p>
<p>maxlength 是用户在表单元素输入的最大字符数，一般较少使用。</p>
<br>
<ol start="4">
<li><code v-pre>&lt;label&gt;</code>标签</li>
</ol>
<p><code v-pre>&lt;label&gt;</code>标签为 input 元素定义标注（标签）。</p>
<p><code v-pre>&lt;label&gt;</code>用于绑定一个表单元素，当点击<code v-pre>&lt;label&gt;</code>标签内的文本时，浏览器就会自动将焦点(光标)转到或者选择对应的表单元素上，用于增加用户体验。</p>
<p><code v-pre>&lt;label for=&quot;abc&quot;&gt;xxx&lt;/label&gt;</code></p>
<p><code v-pre>&lt;input type=&quot;text&quot; name=&quot;123&quot; id=&quot;abc&quot;&gt;</code></p>
<br>
<ol start="5">
<li>select 下拉表单元素</li>
</ol>
<p><code v-pre>&lt;select name=&quot;&quot; id=&quot;&quot;&gt;</code></p>
<p><code v-pre>&lt;option value=&quot;&quot;&gt;选项1&lt;/option&gt;</code></p>
<p><code v-pre>&lt;option value=&quot;&quot;&gt;选项2&lt;/option&gt;</code></p>
<p><code v-pre>&lt;option value=&quot;&quot;&gt;选项3&lt;/option&gt;</code></p>
<p><code v-pre>&lt;/select&gt;</code></p>
<ul>
<li>
<p><code v-pre>&lt;select&gt;</code>中至少包含一对<code v-pre>&lt;option&gt;</code>。</p>
</li>
<li>
<p>在<code v-pre>&lt;option&gt;</code>中定义 selected = “selected”，当前项即为默认选中项。</p>
</li>
</ul>
<ol start="6">
<li>textarea 文本域元素</li>
</ol>
<p>使用场景：当用户输入内容较多的情况下，需要使用<code v-pre>&lt;textarea&gt;</code>标签。</p>
<p>该标签用于定义多行文本输入的控件。</p>
<ul>
<li>
<p>通过<code v-pre>&lt;textarea&gt;</code>标签可以轻松地创建多行文本输入框。</p>
</li>
<li>
<p>cols=”每行中的字符数”,rows=”显示的行数”，实际开发中用 CSS 来改变大小。</p>
</li>
</ul>
<p>写在最后：学会查阅文档</p>
<p><a href="https://www.w3school.com.cn" target="_blank" rel="noopener noreferrer">https://www.w3school.com.cn<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/<ExternalLinkIcon/></a></p>
</div></template>


