import { EventSource } from "./data-class";

export const EventSources: EventSource[] = [
  {
    javadocUrl: "https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/",
    downloadUrl: "https://ci.md-5.net/job/BungeeCord/lastBuild",
    allClasses: "allclasses-noframe.html",
    deprecateList: "deprecated-list.html",
    version: "#1549",
    downloadSources: ["bungeecord"],
  },
  {
    javadocUrl: "https://papermc.io/javadocs/waterfall/",
    downloadUrl: "https://papermc.io/downloads#Waterfall",
    allClasses: "allclasses-noframe.html",
    deprecateList: "deprecated-list.html",
    version: "#403",
    downloadSources: ["waterfall"],
  },
];
export const EventsYaml = "events.yaml";
export const ExcludeEventsYaml = "exclude-events.yaml";
export const TemplateReadmeFileName = "template/README.md";
export const OutputReadmeFileName = "README.md";
export const TemplateOnlyEventSourceFileName = "template/only-source.md";
export const OutputOnlyEventSourceFileName = "only-{name}.md";
export const TemplateOnlyDeprecateFileName = "template/only-deprecate.md";
export const OutputOnlyDeprecateFileName = "only-deprecate.md";
export const DoNotEditMessage = `<!--

自動生成です。直接編集しないでください。

-->
`;

export const getEventSource = (href: string): string => {
  if (href.startsWith("net/md_5/bungee")) {
    return "bungeecord";
  } else if (href.startsWith("io/github/waterfallmc/waterfall")) {
    return "waterfall";
  }
};
