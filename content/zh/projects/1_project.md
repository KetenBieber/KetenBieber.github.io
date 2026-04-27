---
title: Zero-Shot Asynchronous Navigation for Mobile Robots with Foundation Models
category: robotics
date: 2025-11-01
tags: [LLM, ROS, Path Planning, MPC, Bezier, RRT*, Sim2Real]
link: "#"
isOpenSource: false
role: lead
---

A novel asynchronous navigation framework (DualNav) for mobile robots in unknown, unstructured environments, leveraging LLMs for low-frequency semantic reasoning and high-frequency control loops for real-time motion. Incremental visual-semantic memory enables lightweight environment modeling. Enhanced with Informed RRT* path search, Bezier smoothing, and MPC tracking for improved dynamics and path quality.

## Highlights

- Led system architecture design and modular ROS stack implementation.
- Developed dual-loop asynchronous threading to decouple high-frequency control and low-frequency reasoning.
- Built Gazebo simulation for baseline reproduction and validation.
- Integrated Informed RRT*, Bezier smoothing, and MPC tracking for robust navigation.
- Deployed stack on TurtleBot3 for sim2real transfer and multi-scenario validation.
- Third author, "DualNav: Online Planning for Zero-Shot Robot Navigation with Asynchronous Foundation Models and Active Visual-Semantic Memory", EA-AI (Under Review).
- Second author, "Zero-Shot Asynchronous Navigation for Mobile Robots with Foundation Models", Control Theory & Applications (Under Review).