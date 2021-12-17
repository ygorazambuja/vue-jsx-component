export type Template = {
  name: string;
  filename: string;
  content: string;
};

export const templates: Array<Template> = [
  {
    name: "mounted",
    filename: "mounted.js",
    content: `export function mounted() {
  console.log('oi to dentro do mounted')
}`,
  },
];
