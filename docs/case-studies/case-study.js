const studies = {
  platform: {
    eyebrow: 'PLATFORM INTEGRATION · 2025–2026',
    title: 'Unifying five products without putting live revenue at risk.',
    deck: 'A multi-product platform program spanning customer experience, backend entities, APIs, data models, and migration behavior—delivered through progressive gates instead of a single high-risk launch.',
    context: ['5 products', '7 workstreams', '150+ contributors', 'Ads platform'],
    kpis: [['3.11M','non-Ads organizations migrated'],['14,483','Ads organizations migrated'],['$26.8M','ad spend represented'],['99.5%+','documented data-match rate']],
    situation: 'Five Ads products had separate dashboards, backend structures, entity definitions, ID schemes, customer experiences, and delivery cadences. The same concepts—organization, project, app, and configuration—did not mean the same thing across products.',
    difficulty: ['Five products had distinct Product and Engineering leadership and different readiness profiles.','Identifier and configuration mismatches could affect downstream ML models used in ad-placement decisions.','Migration speed had to be balanced against customer risk, revenue protection, and support capacity.'],
    mandate: ['Lead the program end to end across frontend and backend unification.','Align entity models, data parity, dependencies, rollout sequencing, and GA strategy.','Create executive decision forums and launch-readiness governance across Engineering, Product, Design, Legal, GTM, and Support.'],
    decision: 'Sequence rollout by product readiness and customer risk rather than force one universal launch date. The program restructured the underlying entity model instead of reproducing incompatible legacy definitions behind a shared frontend.',
    mechanisms: [['Governance','Shared milestones, explicit decision owners, and cross-stream risk reviews.'],['Readiness','Common gates across product, engineering, legal, documentation, GTM, and support.'],['Migration','Data-parity checks and progressively larger waves—from 15 organizations to 10,000+.']],
    outcomes: [['15 → 10,000+','Migration waves scaled without revenue disruption.'],['Two months','3.11M non-Ads and 14,483 Ads organizations migrated after GA.'],['No major incidents','No major post-launch data incidents during the documented launch window.'],['Durable model','A common entity and configuration model replaced fragmented product definitions.']]
  },
  cloud: {
    eyebrow: 'CLOUD PLATFORM · 2025–2026',
    title: 'Changing the cloud strategy when the economics stopped working.',
    deck: 'A cross-organization infrastructure program that moved from single-vendor consolidation to multi-cloud resilience while keeping reliability, latency, revenue, and support guardrails explicit.',
    context: ['GCP + AWS', 'Two product organizations', 'Infrastructure + SRE', 'Executive sponsorship'],
    kpis: [['99.9%','quarterly uptime KPI'],['$19M','annual savings from related cloud initiatives'],['2','product organizations aligned'],['0','accepted revenue regression']],
    situation: 'Ads infrastructure inherited through multiple products operated across fragmented cloud environments, tooling, support models, and team practices. The initial strategy favored convergence on an existing GKE-based platform.',
    difficulty: ['Separate infrastructure organizations had different leaders, incentives, support models, and migration costs.','Vendor pricing changed the original business case after planning was underway.','The program had to preserve ad-serving latency, reliability, revenue, and compliance guardrails.'],
    mandate: ['Direct the cross-organization infrastructure program.','Align shared tooling, governance, support ownership, and accountability.','Maintain business and reliability guardrails through architecture and migration decisions.'],
    decision: 'Pivot from single-vendor consolidation to a portable multi-cloud architecture across GCP and AWS. This preserved strategic flexibility and uptime, while deliberately accepting greater near-term engineering complexity.',
    mechanisms: [['Charter','Milestones tied directly to uptime, latency, revenue, and compliance guardrails.'],['Decision forum','One weekly forum centered on blockers, trade-offs, and accountable decisions.'],['Migration control','Shared ownership, dependencies, exit criteria, rollback readiness, and audit-window coordination.']],
    outcomes: [['99.9%','Quarterly uptime remained an explicit program KPI.'],['Multi-cloud','The new direction reduced dependence on one vendor strategy.'],['Shared ownership','A common operating structure reduced isolated platform knowledge.'],['$19M','Related engineering-owned initiatives contributed annual savings.']]
  },
  finops: {
    eyebrow: 'FINOPS · 2025–2026',
    title: 'Turning cloud cost from a finance report into an engineering habit.',
    deck: 'A FinOps operating model connecting resource ownership, technical optimization, and cost-to-revenue decisions across infrastructure and ML workloads.',
    context: ['Infrastructure + ML', 'BigQuery', 'Engineering + Finance', 'Cost-to-revenue'],
    kpis: [['$19M','annual GCP savings across initiatives'],['48%','BigQuery cost reduction'],['~$35K','daily savings from BigQuery optimization'],['1','shared ownership model']],
    situation: 'Cloud spend was visible in aggregate but difficult to attribute consistently to products, services, teams, and revenue outcomes. Optimization arrived in reactive bursts, while inconsistent labeling made durable accountability difficult.',
    difficulty: ['Cost reduction could not compromise revenue, model performance, or platform reliability.','Training, feature computation, inference, and shared infrastructure had different cost drivers.','Teams needed ownership and trusted measures before credible savings commitments were possible.'],
    mandate: ['Create a cross-functional model that made cloud ownership measurable.','Connect technical efficiency to revenue and unit economics.','Move cost management into routine engineering planning rather than periodic interventions.'],
    decision: 'Establish attribution and ownership before setting savings commitments. The program optimized by workload layer and used cost-to-revenue measures rather than treating cost reduction as an isolated target.',
    mechanisms: [['Attribution','Resource-labeling standards connected spend to products, services, environments, and teams.'],['Operating review','Recurring reviews organized by cost driver, owner, action, and expected impact.'],['Business context','A cost-to-revenue measure connected infrastructure efficiency to product economics.']],
    outcomes: [['$19M','Annual GCP savings across engineering-owned cloud initiatives.'],['48%','BigQuery costs reduced through query and compute optimization.'],['~$35K/day','Approximate daily savings from the BigQuery program.'],['BAU ownership','Cost tracking moved toward sustained engineering accountability.']]
  },
  datacenter: {
    eyebrow: 'INFRASTRUCTURE TRANSFORMATION · 2019–2022',
    title: 'Exiting legacy infrastructure without disrupting enterprise customers.',
    deck: 'Hundreds of customers moved from mainframe connectivity to modern APIs, followed by a tightly sequenced decommission across two active, multi-tenant data centers.',
    context: ['Enterprise customers', 'Apigee/API migration', 'Two data centers', 'Five vendors'],
    kpis: [['4,000+','hardware components retired'],['30+','people coordinated'],['5','vendors aligned'],['$23M','combined annual savings']],
    situation: 'Major banks and telecommunications providers depended on legacy mainframe-to-mainframe connectivity. Those dependencies blocked cloud transformation and left aging infrastructure without a viable decommission path.',
    difficulty: ['Each enterprise customer required its own engineering coordination, security review, and production cutover.','The facilities remained active for other tenants throughout the decommission.','PII-bearing drives and thousands of components required controlled, auditable disposal.'],
    mandate: ['Lead customer migrations from mainframe connectivity to an Apigee/API architecture.','Coordinate customer engineering teams, security reviews, and production cutovers.','Direct a one-week decommission across primary and secondary data centers.'],
    decision: 'Treat customer migration and physical retirement as one dependency chain, while sequencing every vendor action around the infrastructure of other active tenants. No efficiency target justified introducing service or security risk.',
    mechanisms: [['Customer migration','Individual cutover plans, checkpoints, security reviews, and continuity controls.'],['Vendor command','One coordinated plan across five vendors and a 30+ person onsite team.'],['Safety controls','Explicit sequencing for PII-bearing drives and neighboring tenant infrastructure.']],
    outcomes: [['Hundreds','Enterprise customers moved to modern API connectivity.'],['Zero disruption','Customer migrations completed without service interruption.'],['Zero incidents','The decommission finished safely in active facilities.'],['$23M','Combined annual savings from the broader legacy-retirement program.']]
  }
};

const key = document.body.dataset.study;
const s = studies[key];
if (!s) throw new Error('Unknown case study');
document.title = `${s.title} — Varun Bedi`;
document.querySelector('[data-eyebrow]').textContent = s.eyebrow;
document.querySelector('[data-title]').textContent = s.title;
document.querySelector('[data-deck]').textContent = s.deck;
document.querySelector('[data-context]').innerHTML = s.context.map(x => `<span>${x}</span>`).join('');
const kpis = document.querySelector('[data-kpis]');
kpis.style.setProperty('--kpis', s.kpis.length);
kpis.innerHTML = s.kpis.map(([v,l]) => `<div><strong>${v}</strong><span>${l}</span></div>`).join('');
document.querySelector('[data-situation]').textContent = s.situation;
const list = (selector, items) => document.querySelector(selector).innerHTML = items.map(x => `<li>${x}</li>`).join('');
list('[data-difficulty]', s.difficulty); list('[data-mandate]', s.mandate);
document.querySelector('[data-decision]').textContent = s.decision;
document.querySelector('[data-mechanisms]').innerHTML = s.mechanisms.map(([h,t]) => `<div><strong>${h}</strong><span>${t}</span></div>`).join('');
document.querySelector('[data-outcomes]').innerHTML = s.outcomes.map(([h,t]) => `<div><strong>${h}</strong><span>${t}</span></div>`).join('');
