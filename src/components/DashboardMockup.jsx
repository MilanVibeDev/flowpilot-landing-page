import Icon from './Icons.jsx'

export default function DashboardMockup() {
  return (
    <div className="dashboard-frame" aria-label="FlowPilot dashboard preview">
      <div className="dashboard-window-bar">
        <div className="window-dots"><span /><span /><span /></div>
        <span className="window-title">app.flowpilot.ai</span>
      </div>
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <span className="mini-logo"><span className="logo-mark"><span /><span /></span></span>
          <div className="sidebar-item is-active"><span className="side-icon">⌂</span><span>Overview</span></div>
          <div className="sidebar-item"><span className="side-icon">✓</span><span>My tasks</span><b>8</b></div>
          <div className="sidebar-item"><span className="side-icon">□</span><span>Projects</span></div>
          <div className="sidebar-item"><span className="side-icon">✦</span><span>AI Inbox</span><i>3</i></div>
          <div className="sidebar-spacer" />
          <div className="sidebar-avatar">AL</div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-heading">
            <div><span className="mockup-kicker">MONDAY, SEPTEMBER 16</span><h3>Good morning, Alex</h3></div>
            <button type="button" aria-label="More options"><Icon name="more" size={18} /></button>
          </div>
          <div className="stat-row">
            <div className="mini-stat"><span className="stat-icon purple"><Icon name="sparkle" size={16} /></span><span><strong>12</strong><small>Generated today</small></span></div>
            <div className="mini-stat"><span className="stat-icon green"><Icon name="check" size={16} /></span><span><strong>8</strong><small>Tasks completed</small></span></div>
          </div>
          <div className="inbox-card">
            <div className="mockup-card-title"><span><Icon name="sparkle" size={15} /> AI Inbox</span><small>1 new suggestion</small></div>
            <div className="message-bubble"><span className="slack-badge">#</span><p>“Can someone update the pricing page before Friday?”</p><small>Sarah · 2m ago</small></div>
            <div className="ai-connector"><span /><b><Icon name="sparkle" size={12} /> Task generated</b><span /></div>
            <div className="generated-task">
              <span className="task-check" />
              <div><strong>Update pricing page</strong><span className="task-meta"><em>SA</em> Sarah <i>•</i> <Icon name="calendar" size={12} /> Friday</span></div>
              <span className="priority high">High</span>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-complete"><span><Icon name="check" size={15} /></span><div><strong>Task created</strong><small>Assigned to Sarah</small></div></div>
    </div>
  )
}
