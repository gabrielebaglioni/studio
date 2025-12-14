import Image from 'next/image';
import { content, socialLinks } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const SectionWrapper = ({ id, className, children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={cn("py-16 md:py-24", className)}>
    <div className="container mx-auto px-4 md:px-6">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ headline, subheadline }: { headline: string; subheadline?: string; }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{headline}</h2>
    {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
  </div>
);

export function OurAgencySection() {
  const { id, headline, body, cta } = content.ourAgency;
  return (
    <SectionWrapper id={id}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold !leading-tight tracking-tight md:text-4xl">
          {headline}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">{body}</p>
        <Button size="lg" className="mt-8 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
          {cta}
        </Button>
      </div>
    </SectionWrapper>
  );
}

export function TogetherSection() {
  const { id, headline, body, cta, cards } = content.together;
  return (
    <SectionWrapper id={id} className="bg-muted">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <SectionHeader headline={headline} subheadline={body} />
          <div className="text-center">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              {cta}
            </Button>
          </div>
        </div>
        <div className="grid gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function ProgramsSection() {
  const { id, intro, cards } = content.programs;
  return (
    <SectionWrapper id={id}>
      <SectionHeader headline="Our Programs" subheadline={intro} />
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function PartnerFeatureSection() {
  const { id, headline, body } = content.partnerFeature;
  return (
    <SectionWrapper id={id} className="bg-muted">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold !leading-tight tracking-tight md:text-4xl">
          {headline}
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">{body}</p>
        <div className="mt-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Follow Us on Social Media</h3>
            <div className="flex justify-center gap-6">
                {socialLinks.map(({ name, href, Icon }) => (
                <a key={name} href={href} aria-label={`QIA on ${name}`}>
                    <Icon className="h-7 w-7 transition-colors hover:text-primary" />
                </a>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function BecomePartnerSection() {
    const { id, headline, body, logoMeaning } = content.becomePartner;
    const images = PlaceHolderImages.filter(img => logoMeaning.some(item => item.id === img.id));
  
    return (
      <SectionWrapper id={id}>
        <SectionHeader headline={headline} subheadline={body} />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {logoMeaning.map((item, index) => {
            const imgData = images.find(i => i.id === item.id);
            return (
              <div key={index} className="text-center">
                {imgData && (
                  <div className="mx-auto mb-4 h-32 w-48 overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={imgData.imageUrl}
                      alt={imgData.description}
                      width={200}
                      height={150}
                      className="h-full w-full object-cover"
                      data-ai-hint={imgData.imageHint}
                    />
                  </div>
                )}
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    );
}

export function MissionVisionSection() {
    const { id, vision, mission, whatWeDo } = content.missionVision;
    return (
        <SectionWrapper id={id} className="bg-muted">
            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{vision.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-muted-foreground">{vision.text}</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-background">
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">{mission.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-muted-foreground">{mission.text}</p>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <h3 className="mb-6 font-headline text-3xl font-bold">{whatWeDo.title}</h3>
                    <ul className="space-y-4">
                        {whatWeDo.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="text-lg text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

function DetailSection({ id, headline, body, cta, details, children }: { id?: string; headline: string; body?: string; cta?: string; details: {title:string, text:string}[], children?: React.ReactNode }) {
    return (
        <SectionWrapper id={id}>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold !leading-tight tracking-tight md:text-4xl">{headline}</h2>
                    {body && <p className="text-lg text-muted-foreground">{body}</p>}
                    {children}
                    {cta && (
                        <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                            {cta}
                        </Button>
                    )}
                </div>
                <div className="space-y-6">
                    {details.map((detail, index) => (
                        <div key={index}>
                            <h4 className="font-headline text-xl font-bold">{detail.title}</h4>
                            <p className="mt-2 text-muted-foreground">{detail.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}

export function ProjectLandSection() {
    const { id, headline, closingLine, cta, details } = content.projectLand;
    return (
        <DetailSection id={id} headline={headline} cta={cta} details={details}>
             <p className="text-lg font-bold text-foreground">{closingLine}</p>
        </DetailSection>
    )
}

export function FoodSecuritySection() {
    const { id, headline, body, cta, details } = content.foodSecurity;
    return <DetailSection id={id} headline={headline} body={body} cta={cta} details={details} />
}


export function SocialImbalanceSection() {
    const { id, headline, body } = content.socialImbalance;
    return (
        <SectionWrapper id={id} className="bg-muted">
             <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-headline text-3xl font-bold !leading-tight tracking-tight md:text-4xl">
                    {headline}
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">{body}</p>
            </div>
        </SectionWrapper>
    )
}


export function GallerySection() {
  const { id, title, imageIds } = content.gallery;
  const images = PlaceHolderImages.filter(img => imageIds.includes(img.id));
  
  return (
    <SectionWrapper id={id}>
      <SectionHeader headline={title} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((imgData) => (
          <div key={imgData.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={imgData.imageUrl}
              alt={imgData.description}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imgData.imageHint}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function PartnerFormSection() {
    const { id, headline, subtext, ctas } = content.partnerForm;
    return (
        <SectionWrapper id={id} className="bg-muted">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <h2 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">{headline}</h2>
                    <p className="text-lg text-muted-foreground">{subtext}</p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                        <Button size="lg" className="rounded-full bg-accent text-accent-foreground">{ctas.primary}</Button>
                        <Button size="lg" variant="outline" className="rounded-full">{ctas.secondary}</Button>
                    </div>
                </div>
                <Card className="bg-background p-6 sm:p-8">
                    <form className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="partner-type">Partner Type</Label>
                            <Select>
                                <SelectTrigger id="partner-type">
                                    <SelectValue placeholder="Select one..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="corporation">Corporation</SelectItem>
                                    <SelectItem value="institution">Institution</SelectItem>
                                    <SelectItem value="individual">Individual</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="How would you like to partner with us?" />
                        </div>
                        <Button type="submit" className="w-full">Submit</Button>
                    </form>
                </Card>
            </div>
        </SectionWrapper>
    )
}
