<template><div><h2 id="使用-vue-cli-创建" tabindex="-1"><a class="header-anchor" href="#使用-vue-cli-创建" aria-hidden="true">#</a> 使用 vue-cli 创建</h2>
<p>官方文档：<a href="https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create<ExternalLinkIcon/></a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上</span>
vue <span class="token parameter variable">--version</span>
<span class="token comment">## 安装或者升级你的@vue/cli</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
<span class="token comment">## 创建</span>
vue create vue_test
<span class="token comment">## 启动</span>
<span class="token builtin class-name">cd</span> vue_test
<span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-vite-创建" tabindex="-1"><a class="header-anchor" href="#使用-vite-创建" aria-hidden="true">#</a> 使用 vite 创建</h2>
<p>官方文档：<a href="https://v3.cn.vuejs.org/guide/installation.html#vite" target="_blank" rel="noopener noreferrer">https://v3.cn.vuejs.org/guide/installation.html#vite<ExternalLinkIcon/></a></p>
<p>vite 官网：<a href="https://vitejs.cn" target="_blank" rel="noopener noreferrer">https://vitejs.cn<ExternalLinkIcon/></a></p>
<h3 id="初始化步骤" tabindex="-1"><a class="header-anchor" href="#初始化步骤" aria-hidden="true">#</a> 初始化步骤</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment">## 创建工程</span>
<span class="token function">npm</span> init vite-app <span class="token operator">&lt;</span>project-name<span class="token operator">></span>
<span class="token comment">## 进入工程目录</span>
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>project-name<span class="token operator">></span>
<span class="token comment">## 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment">## 运行</span>
<span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优秀的冷启动" tabindex="-1"><a class="header-anchor" href="#优秀的冷启动" aria-hidden="true">#</a> 优秀的冷启动</h3>
<p>当冷启动开发服务器时，基于打包器的方式启动必须优先抓取并构建你的整个应用，然后才能提供服务。</p>
<p>Vite 以 原生 ESM 方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。</p>
<p>以 webpack 为基础的项目bundle启动方式</p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/Vue3/bundler.37740380.png" alt="webpack-bundle" tabindex="0" loading="lazy"><figcaption>webpack-bundle</figcaption></figure>
<p>以 vite 为基础的项目esm启动方式</p>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/Vue3/esm.3070012d.png" alt="vite-esm" tabindex="0" loading="lazy"><figcaption>vite-esm</figcaption></figure>
<h3 id="与-webpack-比较" tabindex="-1"><a class="header-anchor" href="#与-webpack-比较" aria-hidden="true">#</a> 与 webpack 比较</h3>
<p>首先我们知道，vite 主要还是用来在开发跟发布过程中的一个替代 webpack 的解决方案</p>
<p>虽然生产环境依然还是通过rollup打包的，但是在开发环境中，是使用的vite自身的模式，来改正了webpack在打包依赖的过程中时间太长的问题</p>
<p>从这里可以看出</p>
<p>1.vite是一个基于开发环境下的构建工具</p>
<p>2.vite其实并不能完全替代webpack，更偏向于优化版的webpack-dev-server</p>
<p>更多Vite的分析详见<RouterLink to="/webpack/vite.html">Vite工具</RouterLink></p>
</div></template>


