---
title: 基于大模型的移动机器人零样本异步导航规划方法
category: robotics
date: 2025-11-01
tags: [LLM, ROS, Path Planning, MPC, Bezier, RRT*, Sim2Real]
link: "#"
isOpenSource: false
role: lead
story: 本项目面向未知、非结构化环境下的移动机器人，提出了新型异步导航框架 DualNav。本人主导系统架构设计与 ROS 软件栈模块化开发，采用异步双环多线程架构，解耦高频运动控制与低频语义推理。通过 Gazebo 仿真平台复现并验证基线算法，集成 Informed RRT* 路径搜索、Bezier 轨迹平滑与 MPC 跟踪算法，显著提升导航鲁棒性与动力学性能。最终完成 TurtleBot3 实机部署与 sim2real 多场景验证，相关成果以第三作者身份发表于 EA-AI（审稿中），并以第二作者身份发表于 Control Theory & Applications（审稿中）。
---


本项目提出了 DualNav 异步导航框架，针对大模型推理延迟与语义-几何约束不一致等问题，创新性地将低频语义推理与高频运动控制解耦，并通过增量式视觉-语义记忆实现轻量级环境建模。集成 Informed RRT* 路径搜索、Bezier 轨迹平滑与 MPC 跟踪算法，显著提升了导航的动力学性能与鲁棒性。项目成果已在仿真与实机多场景下完成验证。