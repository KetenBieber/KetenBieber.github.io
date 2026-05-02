---
title: 基于 EtherCAT 主站为核心的实时机器人控制系统
category: robotics
date: 2025-03-01
tags: [EtherCAT, CAN, RS485, Linux, ROS, Firmware]
link: "https://github.com/KetenBieber/rc_ecat_controls"
isOpenSource: true
role: lead
featured: true
featuredImage: /images/projects/ecat-master-nice.jpg
details: |
  <strong style="font-size: 18px; display: block; margin: 24px 0 16px 0; color: #88c0d0;">系统框架：</strong>
  <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 16px;">
    <div style="display: flex; gap: 16px; align-items: center;">
      <div style="flex: 1; min-width: 200px; max-width: 480px;">
        <img src="/images/projects/ecat-master-nice.jpg" style="width: 100%; border-radius: 6px;" />
      </div>
    </div>
  </div>
  本人主导了硬件选型、从站固件开发及 EtherCAT 到 CAN/UART/RS485 的多协议转换，负责极限工况压力测试并按工业标准设计安全与维护策略。

  构建了基于 Linux x86 的 EtherCAT 主站软件栈，实现多线程/多进程调度与 ROS 接口集成；作为第一发明人，相关专利"基于 EtherCAT 主站为核心的实时机器人控制系统"已公开。

  <strong style="font-size: 18px; display: block; margin: 24px 0 16px 0; color: #88c0d0;">迭代历程：</strong>

  <div style="display: flex; gap: 12px; margin-top: 16px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; padding-bottom: 4px;">
    <div style="flex: 1 0 30%; min-width: 160px; scroll-snap-align: start; display: flex; flex-direction: column; align-items: center;">
      <img src="/images/projects/ecat1.0.png" style="width: 100%; border-radius: 6px; aspect-ratio: 4/3; object-fit: cover;" />
      <span style="margin-top: 8px; font-size: 12px; color: #88c0d0; font-weight: bold; text-align: center;">1.0 — 核心功能完成</span></div>
    <div style="flex: 1 0 30%; min-width: 160px; scroll-snap-align: start; display: flex; flex-direction: column; align-items: center;">
      <img src="/images/projects/ecat2.0.png" style="width: 100%; border-radius: 6px; aspect-ratio: 4/3; object-fit: cover;" />
      <span style="margin-top: 8px; font-size: 12px; color: #a3be8c; font-weight: bold; text-align: center;">2.0 — 增强外设集成</span></div>
    <div style="flex: 1 0 30%; min-width: 160px; scroll-snap-align: start; display: flex; flex-direction: column; align-items: center;">
      <img src="/images/projects/ecat3.0.png" style="width: 100%; border-radius: 6px; aspect-ratio: 4/3; object-fit: cover;" />
      <span style="margin-top: 8px; font-size: 12px; color: #ebcb8b; font-weight: bold; text-align: center;">3.0 — 分电板与CAN分线板集成</span></div>
  </div>

  <div style="display: flex; gap: 12px; margin-top: 16px;">
    <div style="flex: 1; display: flex; flex-direction: column;">
      <video src="/images/projects/ecat-sync2.0.mp4" controls style="width: 100%; border-radius: 6px;" preload="metadata"></video>
      <span style="display: block; margin-top: 6px; font-size: 13px; color: #88c0d0; text-align: center;">两块Ecat从站同步模式，周期250us，ns级别抖动</span></div>
    <div style="flex: 1;">
      <img src="/images/projects/monitor.png" style="width: 100%; border-radius: 6px;" /></div>
  </div>

  <div style="padding: 12px; background: rgba(163, 190, 140, 0.1); border-left: 3px solid #a3be8c; border-radius: 4px; margin-top: 16px;">
    <strong style="color: #a3be8c;">最终成果</strong>
    <p style="margin-top: 6px; color: #d8dee9;">已成功集成至 2025 年全国大学生机器人大赛（Robocon）R2机器人。</p>
  </div>
---

设计了一套以 EtherCAT 为核心硬件接口的实时机器人控制框架，支持多协议转换与高精度、高同步性的工业控制。涵盖硬件选型、从站固件开发及基于 Linux 的主站软件栈开发，并集成 ROS 接口。
