---
title: Multimodal Perception Fully Autonomous Harvesting Robot — 2024 Robocon "Grain Collection Mission"
category: robotics
date: 2024-07-01
tags: [STM32, Embedded, CAN Bus, Motion Control, Path Planning, Computer Vision, Robocon, Odometry]
link: "#"
isOpenSource: false
role: lead
featured: true
featuredImage: /images/projects/24r2.jpg
details: |
  This project derives from the Programming Challenge of the 23rd National University Robot Competition ROBOCON 2024, themed Grain to Granary.The competition simulates the full agricultural process of seedling raising, transplanting, harvesting and grain warehousing, aiming to advocate the concept of food conservation.In the competition, Robot R2 is required to operate fully autonomously: it must run automatically throughout the task, independently identify and pick up purple spheres (representing rice grains) from the staging area, reject red and blue spheres (representing shrivelled grains), and deliver qualified grains into the granary. The robot can collect a maximum of 2 spheres per single operation, with 30 points awarded for each rice sphere successfully stored into the granary.

  This entry is the R2 robot, built on a three-omni-wheel chassis with multi-modal perception — camera-based target recognition, color sensor secondary verification, and orthogonal encoder full-field odometry — enabling fully autonomous identification, collection, transport, and granary deposit of rice-grain targets.

  <div style="margin: 12px 0;">
    <video src="/images/projects/24rc.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>

  <div style="margin: 12px 0;">
    <video src="/images/projects/harvest.mp4" controls style="width: 100%; max-width: 640px; border-radius: 6px;" preload="metadata"></video>
  </div>

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #a3be8c;">Technical Overview</strong>

  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li><strong>Motion</strong>: Three-omni-wheel chassis with orthogonal encoder odometry for real-time full-field localization and coordinate computation.
    <li><strong>Perception</strong>: Camera-based rice-grain detection; built-in color sensor performs secondary color verification post-collection to ensure accuracy.
    <li><strong>Collection Mechanism</strong>: Three friction-belt roller intake for efficient grain collection.
    <li><strong>Deposit & Kick Mechanism</strong>: Autonomous navigation to the collection zone for grain drop-off; pneumatic valve-driven kicking mechanism for rapid and decisive ball launching.
    <li><strong>Control System</strong>: All computing runs on a single STM32 embedded microcontroller — path planning, target decision-making, multi-sensor fusion, and action execution — driving CAN bus ESCs, sensor acquisition, and orthogonal encoder signal processing on one chip.
  </ul>

  <strong style="font-size: 16px; display: block; margin: 16px 0 8px 0; color: #ebcb8b;">My Responsibilities: Embedded Full-Stack Development</strong>

  <ul style="list-style-type: disc; padding-left: 24px; margin: 8px 0;">
    <li>Designed the vehicle-wide code framework and module scheduling architecture
    <li>Implemented the ball-search decision logic and path-planning & tracking algorithms
    <li>Developed low-level peripheral drivers: CAN bus ESC communication, multi-sensor data acquisition, orthogonal encoder signal processing, and real-time global coordinate transformation
  </ul>
---

An autonomous collection robot (R2) for the 2024 ROBOCON "Grain to Granary" Programming Challenge, featuring three-omni-wheel odometry localization, camera + color-sensor multi-modal perception to distinguish grain from blighted grain, friction-belt collection, and pneumatic kicking — all running on a single STM32 microcontroller handling path planning, perception, and motion control end-to-end.
