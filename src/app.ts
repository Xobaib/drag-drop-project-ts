// const projectInput = document.getElementById(
//   "project-input"
// ) as HTMLTemplateElement;
// const app = document.getElementById("app");
// const singleProject = document.getElementById(
//   "single-project"
// ) as HTMLTemplateElement;
// const projectList = document.getElementById(
//   "project-list"
// ) as HTMLTemplateElement;

// app?.append(
//   projectInput?.content.cloneNode(true),
//   singleProject?.content.cloneNode(true),
//   projectList?.content.cloneNode(true)
// );

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const projectInput = new ProjectInput();
