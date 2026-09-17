import './App.css'

const metrics = [
  { label: '构建状态', value: '成功', detail: 'GitHub Actions', tone: 'green' },
  { label: '运行环境', value: 'Production', detail: '静态资源', tone: 'blue' },
  { label: '发布方式', value: '自动部署', detail: 'main 分支', tone: 'amber' },
  { label: '访问协议', value: 'HTTPS', detail: 'GitHub Pages', tone: 'slate' },
]

const stack = ['Vite', 'React', 'GitHub Actions', 'GitHub Pages']

const steps = [
  '初始化前端项目',
  '配置生产构建路径',
  '创建部署工作流',
  '推送并发布静态资源',
]

function App() {
  return (
    <main className="page">
      <section className="shell">
        <header className="header">
          <div>
            <span className="eyebrow">Deployment Console</span>
            <h1>GitHub Pages 部署练习</h1>
            <p className="intro">
              Vite 与 React 前端，通过 GitHub Actions 自动构建并发布。
            </p>
          </div>

          <div className="status">
            <span className="status-dot" />
            部署在线
          </div>
        </header>

        <section className="metrics" aria-label="部署状态">
          {metrics.map((item) => (
            <article className="metric" key={item.label}>
              <div className={`metric-mark ${item.tone}`} />
              <span className="metric-label">{item.label}</span>
              <strong className="metric-value">{item.value}</strong>
              <span className="metric-detail">{item.detail}</span>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel">
            <div className="panel-heading">
              <h2>技术栈</h2>
              <span>01</span>
            </div>
            <div className="stack">
              {stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-heading">
              <h2>部署流程</h2>
              <span>02</span>
            </div>
            <ol className="steps">
              {steps.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </section>

        <footer className="footer">
          <span>Current branch: main</span>
          <span>Static frontend only</span>
        </footer>
      </section>
    </main>
  )
}

export default App