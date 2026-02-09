Neurologic — Lean MVP Milestones (Bootstrapped Plan)
This plan is intentionally lean and cost‑controlled for a bootstrapped startup. The goal is to validate the Capacity Timeline + Live Pulse concept with real Microsoft data, not to build a full enterprise platform yet.

Constraints (explicit)
Goal: Functional MVP validating leader vs employee human‑management dashboards
Non‑goals (for MVP): Advanced ML training, Slack/SharePoint ingestion, notifications, admin roles, enterprise security audits

MVP scope (what IS included)
Microsoft OAuth (single tenant)
Outlook Calendar data ingestion (primary signal)
Lightweight signal engine (rule-based, explainable)
Capacity Timeline (Last / This / Next week)
Team Live Pulse — Leader dashboard: team overview showing burn-rate / battery for each employee, sortable filters (team, role, location), quick drill-down to individual profiles, and a lightweight CSV export for snapshots.
Personal dashboard — Individual employee view: Deep‑Work score, burn‑rate/battery visualization, Last/This/Next week cards, top contributing signals, and personal recommendations. Privacy controls allow employees to limit what leaders see per company policy.
EU deployment (single environment)
Explicitly deferred (post-MVP) (post‑MVP)
Slack ingestion
SharePoint deep analytics
Advanced AI / long‑term model training
Notifications & emails
Role‑based admin panels

Milestones (Purely Technical, Component‑Based)
Milestone 1 — Backend Foundation & Auth Layer
Scope: Core backend infrastructure required for all features.
Components
Project setup (API, DB, env config)
Microsoft OAuth2 (single tenant)
Secure token storage + refresh handling
Base data models (User, CalendarEvent, WeeklyMetrics)
Timeline: 1 week
Deliverables
Authenticated backend
User login via Microsoft
Verified token lifecycle

Milestone 2 — Calendar Data Ingestion & Normalization
Scope: Reliable raw data pipeline.
Components
Outlook Calendar ingestion
Event normalization (duration, overlap, gaps)
Time‑zone handling
API endpoints exposing weekly calendar data
Timeline: 1 week
Deliverables
Ingestion service
Normalized calendar API

Milestone 3 — Capacity & Burn‑Rate Engine
Scope: Core business logic.
Components
Burn‑rate / battery computation logic
Deep‑Work score calculation
Weekly aggregation (Last / This / Next)
Rule‑based Green / Yellow / Red classification
Timeline: 1 week
Deliverables
Capacity engine service
Explainable output per user

Milestone 4 — Leader Dashboard (Team View)
Scope: Human‑management interface for leaders.
Components
Team Live Pulse table/grid
Burn‑rate / battery indicators per employee
Sorting & filtering
Employee drill‑down routing
Timeline: 1–1.5 weeks
Deliverables
Leader dashboard UI
Connected to live backend data

Milestone 5 — Employee Dashboard + Deployment
Scope: Individual self‑view + production readiness.
Components
Personal dashboard UI
Capacity Timeline cards (Last / This / Next)
Privacy toggles (what leader can see)
EU deployment (single environment)
Final polish & handoff
Timeline: 1–1.5 weeks
Deliverables
Employee dashboard
Live deployed MVP
Handoff documentation

Why this approach works for a bootstrapped startup
Proves the core insight fast
Keeps AI explainable (important for trust)
Avoids over‑engineering
Leaves clear upgrade paths for:
Slack
Advanced ML
Admin & notifications

Post‑MVP expansion (optional, later)
Slack ingestion
ML‑based prediction
Manager alerts
Historical trend analytics

Next step
Confirm this lean milestone plan. Once approved and shared contract on upwork, work can start immediately.
