import { TMongoose, TSkill } from "@/types/types";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

// React Icons imports
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as DiIcons from "react-icons/di";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";
import { Code, Edit, Server, Wrench } from "lucide-react";
import { Badge } from "../ui/badge";
import { Modal } from "../shared/Modal";
import { Button } from "../ui/button";
import SkillForm from "../forms/SkillForm";

// Icon libraries mapping
const iconLibraries = {
  Fa: FaIcons,
  Si: SiIcons,
  Ri: RiIcons,
  Ai: AiIcons,
  Bi: BiIcons,
  Bs: BsIcons,
  Di: DiIcons,
  Gi: GiIcons,
  Go: GoIcons,
  Hi: HiIcons,
  Im: ImIcons,
  Io: IoIcons,
  Md: MdIcons,
  Ti: TiIcons,
  Vsc: VscIcons,
  Wi: WiIcons,
};

// Dynamic icon component
const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  // Handle URL-based icons
  if (iconName.startsWith("http")) {
    return (
      <Image
        src={iconName}
        alt="skill icon"
        width={32}
        height={32}
        className={`object-contain ${className || ""}`}
      />
    );
  }

  try {
    const prefix = iconName.substring(0, 2);
    const name = iconName;
    const IconLibrary = iconLibraries[prefix as keyof typeof iconLibraries];

    if (IconLibrary && IconLibrary[name as keyof typeof IconLibrary]) {
      const Icon = IconLibrary[name as keyof typeof IconLibrary] as any;
      return <Icon className={`text-2xl ${className || ""}`} />;
    }

    // Search through all libraries if prefix doesn't match
    for (const [, library] of Object.entries(iconLibraries)) {
      if (library[iconName as keyof typeof library]) {
        const Icon = library[iconName as keyof typeof library] as any;
        return <Icon className={`text-2xl ${className || ""}`} />;
      }
    }

    // Fallback to default icon
    return <Code className={`text-2xl ${className || ""}`} />;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error rendering icon: ${iconName}`, error);
    return <Code className={`text-2xl ${className || ""}`} />;
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "frontend":
      return <Code className="w-5 h-5" />;
    case "backend":
      return <Server className="w-5 h-5" />;
    case "tools":
      return <Wrench className="w-5 h-5" />;
    default:
      return <Code className="w-5 h-5" />;
  }
};
// Skill Card Component
const SkillCard = ({
  skill,
  getCategoryColor,
}: {
  skill: TSkill & TMongoose;
  getCategoryColor: (category: string) => string;
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <DynamicIcon iconName={skill.icon} className="text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{skill.name}</CardTitle>
              <Badge
                className={`flex gap-2 items-center text-xs ${getCategoryColor(
                  skill.category,
                )}`}
              >
                {getCategoryIcon(skill.category)} {skill.category}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Proficiency Text */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Proficiency Level
            </span>
            <span className="text-sm font-semibold text-foreground">
              {skill.proficiency}%
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Modal
              isOpen={isEditModalOpen}
              setIsOpen={setIsEditModalOpen}
              title="Edit Skill"
              trigger={
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-3 h-3 mr-1" />
                  Edit
                </Button>
              }
              content={
                <SkillForm
                  data={skill}
                  edit={true}
                  setIsOpen={setIsEditModalOpen}
                />
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
