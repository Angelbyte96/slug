"use client";

import type { Tags } from "@prisma/client";
import { PlusIcon } from "lucide-react";
import { CreateLink } from "@/components/links/create-link";
import { Button } from "@/ui/button";

interface Props {
  tags: Tags[];
  slug?: string;
  variant?: "default" | "outline";
  hideTextOnMobile?: boolean;
  label?: string;
}

const DashboardCreateLink = ({
  tags,
  slug,
  variant = "default",
  hideTextOnMobile = false,
  label,
}: Props) => {
  const buttonLabel = label ?? (slug ? `Create a link with ${slug} slug` : "Create a new link");
  return (
    <CreateLink tags={tags} slug={slug}>
      <Button variant={variant}>
        <PlusIcon size={hideTextOnMobile ? 16 : 14} />
        <span className={hideTextOnMobile ? "hidden md:block" : undefined}>
          {buttonLabel}
        </span>
      </Button>
    </CreateLink>
  );
};

export default DashboardCreateLink;
