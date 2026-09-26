import * as vscode from 'vscode';
import * as fs from 'fs';

interface TreeNode {
  label: string;
  description?: string;
  icon?: string;
  command?: string;
}

const TREE: TreeNode[] = [
  { label: '开始游戏', icon: 'play', command: 'othello.start' }
];

class OthelloTreeDataProvider implements vscode.TreeDataProvider<TreeNode> {
  getTreeItem(element: TreeNode): vscode.TreeItem {
    const item = new vscode.TreeItem(
      element.label,
      vscode.TreeItemCollapsibleState.None
    );
    if (element.description) {
      item.description = element.description;
    }
    if (element.icon) {
      item.iconPath = new vscode.ThemeIcon(element.icon);
    }
    if (element.command) {
      item.command = { command: element.command, title: element.label };
    }
    return item;
  }

  getChildren(): TreeNode[] {
    return TREE;
  }
}

function openGame(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    'othelloGame',
    'Othello',
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [
        vscode.Uri.joinPath(context.extensionUri, 'src', 'webview')
      ]
    }
  );

  const htmlPath = vscode.Uri.joinPath(
    context.extensionUri,
    'src',
    'webview',
    'game.html'
  );

  const html = fs.readFileSync(htmlPath.fsPath, 'utf-8');
  panel.webview.html = html;
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('othello.start', () => openGame(context))
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('othello.share', () => {
      vscode.env.openExternal(vscode.Uri.parse('https://codejson.cn/games/othello/'));
    })
  );

  context.subscriptions.push(
    vscode.window.registerTreeDataProvider('othelloView', new OthelloTreeDataProvider())
  );
}

export function deactivate() {}
