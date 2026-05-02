---
title: 基于大模型的移动机器人零样本异步导航规划方法
category: robotics
date: 2025-11-01
tags: [LLM, ROS, Path Planning, MPC, Bezier, RRT*, Sim2Real]
link: "#"
isOpenSource: false
role: lead
featured: true
featuredImage: /images/projects/zero-result1.jpg
details: |
  本人主导系统架构设计与 ROS 模块化软件栈实现，开发了异步双环多线程架构以解耦高频运动控制与低频语义推理，并搭建 Gazebo 仿真平台用于基线算法复现与验证。

  集成了 Informed RRT* 路径搜索、Bezier 轨迹平滑与 MPC 跟踪算法以实现鲁棒导航，并将整套系统部署至 TurtleBot3 实机平台，完成 sim2real 迁移与多场景验证。

  以第三作者身份参与论文《DualNav—Online Planning for Zero-Shot Robot Navigation with Asynchronous Foundation Models and Active Visual-Semantic Memory》（EA-AI，审稿中），以第二作者身份参与《Zero-Shot Asynchronous Navigation for Mobile Robots with Foundation Models》（Control Theory & Applications，审稿中）。

  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 16px;">
    <img src="/images/projects/zero-result1.jpg" style="width: 100%; border-radius: 6px; object-fit: cover; aspect-ratio: 1;" />
    <img src="/images/projects/zero-result2.jpg" style="width: 100%; border-radius: 6px; object-fit: cover; aspect-ratio: 1;" />
    <img src="/images/projects/zero-result3.jpg" style="width: 100%; border-radius: 6px; object-fit: cover; aspect-ratio: 1;" />
    <img src="/images/projects/zero-result4.jpg" style="width: 100%; border-radius: 6px; object-fit: cover; aspect-ratio: 1;" />
    <img src="/images/projects/zero-result5.jpg" style="width: 100%; border-radius: 6px; object-fit: cover; aspect-ratio: 1;" />
    <img src="/images/projects/zero-result6.jpg" style="width: 100%; border-radius: 6px; object-fit: cover; aspect-ratio: 1;" />
  </div>
---

提出了面向未知非结构化环境下移动机器人的新型异步导航框架（DualNav），利用大模型进行低频语义推理，结合高频控制回路实现实时运动。增量式视觉-语义记忆实现了轻量级环境建模。集成 Informed RRT* 路径搜索、Bezier 轨迹平滑与 MPC 跟踪算法，显著提升动力学性能与路径质量。
