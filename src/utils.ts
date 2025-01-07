export function CreatePm2Entry(entry: IEcosystemEntry): IEcosystemEntry {
  return { ...entry, name: entry.name.toLowerCase().replace(/ /g, "-") };
}
