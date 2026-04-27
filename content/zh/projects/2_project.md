---
title: 基于 EtherCAT 主站为核心的实时机器人控制系统
category: robotics
date: 2025-03-01
tags: [EtherCAT, CAN, RS485, Linux, ROS, Firmware]
link: "https://github.com/KetenBieber/rc_ecat_controls"
isOpenSource: true
role: lead
story: 本人主导完成了硬件选型、从站固件开发及 EtherCAT↔CAN/UART/RS485 多协议转换，负责极限工况压力测试并按工业标准设计安全与维护策略，构建了基于 Linux x86 的 EtherCAT 主站软件栈，实现多线程/多进程调度与 ROS 集成。作为第一发明人，相关专利“基于 EtherCAT 主站为核心的实时机器人控制系统”已公开。
---

本项目设计了一套以 EtherCAT 为核心硬件接口的实时机器人控制框架，支持多协议转换与高精度、高同步性的工业控制。涵盖了硬件选型、从站固件开发及基于 Linux 的主站软件栈开发，并集成 ROS 接口。