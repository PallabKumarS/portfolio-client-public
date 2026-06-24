/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { use, useState } from "react";
import { TSkill, TMongoose } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Code, Server, Wrench } from "lucide-react";
import { Modal } from "@/components/shared/Modal";
import SkillForm from "@/components/forms/SkillForm";
import SkillCard from "@/components/cards/SkillAdminCard";

// Skill Group Renderer Component
const renderAdminSkillGroup = (
  skillsToRender: (TSkill & TMongoose)[],
  getCategoryColor: (category: string) => string,
) => {
  const expert = skillsToRender.filter((s) => s.proficiency >= 80);
  const comfortable = skillsToRender.filter(
    (s) => s.proficiency >= 50 && s.proficiency < 80,
  );
  const familiar = skillsToRender.filter((s) => s.proficiency < 50);

  const renderSection = (
    title: string,
    groupSkills: (TSkill & TMongoose)[],
  ) => {
    if (groupSkills.length === 0) return null;
    return (
      <div className="mt-4 mb-6">
        <h3 className="text-sm font-semibold text-primary/80 uppercase tracking-wider mb-3 border-b border-border pb-1">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {groupSkills.map((skill) => (
            <SkillCard
              key={skill._id}
              skill={skill}
              getCategoryColor={getCategoryColor}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderSection("Expert", expert)}
      {renderSection("Comfortable", comfortable)}
      {renderSection("Familiar", familiar)}
    </>
  );
};

const AdminSkillPage = ({ dataPromise }: { dataPromise: Promise<any> }) => {
  const response = use(dataPromise);
  const skillData: (TSkill & TMongoose)[] = response?.data ?? [];
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      case "backend":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "tools":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  const getSkillsByCategory = () => {
    const categories = {
      frontend: skillData.filter((skill) => skill.category === "frontend"),
      backend: skillData.filter((skill) => skill.category === "backend"),
      tools: skillData.filter((skill) => skill.category === "tools"),
    };
    return categories;
  };

  const skillsByCategory = getSkillsByCategory();

  if (!skillData || skillData.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Code className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No skills found
          </h3>
          <p className="text-muted-foreground text-center mb-4">
            Start building your skill portfolio by adding your first skill.
          </p>
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Skill
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Skill Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your technical skills and proficiency levels
          </p>
        </div>

        {/* Add New Skill Modal */}
        <Modal
          isOpen={isCreateModalOpen}
          setIsOpen={setIsCreateModalOpen}
          trigger={
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add New Skill
            </Button>
          }
          content={<SkillForm setIsOpen={setIsCreateModalOpen} edit={false} />}
          title="Add New Skill"
        />
      </div>

      {/* Skills Display */}
      <div className="space-y-8">
        {/* Frontend Skills */}
        {skillsByCategory.frontend.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-foreground">Frontend</h2>
              <Badge variant="secondary">
                {skillsByCategory.frontend.length}
              </Badge>
            </div>
            <div className="mt-4">
              {renderAdminSkillGroup(
                skillsByCategory.frontend,
                getCategoryColor,
              )}
            </div>
          </div>
        )}

        {/* Backend Skills */}
        {skillsByCategory.backend.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-foreground">Backend</h2>
              <Badge variant="secondary">
                {skillsByCategory.backend.length}
              </Badge>
            </div>
            <div className="mt-4">
              {renderAdminSkillGroup(
                skillsByCategory.backend,
                getCategoryColor,
              )}
            </div>
          </div>
        )}

        {/* Tools Skills */}
        {skillsByCategory.tools.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-foreground">Tools</h2>
              <Badge variant="secondary">{skillsByCategory.tools.length}</Badge>
            </div>
            <div className="mt-4">
              {renderAdminSkillGroup(skillsByCategory.tools, getCategoryColor)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSkillPage;
