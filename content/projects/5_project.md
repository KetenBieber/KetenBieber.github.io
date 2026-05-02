---
title: Smart Rescue Robot — Autonomous Search-and-Rescue for 2025 Engineering Practice Competition
category: robotics
date: 2025-06-01
tags: [ROS, Embedded, Motion Control, Computer Vision, yolov5, npu, rknn]
link: "#"
isOpenSource: false
role: lead
featured: true
featuredImage: /images/projects/recongnize-ball.jpg
details: |
  This project is the competition entry for the <strong>Smart Rescue</strong> event of the 2025 Guangdong Province College Student Engineering Practice and Innovation Competition (National Qualifier). Two robots compete simultaneously on a 2400mm × 2400mm simulated rescue field, collecting and transferring rescue targets (common, core, and hazardous) to their own safe zone while protecting themselves from opponent interference and collisions. The core objective is to fully autonomously identify, collect, and transport color-coded spherical targets in the shortest possible time while gaining an edge in dynamic adversarial gameplay.

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #ebcb8b;">My Responsibilities: Host-Side Vision & Decision System</strong>

  My work focused on the host-side vision inference and real-time decision-making pipeline:

  <strong style="color: #a3be8c;">1. YOLOv5 Deployment & NPU-Accelerated Inference</strong>
  Deployed the YOLOv5 object detection model on an Orange Pi 5 Pro (RK3588S), leveraging the onboard 3-core NPU for hardware-accelerated inference. Peak throughput reaches 170 fps on pre-recorded video streams (thread-pool mode), and the system comfortably saturates a 30 fps live camera feed, meeting the stringent real-time demands of the competition.

  <div style="margin: 12px 0;">
    <video src="/images/projects/ball-recongnize.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>

  <strong style="color: #a3be8c;">2. Real-Time Scoring & Decision System</strong>
  Designed a multi-dimensional weighted scoring system based on the competition's differentiated point rules for each target color. Each detected ball in the field of view is evaluated in real time across three dimensions:
  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li><strong>Turning cost</strong>: the steering angle required, derived from the ball's horizontal position in frame;
    <li><strong>Target value</strong>: the score weight associated with the ball's color;
    <li><strong>Radial distance</strong>: the estimated distance to the ball, inferred from bounding box size.
  </ul>

  The system computes a weighted score for each candidate and selects the optimal target. The resulting decision (XY offset + radial distance deviation in the camera frame) is streamed via serial to the embedded motion controller, which drives the chassis and actuator to approach and collect the target — forming a closed-loop architecture where host-side perception and decision-making are tightly coupled with low-level motion control.

  <div style="margin: 12px 0;">
    <video src="/images/projects/find-ball.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>

---

A competitive autonomous rescue robot for the 2025 College Engineering Practice Competition (Smart+ Track), featuring high-speed omnidirectional mobility, autonomous target search and transport, collision protection, and multi-robot adversarial strategy on a 2.4m × 2.4m arena.
