export function CreatePm2Entry(entries: IEcosystemEntry[]): IEcosystemEntry[] {
  return entries.map((entry) => ({
    ...entry,
    name: entry.name.toLowerCase().replace(/ /g, "-"),
  }));
}
