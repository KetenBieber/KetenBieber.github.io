---
title: R2 — 基于 EtherCAT 的全自主投篮机器人（Robocon 2025）
category: robotics
date: 2025-07-01
tags: [EtherCAT, ROS, Linux, Motion Control, SLAM, Robocon, Multi-Sensor]
link: "#"
isOpenSource: false
role: lead
featured: true
featuredImage: /images/projects/r2.jpg
details: |
  R2 是 2025 年全国大学生机器人大赛（Robocon）的参赛投篮机器人，具备高速全向移动、激光雷达 SLAM 建图定位、RGB-D 相机多模态感知能力。整机采用三舵轮底盘搭配皮筋扳机发射机构，可在标准篮球场地内完成快速移动、急停急加速、过半场任意距离自动瞄准投篮（含长距离投篮）、伸网拦截等竞赛动作，实现全场定位感知覆盖。

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #ebcb8b;">我负责的工作：</strong>

  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li>搭建基于 EtherCAT 的无下位机实时控制系统（Linux / Ubuntu + ROS），完成 EtherCAT 主站软件栈编程与高性能从站嵌入式固件编写
    <li>三舵轮底盘运动学解算与闭环控制
    <li>与视觉组对接，实现自动瞄准锁定、全场定位感知等功能联调
  </ul>

  <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 24px;">
    <video src="/images/projects/move-show.mp4" controls style="width: 100%; border-radius: 6px;" preload="metadata"></video>
    <video src="/images/projects/shoot-light.mp4" controls style="width: 100%; border-radius: 6px;" preload="metadata"></video>
    <video src="/images/projects/shoot-long-distance.mp4" controls style="width: 100%; border-radius: 6px;" preload="metadata"></video>
    <video src="/images/projects/shoot-with-Lu.mp4" controls style="width: 100%; border-radius: 6px;" preload="metadata"></video>
  </div>
---

2025 Robocon 赛事 R2 投球机器人，融合基于 EtherCAT 的无下位机实时控制、三轮舵轮底盘运动学、激光雷达 SLAM 定位与 RGB-D 多模态感知技术。可实现高速全向移动、远距离自动瞄准投球，以及篮球场地全域环境感知。
