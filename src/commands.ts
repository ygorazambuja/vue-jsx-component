import { ExtensionContext, commands, window } from "vscode";
import { FileGenerator } from "./FileGenerator";
import { jsxTemplates, Template } from "./templates";

export function instantiateCommands(context: ExtensionContext) {
  const generateFilesDisposable = commands.registerCommand(
    "vue-jsx-component.generateFiles",
    handleGenerateFiles
  );

  context.subscriptions.push(generateFilesDisposable);
}

type PathResponse = {
  path: string;
};

const handleGenerateFiles = async ({ path }: PathResponse) => {
  const componentName = await window.showInputBox({
    title: "Enter the component name",
    placeHolder: "VInput",
  });

  if (!componentName) {
    return;
  }

  const componentNameWithPath = composePathWithComponentName(
    componentName,
    path
  );

  generateFiles(componentNameWithPath);
};

const composePathWithComponentName = (componentName: string, path: string) =>
  `${path}/${componentName}`;

const generateFiles = (path: string) => {
  jsxTemplates.forEach((template: Template) =>
    new FileGenerator(template, path).writeFile()
  );
};
