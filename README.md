# GuardRail-JS Pro 🛡️

A zero-dependency local filesystem daemon designed to defend workstation environments from Adversary-in-the-Middle (AiTM) configuration poisoning targeting AI coding assistants.

## Overview
GuardRail-JS continuously monitors local AI configuration boundaries (`~/.claude.json`, `.cursorrules`, and global VSCode task matrixes) using native low-latency OS filesystem hooks. The sub-millisecond an untrusted third-party dependency attempts an unauthorized write-injection, GuardRail intercepts the thread, alerts the engineer via native OS notifications, and enforces an automatic memory-backed rollback configuration state.

## Distribution & Licensing
GuardRail-JS is a commercial, proprietary security utility. The source code is obfuscated and compiled into secure cross-platform binaries to protect our intellectual property and prevent bypass techniques by evolving malware strains.

### 📥 [Acquire a Commercial License & Download Binaries ($49)](https://your-store.lemonsqueezy.com)

## Issue Tracking & Support
Please utilize this public repository's **Issues** tab to report environment bugs, path resolution errors on specific Linux distros, or to request default watch-vector updates for new AI CLI tools.
