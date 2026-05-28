import React from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  BookOpen,
  Boxes,
  Github,
  Play,
  ShieldCheck,
  Terminal,
  UserRound
} from "lucide-react";
import iconUrl from "../src-tauri/icons/icon.png";
import "./styles.css";

type Doc = {
  title: string;
  description: string;
  href: string;
};

type Script = {
  name: string;
  purpose: string;
  command: string;
};

const docs: Doc[] = [
  {
    title: "Quickstart",
    description: "First local run, prerequisites, one-command install, service ports, and smoke tests.",
    href: "https://github.com/Hackb07/OctoBot/blob/main/docs/quickstart.md"
  },
  {
    title: "User Guide",
    description: "Operator commands, incident workflows, agent tasks, reports, replay, and plugin usage.",
    href: "https://github.com/Hackb07/OctoBot/blob/main/docs/user-guide.md"
  },
  {
    title: "Deployment",
    description: "Production setup, Compose profiles, optional backends, environment variables, and checks.",
    href: "https://github.com/Hackb07/OctoBot/blob/main/docs/deployment.md"
  },
  {
    title: "Autonomous Platform",
    description: "Coding-agent runtime, repository indexing, memory RAG, orchestration, and observability.",
    href: "https://github.com/Hackb07/OctoBot/blob/main/docs/autonomous-platform.md"
  }
];

const scripts: Script[] = [
  {
    name: "install-linux.sh",
    purpose: "Installs packages, Rust, Python tooling, frontend dependencies, Ollama models, then verifies the app.",
    command: "curl -fsSL https://raw.githubusercontent.com/Hackb07/OctoBot/main/scripts/install-linux.sh | bash"
  },
  {
    name: "start-dev.sh",
    purpose: "Starts or reuses local developer services for the backend, frontend, control API, and runtime.",
    command: "scripts/start-dev.sh"
  },
  {
    name: "healthcheck.sh",
    purpose: "Checks the local OctoBot service endpoints after startup.",
    command: "scripts/healthcheck.sh"
  }
];

const commands = [
  "/exec uptime",
  "/investigate checkout_latency",
  "/spawn-agent research",
  "/multi-agent Check local model health",
  "/tasks-report",
  "/replay start"
];

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary">
        <a className="wordmark" href="#home" aria-label="OctoBot home">
          <img src={iconUrl} alt="" />
          <span>OctoBot</span>
        </a>
        <div className="navlinks">
          <a href="#docs">Docs</a>
          <a href="#install">Install</a>
          <a href="#scripts">Scripts</a>
          <a href="#owner">Owner</a>
        </div>
        <a className="repoLink" href="https://github.com/Hackb07/OctoBot">
          <Github size={18} />
          <span>Repository</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="heroText">
          <p className="eyebrow">Local-first AI operations platform</p>
          <h1>OctoBot turns your terminal into an agentic DevOps control center.</h1>
          <p className="lede">
            A Rust terminal UI, secure runtime service, Python orchestration layer, repository indexing,
            replayable events, plugin SDK, and production deployment profiles in one local-first system.
          </p>
          <div className="actions">
            <a className="primaryAction" href="#install">
              <Play size={18} />
              Install
            </a>
            <a className="secondaryAction" href="#docs">
              <BookOpen size={18} />
              Read docs
            </a>
          </div>
        </div>
        <div className="terminalPreview" aria-label="OctoBot terminal preview">
          <div className="terminalHeader">
            <span />
            <span />
            <span />
            <strong>octobot</strong>
          </div>
          <div className="terminalBody">
            <p><b>$</b> cargo run</p>
            <p className="ok">control api: 127.0.0.1:7878</p>
            <p className="ok">runtime: 127.0.0.1:7879</p>
            <p className="ok">orchestrator: 127.0.0.1:8787</p>
            <p><b>/</b> multi-agent Check model health and failed services</p>
            <p className="muted">planner {"->"} research {"->"} validation {"->"} report</p>
          </div>
        </div>
      </section>

      <section className="petBand" aria-label="OctoBot pet">
        <div>
          <p className="eyebrow">Repo pet</p>
          <h2>OctoBot keeps a tiny terminal octopus nearby.</h2>
        </div>
        <pre className="octopusPet">{`,---.
( @ @ )
 ).-.(
'/|||\\\`
  '|`}</pre>
      </section>

      <section className="metricBand" aria-label="Platform highlights">
        <div>
          <strong>30</strong>
          <span>completed phases</span>
        </div>
        <div>
          <strong>5</strong>
          <span>local services started by cargo run</span>
        </div>
        <div>
          <strong>9</strong>
          <span>runtime agent roles</span>
        </div>
      </section>

      <section className="section" id="docs">
        <div className="sectionIntro">
          <p className="eyebrow">Repository documents</p>
          <h2>Start with the docs already maintained in this repo.</h2>
        </div>
        <div className="docGrid">
          {docs.map((doc) => (
            <a className="docCard" href={doc.href} key={doc.title}>
              <BookOpen size={22} />
              <h3>{doc.title}</h3>
              <p>{doc.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section split" id="install">
        <div className="sectionIntro">
          <p className="eyebrow">Install</p>
          <h2>Fresh Linux setup or local clone.</h2>
          <p>
            The installer supports apt, dnf, pacman, and zypper systems. It can install dependencies,
            clone or update OctoBot, set up Python and frontend tooling, pull default Ollama models,
            run tests, build the frontend, and launch the app.
          </p>
        </div>
        <div className="codeStack">
          <pre>{`curl -fsSL https://raw.githubusercontent.com/Hackb07/OctoBot/main/scripts/install-linux.sh | bash`}</pre>
          <pre>{`git clone https://github.com/Hackb07/OctoBot "$HOME/openAi/OctoBot"
cd "$HOME/openAi/OctoBot"
scripts/install-linux.sh --no-run
cargo run`}</pre>
        </div>
      </section>

      <section className="section" id="scripts">
        <div className="sectionIntro">
          <p className="eyebrow">Installation scripts</p>
          <h2>Operational entry points are collected under scripts.</h2>
        </div>
        <div className="scriptList">
          {scripts.map((script) => (
            <article className="scriptRow" key={script.name}>
              <Terminal size={22} />
              <div>
                <h3>{script.name}</h3>
                <p>{script.purpose}</p>
                <code>{script.command}</code>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture">
        <div className="sectionIntro">
          <p className="eyebrow">Runtime shape</p>
          <h2>Local AI, secure execution, and replayable operations.</h2>
        </div>
        <div className="featureGrid">
          <article>
            <Activity size={24} />
            <h3>Agent runtime</h3>
            <p>Planner, coding, security, infra, research, recovery, validation, memory, and execution agents.</p>
          </article>
          <article>
            <ShieldCheck size={24} />
            <h3>Security boundary</h3>
            <p>Allowlisted infrastructure commands, plugin validation, sandbox policy, audit events, and approvals.</p>
          </article>
          <article>
            <Boxes size={24} />
            <h3>Deployment profiles</h3>
            <p>Docker Compose services for orchestrator, runtime, frontend, proxy, PostgreSQL, and Qdrant.</p>
          </article>
        </div>
      </section>

      <section className="section commandSection">
        <div className="sectionIntro">
          <p className="eyebrow">Common commands</p>
          <h2>Operator workflows from the TUI.</h2>
        </div>
        <div className="commandGrid">
          {commands.map((command) => (
            <code key={command}>{command}</code>
          ))}
        </div>
      </section>

      <section className="owner" id="owner">
        <div>
          <UserRound size={26} />
          <p className="eyebrow">Application owner</p>
          <h2>Hackb07</h2>
          <p>Repository: github.com/Hackb07/OctoBot</p>
        </div>
        <a className="repoLink light" href="https://github.com/Hackb07/OctoBot">
          <Github size={18} />
          Open GitHub
        </a>
      </section>

      <footer>
        <span>OctoBot website built from repository documentation and scripts.</span>
        <span>Run with <code>npm --prefix frontend run dev</code>.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
