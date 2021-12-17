import * as vscode from "vscode";
import { instantiateCommands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
  instantiateCommands(context);
}

export function deactivate() {}
