<template><div><p>React 组件中包含一系列钩子函数（生命周期回调函数），会在特定的时刻调用</p>
<p>我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作</p>
<h2 id="生命周期流程-旧" tabindex="-1"><a class="header-anchor" href="#生命周期流程-旧" aria-hidden="true">#</a> 生命周期流程(旧)</h2>
<h3 id="简述" tabindex="-1"><a class="header-anchor" href="#简述" aria-hidden="true">#</a> 简述</h3>
<p>React 生命周期可以分成三个阶段：</p>
<ol>
<li>挂载阶段：组件状态数据的初始化及初始化渲染</li>
<li>运行阶段：和用户交互，改变状态并重绘（最长阶段）</li>
<li>卸载阶段：组件使用完毕后，或者不需要存在于页面中，那么将组件移除，执行销毁（需注意内存泄漏问题）</li>
</ol>
<p>以类式组件的创建流程为例：</p>
<ol>
<li>执行<code v-pre>ReactDOM.render</code></li>
<li>解析组件标签，找到组件</li>
<li>发现组件是类定义组件，new 该类实例，通过该实例调用原型上的 render 方法</li>
<li>将 render 返回的虚拟 DOM 转换为真实 DOM，随后呈现在页面中</li>
</ol>
<p>render 调用的时机：初始化渲染、状态更新之后</p>
<h3 id="旧生命周期流程图" tabindex="-1"><a class="header-anchor" href="#旧生命周期流程图" aria-hidden="true">#</a> 旧生命周期流程图</h3>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/image-20210914155313635.png" alt="React旧生命周期流程图" tabindex="0" loading="lazy"><figcaption>React旧生命周期流程图</figcaption></figure>
<h3 id="流程分析" tabindex="-1"><a class="header-anchor" href="#流程分析" aria-hidden="true">#</a> 流程分析</h3>
<p>初始化阶段：<code v-pre>ReactDOM.render()</code>触发初次渲染</p>
<ol>
<li>constructor</li>
<li>componentWillMount</li>
<li>render</li>
<li>componentDidMount</li>
</ol>
<p>componentDidMount 为常用钩子函数，一般在这个钩子中做一些初始化的事，如：开启定时器、发送网络请求、订阅消息等</p>
<p>更新阶段：组件<code v-pre>setState()</code>或父组件 render 触发</p>
<ol>
<li>componentWillReceiveProps（初始化时不触发，父组件没有更新不触发）</li>
<li>shouldComponentUpdate（setState 时触发）</li>
<li>componentWillUpdate（forceUpdate）</li>
<li>render</li>
<li>componentDidUpdate</li>
</ol>
<p>卸载阶段：由<code v-pre>ReactDOM.unmountComponentAtNode()</code>触发</p>
<ol>
<li>componentWillUnmount</li>
</ol>
<p>componentWillUnmount 为常用钩子函数，一般在这个钩子中做一些收尾的事，如：关闭定时器、取消订阅消息</p>
<h2 id="生命周期流程-新" tabindex="-1"><a class="header-anchor" href="#生命周期流程-新" aria-hidden="true">#</a> 生命周期流程(新)</h2>
<h3 id="简述-1" tabindex="-1"><a class="header-anchor" href="#简述-1" aria-hidden="true">#</a> 简述</h3>
<p>新生命周期不是对旧生命周期的颠覆，而是合理地优化更新</p>
<p>新的生命周期没有 <code v-pre>componentWillMount</code> <code v-pre>componentWillReceiveProps</code> <code v-pre>componentWillUpdate</code> 钩子函数，以避免异步渲染可能存在的问题</p>
<p>上述三个旧版本生命周期函数在 18.0.X 版本需要在函数名前面添加 <strong>UNSAFE_</strong> (<code v-pre>UNSAFE_componentWillMount() {}</code>)才能工作。</p>
<p>新生命周期增加了一些新的钩子函数</p>
<h3 id="新生命周期流程图" tabindex="-1"><a class="header-anchor" href="#新生命周期流程图" aria-hidden="true">#</a> 新生命周期流程图</h3>
<figure><img src="https://misaka10032.oss-cn-chengdu.aliyuncs.com/React/image-20210914200958976.png" alt="React新生命周期流程图" tabindex="0" loading="lazy"><figcaption>React新生命周期流程图</figcaption></figure>
<h3 id="流程分析-1" tabindex="-1"><a class="header-anchor" href="#流程分析-1" aria-hidden="true">#</a> 流程分析</h3>
<p>初始化阶段：<code v-pre>ReactDOM.render()</code>触发初次渲染</p>
<ol>
<li>constructor</li>
<li>getDerivedStateFromProps</li>
<li>render</li>
<li>componentDidMount</li>
</ol>
<p>componentDidMount 仍是常用钩子函数</p>
<p>更新阶段：组件<code v-pre>setState()</code>或父组件 render 触发</p>
<ol>
<li>getDerivedStateFromProps</li>
<li>shouldComponentUpdate</li>
<li>render</li>
<li>getSnapshotBeforeUpdate</li>
<li>componentDidUpdate</li>
</ol>
<p>卸载阶段：由<code v-pre>ReactDOM.unmountComponentAtNode()</code>触发</p>
<ol>
<li>componentWillUnmount</li>
</ol>
<p>componentWillUnmount 仍是常用钩子函数</p>
<h3 id="父子附件渲染顺序" tabindex="-1"><a class="header-anchor" href="#父子附件渲染顺序" aria-hidden="true">#</a> 父子附件渲染顺序</h3>
<p>组件渲染的顺序依赖于深度优先原则</p>
<p>父组件第一次渲染：</p>
<p>父 willMount -&gt; 父 render [ 子 willMount -&gt; 子 render -&gt; 子 didMount ] -&gt; 父 didMount</p>
<p>父组件更新：</p>
<p>父 getDerivedStateFromProps -&gt; 父 shouldUpdate -&gt; 父 render -&gt; [ 子父 getDerivedStateFromProps -&gt; 子 shouldUpdate -&gt; 子 render -&gt; 子 didUpdate ] -&gt; 父 didUpdate</p>
<p>特殊情况：我们可以在子组件内部优化处理，验证传递的属性值有没有变化，如果没有变化则禁止更新（memo）</p>
<p>父组件释放：</p>
<p>父 willUnMount -&gt; 父释放中 -&gt; [ 子 willUnMount -&gt; 子释放 ] -&gt; 父释放</p>
<h2 id="重要的钩子" tabindex="-1"><a class="header-anchor" href="#重要的钩子" aria-hidden="true">#</a> 重要的钩子</h2>
<ol>
<li>
<p>render：初始化渲染或更新渲染调用</p>
</li>
<li>
<p>componentDidMount：开启监听, 发送 ajax 请求</p>
</li>
<li>
<p>componentWillUnmount：做一些收尾工作, 如: 清理定时器</p>
</li>
</ol>
</div></template>


