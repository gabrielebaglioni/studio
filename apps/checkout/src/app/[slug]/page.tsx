import { notFound } from 'next/navigation';
import { PROJECTS, getProjectById, isValidProjectId } from '@qia/types';
import type { ProjectId } from '@qia/types';
import { SupportTemplate } from '@/components/support-template';

interface SupportPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Support/Checkout page for a project
 * Payment integration with Stripe, PayPal, and Crypto
 */
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: SupportPageProps) {
  const { slug } = await params;
  
  if (!isValidProjectId(slug)) {
    return {
      title: 'Project Not Found',
    };
  }
  
  const project = getProjectById(slug);
  
  return {
    title: `Support ${project?.name} - QIA`,
    description: `Support ${project?.name} project`,
  };
}

export default async function SupportPage({ params }: SupportPageProps) {
  const { slug } = await params;
  
  if (!isValidProjectId(slug)) {
    notFound();
  }
  
  return <SupportTemplate projectId={slug} />;
}

