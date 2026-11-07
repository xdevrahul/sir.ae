import { projects } from "./projects";

export const projectImages: Record<string, string[]> =
  Object.fromEntries(
    projects.map((project) => {
      const folder = `/images/projects/${project.slug}`;

      // Add your actual filenames here.
      return [
        project.slug,
        [
          `${folder}/image_001.webp`,
          `${folder}/image_002.webp`,
          `${folder}/image_003.webp`,
        ],
      ];
    })
  );