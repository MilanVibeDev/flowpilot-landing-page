import Icon from './Icons.jsx'

function MockupShell({ children, label }) {
  return (
    <div className="feature-mockup-shell" aria-label={label}>
      <div className="mini-window-bar"><span /><span /><span /></div>
      {children}
    </div>
  )
}

function TaskCreationMockup() {
  return (
    <MockupShell label="Message converted into a task">
      <div className="conversion-layout">
        <div className="message-source">
          <div className="mini-label"><span className="source-icon">#</span> Message <small>9:42 AM</small></div>
          <div className="message-author"><span className="avatar avatar-maya">M</span><span><strong>Maya Chen</strong><small># product-design</small></span></div>
          <p>“We should redesign the onboarding screen next week.”</p>
        </div>
        <div className="conversion-arrow"><Icon name="arrowDown" size={17} /><span>FlowPilot AI</span></div>
        <div className="created-card">
          <div className="mini-label"><span className="spark-icon"><Icon name="sparkle" size={13} /></span> Task created <span className="success-label"><Icon name="check" size={12} /> Ready</span></div>
          <div className="created-task-title"><span className="task-check" /><strong>Redesign onboarding screen</strong></div>
          <div className="meta-grid"><span><small>ASSIGNED TO</small><b><em className="avatar tiny avatar-maya">M</em> Maya</b></span><span><small>DUE DATE</small><b><Icon name="calendar" size={12} /> Sep 24</b></span><span><small>PRIORITY</small><b className="medium-text">● Medium</b></span></div>
        </div>
      </div>
    </MockupShell>
  )
}

function PrioritiesMockup() {
  const items = [
    ['Fix checkout bug', 'HIGH', 'today', 'pink'],
    ['Send client proposal', 'HIGH', '2h', 'purple'],
    ['Update landing page', 'MEDIUM', 'Fri', 'blue'],
    ['Prepare analytics', 'LOW', 'Mon', 'green'],
  ]
  return (
    <MockupShell label="Automatically prioritized task list">
      <div className="priorities-card">
        <div className="priorities-heading"><div><span className="spark-icon"><Icon name="bolt" size={14} /></span><span><strong>Today&apos;s Priorities</strong><small>AI-ranked for your team</small></span></div><span className="updated-dot">● Updated now</span></div>
        <div className="priority-list">
          {items.map(([title, priority, due, tone], index) => (
            <div className="priority-row" key={title}>
              <span className="priority-number">{index + 1}</span>
              <span className={`priority-line ${tone}`} />
              <span className="priority-info"><strong>{title}</strong><small><Icon name="clock" size={11} /> {due}</small></span>
              <span className={`priority ${priority.toLowerCase()}`}>{priority}</span>
              <Icon name="more" size={16} />
            </div>
          ))}
        </div>
        <div className="ai-footer"><Icon name="sparkle" size={12} /> Priorities adjust automatically as work changes</div>
      </div>
    </MockupShell>
  )
}

function MeetingNotesMockup() {
  return (
    <MockupShell label="Meeting notes converted into tasks">
      <div className="meeting-layout">
        <div className="notes-panel">
          <div className="panel-title"><span><Icon name="users" size={15} /> Weekly planning</span><small>38 min</small></div>
          <p><mark>Emma will finalize the launch copy by Thursday.</mark> Daniel should review the mobile flows before the next sync.</p>
          <div className="audio-wave">{[8, 14, 20, 11, 25, 17, 10, 19, 24, 13, 8, 17, 22, 13, 7].map((height, index) => <i style={{ height }} key={index} />)}</div>
        </div>
        <div className="extract-divider"><span><Icon name="sparkle" size={13} /></span></div>
        <div className="extract-panel">
          <div className="panel-title"><span><Icon name="sparkle" size={15} /> Extracted actions</span><small>2 tasks</small></div>
          <div className="extract-task"><span className="task-check" /><span><strong>Finalize launch copy</strong><small><em className="avatar tiny lavender">EC</em> Emma · Thu</small></span></div>
          <div className="extract-task"><span className="task-check" /><span><strong>Review mobile flows</strong><small><em className="avatar tiny blue">DK</em> Daniel · Mon</small></span></div>
          <span className="mockup-button">Add both tasks <Icon name="arrowRight" size={13} /></span>
        </div>
      </div>
    </MockupShell>
  )
}

function TeamDashboardMockup() {
  return (
    <MockupShell label="Team workload dashboard">
      <div className="team-dashboard">
        <div className="team-top"><div><small>TEAM OVERVIEW</small><strong>Everything is on track</strong></div><span>Last 7 days⌄</span></div>
        <div className="team-stats"><div><span className="stat-icon purple"><Icon name="layers" size={14} /></span><span><strong>6</strong><small>Active projects</small></span></div><div><span className="stat-icon blue"><Icon name="check" size={14} /></span><span><strong>38</strong><small>Open tasks</small></span></div><div><span className="stat-icon green"><Icon name="trend" size={14} /></span><span><strong>94%</strong><small>On time</small></span></div></div>
        <div className="workload-area">
          <div className="workload-heading"><strong>Team workload</strong><small>Healthy capacity</small></div>
          {[
            ['Maya', '82%', '82', 'avatar-maya'],
            ['Sarah', '64%', '64', 'lavender'],
            ['Daniel', '48%', '48', 'blue'],
          ].map(([name, percent, width, tone]) => <div className="workload-row" key={name}><span className={`avatar tiny ${tone}`}>{name[0]}</span><strong>{name}</strong><span className="workload-bar"><i style={{ width: `${width}%` }} /></span><small>{percent}</small></div>)}
        </div>
      </div>
    </MockupShell>
  )
}

export default function FeatureMockup({ type }) {
  if (type === 'task') return <TaskCreationMockup />
  if (type === 'priorities') return <PrioritiesMockup />
  if (type === 'meeting') return <MeetingNotesMockup />
  return <TeamDashboardMockup />
}
