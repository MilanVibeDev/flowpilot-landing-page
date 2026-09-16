export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
]

export const companies = ['NOVA', 'PixelForge', 'Vertex', 'Cloudly', 'Northstar', 'MotionLab']

export const problems = [
  {
    icon: 'messageOff',
    title: 'Tasks get forgotten',
    text: 'Important requests disappear inside Slack messages, emails, and meetings.',
  },
  {
    icon: 'layers',
    title: 'Project management becomes another job',
    text: 'Someone constantly has to create tasks, assign people, and update deadlines.',
  },
  {
    icon: 'compass',
    title: "Nobody knows what's next",
    text: "Work gets delayed because responsibilities aren't clear.",
  },
]

export const features = [
  {
    eyebrow: 'AI TASK CREATION',
    title: 'Turn any message into a task',
    description:
      'FlowPilot detects actionable requests and automatically creates structured tasks with deadlines, priorities, and assignees.',
    mockup: 'task',
  },
  {
    eyebrow: 'SMART PRIORITIZATION',
    title: 'Know what actually matters',
    description:
      "FlowPilot analyzes deadlines, dependencies, and workload to automatically prioritize your team's tasks.",
    mockup: 'priorities',
  },
  {
    eyebrow: 'AI MEETING NOTES',
    title: 'Meetings that create action',
    description:
      'Upload or paste meeting notes and FlowPilot automatically extracts decisions, tasks, deadlines, and responsibilities.',
    mockup: 'meeting',
  },
  {
    eyebrow: 'TEAM DASHBOARD',
    title: 'Everything your team needs in one place',
    description:
      'Track active projects, tasks, deadlines, team workload, and completed work from one simple dashboard.',
    mockup: 'team',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Connect your workspace',
    text: 'Connect Slack, email, or paste your notes directly into FlowPilot.',
  },
  {
    number: '02',
    title: 'AI finds actionable work',
    text: 'FlowPilot identifies tasks, deadlines, priorities, and team members.',
  },
  {
    number: '03',
    title: 'Your team gets to work',
    text: 'Tasks appear automatically inside your workspace.',
  },
]

export const integrations = [
  { name: 'Slack', icon: 'slack', color: '#7c3aed' },
  { name: 'Gmail', icon: 'mail', color: '#ef4444' },
  { name: 'Microsoft Teams', icon: 'users', color: '#6366f1' },
  { name: 'Notion', icon: 'notion', color: '#111827' },
  { name: 'Google Calendar', icon: 'calendar', color: '#2563eb' },
  { name: 'GitHub', icon: 'github', color: '#111827' },
]

export const metrics = [
  { value: '6h', label: 'saved per team every week' },
  { value: '18K+', label: 'tasks automated weekly' },
  { value: '94%', label: 'tasks completed on time' },
  { value: '2.4K+', label: 'active teams' },
]

export const testimonials = [
  {
    quote:
      '“FlowPilot removed half the project-management work from our weekly routine. Tasks just appear where they need to be.”',
    name: 'Emma Collins',
    role: 'Founder, Northstar',
    initials: 'EC',
    tone: 'lavender',
  },
  {
    quote: '“We stopped losing important requests inside Slack almost immediately.”',
    name: 'Daniel Kim',
    role: 'Product Lead, Vertex',
    initials: 'DK',
    tone: 'blue',
  },
  {
    quote:
      '“The biggest improvement wasn\'t speed. It was finally knowing exactly what everyone needed to do.”',
    name: 'Sophie Martin',
    role: 'Agency Owner, MotionLab',
    initials: 'SM',
    tone: 'coral',
  },
]

export const pricing = [
  {
    name: 'Free',
    price: '€0',
    description: 'For individuals exploring a smarter way to work.',
    features: ['1 workspace', 'Up to 3 users', '50 AI tasks per month'],
    action: 'Start Free',
  },
  {
    name: 'Pro',
    price: '€15',
    suffix: '/ user / month',
    description: 'For growing teams ready to automate busywork.',
    features: ['Unlimited AI tasks', 'All integrations', 'AI meeting notes'],
    action: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '€29',
    suffix: '/ user / month',
    description: 'For organizations that need control and insight.',
    features: ['Advanced analytics', 'Custom permissions', 'Priority support'],
    action: 'Contact Sales',
  },
]

export const faqs = [
  { question: 'Do I need to install anything?', answer: 'No. FlowPilot works directly in your browser.' },
  {
    question: 'Can FlowPilot connect with Slack?',
    answer: 'Yes. FlowPilot can analyze conversations and convert requests into tasks.',
  },
  {
    question: 'Can I edit AI-generated tasks?',
    answer: 'Yes. Every task can be edited before or after creation.',
  },
  { question: 'Is there a free plan?', answer: 'Yes. The free plan supports up to three users.' },
  { question: 'Can I cancel anytime?', answer: 'Yes. There are no long-term contracts.' },
]

export const footerLinks = [
  { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
  { title: 'Resources', links: ['Help Center', 'Documentation', 'API', 'Community'] },
]
