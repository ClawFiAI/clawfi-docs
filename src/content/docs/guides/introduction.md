---
title: Introduction to ClawFi
description: Learn about ClawFi crypto intelligence platform
---

# Welcome to ClawFi

ClawFi is a comprehensive crypto intelligence platform that helps you make informed trading decisions.

## What is ClawFi?

ClawFi provides:

- 🔍 **Real-time Token Analysis** - Instant signals and risk assessment
- 📊 **Market Data** - Price, volume, liquidity tracking
- 🛡️ **Security Checks** - Honeypot and rug pull detection
- 🌐 **Multi-chain Support** - EVM chains + Solana

## Components

### Browser Extension

The ClawFi extension provides in-page overlays on DeFi sites:

- Dexscreener
- Clanker.world
- Pump.fun
- Four.meme
- Block explorers

### API & SDK

Programmatic access to ClawFi intelligence:

```typescript
import { ClawFi } from '@clawfi/sdk';

const clawfi = new ClawFi();
const analysis = await clawfi.analyzeToken('ethereum', '0x...');
```

### Open Source Packages

- **dexscreener-ts** - Dexscreener API wrapper
- **clawfi-signals** - Signal detection library
- **chain-utils** - Multi-chain utilities
- **defi-hooks** - React hooks for DeFi

## Getting Started

1. [Install the Extension](/guides/installation/)
2. [Configure Settings](/extension/features/)
3. [Start Analyzing](/guides/quickstart/)
