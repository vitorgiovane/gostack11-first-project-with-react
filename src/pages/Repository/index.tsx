import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import { Header, RepositoryInfo, Issues } from './styles'
import logo from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string
}

interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  fork_count: number
  open_issues_count: number
  owner: {
    login: string
    avatar_url: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  const { params } = useRouteMatch<RepositoryParams>()

  useEffect(() => {
    const loadRepositoryInfo = async () => {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`)
      ])
      setRepository(repositoryResponse.data)
      setIssues(issuesResponse.data)
    }
    loadRepositoryInfo()
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to='/'><FiChevronLeft size={16} />Voltar</Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.fork_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url} target='_blank' rel='noopener noreferrer'>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}

export default Repository
