---
title: "How TradeStudio Uses Claude to Generate Trading Strategies"
description: "A deep dive into the Strategy Lab workflow: natural language prompts, C# code generation, Roslyn compilation, and automated backtesting."
date: 2026-02-14
tags: ["ai", "strategy-lab", "technical"]
---

## The problem with "AI trading"

Most platforms that claim AI integration do one of two things:

1. **Chatbot in a sidebar.** Ask it questions, get text answers. No code, no backtests, no verification.
2. **No-code AI.** Drag and drop blocks, hope the underlying logic makes sense. You can't see what it's doing.

Neither approach gives you what you actually need: verifiable, modifiable code that you can test against real data.

## How the Strategy Lab works

The Strategy Lab bridges the gap between natural language and compiled code. Here's what happens when you type a prompt:

### Step 1: Your prompt goes to Claude

When you describe a strategy — say, "mean reversion strategy for large-cap stocks using Bollinger Bands and RSI" — the prompt goes to Claude with a purpose-built system prompt. This system prompt tells Claude exactly what interface to implement, what methods to write, and what constraints to follow.

Claude doesn't just write one strategy. It generates **3–5 distinct approaches**, each implementing the `IStrategy` interface with a unique name and methodology. The key word is *distinct* — not parameter variations of the same logic, but genuinely different implementations.

### Step 2: Roslyn compiles each strategy

Each generated strategy is compiled in-process using Microsoft's Roslyn compiler (`Microsoft.CodeAnalysis.CSharp`). This is the same compiler that builds .NET applications. No external tools, no build chain — compilation happens in memory, in milliseconds.

If a strategy has a compilation error, you see it immediately. Claude can fix it in the next conversational turn.

### Step 3: Backtesting against real data

Each compiled strategy runs against whatever price data you have loaded. The backtest engine computes:

- **Total Return** — overall strategy performance
- **Win Rate** — percentage of winning trades
- **Max Drawdown** — largest peak-to-trough decline
- **Profit Factor** — gross profit / gross loss
- **Sharpe Ratio** — risk-adjusted return
- **Sortino Ratio** — downside-risk-adjusted return

### Step 4: Ranking by fitness metric

You choose which metric matters most. Strategies are ranked accordingly. Want to optimize for risk-adjusted returns? Sort by Sortino. Want to minimize drawdowns? That's an option too.

### Step 5: Conversational refinement

Don't like the results? Talk to Claude:

- "Make strategy #2 more conservative"
- "Add a volatility filter to avoid choppy markets"
- "Try a longer lookback period"

Claude has full context from the conversation and generates new strategies based on your feedback.

### Step 6: Parameter optimization

Once you find a promising strategy, the parameter optimizer runs a grid search across parameter ranges you define. Set min, max, and step for each parameter, and the optimizer tests every combination — ranking results by your chosen metric.

## Why this matters

The Strategy Lab turns strategy development from a multi-hour coding exercise into a 30-second conversation. You still get real code — C# that you can read, modify, save, and reuse. But you don't have to write it from scratch.

For traders who know what they want to test but don't want to spend an afternoon implementing it, this is the workflow that was missing.

## Try it yourself

[Download TradeStudio](/download) and open the Strategy Lab tab. Describe an idea. See what happens.
