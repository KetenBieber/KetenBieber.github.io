// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

import { IconType } from 'react-icons'
import {
  FaRobot, FaBrain, FaGlobe, FaChartBar, FaWrench, FaHeartbeat,
} from 'react-icons/fa'
import type { ProjectItem } from '../types'

/**
 * Terminal palette, category themes, and color config.
 *
 * Template users: customise these to match your own brand.
 */

/* ── Nord-inspired terminal palette (single source of truth) ──── */
export const terminalPalette = {
  /** 7-color rainbow bar palette */
  rainbow: ['#202020', '#383838', '#505050', '#686868', '#808080', '#989898', '#b0b0b0'] as const,

  /** All semantic terminal colors, dark/light variants */
  colors: (dk: boolean) => ({
    bg:        dk ? '#000000' : '#ffffff',
    text:      dk ? '#f2f2f2' : '#111111',
    header:    dk ? '#0d0d0d' : '#f5f5f5',
    border:    dk ? '#323232' : '#d4d4d4',
    prompt:    dk ? '#f2f2f2' : '#111111',
    command:   dk ? '#d0d0d0' : '#292929',
    param:     dk ? '#b8b8b8' : '#444444',
    info:      dk ? '#e0e0e0' : '#202020',
    highlight: dk ? '#ffffff' : '#000000',
    error:     dk ? '#c8c8c8' : '#383838',
    success:   dk ? '#e8e8e8' : '#181818',
    warning:   dk ? '#b0b0b0' : '#505050',
    secondary: dk ? '#a0a0a0' : '#686868',
    muted:     dk ? '#707070' : '#909090',
    /** Touch bar background */
    touchBar:  dk ? '#080808' : '#fafafa',
    /** Tab bar background */
    tabBar:    dk ? '#0a0a0a' : '#f7f7f7',
  }),
} as const

/* ── Project category themes ──────────────────────────────────── */
export type CatTheme = {
  bg: string; border: string; stripe: string; color: string; glow: string
  icon: IconType; label: string; cmd: string
}

export const buildCategoryThemes = (dk: boolean): Record<ProjectItem['category'], CatTheme> => {
  const base = {
    bg: dk ? '#080808' : '#fafafa', border: dk ? '#444444' : '#c8c8c8',
    stripe: `linear-gradient(180deg,${dk ? '#777777' : '#555555'},transparent)`,
    color: dk ? '#d8d8d8' : '#292929', glow: 'transparent',
  }
  return ({
  robotics: {
    ...base,
    icon: FaRobot, label: 'ROBOTICS', cmd: '$ ros2 launch planner',
  },
  nlp: {
    ...base,
    icon: FaBrain, label: 'NLP / AI', cmd: '$ python train.py',
  },
  'web-app': {
    ...base,
    icon: FaGlobe, label: 'WEB / APP', cmd: '$ npm run dev',
  },
  data: {
    ...base,
    icon: FaChartBar, label: 'DATA / ML', cmd: '$ jupyter execute',
  },
  tooling: {
    ...base,
    icon: FaWrench, label: 'TOOLING', cmd: '$ make install',
  },
  healthcare: {
    ...base,
    icon: FaHeartbeat, label: 'HEALTHCARE', cmd: '$ python recommend.py',
  },
  })
}

/* ── Article category labels & colors ─────────────────────────── */
export const articleCategoryLabels: Record<ProjectItem['category'], string> = {
  robotics: 'Robotics', nlp: 'NLP / AI', 'web-app': 'Web / App',
  data: 'Data / ML', tooling: 'Tooling', healthcare: 'Healthcare',
}

export const articleCategoryColors: Record<ProjectItem['category'], { fg: (dk: boolean) => string; bg: (dk: boolean) => string }> = {
  robotics:   { fg: dk => dk ? '#c89cff' : '#7a44c0', bg: dk => dk ? 'rgba(200,156,255,0.15)' : 'rgba(122,68,192,0.1)' },
  nlp:        { fg: dk => dk ? '#f0a0c8' : '#b0447a', bg: dk => dk ? 'rgba(240,160,200,0.15)' : 'rgba(176,68,122,0.1)' },
  'web-app':  { fg: dk => dk ? '#ffbe8d' : '#c27435', bg: dk => dk ? 'rgba(255,190,141,0.15)' : 'rgba(194,116,53,0.1)' },
  data:       { fg: dk => dk ? '#7ce3b6' : '#2f9e6a', bg: dk => dk ? 'rgba(124,227,182,0.15)' : 'rgba(47,158,106,0.1)' },
  tooling:    { fg: dk => dk ? '#7feeee' : '#2aa9a9', bg: dk => dk ? 'rgba(127,238,238,0.15)' : 'rgba(42,169,169,0.1)' },
  healthcare: { fg: dk => dk ? '#f09090' : '#c04040', bg: dk => dk ? 'rgba(240,144,144,0.15)' : 'rgba(192,64,64,0.1)' },
}

/* ── Publication venue colors ─────────────────────────────────── */
export const publicationVenueColors: Record<string, { bg: (dk: boolean) => string; fg: (dk: boolean) => string; label: string }> = {
  conference: {
    bg: dk => dk ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
    fg: dk => dk ? '#d8d8d8' : '#292929',
    label: 'CONFERENCE',
  },
  workshop: {
    bg: dk => dk ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
    fg: dk => dk ? '#d8d8d8' : '#292929',
    label: 'WORKSHOP',
  },
  demo: {
    bg: dk => dk ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
    fg: dk => dk ? '#d8d8d8' : '#292929',
    label: 'DEMO TRACK',
  },
  preprint: {
    bg: dk => dk ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
    fg: dk => dk ? '#d8d8d8' : '#292929',
    label: 'PREPRINT',
  },
  journal: {
    bg: dk => dk ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
      fg: dk => dk ? '#d8d8d8' : '#292929',
    label: 'JOURNAL',
  },
  patent: {
    bg: dk => dk ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
      fg: dk => dk ? '#d8d8d8' : '#292929',
    label: 'PATENT',
  },
}
