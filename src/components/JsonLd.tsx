export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Austin Chiatto',
    url: 'https://austinchiatto.com',
    jobTitle: 'Full Stack Developer',
    description: 'I build full-stack tools to solve problems, daydream of finding the perfect notes app, and try every day to give more than I take.',
    sameAs: ['https://github.com/AustinChiatto', 'https://www.linkedin.com/in/austin-chiatto'],
    knowsAbout: ['Full Stack Development', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Web Development'],
    nationality: 'Canadian'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
