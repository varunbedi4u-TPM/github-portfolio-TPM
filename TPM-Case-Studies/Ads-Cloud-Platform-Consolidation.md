# Ads Cloud Platform Consolidation

## Business problem

Ads infrastructure inherited through multiple products operated across fragmented cloud environments, tooling, support models, and team practices. The program needed to create a common engineering platform and operating model—not merely move workloads—while protecting ad-serving latency, reliability, and revenue.

## My mandate

Direct the cross-organization infrastructure program; align separate product organizations on shared tooling, governance, and accountability; broaden the pool of engineers able to support the platform; and maintain business and reliability guardrails through architecture and migration decisions.

## Scale and stakeholders

- Multiple Ads products and two product organizations under separate VPs
- Infrastructure, SRE, Security, Finance, Compliance, and product engineering teams
- Weekly executive-sponsor reporting

## Operating mechanism I created

- A program charter linking technical milestones to uptime, latency, revenue, and compliance guardrails
- A shared migration tracker with ownership, dependencies, exit criteria, and rollback readiness
- Weekly core-team reviews centered on blockers and decisions rather than task narration
- Explicit coordination between migration waves and audit-sensitive windows
- Common RAG definitions, milestone hygiene, action ownership, and one reporting source across teams
- A shared platform-support model designed to reduce knowledge silos and increase the number of engineers able to operate the environment safely

## Key decisions and trade-offs

- Pivoted from a single-vendor consolidation strategy to a resilient multi-cloud architecture after vendor economics changed.
- Protected optionality and uptime rather than pursuing architectural uniformity at any cost.
- Sequenced work around compliance constraints without allowing audit coordination to become an end-stage blocker.
- Treated culture as a delivery dependency: teams coming from different infrastructure organizations needed shared goals, common definitions of stability, and visible accountability—not just identical tools.

## Measurable outcome

- Maintained 99.9% quarterly uptime as a program KPI.
- Used no ad-serving latency or revenue regression as migration guardrails.
- Enabled related cloud-efficiency initiatives that contributed to $19M in annual savings.
- Established shared governance and a common operating structure across previously separate infrastructure teams, reducing dependence on isolated team knowledge.

## Sanitized supporting artifact

[Cross-product launch readiness review](../Program-Artifacts/Launch-Readiness-Review.md)

## Confidentiality note

The internal codename, cloud topology, vendor pricing, migration dates, control details, and product names are omitted. Outcomes reflect verified professional source material.
