<template>
  <div class="hello">
    <mark-display
      :markdown="markdown"
      @title="setTitle"
      keyboard-ctrl
      url-hash-ctrl
      auto-font-size
      auto-blank-target
    ></mark-display>
  </div>
</template>

<script>
import MarkDisplay from "vue-mark-display";
// 标题
const themeMarkDown = `
# gitflow
----
`;
// 主线
const principalLine = `
### 学习三部曲：WHAT、HOW、WHY
----
`;
//
const partOne = `
## WHAT
###### 所谓的*WHAT*,就是搞清楚某个东东是什么？有什么用？有什么语法？有什么功能特性？……
----
###### 1.版本控制
----

![avatar](http://172.16.0.99:8080/0c17614431485298bbe59f51cdb399d.png)

----
###### 2.常见的版本控制工具
----

![avatar](http://172.16.0.99:8080/7251e8f23f59232f7d9fcb95ec34575.png)
<p align="left" style="font-size: 30px;">版本控制分类：本地版本控制(RCS)、集中版本控制(SVN、CVS、VSS)、分布式版本控制(Git)</p>

----

![avatar](http://172.16.0.99:8080/b44c317345ea7edd6c60804f2ede0bf.png)

----

![avatar](http://172.16.0.99:8080/1a1974ebdb3789353d3d22dc6065321.png)

----

![avatar](http://172.16.0.99:8080/241aa607de0b4524eb648e61e82fdac.png)

----  

![avatar](http://172.16.0.99:8080/7e96c50363be93e9f2b52761589d728.png)

----  

![avatar](http://172.16.0.99:8080/e15f06de3f5d574216877b7f339bf4b.png)

---- 
`;
const partTwo = `
## HOW
###### 所谓的*HOW*,就是搞清楚某个东西是如何运作的？实现机制如何？等一系列相关问题。
----


![avatar](http://172.16.0.99:8080/46d9d05c72c75038b7166d9bc2c301c.png)

---- 

![avatar](http://172.16.0.99:8080/95e62099949132c64ffc737a2a12444.png)

---- 

![avatar](http://172.16.0.99:8080/2cd6b4ce45c3212ea49cf202730b0f3.png)

---- 

##### gitflow
<p align="left" style="font-size: 30px;">在使用Git的过程中如果没有清晰流程和规划，否则,每个人都提交一堆杂乱无章的commit,项目很快就会变得难以协调和维护。
Git版本管理同样需要一个清晰的流程和规范。协作必须有一个规范的工作流程，让大家有效地合作，使得项目井井有条地发展下去。"工作流程"在英语里，叫做"workflow"或者"flow"，原意是水流，比喻项目像水流那样，顺畅、自然地向前流动，不会发生冲击、对撞、甚至漩涡。
Vincent Driessen 为了解决这个问题提出了 <a style="font-size: 50px;" href="https://nvie.com/posts/a-successful-git-branching-model/" target="_blank">A Successful Git Branching Model</a></p>

----

<img src="http://172.16.0.99:8080/git-model@2x.png" style="height:800px">

----  

![avatar](http://172.16.0.99:8080/a65a2aa535b1036f92286df7d679c68.png)

----   

![avatar](http://172.16.0.99:8080/80c638521160399955a9101cb341b84.png)

---- 


![avatar](http://172.16.0.99:8080/81635ad912754d7f35e53e8bf4283ae.png)

----


![avatar](http://172.16.0.99:8080/fc017e5c3d57942d9fe79837d509108.png)

----

![avatar](http://172.16.0.99:8080/e22a87e19294393cfb2f194535c0159.png)

----

![avatar](http://172.16.0.99:8080/559f01f7ba0dc01fb2fed2a86216a00.png)

----

![avatar](http://172.16.0.99:8080/10d78560862179149f37a568ad72913.png)

----

![avatar](http://172.16.0.99:8080/f30e3610145e6b6ff366f70d7683d0a.png)

----

![avatar](http://172.16.0.99:8080/081cee81a6cfc71745517ff2de1b082.png)

----
#### 总结
<p style="font-size: 30px;">首先，git-flow 并不会为 Git 扩展任何新的功能，它仅仅使用了脚本来捆绑了一系列 Git 命令来完成一些特定的工作流程。
其次，定义一个固定的工作流程会使得团队协作更加简单容易。无论是一个 “版本控制的新手” 还是 “Git 专家”，每一个人都知道如何来正确地完成某个任务。
记住，使用 git-flow 并不是必须的。当积攒了一定的使用经验后，很多团队会不再需要它了。当你能正确地理解工作流程的基本组成部分和目标的之后，你完全可以定义一个属于你自己的工作流程。
</p>


----
#### 鄙视链 ? 命令行 : git GUI 
<a style="font-size: 50px;" href="https://www.cnblogs.com/1-2-3/archive/2010/07/18/git-commands.html" target="_blank">git常用命令</a></br>
<a style="font-size: 50px;" href="https://www.cnblogs.com/gltou/p/15007323.html" target="_blank">Git Flow GUI(SourceTree)</a></br>
<a style="font-size: 50px;" href="https://www.bilibili.com/video/BV1P741147T7?from=search&seid=9199704931562114437&spm_id_from=333.337.0.0" target="_blank">Gitflow介绍与使用经验分享</a>


`;
const partThree = `
----
## WHY
###### 所谓的"*WHY*",就是搞清楚某个东西为什么设计成这样？为什么不是另外的样子？这样的设计有什么讲究？
----
`;
const markdown3 = `

  THANKS~

----

###### 资料

<p style="font-size: 16px;margin: 10px 0;width:1000pxmargin-bottom: -16px;margin: 10px 0;width:1000pxtext-align:left">https://www.cnblogs.com/cnblogsfans/p/5075073.html</p>
<p style="font-size: 16px">https://nvie.com/posts/a-successful-git-branching-model/</p>
<p style="font-size: 16px">https://www.cnblogs.com/jeffery-zou/p/10280167.html</p>
<p style="font-size: 16px">https://www.cnblogs.com/gltou/p/15007323.html</p>
`;

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    MarkDisplay,
  },
  data() {
    return {
      markdown:
        themeMarkDown +
        principalLine +
        partOne +
        partTwo +
        partThree +
        markdown3,
    };
  },
  methods: {
    setTitle({ title }) {
      document.title = title;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --color: #dedede;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
