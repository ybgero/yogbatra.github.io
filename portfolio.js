import { Database, LineChart, Server, Code, Terminal, LayoutDashboard } from 'lucide-react';

export const techStack = [
  { name: 'Python', description: 'Data processing & automation', icon: Terminal },
  { name: 'SQL / PostgreSQL', description: 'Complex querying & modeling', icon: Database },
  { name: 'Power BI', description: 'Interactive dashboards & BI', icon: LineChart },
  { name: 'Alteryx', description: 'ETL & Data workflows', icon: LayoutDashboard },
  { name: 'Azure', description: 'Cloud data infrastructure', icon: Server },
  { name: 'Pandas / NumPy', description: 'Advanced data analysis', icon: Code },
];

export const projects = [
  {
    title: 'NovaMart Dashboard',
    description: 'Centralized Power BI dashboard for a retail client, replacing Excel-based reports. Integrated sales, customer, and order data to track profitability and retention.',
    tags: ['Power BI', 'SQL', 'Data Modeling'],
    github: 'https://github.com/ybgero/Portfolio/tree/main/NovaMart',
    demo: '#',
  },
  {
    title: 'Campaign Performance Monitoring',
    description: 'Comprehensive performance tracking system giving marketing teams visibility into spend, reach, engagement, and revenue to optimize campaigns.',
    tags: ['Power BI', 'Analytics', 'Marketing'],
    github: 'https://github.com/ybgero/Portfolio/tree/main/Campaign_Analysis',
    demo: '#',
  },
  {
    title: 'HR Analytics Dashboard',
    description: 'Dynamic KPIs with trend indicators and time-based comparisons for tracking hiring trends, employee performance, turnover, and diversity.',
    tags: ['Power BI', 'HR Data', 'ETL'],
    github: 'https://github.com/ybgero/Portfolio/tree/main/HR',
    demo: '#',
  },
  {
    title: 'Blockbuster Insights',
    description: 'Analyzed the relationship between movie budgets and box office gross earnings using a dataset of 7,668 films spanning 40 years.',
    tags: ['Python', 'Pandas', 'Seaborn'],
    github: 'https://github.com/ybgero/Portfolio/tree/main/Python/Correlation(BudgetVsGross)',
    demo: '#',
  }
];

export const experience = [
  {
    company: 'Tesco',
    role: 'Data Analyst',
    description: 'Led data optimization initiatives and delivered insights to improve retail supply chain and customer retention metrics.',
    achievements: ['Automated reporting workflows', 'Improved data accuracy by 25%']
  },
  {
    company: 'Annalect',
    role: 'Analytics Engineer',
    description: 'Built scalable data pipelines and developed BI dashboards for marketing performance monitoring.',
    achievements: ['Reduced dashboard load times by 40%', 'Integrated 5+ external APIs']
  },
  {
    company: 'Media iQ',
    role: 'Data Specialist',
    description: 'Collaborated with cross-functional teams to define KPI frameworks and deploy programmatic advertising analytics.',
    achievements: ['Designed client-facing dashboards', 'Managed petabyte-scale data processing']
  }
];