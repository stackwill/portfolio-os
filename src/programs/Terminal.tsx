import React, { useState, useRef, useEffect } from 'react';
import userConfig from '../config/userConfig';

interface Command {
  command: string;
  output: string;
  isError?: boolean;
}

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<Command[]>([
    { command: '', output: 'Welcome to Portfolio OS Terminal\nType "help" for available commands.\n' }
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => `
Available commands:
  help     - Show this help message
  clear    - Clear the terminal
  about    - Display information about me
  skills   - List my technical skills
  projects - View my projects
  contact  - Show contact information
  github   - Open my GitHub profile
  linkedin - Open my LinkedIn profile
  echo     - Echo the input
  date     - Show current date and time
    `,
    clear: () => {
      setHistory([]);
      return '';
    },
    about: () => `
Name: ${userConfig.personal.name}
Role: ${userConfig.personal.role}
Location: ${userConfig.personal.location}

${userConfig.personal.bio}

Type "skills" or "projects" to learn more about my work.
    `,
    skills: () => {
      const categories = Array.from(new Set(userConfig.skills.map(s => s.category)));
      let output = 'Technical Skills:\n';
      output += '┌' + '─'.repeat(45) + '┐\n';
      
      categories.forEach(category => {
        output += `│ ${category.padEnd(43)} │\n`;
        output += '├' + '─'.repeat(45) + '┤\n';
        const categorySkills = userConfig.skills
          .filter(s => s.category === category)
          .map(s => `${s.icon} ${s.name} (${s.level}%)`)
          .join('\n│ ');
        output += `│ ${categorySkills.padEnd(43)} │\n`;
      });
      
      output += '└' + '─'.repeat(45) + '┘\n';
      return output;
    },
    projects: () => {
      let output = 'Recent Projects:\n\n';
      userConfig.projects.forEach((project, index) => {
        output += `${index + 1}. ${project.title}\n`;
        output += `   - ${project.description}\n`;
        output += `   - Tech: ${project.technologies.join(', ')}\n\n`;
      });
      output += '\nType "github" to view more projects.';
      return output;
    },
    contact: () => `
📧 Email: ${userConfig.social.email}
🔗 LinkedIn: ${userConfig.social.linkedin}
🐙 GitHub: ${userConfig.social.github}
${userConfig.social.website ? `🌐 Website: ${userConfig.social.website}` : ''}
    `,
    date: () => new Date().toString(),
    echo: (args: string) => args,
    github: () => {
      window.open(userConfig.social.github, '_blank');
      return 'Opening GitHub profile...';
    },
    linkedin: () => {
      window.open(userConfig.social.linkedin, '_blank');
      return 'Opening LinkedIn profile...';
    }
  };

  const executeCommand = (input: string) => {
    const [cmd, ...args] = input.trim().split(' ');
    const command = cmd.toLowerCase();

    if (command === '') return '';

    if (command in commands) {
      return commands[command as keyof typeof commands](args.join(' '));
    }

    return `Command not found: ${command}\nType "help" for available commands.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedCommand = currentCommand.trim();
    const output = executeCommand(trimmedCommand);
    
    setHistory(prev => [
      ...prev,
      { command: trimmedCommand, output, isError: !commands[trimmedCommand.split(' ')[0]] }
    ]);
    setCurrentCommand('');
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  return (
    <div
      style={{
        height: '100%',
        background: '#000',
        color: '#0f0',
        fontFamily: 'monospace',
        padding: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={terminalRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          marginBottom: '8px'
        }}
      >
        {history.map((entry, i) => (
          <div key={i}>
            {entry.command && (
              <div style={{ marginBottom: '4px' }}>
                <span style={{ color: '#0f0' }}>{userConfig.personal.name.toLowerCase()}@portfolio-os</span>
                <span style={{ color: '#fff' }}>:</span>
                <span style={{ color: '#00f' }}>~</span>
                <span style={{ color: '#fff' }}>$ </span>
                <span>{entry.command}</span>
              </div>
            )}
            <div
              style={{
                whiteSpace: 'pre-wrap',
                marginBottom: '8px',
                color: entry.isError ? '#f00' : '#0f0'
              }}
            >
              {entry.output}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <span style={{ color: '#0f0' }}>{userConfig.personal.name.toLowerCase()}@portfolio-os</span>
        <span style={{ color: '#fff' }}>:</span>
        <span style={{ color: '#00f' }}>~</span>
        <span style={{ color: '#fff' }}>$ </span>
        <input
          ref={inputRef}
          type="text"
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: '#0f0',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            padding: '0 4px',
            outline: 'none'
          }}
          spellCheck={false}
          autoFocus
        />
      </form>
    </div>
  );
}; 