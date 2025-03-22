"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Webhook,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import {Link} from "react-router-dom"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "API Keys",
      url: "ApiKeys",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Logs",
      url: "Logs",
      icon: Bot,
    },
    {
      title: "Errors",
      url: "Errors",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "Settings",
      icon: Settings2,
    },
  ],

  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({
  ...props
}) {

  return (
    (<Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div
                  className="flex aspect-square bg-card size-8  items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                  <Webhook className="size-4 text-foreground" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">API Rate Limiter</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>)
  );
}
