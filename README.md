# Othello for VS Code

在 VS Code 中直接游玩黑白棋（Reversi / Othello）的扩展插件。

- GitHub: https://github.com/zhanwangfeng/OthelloForVSCode
- VSCode: https://marketplace.visualstudio.com/items?itemName=zhanwangfeng.othello-pro

## 1. 插件说明

- **功能**：通过内置 Webview 在编辑器内运行黑白棋，不离开 VS Code 即可休闲娱乐。
- **入口命令**：`Othello: Start Game`
- **主要特性**：
  - 标准 8×8 棋盘，开局中央四子交叉摆放，黑先白后。
  - 人机对战（三档难度，对应搜索深度 1 / 3 / 5 层）与双人同机对战。
  - AI 两段式节奏：先思考、亮出落点预览，再落子；难度越高想得越久。
  - 合法落点提示、翻子动画、上一手标记、实时子数比与领先提示。
  - 悔棋（人机模式连撤 AI 一手）、重新开始、音效开关（Web Audio 实时合成）。
- **操作方式**：
  - 点击棋盘上高亮（有提示点）的空格落子
  - 右侧面板可切换「人机 / 双人」「难度」「提示 / 音效」「悔棋 / 重新开始」

## 2. 插件启动说明

### 方式一：VS Code 插件市场安装（推荐）

1. 打开 VS Code，进入扩展市场（快捷键 `Cmd/Ctrl + Shift + X`）。
2. 搜索 **`Othello`**（或本插件发布名 `othello-pro`），点击 **安装**。
3. 安装完成后，按 `Cmd/Ctrl + Shift + P` 打开命令面板。
4. 执行命令 **`Othello: Start Game`**，即可打开黑白棋游戏面板开始游玩。

> 安装后若命令未出现，可重启 VS Code 重新加载扩展。

### 方式二：本地源码调试运行（F5）

适用于从源码二次开发或本地预览：

1. 安装依赖：

   ```bash
   npm install
   ```

2. 使用 VS Code 打开本项目根目录，按 **F5** 启动调试。
   - 调试前会自动编译 TypeScript（`src` → `out`）并后台监听改动。
   - VS Code 会打开一个新的「扩展开发宿主」窗口。
3. 在扩展开发窗口中，按 `Cmd/Ctrl + Shift + P` 执行 **`Othello: Start Game`** 即可游玩。

### 其他编译方式

- 单次编译：`npm run compile`
- 监听编译：`npm run watch`（调试时修改代码自动重新编译，重跑命令即生效）
- 打包发布：`npm run vscode:prepublish`

## 3. 玩法规则

- 必须落在能夹住对方至少一枚棋子的空格（横竖斜八向皆可，可同时多向夹击）。
- 落子后被夹住的敌方棋子全部翻面为己方棋子。
- 一方无合法落点时自动停一手；双方都无子可下则终局，棋子多者胜。
- 四角一旦占据永不翻面，是取胜关键；角旁的 X 位 / C 位容易送角，慎下。
