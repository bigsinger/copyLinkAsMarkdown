# copyLinkAsMarkdown
复制网页或图片链接为`markdown`格式-使用`ChatGPT4`创建



## 使用方法

1. 打开谷歌浏览器的扩展程序( chrome://extensions/ ）
2. 打开开发者模式
3. 加载已解压的扩展程序，选择`copyLinkAsMarkdown\source`即可。
4. 在浏览其他网页或图片的时候想要复制`markdown`链接，右键菜单即可直接复制。



## 与ChatGPT的沟通记录

```
我是一个前端小白，请帮助我编写一个chrome浏览器插件，主要功能：
1、右键菜单里增加一个菜单项：复制MarkDown链接。
2、在浏览器里选中的是图片时复制的是图片的markdown链接，否则复制的是当前网页的markdown链接。如果图片不存在或无效，也复制当前网页的markdown链接。
3、图片的markdown链接使用图片的alt属性作为文本。
4、网页的markdown链接的文本需要解析网页的标题，一般来说解析最后一个` - `的前半部分，若不存在字符串` - `分割则直接使用网页标题。
5、使用最新版的chrome插件版本开发。
6、要求步骤和教程尽量简单简介。
```



```
很好。已经解决了。后面我们做一些细微的优化，让这个插件看起来更加完美。 
1、当元素类型是图片时，菜单项的文本显示为：Copy ![Image](Url)
当元素类型不是图片是，菜单项的文本显示为：Copy MarkDown Link
2、如果图片的alt为空，就使用空的字符串。
3、如果网页的标题为空，就使用空的字符串。
```

