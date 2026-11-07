
import fs from "fs/promises";
import path from "path";

const projectImageFolders: Record<string, string> = {
  "montura-2": "Emaar_Properties/Montura_2",

  "the-wilds-residences": "Aldar/The_Wilds_Residences",

  "habtoor-grand-residences":
    "Al_Habtoor_Group/Habtoor_Grand_Residences",

  "the-chedi-private-residences":
    "Al_Seeb_Real_Estate_Development/The_Chedi_Private_Residences",

  "fleurs-de-jardin": "AMIS_Development/Fleurs_de_Jardin",

  "ellington-ocean-house":
    "Ellington_Properties/Ellington_Ocean_House",

  "palmiera-collective":
    "Emaar_Properties/Palmiera_Collective",

  "knightsbridge-phase-2":
    "LEOS_Developments/Knightsbridge_Phase_2",

  "the-alba-residences":
    "OMNIYAT/The_Alba_Residences_(Dorchester_Collection)",

  "casa-ahs": "AHS_Properties/Casa_AHS",

  "edra-villas": "H&H_Development/EDRA_Villas",

  "villa-del-divos": "Mr_Eight_Development/Villa_del_DIVOS",

  "palm-central-private-residences-frond-m":
    "Nakheel/Palm_Central_Private_Residences_Frond_M",

  "east-residence-6-serenia-district":
    "Palma_Development/East_Residence_6_at_Serenia_District",

  "prestige-one-residences":
    "Prestige_One_Developments/Prestige_One_Residences",

  "eywa-tree-of-life":
    "R.Evolution/Eywa_Tree_of_Life",

  "the-edit-at-d3":
    "Meraas_Dubai_Holding_Real_Estate/The_Edit_at_D3",
};

export async function getProjectImages(
  slug: string
): Promise<string[]> {
  const folder = projectImageFolders[slug];

  if (!folder) return [];

  const directory = path.join(process.cwd(), "public", folder);

  try {
    const files = await fs.readdir(directory);

    return files
      .filter((file) =>
        /^image_\d+\.(webp|jpg|jpeg|png)$/i.test(file)
      )
      .sort((a, b) => {
        const numA = Number(a.match(/\d+/)?.[0] ?? 0);
        const numB = Number(b.match(/\d+/)?.[0] ?? 0);
        return numA - numB;
      })
      .map((file) => `/${folder}/${file}`);
  } catch {
    return [];
  }
}

export async function getProjectCover(
  slug: string
): Promise<string | null> {
  const images = await getProjectImages(slug);
  return images[0] ?? null;
}
