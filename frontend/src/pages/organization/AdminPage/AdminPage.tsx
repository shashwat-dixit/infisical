import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import { Tab, TabList, TabPanel, Tabs } from "@app/components/v2";

import { OrgAdminProjects } from "./components/OrgAdminProjects";

enum TabSections {
  Projects = "projects"
}

export const AdminPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabSections>(TabSections.Projects);
  return (
    <>
      <Helmet>
        <title>{t("common.head-title", { title: t("settings.org.title") })}</title>
        <link rel="icon" href="/infisical.ico" />
      </Helmet>
      <div className="flex w-full justify-center bg-bunker-800 py-6 text-white">
        <div className="w-full max-w-6xl px-6">
          <div className="mb-4">
            <p className="text-3xl font-semibold text-gray-200">Organization Admin Console</p>
          </div>
          <Tabs value={activeTab} onValueChange={(el) => setActiveTab(el as TabSections)}>
            <TabList>
              <Tab value={TabSections.Projects}>Projects</Tab>
            </TabList>
            <TabPanel value={TabSections.Projects}>
              <OrgAdminProjects />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};
