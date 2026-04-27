---
id: zero-shot-mapless-nav
title: "DualNav: 基于异步基础模型与主动视觉-语义记忆的零样本机器人在线导航规划"
authors: [赖宏铭, 林科潭, 谭健, 叶波, 陈辞, 任志刚]
venue: Engineering Applications of Artificial Intelligence
venueType: journal
year: 2026
status: under-review
isFirstAuthor: false
isCorrespondingAuthor: false
links:
  arxiv: "#"
  code: "#"
emoji: "🤖"
featuredImage: /images/publications/mapless_system.png
---

让移动机器人能够根据自然语言指令在未知环境中自主导航，是具身智能领域的一项关键挑战。我们提出了 DualNav，一种零样本无地图导航框架，通过异步并行架构将高频反应控制与低频语义推理解耦。DualNav 通过基于时间戳的状态同步机制，补偿基础模型推理延迟并保持时空一致性。主动视觉-语义记忆和带有朝向约束的局部规划器进一步提升了系统的鲁棒性和感知持续性。仿真与真实环境实验表明，DualNav 在导航成功率和运动平滑性方面较串行基线方法有显著提升。