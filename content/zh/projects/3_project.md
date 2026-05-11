---
title: 基于多模态感知的智能羽毛球训练机器人
category: robotics
date: 2025-11-01
tags: [SLAM, Lidar, Depth Camera, Path Planning, Fast-LIO, Ego-Planner]
link: "https://github.com/KetenBieber/badminton_robot"
isOpenSource: true
role: lead
featured: true
featuredImage: /images/projects/badminton.png
details: |
  本项目针对羽毛球训练智能化的市场需求，成功研制出自主移动羽毛球训练机器人。该系统集成激光雷达与深度相机，融合自主导航、视觉感知及多源数据融合算法，可实现动态发球、自动回球、训练量化评估及虚拟对手交互等核心功能，构建起闭环式智能训练系统，有效突破传统训练设备的功能局限，达成低成本、高效化的训练目标。该机器人作为一款集智能化、多功能于一体的专业训练设备，采用双摩擦轮结构与云台机构实现全角度发球，并搭载物联网架构支持实时数据反馈，广泛覆盖专业训练、教育系统及大众健身三大核心市场。

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #ebcb8b;">我负责的工作：</strong>

  本人主要负责机器人感知系统搭建、自动决策机制设计，以及路径搜索轨迹平滑算法与实时避障策略的落地实现。项目中采用 Fast-LIO 算法，结合 mid360 雷达完成 SLAM 建图与定位任务；在路径搜索与轨迹平滑环节部署 ego-planner 算法，并对其进行维度优化，将 3 维规划简化为 2 维，最终实现羽毛球机器人自动寻球、精准发球的核心功能，有力保障了系统运动控制的稳定性与可靠性。

  <div style="margin: 12px 0;">
    <video src="/images/projects/badminton.mp4" id="badminton" controls style="width: 100%; border-radius: 6px;" preload="metadata"></video>
  </div>
---

研发了一款具备多模态感知能力的自主羽毛球训练机器人，集成激光雷达、深度相机与先进规划算法，实现动态发球、自动回球与交互式智能训练。
