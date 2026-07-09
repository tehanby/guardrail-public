# 🛡️ GuardRail-JS Core

> **Zero-dependency local workspace firewall blocking malicious open-source dependencies from silently hijacking your Claude and Cursor AI configurations.**

---

## 🛑 The Threat Matrix

Modern AI developer environments (Claude Code, Cursor, VSCode, etc.) have drastically accelerated development speed. However, they have also introduced a high-risk security blind spot. 

Malicious npm, pip, or cargo packages are increasingly weaponizing rogue `postinstall` hooks to silently target and poison developer workspace boundaries. By surreptitiously injecting localized Model Context Protocol (MCP) proxies or parsing target files like `~/.claude.json` and `.cursorrules`, malware can quietly exfiltrate proprietary source code, cloud environment variables, and live session keys directly to remote servers.

**GuardRail-JS Pro** addresses this by anchoring an aggressive, zero-dependency background security daemon that locks down your local configuration nodes cross-platform (macOS, Windows, Linux).

---

## ⚡ Core Architecture

* **Cryptographic Baselining:** Automatically maps clean local AI config layers, generates deterministic SHA-256 integrity signatures, and anchors them directly into secure RAM cache memory.
* **Low-Latency Monitoring:** Leverages native OS filesystem listeners to actively audit targeted system boundaries, completely debouncing native duplicate-write events within a tight 150ms window.
* **Instant Automated Containment:** The sub-millisecond an unauthorized process attempts an injection or modification, the daemon blocks the thread, triggers a native desktop notification, forces file permissions back to write-capable, rolls back data to the clean snapshot state, and locks the POSIX attributes to read-only (`0o444`).

---

## ⚖️ Consumer-First Hybrid Pricing (No SaaS Fatigue)

Software engineers are sick of renting local command-line tools, and we are too. GuardRail-JS Pro bypasses subscription fatigue by operating on a developer-friendly **Hybrid Ownership Model**:

* **Pay Once, Keep Forever:** Your purchase buys the current software execution binary. It will never timeout, lock you out, or hold your local development machine hostage with an ongoing subscription invoice.
* **1 Year of Threat Intelligence:** Every commercial license includes 12 months of active, zero-day threat signature updates to defend your environment against newly emerging supply-chain exploits.
* **Transparent Renewals:** After year one, you can optionally extend your threat update pipeline for a heavily discounted renewal fee ($29/yr), or simply keep running your existing local version completely free forever.

---

## 📦 Commercial Licensing & Deployment

To secure your commercial binary and unlock continuous threat signature definitions, please deploy the appropriate profile from our digital storefront:

### 👤 Solo License — $49
* Complete local system protection for 1 developer.
* Authorized activation limit across up to 3 personal devices concurrently.
* Ideal for freelancers, indie hackers, and independent security researchers.

### 👥 Team Starter — $149
* Enterprise-ready deployment covering up to 5 developers.
* Authorized activation limit across up to 15 hardware device instances.
* Perfect for early-stage engineering pods and digital agencies protecting client intellectual property.

👉 **Secure Your Workspace License Here:** [your-store-subdomain.lemonsqueezy.com](https://your-store-subdomain.lemonsqueezy.com)

---

## 🔒 Security & Verification Notice

This core public shell repository acts as an open infrastructure validation profile. The underlying compiled, hardened security binaries are cryptographically signed and delivered exclusively via secure fulfillment paths upon license verification. 

For enterprise compliance tracking, custom seat deployment schemes, or vulnerability disclosure protocols, please open a localized issue or query our commercial help gateway.
