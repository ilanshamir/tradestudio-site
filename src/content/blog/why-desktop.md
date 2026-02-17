---
title: "Why Desktop? The Case for Native Performance in Trading Software"
description: "TradeStudio is a native desktop app for Windows, macOS, and Linux. That's not legacy thinking — it's a deliberate architectural choice for performance-critical trading analysis."
date: 2026-02-10
tags: ["architecture", "performance", "desktop"]
---

## "Just make it a web app"

It's the default assumption in 2026. Everything should be a web app. Cross-platform. No install. Works everywhere.

For most software, that's the right call. For trading analysis with real-time charting, AI-generated code compilation, and multi-panel layouts? It's the wrong call.

## Where web apps hit the wall

### Chart rendering

TradingView's charts are excellent for a web app. But they're still a web app. JavaScript rendering, browser compositing, GC pauses. When you're panning through 10 years of daily data with 5 overlaid indicators, you feel it.

TradeStudio renders charts with SkiaSharp — the same graphics library that powers Google Chrome's rendering engine, but called natively from C#. Hardware-accelerated. No browser sandbox. No JavaScript event loop.

The difference is most obvious when you're working all day. Web charts that feel "fine" for 10 minutes start to drag after 4 hours of intense analysis.

### Code compilation

TradeStudio compiles C# strategies in-process using Roslyn. This isn't possible in a browser. You can't run the .NET compiler in a web page. You'd need to send code to a server, compile there, and send results back.

That round trip adds latency, requires server infrastructure, and means your strategies leave your machine. With desktop Roslyn compilation, everything stays local. Compilation takes milliseconds, not seconds.

### Multi-panel layouts

AvalonDock gives TradeStudio native window docking — tear off panels, snap to zones, create any layout. Browser-based docking libraries exist, but they're fighting the browser's layout engine the entire time.

Desktop docking works with the OS, not against it. Drag a chart to a second monitor. Snap it to a zone. Resize panels with sub-pixel precision. It just works.

## What you give up

Let's be honest about the trade-offs:

- **Desktop only.** No mobile, no iPad. Our users are traders sitting at desks. If you need charts on your phone, TradeStudio isn't for that.
- **Installation required.** You need to download and install the app. It's a 2-minute process, but it's not "open a browser tab."
- **No collaboration features.** You can't share a chart with a URL. TradingView is better for social trading.

We accept these trade-offs because the performance gain is worth it for our target user: a serious trader who spends hours a day in their charting platform.

## The broader point

Desktop isn't dead. It's underrated. For performance-critical applications where latency matters — gaming, video editing, CAD, and yes, trading analysis — native desktop applications deliver an experience that web apps can't match.

We didn't choose desktop because we couldn't build a web app. We chose it because we wanted the best possible experience for traders who use this tool all day.

## See the difference

[Download TradeStudio](/download) and open a chart. Pan around. Zoom in and out. Add a few indicators. Compare it to your current web-based platform.

You'll feel the difference.
