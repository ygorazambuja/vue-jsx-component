import * as vscode from "vscode";
import { templates } from "./template";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "vue-jsx-component.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from vue-jsx-component!"
      );
    }
  );

  vscode.commands.registerCommand(
    "vue-jsx-component.generateFiles",
    async (test: { path: string }) => {
      const vscodeUri = vscode.Uri.file(test.path + "/mounted.js");

      const componentName = await vscode.window.showInputBox({
        placeHolder: "VInput",
        title: "Enter the component name",
        prompt: "Enter the component name - Prompt",
      });

      vscode.workspace.fs.writeFile(
        vscodeUri,
        Buffer.from(templates[0].content)
      );

      vscode.window.showInformationMessage("arquivo criado");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
