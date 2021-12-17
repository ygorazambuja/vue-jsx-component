import { Uri, workspace } from "vscode";

import { Template } from "./template";

export class FileGenerator {
  constructor(private template: Template, private folderPath: string) {}

  get getTemplateFilePathAsUri(): Uri {
    return Uri.file(`${this.folderPath}/${this.template.filename}`);
  }

  async writeFile(): Promise<void> {
    workspace.fs.writeFile(
      this.getTemplateFilePathAsUri,
      Buffer.from(this.template.content)
    );
  }
}
