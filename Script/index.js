const CaretRight = '<div class="ul-bullet"><i class="fa-solid fa-caret-right"></i></div>';

function ScrollToContent(content) {
    document.getElementById(content).scrollIntoView({ behavior: "smooth" });
}

function SlideToContent(container, content) {
    let containerElement = document.getElementById(container);
    let contentElement = document.getElementById(content);
    let distance = contentElement.getBoundingClientRect().left - containerElement.getBoundingClientRect().left;
    containerElement.scrollTo({ behavior: "smooth", left: distance });
}

fetch("Data/SelfIntro.md")
    .then(response => response.text())
    .then(result => {
        let lines = result.split(/\r?\n/);
        let selfIntro = document.getElementById("self-intro");

        lines.forEach(line => {
            if (!line) {
                return;
            }

            let pElement = document.createElement("p");
            pElement.innerHTML = line;
            selfIntro.appendChild(pElement);
        });
    });

fetch("Data/Skill.md")
    .then(response => response.text())
    .then(result => {
        let lines = result.split(/\r?\n/);
        let tableRow;
        let isAnyRowActive = false;

        for (let i = 0; i < lines.length; ++i) {
            if (!lines[i]) {
                continue;
            }

            if (lines[i] == "---") {
                isAnyRowActive = false;
            } else if (lines[i].substring(0, 2) == "- ") {
                if (isAnyRowActive) {
                    let skillItem = document.createElement("div");
                    skillItem.className = "ul-item";
                    skillItem.innerHTML = CaretRight;
                    let skillName = document.createElement("p");
                    skillName.innerHTML = lines[i].substring(2);
                    skillItem.appendChild(skillName);
                    tableRow.appendChild(skillItem);
                } else {
                    tableRow = document.getElementById(`${lines[i].substring(2)}-list`);
                    isAnyRowActive = true;
                }
            }
        }
    });

fetch("Data/Experience.md")
    .then(response => response.text())
    .then(result => {
        /**
         * The structure is as follows:
         * container
         *     table-row
         *         table-title
         *         table-content
         *             experience-title
         *             experience-description
         *                 description-item
         *                 ...
         *     table-row
         *     ...
         */
        let lines = result.split(/\r?\n/);
        let container = document.getElementById("experience-list");
        let tableRow;
        let tableContent;
        let experienceDescription;
        let isAnyRowActive = false;

        for (let i = 0; i < lines.length; ++i) {
            if (!lines[i]) {
                continue;
            }

            if (lines[i] == "---") {
                isAnyRowActive = false;
                tableContent.appendChild(experienceDescription);
                tableRow.appendChild(tableContent);
                container.appendChild(tableRow);
            } else if (lines[i].substring(0, 2) == "- ") {
                if (isAnyRowActive) {
                    let descriptionItem = document.createElement("div");
                    descriptionItem.className = "ul-item";
                    descriptionItem.innerHTML = CaretRight;
                    let itemContent = document.createElement("p");
                    itemContent.innerHTML = lines[i].substring(2);
                    descriptionItem.appendChild(itemContent);
                    experienceDescription.appendChild(descriptionItem);
                } else {
                    tableRow = document.createElement("div");
                    tableRow.className = "table-row";
                    isAnyRowActive = true;
                    let data = [lines[i].substring(2)];

                    while (data.length < 4 && ++i < lines.length) {
                        if (lines[i].substring(0, 2) == "- ") {
                            data.push(lines[i].substring(2));
                        }
                    }

                    let tableTitle = document.createElement("div");
                    tableTitle.className = "table-title";
                    tableTitle.innerHTML = `${data[0]} &ndash; ${data[1]}`;
                    tableRow.appendChild(tableTitle);

                    tableContent = document.createElement("div");
                    tableContent.className = "table-content";

                    let experienceTitle = document.createElement("div");
                    experienceTitle.className = "experience-title";
                    experienceTitle.innerHTML = `<b>${data[2]}</b> @ ${data[3]}`;
                    tableContent.appendChild(experienceTitle);

                    experienceDescription = document.createElement("div");
                }
            }
        }
    });

fetch("Data/Projects.md")
    .then(response => response.text())
    .then(result => {
        /**
         * The structure is as follows:
         * container
         *     projects-item
         *         project-title
         *         project-content
         *             project-img
         *             project-description
         *                 description-item
         *                 ...
         *     projects-item
         *     ...
         */
        let lines = result.split(/\r?\n/);
        let container = document.getElementById("projects-list");
        let projectsItem;
        let projectContent;
        let projectDescription;
        let isAnyRowActive = false;

        for (let i = 0; i < lines.length; ++i) {
            if (!lines[i]) {
                continue;
            }

            if (lines[i] === "---") {
                isAnyRowActive = false;
                projectContent.appendChild(projectDescription);
                projectsItem.appendChild(projectContent);
                container.appendChild(projectsItem);
            } else if (lines[i].substring(0, 2) == "- ") {
                if (isAnyRowActive) {
                    let descriptionItem = document.createElement("p");
                    descriptionItem.innerHTML = lines[i].substring(2);
                    projectDescription.appendChild(descriptionItem);
                } else {
                    projectsItem = document.createElement("div");
                    projectsItem.className = "projects-item";
                    isAnyRowActive = true;
                    let data = [lines[i].substring(2)];

                    while (data.length < 3 && ++i < lines.length) {
                        if (lines[i].substring(0, 2) == "- ") {
                            data.push(lines[i].substring(2));
                        }
                    }

                    let projectTitle = document.createElement("div");
                    projectTitle.className = "project-title";
                    projectTitle.innerHTML = `<b>${data[0]}</b>`;
                    projectsItem.appendChild(projectTitle);

                    projectContent = document.createElement("div");
                    projectContent.className = "project-content";

                    let projectImg = document.createElement("div");
                    projectImg.className = "project-img";
                    projectImg.innerHTML = `<img src="Asset/Thumbnail/${data[1]}" alt="Thumbnail of ${data[0]}">`;
                    projectContent.appendChild(projectImg);

                    projectDescription = document.createElement("div");
                    projectDescription.className = "project-description";

                    let tagList = document.createElement("div");
                    tagList.className = "tag-list";

                    data[2].split(",").forEach(tagName => {
                        let tag = document.createElement("div");
                        tag.className = "tag";
                        tag.innerHTML = tagName;
                        tagList.appendChild(tag);
                    });

                    projectDescription.appendChild(tagList);
                }
            }
        }
    });
