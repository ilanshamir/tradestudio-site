---
title: "Introducing Tradevoy: AI-First Trading Analysis"
description: "Tradevoy is a desktop trading analysis platform where AI isn't a sidebar — it's the engine. Generate, compile, and backtest C# strategies from natural language."
date: 2026-02-16
tags: ["announcement", "ai", "trading"]
---

## What is Tradevoy?

Tradevoy is a cross-platform desktop application for traders who want AI-powered strategy research without giving up professional-grade charting or code-level control.

Most trading platforms bolt AI onto an existing product. A chatbot in a sidebar. A "smart" indicator that's really just a moving average with marketing. Tradevoy was built differently. AI is the core workflow — the thing you use every day, not a feature you forget exists.

## What it actually does

Here's the concrete workflow:

1. **You describe a strategy in plain English.** "Momentum strategy using RSI and MACD, avoiding drawdowns over 10%."
2. **Tradevoy AI generates 3–5 distinct C# strategies.** Not variations of the same idea — genuinely different approaches to your prompt.
3. **Roslyn compiles each one in-process.** Real Microsoft C# compilation, not interpreted pseudo-code.
4. **Every strategy is backtested against your data.** Full metrics: Sharpe, Sortino, Max Drawdown, Win Rate, Profit Factor.
5. **You refine conversationally.** "Make it more conservative" or "Add a volatility filter." Tradevoy AI keeps the context.

From idea to backtested results in about 30 seconds.

## What makes it different

**Earnings Narrative Backtest.** No other platform does this. Feed real earnings transcripts to the AI, get direction/magnitude/confidence predictions, and see quarter-by-quarter accuracy across years of data. You can actually test whether AI earnings analysis is useful — not just hope it is.

**Real code, not a black box.** When the AI generates a strategy, you get C# source code you can read, modify, and extend. Not a no-code workflow that hides what's happening. Not Pine Script. Real, compiled code.

**Desktop performance.** SkiaSharp-rendered charts with hardware acceleration. Smooth panning and zooming even with thousands of bars. A dark theme built for all-day use. This is a deliberate architectural choice, not a legacy decision.

## Who it's for

- Traders who use TradingView or TrendSpider and want deeper AI integration
- Quant-curious traders who want code-level power without QuantConnect's complexity
- Technical analysts who value desktop performance and C# scripting

## What it's not

Tradevoy is not a brokerage. It doesn't execute trades, hold funds, or connect to brokerage accounts. It's a research and analysis tool.

Past performance does not guarantee future results. AI predictions are research tools, not investment advice.

## What's next

Tradevoy is in early access. [Join the waitlist](/pricing) to be first in line, or [download the preview](/download) and start testing.
