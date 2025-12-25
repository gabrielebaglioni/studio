import { notFound } from 'next/navigation';
import { PROJECTS, getProjectById, isValidProjectId } from '@qia/types';
import type { ProjectId } from '@qia/types';
import { ProjectDetailsTemplate } from '@/components/project-details-template';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Project details page
 * SEO-friendly, layout coherent with shell
 */
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  if (!isValidProjectId(slug)) {
    return {
      title: 'Project Not Found',
    };
  }
  
  const project = getProjectById(slug);
  
  return {
    title: `${project?.name} - QIA`,
    description: project?.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  if (!isValidProjectId(slug)) {
    notFound();
  }
  
  return <ProjectDetailsTemplate projectId={slug} />;
}

