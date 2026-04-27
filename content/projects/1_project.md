---
title: Zero-Shot Asynchronous Navigation for Mobile Robots with Foundation Models
category: robotics
date: 2025-11-01
tags: [LLM, ROS, Path Planning, MPC, Bezier, RRT*, Sim2Real]
link: "#"
isOpenSource: false
role: lead
story: I led system architecture design and modular ROS stack implementation, developed dual-loop asynchronous threading to decouple high-frequency control from low-frequency reasoning, and built a Gazebo simulation for baseline reproduction and validation. I integrated Informed RRT*, Bezier smoothing and MPC tracking to achieve robust navigation, and deployed the stack on TurtleBot3 for sim2real transfer and multi-scenario validation. I contributed as third author to the paper "DualNav—Online Planning for Zero-Shot Robot Navigation with Asynchronous Foundation Models and Active Visual-Semantic Memory" (EA-AI, under review) and as second author to "Zero-Shot Asynchronous Navigation for Mobile Robots with Foundation Models" (Control Theory & Applications, under review).
---

A novel asynchronous navigation framework (DualNav) for mobile robots in unknown, unstructured environments, leveraging LLMs for low-frequency semantic reasoning and high-frequency control loops for real-time motion. Incremental visual-semantic memory enables lightweight environment modeling. Enhanced with Informed RRT* path search, Bezier smoothing, and MPC tracking for improved dynamics and path quality.
