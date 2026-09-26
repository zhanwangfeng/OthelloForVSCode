# Changelog

All notable changes to the "othello-for-vscode" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-09-26

### Added

- 在 VS Code 活动栏中集成黑白棋面板（Activity Bar 视图容器）。
- 通过内置 Webview 在编辑器内运行黑白棋游戏，无需离开 VS Code。
- 入口命令 `Othello: Start Game` 启动游戏。
- 标准 8×8 棋盘，黑先白后，落子翻面动画与上一手标记。
- 人机对战（简单 / 普通 / 困难，搜索深度 1 / 3 / 5 层）与双人同机对战。
- AI 思考停顿 + 落点预览节奏，难度越高思考越久。
- 合法落点提示、悔棋（人机模式连撤 AI 一手）、重新开始。
- Web Audio 实时合成音效，支持静音开关。
- 市场图标使用 PNG（128×128），活动栏图标使用 SVG。
