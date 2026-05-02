---
title: 智慧救援机器人 — 2025年广东省大学生工程实践与创新能力大赛暨2025年中国大学生工程实践与创新能力大赛选拔赛
category: robotics
date: 2025-06-01
tags: [ROS, Embedded, Motion Control, Computer Vision, yolov5, npu, rknn]
link: "#"
isOpenSource: false
role: lead
featured: true
featuredImage: /images/projects/recongnize-ball.jpg
details: |
  本项目为 2025 年广东省大学生工程实践与创新能力大赛（暨中国大学生工程实践与创新能力大赛选拔赛）「智能+」赛道——<strong>智能救援</strong>赛项的参赛机器人。比赛在 2400mm × 2400mm 的模拟救援场地内进行，两台机器人同时上场对抗，在保护自身免受对方干扰与碰撞的前提下，尽可能多地搜集救援目标（普通目标、核心目标、危险目标）并转运至本方安全区。核心任务是在最短时间内全自主完成对不同颜色球体的识别、搜集与转运，并在与对手的动态博弈中取得优势。

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #ebcb8b;">我的工作：上位机视觉与决策系统</strong>

  我的工作主要围绕上位机视觉推理与实时决策展开：

  <strong style="color: #a3be8c;">1. YOLOv5 模型部署与 NPU 推理加速</strong>
  在 Orange Pi 5 Pro（RK3588S）上完成 YOLOv5 目标检测模型的部署，调用板载 3 核 NPU 对推理进行硬件加速。处理固定视频流时，峰值推理速度可达 170 fps（线程池模式）；接入 30 fps 相机实时视频流时，推理帧率基本跑满相机帧率，满足比赛对实时性的严苛要求。

  <div style="margin: 12px 0;">
    <video src="/images/projects/ball-recongnize.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>

  <strong style="color: #a3be8c;">2. 实时评分决策系统</strong>
  针对比赛对不同颜色球体的差异化分值规则，设计了一套多维度加权评分决策系统。机器人对视野内每个检测到的球体进行实时打分，评分维度包括：
  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li><strong>转向代价</strong>：球体在视野中的位置所对应的机器人转向角度；
    <li><strong>目标价值</strong>：球体颜色对应的比赛得分权重；
    <li><strong>径向距离</strong>：通过检测框大小估算球体与机器人的相对距离。
  </ul>

  系统对以上维度进行加权求和，输出当前最优抓取目标，并将决策结果（视野内 XY 偏差 + 径向距离偏差）通过串口实时回传至嵌入式运动控制器，驱动底盘与执行机构完成目标逼近与搜集，实现上位机感知决策与下位机运动控制的闭环协同。

  <div style="margin: 12px 0;">
    <video src="/images/projects/find-ball.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>
---

2025 年大学生工程实践创新大赛（智能 + 赛道）竞技型自主救援机器人，具备高速全向移动、目标自主搜寻与转运、防撞防护能力，可在 2.4 米 ×2.4 米赛场内执行多机器人对抗策略。

