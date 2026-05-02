---
title: 多模态感知全自主收集机器人 — 2024 Robocon「颗粒归仓」
category: robotics
date: 2024-07-01
tags: [STM32, Embedded, CAN Bus, Motion Control, Path Planning, Computer Vision, Robocon, Odometry]
link: "#"
isOpenSource: false
role: lead
featured: true
featuredImage: /images/projects/24r2.jpg
details: |
  本项目来源于 2024 年第 23 届全国大学生机器人大赛 ROBOCON「颗粒归仓」编程技能挑战赛。赛事主题模拟育秧、插秧、收获与运粮入仓的农业全过程，旨在传递节约粮食的理念。比赛要求 R2独立完成——R2 必须全自动运行，从暂存区中自主识别并捡起紫色球（稻谷），剔除红/蓝色球（瘪谷），将其放入谷仓，单次最多捡取 2 个，每个成功入仓的稻谷记 30 分。

  本机为参赛 R2 机器人，采用三全向轮底盘，具备相机视觉识别、颜色传感器二次校核、正交码盘全场定位等多模态感知能力，能够在场地内全自主完成稻谷目标的识别、收集、转运与入仓。

  <div style="margin: 12px 0;">
    <video src="/images/projects/24rc.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>
  <div style="margin: 12px 0;">
    <video src="/images/projects/harvest.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #a3be8c;">整车技术方案</strong>

  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li><strong>运动系统</strong>：三全向轮底盘，配合正交码盘里程计实现全场实时定位与坐标解算；
    <li><strong>感知系统</strong>：Linux主机通过相机识别场地内稻谷目标并且将决策结果传回嵌入式控制器，收集入机器体内仓后由内置颜色传感器进行二次颜色校核，确保收集正确性；
    <li><strong>收集机构</strong>：三摩擦带滚刷式收集，高效将稻谷卷入仓内；
    <li><strong>放置与踢球机构</strong>：自动导航至收集区完成稻谷放置；通过气阀机构驱动踢球动作，动作利索、快速完成球的放置；
    <li><strong>控制系统</strong>：整车控制器基于 STM32 嵌入式微控制器，单芯片承载路径规划、目标决策、多传感器感知融合与动作执行的全部任务，驱动 CAN 总线电调、传感器数据采集、正交码盘信号处理等外设。
  </ul>

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #ebcb8b;">我负责的工作：嵌入式全栈开发</strong>

  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li>整车代码框架搭建与模块调度设计
    <li>寻球决策逻辑与路径规划跟踪算法实现
    <li>底层外设驱动开发：CAN 总线电调通讯、多传感器数据采集、正交码盘数据处理与实时全局坐标转换
  </ul>
---

2024 年全国大学生机器人大赛 ROBOCON「颗粒归仓」程控赛自主收集机器人（R2），搭载三轮全向轮里程计定位，采用相机 + 颜色传感器多模态感知方案，实现正常稻谷与霉变稻谷的区分（实际比赛使用球体代表稻谷）；配备摩擦带收集机构与气动弹射结构。整机基于单块 STM32 单片机端到端统一运行，集成路径规划、环境感知与运动控制全功能。