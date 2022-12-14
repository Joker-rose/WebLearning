# React 框架


## 项目构建

### 1、创建新的单页应用
*方式一* 
```npm
    // 1
    npm init react-app my-react-app
	
    // 2
    npm install -g create-react-app
    create-react-app my-react-app
```
*方式二* 
```npx
    // npx create-react-app my-app --template [template-name]
    npx create-react-app my-react-app 
    cd my-react-app
    npm start
```

> ### 服务端渲染的网站 - Next.js 

```npm
        npm init
        npm install -s react react-dom next
```

> ### 静态网站 (待完善)

>> #### 1、npm 直接创建

```
            npm init gatsby  // 过程中需要输入名称等
```

> ### 组件库或将 React 集成到现有代码 (待完善)




### 添加 Sass 样式表
- [x] 项目内执行 npm install --save-dev sass
- [x] 新建 [scss/sass/css] 样式表，引入使用

### CSS 样式重置 [使所有浏览器样式看起来统一]
- [x] 在 index.css（主样式）中添加 @import-normalize; 添加一次即可

# 添加 bootstrap
- [x] 项目内执行 npm install --save bootstrap
- [x] 在 index.css（主样式）中添加 import 'bootstrap/dist/css/bootstrap.css';
	- [ ]  自定义主题样式，创建 src/custom.scss
	- [ ]  custom.scss 中覆盖 bootstrap.scss 中的变量 (如：$body-bg: #000;)
	- [ ] 覆盖变量后，添加 @import '~bootstrap/scss/bootstrap.scss';

### 添加路由依赖
- [x] 项目内执行 npm install --save react-router-dom
- [x] 使用路由
	- [ ] import { createBrowserRouter, RouterProvider } from "react-router-dom";
	- [ ] 创建 router.js
	``` qwe
	    import Component1 from "./Component1";...
		
	    const router = createBrowserRouter([
            {
                path: "/",
                element: <Component1 />,
            },
            {
                path: "about",
                element: <Component1 />,
            },
        ]);
	```
	- [ ] 在 index.js 中向ReactDOM添加路由
	``` qwe
	    import React from "react";
	    import ReactDOM from "react-dom/client";
		
	    const root = ReactDOM.createRoot(document.getElementById("root"));
	    root.render(<RouterProvider router={router} />);
	```

### 添加环境变量
- [x] 项目根目录添加 .env.[development/production].[local]
- [x] development/production 为模式名称，可自定义名字[需设置 NODE_ENV=development/production]，如：.env.staging
	- [ ] package.json文件的scripts节点添加  "build:staging": "env-cmd -f .env.staging npm run build"
- [x] 添加变量名以 REACT_APP_ 开头，区别于系统等其他定义的变量，只有 NODE_ENV、REACT_APP_开头 的变量不会被忽略
- [x] js中用 process.env.NODE_ENV，HTML中使用 %NODE_ENV% ;
- [x] 使用系统等环境变量：如：npm_package_version -> REACT_APP_VERSION=$npm_package_version
- [x] 优先级;从左到右依次从高到低
	- [ ] npm run start: .env.development.local, .env.local, .env.development, .env, 
	- [ ] npm run build: .env.production.local, .env.local, .env.production, .env
	- [ ] npm run test: .env.test.local, .env.test, .env, .env.local


### 配置打包生成的基本路径
- [x] 设置环境变量 PUBLIC_URL='/'; 或 package.json文件添加 "homepage": "/" ; "/" 为打包后的文件路径的前缀

### Flow 静态类型检查器
- [x] 项目内执行 npm install --save-dev flow-bin
- [x] 在 package.json 中 "scripts" 脚本中添加 "flow": "flow"
- [x] 在项目根目录执行 npm run flow init 以创建 .flowconfig 文件
- [x] 在要检查的文件中添加 "// @flow" 行表示该文件要检查

### graphql 和 Relay 相关
- [x] 暂未了解

### Visual Studio Code 格式化 JSX 文件支持
- [x] vscode安装 Prettier - Code formatter 插件
- [x] 设置vscode，文本编辑器->文件，files.associations 添加 "*.js": "javascriptreact" 或者 "*.jsx": "javascriptreact"








**Markdown是一种轻量级的「标记语言」**


![markdown](https://www.mdeditor.com/images/logos/markdown.png "markdown")


Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面，Markdown文件的后缀名便是“.md”


## MdEditor是一个在线编辑Markdown文档的编辑器

*MdEditor扩展了Markdown的功能（如表格、脚注、内嵌HTML等等），以使让Markdown转换成更多的格式，和更丰富的展示效果，这些功能原初的Markdown尚不具备。*

> Markdown增强版中比较有名的有Markdown Extra、MultiMarkdown、 Maruku等。这些衍生版本要么基于工具，如~~Pandoc~~，Pandao；要么基于网站，如GitHub和Wikipedia，在语法上基本兼容，但在一些语法和渲染效果上有改动。

MdEditor源于Pandao的JavaScript开源项目，开源地址[Editor.md](https://github.com/pandao/editor.md "Editor.md")，并在MIT开源协议的许可范围内进行了优化，以适应广大用户群体的需求。向优秀的markdown开源编辑器原作者Pandao致敬。


![Pandao editor.md](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png "Pandao editor.md")



## MdEditor的功能列表演示

# 标题H1

## 标题H2

### 标题H3

#### 标题H4

##### 标题H5

###### 标题H5

### 字符效果和横线等
----

~~删除线~~ <s>删除线（开启识别HTML标签时）</s>

*斜体字*      _斜体字_

**粗体**  __粗体__

***粗斜体*** ___粗斜体___

上标：X<sub>2</sub>，下标：O<sup>2</sup>

**缩写(同HTML的abbr标签)**
> 即更长的单词或短语的缩写形式，前提是开启识别HTML标签时，已默认开启

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.
### 引用 Blockquotes

> 引用文本 Blockquotes

引用的行内混合 Blockquotes

> 引用：如果想要插入空白换行`即<br />标签`，在插入处先键入两个以上的空格然后回车即可，[普通链接](https://www.mdeditor.com/)。

### 锚点与链接 Links
[普通链接](https://www.mdeditor.com/)
[普通链接带标题](https://www.mdeditor.com/ "普通链接带标题")
直接链接：<https://www.mdeditor.com>
[锚点链接][anchor-id]
[anchor-id]: https://www.mdeditor.com/
[mailto:test.test@gmail.com](mailto:test.test@gmail.com)
GFM a-tail link @pandao
邮箱地址自动链接 test.test@gmail.com  www@vip.qq.com
> @pandao

### 多语言代码高亮 Codes

#### 行内代码 Inline code


执行命令：`npm install marked`

#### 缩进风格

即缩进四个空格，也做为实现类似 `<pre>` 预格式化文本 ( Preformatted Text ) 的功能。

    <?php
        echo "Hello world!";
    ?>
预格式化文本：

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### JS代码
```javascript
function test() {
	console.log("Hello world!");
}
```

#### HTML 代码 HTML codes
```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <meta name="keywords" content="Editor.md, Markdown, Editor" />
        <title>Hello world!</title>
        <style type="text/css">
            body{font-size:14px;color:#444;font-family: "Microsoft Yahei", Tahoma, "Hiragino Sans GB", Arial;background:#fff;}
            ul{list-style: none;}
            img{border:none;vertical-align: middle;}
        </style>
    </head>
    <body>
        <h1 class="text-xxl">Hello world!</h1>
        <p class="text-green">Plain text</p>
    </body>
</html>
```
### 图片 Images

图片加链接 (Image + Link)：


[![](https://www.mdeditor.com/images/logos/markdown.png)](https://www.mdeditor.com/images/logos/markdown.png "markdown")

> Follow your heart.

----
### 列表 Lists

#### 无序列表（减号）Unordered Lists (-)

- 列表一
- 列表二
- 列表三

#### 无序列表（星号）Unordered Lists (*)

* 列表一
* 列表二
* 列表三

#### 无序列表（加号和嵌套）Unordered Lists (+)
+ 列表一
+ 列表二
    + 列表二-1
    + 列表二-2
    + 列表二-3
+ 列表三
    * 列表一
    * 列表二
    * 列表三

#### 有序列表 Ordered Lists (-)

1. 第一行
2. 第二行
3. 第三行

#### GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [x] GFM task list 3
    - [ ] GFM task list 3-1
		- [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

----

### 绘制表格 Tables

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机      | $1600   |   5     |
| 手机        |   $12   |   12   |
| 管线        |    $1    |  234  |

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |

----

#### 特殊符号 HTML Entities Codes

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

[========]

### Emoji表情 :smiley:

> Blockquotes :star:

#### GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao;
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);

#### 反斜杠 Escape

\*literal asterisks\*

[========]
### 科学公式 TeX(KaTeX)

$$E=mc^2$$

行内的公式$$E=mc^2$$行内的公式，行内的$$E=mc^2$$公式。

$$x > y$$

$$\(\sqrt{3x-1}+(1+x)^2\)$$

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

多行公式：

```math
\displaystyle
\left( \sum\_{k=1}^n a\_k b\_k \right)^2
\leq
\left( \sum\_{k=1}^n a\_k^2 \right)
\left( \sum\_{k=1}^n b\_k^2 \right)
```
```katex
\displaystyle
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        }
    }
```
```latex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```
### 分页符 Page break

> Print Test: Ctrl + P

[========]

### 绘制流程图 Flowchart

```flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
```
[========]

### 绘制序列图 Sequence Diagram

```seq
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
```
### End